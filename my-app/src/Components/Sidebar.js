import React from 'react'
import './Sidebar.css';
import {Link} from 'react-router-dom';

export default function Sidebar() {
  return (
    <>
      <div className="sidebar d-flex flex-column mt-2">
          <Link to='/Array'><button className="dec">Array</button></Link>
          <Link to='/LinkedList'><button className="dec">Linked List</button></Link>
          <Link to='/Stack'><button className="dec">Stack</button></Link>
          <Link to='/Queue'><button className="dec">Queue</button></Link>
          <Link to='/BinaryTree'><button className="dec">Binary Tree</button></Link>
          <Link to='/BST'><button className="dec">Binary Search Tree</button></Link>
          <Link to='/Heap'><button className="dec">Heap</button></Link>
          <Link to='/Hashing'><button className="dec">Hashing</button></Link>
          <Link to='/Graph'><button className="dec">Graph</button></Link>
      </div>
    </>
  )
}
