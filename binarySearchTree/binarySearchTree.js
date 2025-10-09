//in DS node is the basic/building unit
class Node {
    constructor(data) {
        this.data=data;
        this.left=null;
        this.right=null;
        
    }
}

class BinarySearchTree {
    constructor() {
        this.root=null;
    }
 
    addNode(node){
        if(this.root==null) this.root=node;
        else{
         this.insertNode(this.root,node);

          }
        
        
    }
    insertNode(current,node){
        if(node.data<current.data){
            if(current.left==null){
                current.left=node;
            }else{
                this.insertNode(current.left,node);
            }
        }else{
            if(current.right==null){
                current.right=node;
            }else{
                this.insertNode(current.right,node);
            }
        }
    }
    hasNode(number){
     return this.searchNode(this.root,number);

    }
     searchNode(current,number){
         //base case[empty tree or reached a leaf]
         if(current==null) return false;
         //found node
         if(current.data==number ) return true;
         //search
         if(number<current.data){
             return this.searchNumber(current.left,number);
         }else{return this.searchNumber(current.right,number);}
     }
}

module.exports = {BinarySearchTree,Node};