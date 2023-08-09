import React from 'react'
import './Array.css';
import Sidebar from './Sidebar';
import './Sidebar.css';
import {Link} from 'react-router-dom';

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
                <h4><strong>Graph</strong> </h4>
                <p> A graph can be defined as group of vertices and edges that are used to connect these vertices. A graph can be seen as a cyclic tree, where the vertices (Nodes) maintain any complex relationship among them instead of having parent child relationship.
                </p>
                <p> A graph G can be defined as an ordered set G(V, E) where V(G) represents the set of vertices and E(G) represents the set of edges which are used to connect these vertices.
                A Graph G(V, E) with 5 vertices (A, B, C, D, E) and six edges ((A,B), (B,C), (C,E), (E,D), (D,B), (D,A)) is shown in the following figure.
                </p>
                <img src="https://static.javatpoint.com/ds/images/graph-definition.png"></img>
                <br></br> <br />
                <strong>Directed and Undirected Graph</strong> 
                <p> A graph can be directed or undirected. However, in an undirected graph, edges are not associated with the directions with them. An undirected graph is shown in the above figure since its edges are not attached with any of the directions. If an edge exists between vertex A and B then the vertices can be traversed from B to A as well as A to B.
                </p>
                <p> In a directed graph, edges form an ordered pair. Edges represent a specific path from some vertex A to another vertex B. Node A is called initial node while node B is called terminal node.
                </p>
                <p>A directed graph is shown in the following figure.</p>
                <img src="https://static.javatpoint.com/ds/images/directed-and-undirected-graph.png"></img> <br /> <br /> <br /> 
                <h3>Graph Terminology</h3>
                <strong>Path</strong>
                <p>A path can be defined as the sequence of nodes that are followed in order to reach some terminal node V from the initial node U.</p>
                <strong>Closed Path</strong>
                <p>A path will be called as closed path if the initial node is same as terminal node. A path will be closed path if V0=VN.</p>
                <strong>Simple Path</strong>
                <p>If all the nodes of the graph are distinct with an exception V0=VN, then such path P is called as closed simple path.</p>
                <strong>Cycle</strong>
                <p>A cycle can be defined as the path which has no repeated edges or vertices except the first and last vertices.</p>
                <strong>Connected Graph</strong>
                <p>A connected graph is the one in which some path exists between every two vertices (u, v) in V. There are no isolated nodes in connected graph.</p>
                <strong>Complete Graph</strong>
                <p>A complete graph is the one in which every node is connected with all other nodes. A complete graph contain n(n-1)/2 edges where n is the number of nodes in the graph.</p>
              
                <div style={{marginLeft:"20%"}}>
                  <iframe width="640" height="360" src="https://www.youtube.com/embed/pcKY4hjDrxk" title="5.1 Graph Traversals - BFS & DFS -Breadth First Search and Depth First Search" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div> <br /> 
                <div>
                  <strong>BFS algorithm</strong>
                  <p> In this article, we will discuss the BFS algorithm in the data structure. Breadth-first search is a graph traversal algorithm that starts traversing the graph from the root node and explores all the neighboring nodes. Then, it selects the nearest node and explores all the unexplored nodes. While using BFS for traversal, any node in the graph can be considered as the root node.

                  There are many ways to traverse the graph, but among them, BFS is the most commonly used approach. It is a recursive algorithm to search all the vertices of a tree or graph data structure. BFS puts every vertex of the graph into two categories - visited and non-visited. It selects a single node in a graph and, after that, visits all the nodes adjacent to the selected node.
                  </p>
                  <strong>Algorithm</strong>
                  <p>Step 1: SET STATUS = 1 (ready state) for each node in G</p>

                  <p>Step 2: Enqueue the starting node A and set its STATUS = 2 (waiting state)</p>

                  <p>Step 3: Repeat Steps 4 and 5 until QUEUE is empty</p>

                  <p>Step 4: Dequeue a node N. Process it and set its STATUS = 3 (processed state).</p>

                  <p>Step 5: Enqueue all the neighbours of N that are in the ready state (whose STATUS = 1) and set</p>

                  <p>their STATUS = 2</p>

                  <p>(waiting state)</p>

                  <p>[END OF LOOP]</p>
                  <div className='flex d-flex mb-3 mt-3'>
                    <strong>Java Program to Graph.</strong> 
                    <button className='fa fa-copy btn btn-dark' style={{marginLeft:"75%"}} onClick={copyCode}></button>
                  </div>
                  <div className="expl code" id="code"> 
                    class Testarray&#123; <br/> &emsp;
                    public static void main(String args[])&#123; <br/> &emsp; &emsp;
                    int a[]=new int[5]; //declaration and instantiation <br/> &emsp; &emsp;
                    a[0]=10; //initialization <br/> &emsp; &emsp;
                    a[1]=20;  <br/> &emsp; &emsp;
                    a[2]=70;  <br/> &emsp; &emsp;
                    a[3]=40;  <br/> &emsp; &emsp;
                    a[4]=50;  <br/> &emsp; &emsp;
                    //traversing array  <br/> &emsp; &emsp;
                    for(int i=0;i&lt;a.length;i++) //length is the property of array  <br/> &emsp; &emsp; &emsp;
                    System.out.println(a[i]);  <br/> &emsp; 
                    &#125; <br/>
                    &#125; 
                  </div>
                </div>
            </div>
            <Link to='/Hashing'>
              <button className='btn btn-dark bt' style={{margin:"2%"}}>Previous</button>
            </Link>
            {/* <Link to='/BST'><button className='btn btn-dark bt' style={{marginLeft:"80%"}}>Next</button></Link> */}
          </div>
        </div>
      </div>
    </>
  )
}

