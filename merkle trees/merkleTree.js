//DS that allows making verification that data belongs to a larger dataset
//without necessarily having the larger dataset!!
//not mainly for storage since it stores hashes of the data
//used for the proof of system (verification) without recheking raw details
//Light clients (like mobile wallets) can verify their transactions 
//without downloading the entire blockchain 
//— just using the Merkle Proof.

const crypto = require('crypto');

function sha256(data) {
	return crypto.createHash('sha256').update(String(data)).digest('hex');
}

function buildTree(leaves) {
	if (!Array.isArray(leaves)) throw new TypeError('leaves must be an array');
	// level 0 is leaves (hashed)
	let level = leaves.map(leaf => sha256(leaf));
	const tree = [level];

	while (level.length > 1) {
		const nextLevel = [];
		for (let i = 0; i < level.length; i += 2) {
			const left = level[i];
			const right = i + 1 < level.length ? level[i + 1] : level[i]; // duplicate last if odd
			nextLevel.push(sha256(left + right));
		}
		tree.push(nextLevel);
		level = nextLevel;
	}

	return tree; // array of levels, tree[tree.length-1][0] is root
}

function getRoot(leaves) {
	if (!leaves || leaves.length === 0) return null;
	const tree = buildTree(leaves);
	const rootLevel = tree[tree.length - 1];
	return rootLevel[0];
}

function getProof(leaves, index) {
	if (!Array.isArray(leaves)) throw new TypeError('leaves must be an array');
	if (index < 0 || index >= leaves.length) throw new RangeError('index out of range');

	const tree = buildTree(leaves);
	const proof = [];
	let idx = index;

	for (let level = 0; level < tree.length - 1; level++) {
		const levelNodes = tree[level];
		const isRightNode = idx % 2 === 1;
		const siblingIndex = isRightNode ? idx - 1 : idx + 1;
		const sibling = siblingIndex < levelNodes.length ? levelNodes[siblingIndex] : levelNodes[idx];
		proof.push({ position: isRightNode ? 'left' : 'right', data: sibling });
		idx = Math.floor(idx / 2);
	}

	return proof; // array of {position, data}
}

function verifyProof(leaf, proof, root) {
	if (!proof || proof.length === 0) {
		return sha256(leaf) === root;
	}

	let hash = sha256(leaf);
	for (const step of proof) {
		if (step.position === 'left') {
			hash = sha256(step.data + hash);
		} else {
			hash = sha256(hash + step.data);
		}
	}

	return hash === root;
}

module.exports = {
	sha256,
	buildTree,
	getRoot,
	getProof,
	verifyProof,
};

// Small self-test when this script is run
if (require.main === module) {
	const leaves = ['a', 'b', 'c', 'd', 'e'];
	console.log('Leaves:', leaves);
	const root = getRoot(leaves);
	console.log('Root:', root);
	const idx = 2;
	const proof = getProof(leaves, idx);
	console.log('Proof for index', idx, ':', proof);
	console.log('Verify:', verifyProof(leaves[idx], proof, root));
}

