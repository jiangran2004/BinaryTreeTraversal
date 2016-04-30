'use strict';

const root = require('./buildTree');

function inorderTraversalByRecursion(root) {
  if (!root) return;
  inorderTraversalByRecursion(root.left);
  console.log(root.value);
  inorderTraversalByRecursion(root.right);
}

console.log('inorder traversal by recursion');
inorderTraversalByRecursion(root);

function inorderTraversalByStack(root) {
  const stack = [];
  function traverse(node) {
    while(node) {
      stack.push(node);
      node = node.left;
    }
  }
  traverse(root);
  while(stack.length > 0) {
    let node = stack.pop();
    console.log(node.value);
    if (node.right) traverse(node.right);
  }
}

console.log('inorder traversal by stack');
inorderTraversalByStack(root);
