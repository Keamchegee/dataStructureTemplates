Merkle Tree — Data Integrity Verification

 JavaScript implementation of a Merkle Tree — a data structure that allows you to verify that a piece of data belongs to a larger dataset without needing to access the entire dataset.

 Use Cases

Blockchain transaction verification

File integrity checks

Distributed systems validation

Proof-of-inclusion and tamper detection

  Overview

Merkle Trees are a fundamental concept in blockchain technology, used to ensure data integrity and enable lightweight verification.

 .Not mainly for storage — stores only hashes of data, not raw data.

. Verification system — ensures data hasn’t been tampered with.

 // Efficient proofs — light clients (like mobile wallets) can verify transactions without downloading the entire blockchain.

. Used for proof of inclusion in systems like Bitcoin and Ethereum.

📦 Installation
(No external dependencies besides Node’s built-in crypto module.)

  How It Works

Each leaf node is hashed (using SHA-256).

Pairs of hashes are concatenated and re-hashed layer-by-layer.

This continues until only one hash remains — the Merkle Root.

The Merkle Root uniquely represents all the data below it.

Using a Merkle Proof, anyone can verify whether a leaf is part of the tree — without seeing the rest.

📘 API Reference
sha256(data)

Returns the SHA-256 hash of the input.
buildTree(leaves)

Builds a full Merkle Tree from an array of leaf data.

Parameters:
leaves — array of raw data strings.

Returns:
Array of levels, where the last level contains the Merkle Root.
getRoot(leaves)

Returns the Merkle Root of a given set of leaves.
getProof(leaves, index)

Generates a Merkle Proof for a specific leaf index.

Parameters:

leaves — array of raw data strings

index — position of the leaf to prove

Returns:
Array of { position, data } objects describing the proof path.
verifyProof(leaf, proof, root)

Verifies that a given leaf belongs to the Merkle Tree represented by the root.