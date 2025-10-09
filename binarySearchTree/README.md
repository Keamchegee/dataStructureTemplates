Binary Search Tree (BST) Module

This module provides a simple implementation of a Binary Search Tree (BST) in JavaScript — a fundamental data structure used to organize data for fast lookup, insertion, and traversal.

    Overview

A Binary Search Tree is a hierarchical data structure composed of nodes.
Each node stores a value (data) and has at most two child nodes:

Left child → contains values smaller than the node’s data.
Right child → contains values greater than the node’s data.

This ordering property makes search and insertion efficient, typically operating in O(log n) time for balanced trees.

   Classes
1. Node

Represents the basic building unit of the tree.

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}


Each node holds:

data: the value stored in the node.
left: reference to the left child node.
right: reference to the right child node.
2. BinarySearchTree

Defines the tree and its core operations.

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  addNode(node) { ... }        // Inserts a new node into the tree
  insertNode(current, node) { ... } // Helper for recursive insertion
  hasNode(number) { ... }      // Checks if a node with given value exists
  searchNode(current, number) { ... } // Helper for recursive search
}
     

     Methods
Method	Description
addNode(node)	Inserts a new node into the BST. Automatically places it in the correct position based on its value.
insertNode(current, node)	Recursive helper for addNode(). Navigates left or right depending on the new node’s value.
hasNode(number)	Returns true if a node with the specified value exists in the tree; otherwise, false.
searchNode(current, number)	Recursive helper that searches the tree for a given value.
   Example Usage
const { BinarySearchTree, Node } = require('./path/to/module');

const tree = new BinarySearchTree();

tree.addNode(new Node(10));
tree.addNode(new Node(5));
tree.addNode(new Node(15));

console.log(tree.hasNode(5));   // true
console.log(tree.hasNode(20));  // false

🧠 Notes
The Node class is the basic building block — every element added to the tree must be wrapped as a Node instance.
The current implementation supports insertion and search.
(Deletion, traversal, and balancing can be added later.)
Ideal for learning tree data structures and understanding recursive search/insertion logic.

