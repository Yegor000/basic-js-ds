const { NotImplementedError } = require('../lib/errors');
const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.r = null;
  }

  root() {
    return this.r;
  }

  add(data) {
    if (this.r === null) {
      this.r = new Node(data);
      return;
    }

    let currentNode = this.r;

    while (true) {
      if (data > currentNode.data) {
        if (currentNode.right === null) {
          currentNode.right = new Node(data);
          return;
        }
        else {
          currentNode = currentNode.right;
        }
      }
      else {
        if (currentNode.left === null) {
          currentNode.left = new Node(data);
          return;
        }
        else {
          currentNode = currentNode.left;
        }
      }
    }
  }

  find(data) {
    let currentNode = this.r;

    while (true) {
      if (data > currentNode.data) {
        if (currentNode.right === null) {
          return null;
        }
        else {
          currentNode = currentNode.right;
        }
      }
      else if (data < currentNode.data) {
        if (currentNode.left === null) {
          return null;
        }
        else {
          currentNode = currentNode.left;
        }
      }
      else {
        return currentNode;
      }
    }
  }

  has(data) {
    let currentNode = this.r;

    while (true) {
      if (data > currentNode.data) {
        if (currentNode.right === null) {
          return false;
        }
        else {
          currentNode = currentNode.right;
        }
      }
      else if (data < currentNode.data) {
        if (currentNode.left === null) {
          return false;
        }
        else {
          currentNode = currentNode.left;
        }
      }
      else {
        return true;
      }
    }
  }

  remove(data) {
    let currentNode = this.r;
    let leftSide, rightSide;

    while (true) {
      if (data > currentNode.data) {
        if (currentNode.right === null) {
          return null;
        }
        else if (currentNode.right.data === data) {
          rightSide = currentNode.right.right;
          leftSide = currentNode.right.left;
          currentNode.right = this.connect(leftSide, rightSide);
          return;
        }
        else {
          currentNode = currentNode.right;
        }
      }
      else if (data < currentNode.data) {
        if (currentNode.left === null) {
          return null;
        }
        else if (currentNode.left.data === data) {
          rightSide = currentNode.left.right;
          leftSide = currentNode.left.left;
          currentNode.left = this.connect(leftSide, rightSide);
          return;
        }
        else {
          currentNode = currentNode.left;
        }
      }
      else {
        this.r = this.connect(this.r.left, this.r.right);
        return;
      }
    }
  }

  connect(leftNode, rigtNode) {
    if(!leftNode || !rigtNode) {
      return (leftNode || rigtNode)
    }

    let currentNode = rigtNode;

    while (true) {
      if (currentNode.left === null) {
        currentNode.left = leftNode;
        return rigtNode;
      }
      else {
        currentNode = currentNode.left;
      }
    }
  }

  min() {
    let currentNode = this.r;

    while (true) {
      if (currentNode.left === null) {
        return currentNode.data;
      }
      else {
        currentNode = currentNode.left;
      }
    }
  }

  max() {
    let currentNode = this.r;

    while (true) {
      if (currentNode.right === null) {
        return currentNode.data;
      }
      else {
        currentNode = currentNode.right;
      }
    }
  }
}

module.exports = {
  BinarySearchTree
};