import React from 'react'
import './Data.css';
import {Link} from "react-router-dom";
import Array from './Array';
import LinkedList from './LinkedList';
import Queue from './Queue';

export default function Data() {
    return (
        <>
            <div className="d-flex flex-column">
                <div className="d-flex">
                    <div className="card" id="C">
                        <div className="card-header" id="cin">
                            <b>Array</b>
                        </div>
                        <div className="card-body">Array is a container which can hold a fix number of items and these items should be of the same type. Most of the data structures make use of arrays to implement their algorithms.
                        </div>
                        <div className="card-body">
                            <Link to="/Array">
                                <button className="btn btn-dark Dt">Read More</button>
                            </Link>
                        </div>
                    </div>
                    <div className="card" id="C">
                        <div className="card-header" id="cin">
                            <b>Linked List</b>
                        </div>
                        <div className="card-body">Linked List contains a link element called first. Each link carries a data field(s) and a link field called next. Each link is linked with its next link using its next link. Last link carries a link as null to mark the end of the list.</div>
                        <div className="card-body">
                            <Link to='/LinkedList'>
                                <button className="btn btn-dark Dt">Read More</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="card" id="C">
                        <div className="card-header" id="cin">
                            <b>Stack</b>
                        </div>
                        <div className="card-body">A stack is a linear data structure that follows the principle of Last In First Out (LIFO). This means the last element inserted inside the stack is removed first.
                        </div>
                        <div className="card-body">
                            <Link to="/Stack">
                                <button className="btn btn-dark Dt">Read More</button>
                            </Link>
                        </div>
                    </div>
                    <div className="card" id="C">
                        <div className="card-header" id="cin">
                            <b>Queue</b>
                        </div>
                        <div className="card-body">A queue is a useful data structure in programming. It is similar to the ticket queue outside a cinema hall, where the first person entering the queue is the first person who gets the ticket. Queue follows the First In First Out (FIFO) rule - the item that goes in first is the item that comes out first.
                        </div>
                        <div className="card-body">
                            <Link to='/Queue'>
                                <button className="btn btn-dark Dt">Read More</button>
                            </Link>
                        </div>    
                    </div>
                </div>
                <div className="d-flex">
                    <div className="card" id="C">
                        <div className="card-header" id="cin">
                            <b>Binary Tree</b>
                        </div>
                        <div className="card-body"> The Binary tree means that the node can have maximum two children. Here, binary name itself suggests that 'two'; therefore, each node can have either 0, 1 or 2 children.
                        </div>
                        <div className="card-body">
                            <Link to="/BinaryTree">
                                <button className="btn btn-dark Dt">Read More</button>
                            </Link>
                        </div>    
                    </div>
                    <div className="card" id="C">
                        <div className="card-header" id="cin">
                            <b>Binary Search Tree</b>
                        </div>
                        <div className="card-body">Binary Search Tree is a node-based binary tree data structure which has the following properties:
                        The left subtree of a node contains only nodes with keys lesser than the node's key.
                        The right subtree of a node contains only nodes with keys greater than the node's key.</div>
                        <div className="card-body">
                            <Link to='/BST'>
                                <button className="btn btn-dark Dt">Read More</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="card" id="C">
                        <div className="card-header" id="cin">
                            <b>Heap</b>
                        </div>
                        <div className="card-body"> A heap is a complete binary tree, and the binary tree is a tree in which the node can have utmost two children.
                        </div>
                        <div className="card-body">
                            <Link to='/Heap'>
                                <button className="btn btn-dark Dt">Read More</button>
                            </Link>
                        </div>
                    </div>
                    <div className="card" id="C">
                        <div className="card-header" id="cin">
                            <b>Hashing</b>
                        </div>
                        <div className="card-body"> Hashing in the data structure is a technique of mapping a large chunk of data into small tables using a hashing function. It is also known as the message digest function. It is a technique that uniquely identifies a specific item from a collection of similar items.
                        </div>
                        <div className="card-body">
                            <Link to="/Hashing">
                                <button className="btn btn-dark Dt">Read More</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="card" id="C">
                        <div className="card-header" id="cin">
                            <b>Graph</b>
                        </div>
                        <div className="card-body"> Graphs in data structures are non-linear data structures made up of a finite number of nodes or vertices and the edges that connect them. Graphs in data structures are used to address real-world problems in which it represents the problem area as a network like telephone networks, circuit networks, and social networks.
                        </div>
                        <div className="card-body">
                            <Link to="/Graph">
                                <button className="btn btn-dark Dt">Read More</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
