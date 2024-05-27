/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if(!this.root) return 0
    let toVisitQueue = [{node:this.root,depth:1}]
    while(toVisitQueue.length){
        let current = toVisitQueue.shift()
        console.log("this is current",current)
        if(!current.node.left && !current.node.right){
          console.log("current depth",current.depth)
          return current.depth
        }
        if(current.node.left){
          toVisitQueue.push({node:current.node.left,depth:current.depth +1})
          
        }
        if(current.node.right){
          toVisitQueue.push({node:current.node.right,depth:current.depth +1})
          
        }
          
    }
        return current.depth
  }
      
  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if(!this.root) return 0
    let max =1
    let toVisitStack = [{node:this.root,depth:1}]
    while(toVisitStack.length){
      let current = toVisitStack.pop()
      console.log("this is current",current)
      if(!current.node.left && !current.node.right){
        if(current.depth >max){
          max=current.depth
          console.log("current depth",max)
        // return max
        }
        
      }
      if(current.node.left){
        toVisitStack.push({node:current.node.left,depth:current.depth+1})
      }
      if(current.node.right){
        toVisitStack.push({node:current.node.right,depth:current.depth+1})
      }
    }
    return max
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let result = 0;
    function findMaxSum(node){
      if(node === null) return 0;
      let leftSum = findMaxSum(node.left);
      let rightSum = findMaxSum(node.right);
      let result = Math.max(result, node.val + leftSum + rightSum)
      return Math.max(0, leftSum + node.val, rightSum + node.val)
    }
    findMaxSum(this.root);
    return result;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    let nextLarger = null;
    function findNextLarger(node){
      if(node === null) return;
      if(node.val > lowerBound &&(nextLarger === null || node.val < nextLarger)){
        nextLarger = node.val
      }
      findNextLarger(node.left)
      findNextLarger(node.right)
    }
    findNextLarger(this.root)
    return nextLarger;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
