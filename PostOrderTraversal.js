'use strict';

const root = require('./buildTree');

function postOrderTraversalByRecursion(root) {
  if (!root) return;
  if (root.left) postOrderTraversalByRecursion(root.left);
  if (root.right) postOrderTraversalByRecursion(root.right);
  console.log(root.value);
}

console.log('postorder traversal by recursion');
postOrderTraversalByRecursion(root);

console.log('postorder traversal by stack');
function postOrderTraversalByStack(root) {
  const stack = [];
  function traverse(node) {
    if (!node) return;
    while(node) {
      stack.push(node);
      node = node.left;
    }
  }

  traverse(root);
  while(stack.length > 0) {
    let node = stack.pop();
    if (node.right) {
      // node has right child
      if (!node.isSecond) {
        // pop on first time, push node to stack again if the node has right child
        node.isSecond = true;
        stack.push(node);
        traverse(node.right);
      } else {
        // pop on second time
        console.log(node.value);
      }
    } else {
      // node does not have right child
      console.log(node.value);
    }
  }
}
postOrderTraversalByStack(root);
