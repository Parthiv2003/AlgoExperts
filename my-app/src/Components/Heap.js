import React from 'react'
import './Array.css';
import Sidebar from './Sidebar';
import './Sidebar.css';
import {Link} from 'react-router-dom';
import './h1.png';
import './h2.png';
import './h3.png';
import './h4.png';

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
          <div id="Information" style={{marginTop: "3%", width:"83vw", marginLeft: "15vw"}}>
            <div className="border Info mt-4 p-3">
              <h4> <strong>Heap </strong> </h4>
              <h5>What is Heap?</h5>
              <p>A heap is a complete binary tree, and the binary tree is a tree in which the node can have utmost two children. Before knowing more about the heap data structure, we should know about the complete binary tree.</p>
              <h5>What is a complete binary tree?</h5>
              <p> A complete binary tree is a binary tree in which all the levels except the last level, i.e., leaf node should be completely filled, and all the nodes should be left-justified. </p>
              <img src={require('./h1.png')}></img>
              <p>In the above figure, we can observe that all the internal nodes are completely filled except the leaf node; therefore, we can say that the above tree is a complete binary tree.</p>
              <img src={require('./h1.png')}></img>
                    
              <div className='flex d-flex mb-3 mt-3'>
                <strong>Java Program for Heap Insertion.</strong> 
                <button className='fa fa-copy btn btn-dark' style={{marginLeft:"70%"}} onClick={copyCode}></button>
              </div>

              <div className="expl code" id="code"> 
                insertHeap(A, n, value) <br/> 
                &#123; <br/> &emsp;
                n=n+1; // n is incremented to insert the new element  <br/> &emsp;
                A[n]=value; // assign new value at the nth position  <br/> &emsp;
                i = n; // assign the value of n to i  <br/> &emsp;
                // loop will be executed until i becomes 1.  <br/> &emsp; 
                while(i&gt;1)   <br/> &emsp;
                &#123; <br/> &emsp; &emsp;
                parent= floor value of i/2; // Calculating the floor value of i/2 <br/> &emsp; &emsp;
                // Condition to check whether the value of parent is less than the given node or not   <br/> &emsp; &emsp;
                if(A[parent] &lt; A[i])   <br/> &emsp;  &emsp;
                &#123; <br/> &emsp; &emsp; &emsp;
                swap(A[parent], A[i]);  <br/> &emsp; &emsp; &emsp;
                i = parent;  <br/> &emsp; &emsp;
                &#125; <br/> &emsp; &emsp;
                else  <br/> &emsp; &emsp;
                &#123; <br/>  &emsp; &emsp; &emsp;
                return;  <br/> &emsp; &emsp;
                &#125; <br/> &emsp;
                &#125; <br/>
                &#125; 
              </div>

              <p>The above figure shows that all the internal nodes are completely filled except the leaf node, but the leaf nodes are added at the right part; therefore, the above tree is not a complete binary tree.</p>
              <p>There are two types of the heap:</p>
              <ul>
                <li>Min Heap</li>
                <li>Max Heap</li>
              </ul>
              <p>
                <strong>Min Heap:</strong>The value of the parent node should be less than or equal to either of its children.
                <br></br>
                <strong>Or</strong>
                <br></br>
                In other words, the min-heap can be defined as, for every node i, the value of node i is greater than or equal to its parent value except the root node. 
              </p>
              <img src={require('./h3.png')}></img>
              <p>
                <strong>Max Heap:</strong> The value of the parent node is greater than or equal to its children.
                <br></br>
                <strong>Or</strong>
                <br></br>
                In other words, the max heap can be defined as for every node i; the value of node i is less than or equal to its parent value except the root node.
              </p>
              <img src={require('./h4.png')}></img>
              <p>
                <div className="video" style={{marginLeft:"20%"}}>
                  <iframe width="640" height="360" src="https://www.youtube.com/embed/HqPJF2L5h9U" title="2.6.3 Heap - Heap Sort - Heapify - Priority Queues" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

                <strong>Time complexity in Max Heap:</strong><br></br>
                The total number of comparisons required in the max heap is according to the height of the tree. The height of the complete binary tree is always logn; therefore, the time complexity would also be O(logn).
              </p>

              <div className='flex d-flex mb-3 mt-3'>
                <strong>Java Program for Max Heap.</strong> 
                <button className='fa fa-copy btn btn-dark' style={{marginLeft:"73%"}} onClick={copyCode}></button>
              </div>

              <div className="expl code" id="code"> 
                MaxHeapify(A, n, i)  <br/>
                &#123; <br/> &emsp;
                int largest =i;   <br/> &emsp;
                int l= 2*i;   <br/> &emsp;
                int r= 2*i+1;  <br/> &emsp; 
                while(l &lt;= n && A[l] &gt; A[largest])   <br/> &emsp;
                &#123;  <br/> &emsp; &emsp;
                largest=l;   <br/> &emsp;
                &#125;  <br/> &emsp;
                while(r &lt;= n && A[r] &gt; A[largest]) <br/> &emsp;  
                &#123; <br/> &emsp; &emsp;
                largest=r;   <br/> &emsp;
                &#125; <br/> &emsp;
                if(largest!=i)   <br/> &emsp;
                &#123; <br/> &emsp; &emsp;
                swap(A[largest], A[i]); <br/> &emsp; &emsp;
                heapify(A, n, largest); <br/> &emsp; 
                &#125; <br/>
                &#125; 
              </div>
            </div>
            <Link to='/BST'>
              <button className='btn btn-dark bt' style={{margin:"2%"}}>Previous</button>
            </Link>
            <Link to='/Hashing'>
              <button className='btn btn-dark bt' style={{marginLeft:"80%"}}>Next</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

    