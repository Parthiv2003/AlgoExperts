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
                    <div id="Information"  style={{marginTop: "3%", width:"83vw", marginLeft: "15vw"}}>
                        <div className="border Info mt-4 p-3">
                            <h4><strong>Queue </strong></h4>
                            <p> A queue is defined as a linear data structure that is open at both ends and the operations are performed in First In First Out (FIFO) order.</p>
                            <p>  We define a queue to be a list in which all additions to the list are made at one end, and all deletions from the list are made at the other end.  The element which is first pushed into the order, the operation is first performed on that. </p>

                            <strong>Characteristics of Queue::</strong>
                            <p> Characteristics of Queue:
                                <ul>    
                                    <li> Queue can handle multiple data. </li>
                                    <li> We can access both ends. </li>
                                    <li> They are fast and flexible. </li>
                                </ul>
                            </p>
                            <strong>Representation of a Queue</strong>
                            <p> Like stacks, Queues can also be represented in an array: In this representation, the Queue is implemented using the array. Variables used in this case are : 
                                <ul>
                                    <li>
                                        <strong>Queue:</strong>the name of the array storing queue elements.
                                    </li>
                                    <li>
                                        <strong>Front:</strong>the index where the first element is stored in the array representing the queue.
                                    </li>
                                    <li>
                                        <strong>Rear:</strong>the index where the last element is stored in an array representing the queue.
                                    </li>
                                </ul>
                            </p>
                    
                            <strong>Basic operations on Queue:</strong>
                            <p>
                                <ul>
                                    <li>
                                        <strong>void enqueue(int data):</strong> Inserts an element at the end of the queue i.e. at the rear end.
                                    </li>
                                    <li>
                                        <strong>int dequeue():</strong> This operation removes and returns an element that is at the front end of the queue.
                                    </li>
                                </ul>
                            </p> <br />

                            <div style={{marginLeft:"20%"}}>
                                <iframe width="640" height="360" src="https://www.youtube.com/embed/watch?v=W7uB9-TKfTg&list=PLDzeHZWIZsTrhXYYtx4z8-u8zA-DzuVsj&index=7" title="Queue Data Structure" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div> <br /> 

                            <div className='flex d-flex mb-3 mt-3'>
                                <strong>Java Program to implement Queue.</strong> 
                                <button className='fa fa-copy btn btn-dark' style={{marginLeft:"65%"}} onClick={copyCode}></button>
                            </div>
                            <div className="expl code" id="code"> 
                                import java.util.*;  <br/> <br/>
                                class Book implements Comparable&lt;Book&gt;&#123; <br/> &emsp;  
                                int id; <br/> &emsp; 
                                String name,author,publisher; <br/> &emsp; 
                                int quantity; <br/> &emsp;
                                public Book(int id, String name, String author, String publisher, int quantity) &#123; <br/> &emsp; &emsp;  
                                this.id = id; <br/> &emsp; &emsp;  
                                this.name = name;  <br/> &emsp; &emsp;  
                                this.author = author; <br/> &emsp; &emsp;    
                                this.publisher = publisher; <br/> &emsp; &emsp;   
                                this.quantity = quantity; <br/> &emsp;    
                                &#125; <br/> &emsp;  
                                public int compareTo(Book b) &#123; <br/> &emsp; &emsp; 
                                if(id &gt; b.id) <br/> &emsp; &emsp; &emsp;
                                return 1;  <br/> &emsp; &emsp;  
                                else if(id &lt; b.id) <br/> &emsp; &emsp; &emsp;  
                                return -1; <br/> &emsp; &emsp;   
                                else <br/> &emsp; &emsp; &emsp;  
                                return 0; <br/> &emsp;   
                                &#125; <br/> 
                                &#125; <br/><br/> 
                                public class LinkedListExample &#123; <br/> &emsp;     
                                public static void main(String[] args) &#123; <br/> &emsp; &emsp;    
                                Queue&lt;Book&gt; queue=new PriorityQueue&lt;Book&gt;();  <br/> &emsp; &emsp;  
                                //Creating Books  <br/> &emsp; &emsp;  
                                Book b1=new Book(121,"Let us C","Yashwant Kanetkar","BPB",8);  <br/> &emsp; &emsp;  
                                Book b2=new Book(233,"Operating System","Galvin","Wiley",6);  <br/> &emsp; &emsp;  
                                Book b3=new Book(101,"Data Communications & Networking","Forouzan","Mc Graw Hill",4); <br/> &emsp; &emsp;   
                                //Adding Books to the queue  <br/> &emsp; &emsp;  
                                queue.add(b1);  <br/> &emsp; &emsp;  
                                queue.add(b2);  <br/> &emsp; &emsp;  
                                queue.add(b3); <br/> &emsp; &emsp;   
                                System.out.println("Traversing the queue elements:"); <br/> &emsp; &emsp;   
                                //Traversing queue elements  <br/> &emsp; &emsp;  
                                for(Book b:queue) &#123; <br/> &emsp; &emsp; &emsp;  
                                System.out.println(b.id+" "+b.name+" "+b.author+" "+b.publisher+" "+b.quantity);  <br/> &emsp; &emsp;  
                                &#125; <br/> &emsp; &emsp;    
                                queue.remove();  <br/> &emsp; &emsp;  
                                System.out.println("After removing one book record:"); <br/> &emsp; &emsp;    
                                for(Book b:queue) &#123; <br/> &emsp; &emsp;  &emsp;  
                                System.out.println(b.id+" "+b.name+" "+b.author+" "+b.publisher+" "+b.quantity);  <br/> &emsp; &emsp;  
                                &#125; <br/> &emsp; 
                                &#125; <br/> 
                                &#125;
                            </div>
                        </div>
                        <Link to='/Stack'>
                            <button className='btn btn-dark bt' style={{margin:"2%"}}> Previous</button>
                        </Link>
                        <Link to='/BinaryTree'>
                            <button className='btn btn-dark bt' style={{marginLeft:"80%"}}> Next</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

    