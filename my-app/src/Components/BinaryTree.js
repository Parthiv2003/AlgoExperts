import React from 'react'
import './Array.css';
import Sidebar from './Sidebar';
import './Sidebar.css';
import {Link} from 'react-router-dom';
import $ from 'jquery';

$(function(){
    $(window).on('scroll',function(){        
        if(this.scrollY > 500){
            $('.t1').show();
        }
        else{
            $('.t1').hide();
        }
    });

    $('.t1').on('click',function(){
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehavior", "auto");
    });
});

function copyCode(){
    var copyT = document.getElementById("code");
    var str = copyT.innerText;
    navigator.clipboard.writeText(str);
    alert("Source Code are Copied!!!");
}

export default function Array() {

    return (
    <>
        <div className='d-flex flex' style={{marginTop: "-0.8%"}}>
            <Sidebar/>
            <div className="img">
                <div id="Information"  style={{marginTop: "3%", width:"83vw", marginLeft: "15vw"}}>
                    <div className="border Info mt-4 p-3">
                        <h4><strong>Binary Tree</strong></h4>
                        <p> Binary Tree is defined as a Tree data structure with at most 2 children. Since each element in a binary tree can have only 2 children, we typically name them the left and right child.
                        </p>
                        <p> A binary tree is a tree data structure in which each node has at most two children, which are referred to as the left child and the right child. It is implemented mainly using Links. 
                        </p>
                        <p> Unlike Arrays, Linked Lists, Stack, and queues, which are linear data structures, trees are hierarchical data structures. 
                        </p>
                        <strong>Properties of Binary Tree:</strong>
                        <p>
                            Properties of Binary Tree:
                            <ul>    
                                <li>
                                    <p>Maximum number of nodes = 2h + 1 – 1.</p>
                                    <p>Here h is height of a tree. Height is considered </p>
                                    <p>as the maximum number of edges on a path from root to leaf.</p>
                                </li>
                                <li>
                                    Minimum possible height =  ceil(Log2(n+1)) - 1  
                                </li>
                                <li>
                                    In Binary tree, number of leaf nodes is always one 
                                    more than nodes with two children.
                                </li>
                            </ul>
                        </p>

                        <div className='video' style={{marginLeft:"20%"}}>
                            <iframe width="640" height="360" src="https://www.youtube.com/embed/I_JuQ5ayPmc?list=PLxCzCOWd7aiHcmS4i14bI0VrMbZTUvlTa" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>

                        <strong>Representation of a Binary Tree</strong>
                        <p>
                            A tree is represented by a pointer to the topmost node in the tree. If the tree is empty, then the value of the root is NULL. A Binary Tree node contains the following parts. 
                            <ul>
                                <li>
                                    Data 
                                </li>
                                <li>
                                    Pointer to left child
                                </li>
                                <li>
                                    Pointer to the right child 
                                </li>
                            </ul>
                        </p>
                        <strong>Binary Tree Traversal</strong>
                        <p>
                            <ul>
                                <li>
                                    <strong>Preorder Traversal:</strong> Here, the traversal is : root – left child – right child. It means that the root node is traversed first then its left child and finally the right child.
                                </li>
                                <li>
                                    <strong>Inorder Traversal:</strong> Here, the traversal is : left child – root – right child.  It means that the left child is traversed first then its root node and finally the right child.
                                </li>
                                <li>
                                    <strong>Postorder Traversal:</strong> Here, the traversal is : left child – right child – root.  It means that the left child is traversed first then the right child and finally its root node.
                                </li>
                            </ul>
                        </p>
                        <strong>Basic operations on Binary Tree:</strong>
                        <p>
                            <ul>
                                <li>
                                    Inserting an element.
                                </li>
                                <li>
                                    Removing an element.
                                </li>
                                <li>
                                    Searching for an element.
                                </li>
                                <li>
                                    Traversing an element. 
                                </li>
                            </ul>
                        </p>
                    
                        <div className='flex d-flex mb-3 mt-3'>
                            <strong>Binary Tree Insertion</strong> 
                            <button className='fa fa-copy btn btn-dark' style={{marginLeft:"75%"}} onClick={copyCode}></button>
                        </div>
                        <div className="expl code" id="code">
                            {/* Binary Tree Insertion */}
                            public class BinaryTreeInsert   <br/> 
                            &#123; <br/> &emsp;  
                            public static void main(String[] args) <br/> &emsp;   
                            &#123; <br/> &emsp; &emsp;
                            new BinaryTreeInsert().run(); <br/> &emsp; 
                            &#125; <br/> &emsp;  
                            static class Node  <br/> &emsp;  
                            &#123; <br/> &emsp; &emsp;   
                            Node left;  <br/> &emsp; &emsp; 
                            Node right;  <br/> &emsp; &emsp; 
                            int value;  <br/> &emsp; &emsp;  
                            public Node(int value) <br/> &emsp; &emsp; 
                            &#123;  <br/> &emsp; &emsp; &emsp; 
                            this.value = value; <br/> &emsp; &emsp;
                            &#125;  <br/> &emsp;
                            &#125;  <br/> &emsp; 
                            public void run() <br/> &emsp;
                            &#123;  <br/> &emsp; &emsp;  
                            Node rootnode = new Node(25);   <br/> &emsp; &emsp;
                            System.out.println("Building tree with root value " + rootnode.value);  <br/> &emsp; &emsp; 
                            System.out.println("=================================");   <br/> &emsp; &emsp;
                            insert(rootnode, 11);   <br/> &emsp; &emsp;
                            insert(rootnode, 15); <br/> &emsp; &emsp;  
                            insert(rootnode, 16);  <br/> &emsp; &emsp; 
                            insert(rootnode, 23);  <br/> &emsp; &emsp; 
                            insert(rootnode, 79);  <br/> &emsp; 
                            &#125;  <br/> &emsp; 
                            public void insert(Node node, int value)  <br/> &emsp;
                            &#123;  <br/> &emsp; &emsp;  
                            if (value &lt; node.value)  <br/> &emsp; &emsp;
                            &#123;  <br/> &emsp; &emsp; &emsp;  
                            if (node.left != null)  <br/> &emsp; &emsp; &emsp;  
                            &#123;  <br/> &emsp; &emsp; &emsp; &emsp;   
                            insert(node.left, value); <br/> &emsp; &emsp; &emsp; 
                            &#125; else <br/> &emsp; &emsp; &emsp;  
                            &#123;<br/> &emsp; &emsp; &emsp; &emsp;  
                            System.out.println("  Inserted " + value + " to left of Node " + node.value);  <br/> &emsp; &emsp; &emsp; &emsp; 
                            node.left = new Node(value);  <br/> &emsp; &emsp; &emsp; 
                            &#125;<br/> &emsp; &emsp;
                            &#125; <br/> &emsp; &emsp;      
                            else if (value &gt; node.value)  <br/> &emsp; &emsp;   
                            &#123; <br/> &emsp; &emsp; &emsp;    
                            if (node.right != null)  <br/> &emsp; &emsp; &emsp;    
                            &#123; <br/> &emsp; &emsp; &emsp; &emsp; 
                            insert(node.right, value);  <br/> &emsp; &emsp; &emsp; 
                            &#125; else <br/> &emsp; &emsp;  &emsp; 
                            &#123; <br/> &emsp; &emsp; &emsp; &emsp;   
                            System.out.println("  Inserted " + value + " to right of Node " + node.value);  <br/> &emsp; &emsp; &emsp; &emsp;  
                            node.right = new Node(value); <br/> &emsp; &emsp; &emsp;    
                            &#125; <br/> &emsp; &emsp;  
                            &#125; <br/> &emsp; 
                            &#125; <br/> 
                            &#125; 
                        </div>

                        <div className='flex d-flex mb-3 mt-3'>
                            <strong>Binary Tree Deletion</strong> 
                            <button className='fa fa-copy btn btn-dark' style={{marginLeft:"75%"}} onClick={copyCode}></button>
                        </div>
                        <div className="expl code" id="code">
                            import java.util.LinkedList; <br/> 
                            import java.util.Queue;  <br/> <br/>
                            public class DeleteNode <br/>
                            &#123; <br/> &emsp;
                            // A binary tree node has key, pointer to  <br/> &emsp;
                            // left child and a pointer to right child  <br/> &emsp;
                            static class Node  <br/> &emsp;
                            &#123; <br/> &emsp; &emsp;
                            int key; <br/> &emsp; &emsp; 
                            Node left, right; <br/> &emsp; &emsp;
                            // Constructor  <br/> &emsp; &emsp;
                            Node(int key) <br/> &emsp; &emsp;
                            &#123; <br/> &emsp; &emsp; &emsp;
                            this.key = key;  <br/> &emsp; &emsp; &emsp;
                            left = null;  <br/> &emsp; &emsp; &emsp;
                            right = null; <br/> &emsp; &emsp;  
                            &#125; <br/> &emsp; 
                            &#125; <br/> &emsp; 
                            static Node root;  <br/> &emsp; 
                            static Node temp = root;  <br/> &emsp; 
                            // Inorder traversal of a binary tree <br/> &emsp;  
                            static void inorder(Node temp) <br/> &emsp;  
                            &#123; <br/> &emsp;  &emsp;
                            if (temp == null) <br/> &emsp; &emsp; &emsp; 
                            return;  <br/> &emsp; &emsp;
                            inorder(temp.left);  <br/> &emsp; &emsp;
                            System.out.print(temp.key + " ");  <br/> &emsp;  &emsp;
                            inorder(temp.right); <br/> &emsp;
                            &#125; <br/> &emsp; 
                            // Function to delete deepest <br/> &emsp;  
                            // element in binary tree  <br/> &emsp; 
                            static void deleteDeepest(Node root, Node delNode)  <br/> &emsp; 
                            &#123; <br/> &emsp; &emsp; 
                            Queue&lt;Node&gt; q = new LinkedList&lt;Node&gt;(); <br/> &emsp; &emsp; 
                            q.add(root);  <br/> &emsp;  &emsp;
                            Node temp = null;  <br/> &emsp;  &emsp;
                            // Do level order traversal until last node <br/> &emsp; &emsp;  
                            while (!q.isEmpty())  <br/> &emsp; &emsp;
                            &#123; <br/> &emsp; &emsp; &emsp;  
                            temp = q.peek();  <br/> &emsp; &emsp; &emsp;  
                            q.remove();  <br/> &emsp; &emsp; &emsp;  
                            if (temp == delNode)  <br/> &emsp; &emsp; &emsp;  
                            &#123; <br/> &emsp; &emsp; &emsp;  &emsp;  
                            temp = null; <br/> &emsp; &emsp; &emsp; &emsp;  
                            return; <br/> &emsp; &emsp; &emsp;  
                            &#125; <br/> &emsp; &emsp; &emsp;
                            if (temp.right!=null) <br/> &emsp; &emsp; &emsp;
                            &#123; <br/> &emsp; &emsp; &emsp; &emsp;
                            if (temp.right == delNode) <br/> &emsp; &emsp; &emsp; &emsp; 
                            &#123; <br/> &emsp; &emsp; &emsp; &emsp; &emsp;
                            temp.right = null;  <br/> &emsp; &emsp; &emsp; &emsp; &emsp;
                            return;  <br/> &emsp; &emsp; &emsp; &emsp;
                            &#125; <br/> &emsp; &emsp;   &emsp; &emsp;
                            else  <br/> &emsp; &emsp; &emsp; &emsp; &emsp;
                            q.add(temp.right);  <br/> &emsp; &emsp; &emsp;
                            &#125; <br/> &emsp; &emsp; &emsp;
                            if (temp.left != null) <br/> &emsp; &emsp; &emsp;
                            &#123; <br/> &emsp; &emsp; &emsp; &emsp;
                            if (temp.left == delNode)  <br/> &emsp; &emsp; &emsp;&emsp;
                            &#123; <br/> &emsp; &emsp; &emsp; &emsp; &emsp;
                            temp.left = null;  <br/> &emsp; &emsp; &emsp; &emsp; &emsp;
                            return;  <br/> &emsp; &emsp; &emsp; &emsp;
                            &#125; <br/> &emsp; &emsp; &emsp; &emsp;
                            else  <br/> &emsp; &emsp; &emsp; &emsp; &emsp;
                            q.add(temp.left); <br/> &emsp; &emsp; &emsp;
                            &#125; <br/> &emsp; &emsp;
                            &#125; <br/> &emsp;
                            &#125; <br/> <br/> &emsp;
                            // Function to delete given element  <br/> &emsp;
                            // in binary tree  <br/> &emsp;
                            static void delete(Node root, int key)  <br/> &emsp;
                            &#123; <br/> &emsp;  &emsp;
                            if (root == null)  <br/> &emsp; &emsp; &emsp;
                            return;  <br/> &emsp; &emsp;
                            if (root.left == null &&  root.right == null) <br/> &emsp; &emsp;
                            &#123; <br/> &emsp; &emsp; &emsp;
                            if (root.key == key)  <br/> &emsp; &emsp;&emsp;
                            &#123; <br/> &emsp; &emsp; &emsp;   &emsp;
                            root=null;  <br/> &emsp; &emsp; &emsp; &emsp;
                            return;  <br/> &emsp; &emsp; &emsp;
                            &#125;  <br/> &emsp; &emsp; &emsp;
                            else  <br/> &emsp; &emsp; &emsp; &emsp;
                            return; <br/> &emsp; &emsp;
                            &#125; <br/> &emsp; &emsp;
                
                            Queue&lt;Node&gt; q = new LinkedList&lt;Node&gt;();  <br/> &emsp; &emsp;
                            q.add(root);  <br/> &emsp; &emsp;
                            Node temp = null, keyNode = null;  <br/> &emsp; &emsp;
                            // Do level order traversal until  <br/> &emsp; &emsp;
                            // we find key and last node.  <br/> &emsp; &emsp;
                            while (!q.isEmpty())  <br/> &emsp; &emsp;
                            &#123; <br/> &emsp; &emsp; &emsp;  
                            temp = q.peek();  <br/> &emsp; &emsp; &emsp;
                            q.remove();  <br/> &emsp; &emsp; &emsp;
                            if (temp.key == key)  <br/> &emsp; &emsp;  &emsp; &emsp;
                            keyNode = temp;  <br/> &emsp; &emsp; &emsp;
                            if (temp.left != null)  <br/> &emsp; &emsp; &emsp; &emsp;
                            q.add(temp.left);  <br/> &emsp; &emsp; &emsp;
                            if (temp.right != null)  <br/> &emsp; &emsp; &emsp; &emsp;
                            q.add(temp.right);  <br/> &emsp; &emsp; 
                            &#125; <br/> &emsp; &emsp; 
                            if (keyNode != null)  <br/> &emsp; &emsp;
                            &#123; <br/> &emsp; &emsp; &emsp;
                            int x = temp.key;  <br/> &emsp; &emsp; &emsp;
                            deleteDeepest(root, temp); <br/> &emsp; &emsp; &emsp; 
                            keyNode.key = x;  <br/> &emsp; &emsp;
                            &#125; <br/> &emsp; 
                            &#125; <br/> &emsp;
                            // Driver code  <br/> &emsp;
                            public static void main(String args[])  <br/> &emsp;
                            &#123; <br/> &emsp; &emsp;
                            root = new Node(10);  <br/> &emsp; &emsp;
                            root.left = new Node(11);  <br/> &emsp; &emsp;
                            root.left.left = new Node(7); <br/> &emsp; &emsp; 
                            root.left.right = new Node(12); <br/> &emsp; &emsp; 
                            root.right = new Node(9);  <br/> &emsp; &emsp;
                            root.right.left = new Node(15); <br/> &emsp; &emsp;  
                            root.right.right = new Node(8); <br/> &emsp; &emsp; 
                            System.out.print("Inorder traversal before deletion: "); <br/> &emsp; &emsp; 
                            inorder(root);  <br/> &emsp; &emsp;
                            //node to delete <br/> &emsp; &emsp; 
                            int key = 7;  <br/> &emsp; &emsp;
                            delete(root, key);  <br/> &emsp; &emsp;
                            System.out.print("\nInorder traversal after deletion: "); <br/> &emsp; &emsp; 
                            inorder(root); <br/> &emsp; 
                            &#125; <br/> 
                            &#125;
                        </div>
                        </div>
                            <Link to='/Queue'><button className='btn btn-dark bt' style={{margin:"2%"}}>Previous</button></Link>
                            <Link to='/BST'><button className='btn btn-dark bt' style={{marginLeft:"80%"}}>Next</button></Link>
                        </div>
                </div>
            </div>
        </>
    )
}

    