'use strict';

const root = require('./buildTree');

function preorderTraversalByRecursion(root) {
  if (!root) return;
  console.log(root.value);
  preorderTraversalByRecursion(root.left);
  preorderTraversalByRecursion(root.right);
}

console.log('preorder traversal by recursiion');
preorderTraversalByRecursion(root);

function preorderTraversalByStack(root) {
  const stack = [];

  function traverseLeft(node) {
    while(node) {
      console.log(node.value);
      if (node.right) stack.push(node.right);
      node = node.left;
    }
  }

  traverseLeft(root);

  while(stack.length > 0) {
    let topNode = stack.pop();
    traverseLeft(topNode);
  }
}

console.log('preorder traversal by stack');
preorderTraversalByStack(root);
