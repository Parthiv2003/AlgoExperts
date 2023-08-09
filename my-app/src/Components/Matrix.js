import React from 'react'
import './Array.css';
import Sidebar from './Sidebar';
import './Sidebar.css';
import {Link} from 'react-router-dom';

export default function Array() {

    return (
        <>
            <div className='d-flex flex'>
                <Sidebar/>
                <div className="img">
                    <div id="Information">
                        <div className="border Info mt-4 p-3">
                            <strong>Binary Tree in Data Structure</strong>
                            <p> Binary Tree is defined as a Tree data structure with at most 2 children. Since each element in a binary tree can have only 2 children, we typically name them the left and right child. </p>
                            <p> A binary tree is a tree data structure in which each node has at most two children, which are referred to as the left child and the right child. It is implemented mainly using Links. </p>
                            <p> Unlike Arrays, Linked Lists, Stack, and queues, which are linear data structures, trees are hierarchical data structures. </p>
                            <strong>Properties of Binary Tree:</strong>
                            <p> Properties of Binary Tree:
                                <ul>    
                                    <li>
                                        <p>Maximum number of nodes = 2h + 1 – 1.</p>
                                        <p>Here h is height of a tree. Height is considered </p>
                                        <p>as the maximum number of edges on a path from root to leaf.</p>
                                    </li>
                                    <li> Minimum possible height =  ceil(Log2(n+1)) - 1 </li>
                                    <li> In Binary tree, number of leaf nodes is always one more than nodes with two children. </li>
                                </ul>
                            </p>
                            <strong>Representation of a Binary Tree</strong>
                            <p> A tree is represented by a pointer to the topmost node in the tree. If the tree is empty, then the value of the root is NULL. A Binary Tree node contains the following parts. 
                                <ul>
                                    <li> Data </li>
                                    <li> Pointer to left child </li>
                                    <li> Pointer to the right child </li>
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
                                    <li> Inserting an element. </li>
                                    <li> Removing an element. </li>
                                    <li> Searching for an element. </li>
                                    <li> Traversing an element. </li>
                                </ul>
                            </p>
                            <textarea className="area">
                            </textarea>
                        </div>
                        <Link to='/Queue'>
                            <button className='btn btn-dark bt' style={{margin:"2%"}}> Previous </button>
                        </Link>
                        <Link to='/BST'>
                            <button className='btn btn-dark bt' style={{marginLeft:"80%"}}> Next</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

        