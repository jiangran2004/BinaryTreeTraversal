'use strict';

const root = require('./buildTree');

function levelTraversal(root) {
  const queue = [root];
  while(queue.length > 0) {
    let node = queue.shift();
    console.log(node.value);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
}

console.log('level traversal');
levelTraversal(root);
