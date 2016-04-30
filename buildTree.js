'use strict';

function Node(value, left, right) {
  this.value = value;
  this.left = left;
  this.right = right;
}

const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function buildBinaryTree(values, index) {
  if (index > values.length - 1) return null;
  const node = new Node(values[index]);
  node.left = buildBinaryTree(values, index * 2 + 1);
  node.right = buildBinaryTree(values, index * 2 + 2);
  return node;
}

const root = buildBinaryTree(values, 0);

module.exports = root;