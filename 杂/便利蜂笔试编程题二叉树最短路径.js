// 求二叉树两个节点的最短路径

function TreeNode(val){
    this.val = val;
    this.left = this.right = null;
}

let root = new TreeNode(1);
let left = root.left = new TreeNode(2);
let right = root.right = new TreeNode(3);
left.left = 4;
left.right = 5;
right.left = 6;
right.right = 7;
console.log(root);