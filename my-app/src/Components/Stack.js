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
                            <h4><strong>Stack </strong></h4>
                            <p> Stack is a linear data structure which follows a particular order in which the operations are performed. The order may be LIFO(Last In First Out) or FILO(First In Last Out). </p>
                            <p>  There are many real-life examples of a stack. Consider an example of plates stacked over one another in the canteen. The plate which is at the top is the first one to be removed, i.e. the plate which has been placed at the bottommost position remains in the stack for the longest period of time. So, it can be simply seen to follow LIFO(Last In First Out)/FILO(First In Last Out) order. </p>
                            <strong>Types of Stack</strong>
                            <p>There are various types of Stack as follows -
                                <ul>    
                                    <li> Register Stack: 
                                        <p>
                                            This type of stack is also a memory element present in the memory unit and can handle a small amount of data only. The height of the register stack is always limited as the size of the register stack is very small compared to the memory.
                                        </p>
                                    </li>
                                    <li> Memory Stack: 
                                        <p>
                                            This type of stack can handle a large amount of memory data. The height of the memory stack is flexible as it occupies a large amount of memory data.
                                        </p>
                                    </li>
                                </ul>
                            </p>
                                
                            <div className='video' style={{marginLeft:"20%"}}>
                                <iframe width="547" height="360" src="https://www.youtube.com/embed/PdvGEI-P3-M" title="Stack vs Heap" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>

                            <strong>Primary Stack Operations:</strong>
                            <p>
                                <ul>
                                    <li>
                                        void push(int data):
                                        <p>
                                            When this operation is performed, an element is inserted into the stack.
                                        </p>
                                    </li>
                                    <li>
                                        int pop(): 
                                        <p>
                                            When this operation is performed, an element is removed from the top of the stack and is returned.
                                        </p>
                                    </li>
                                </ul>
                            </p>
                            
                            <div className='flex d-flex mb-3 mt-3'>
                                <strong>Java Program to implement Stack.</strong> 
                                <button className='fa fa-copy btn btn-dark' style={{marginLeft:"65%"}} onClick={copyCode}></button>
                            </div>
                        
                            <div className="expl code" id="code"> 
                                import java.util.Stack;  <br/> <br/>
                                public class StackEmptyMethodExample <br/> 
                                &#123; <br/> &emsp;
                                public static void main(String[] args) <br/> &emsp;  
                                &#123; <br/> &emsp; &emsp;
                                //creating an instance of Stack class  <br/> &emsp; &emsp;
                                Stack&lt;Integer&gt; stk= new Stack&lt;&gt;(); <br/> &emsp; &emsp; 
                                // checking stack is empty or not  <br/> &emsp; &emsp;
                                boolean result = stk.empty();  <br/> &emsp; &emsp;
                                System.out.println("Is the stack empty? " + result);  <br/> &emsp; &emsp;
                                // pushing elements into stack  <br/> &emsp; &emsp;
                                stk.push(78); <br/> &emsp; &emsp; 
                                stk.push(113); <br/> &emsp; &emsp; 
                                stk.push(90);  <br/> &emsp; &emsp;
                                stk.push(120); <br/> &emsp; &emsp; 
                                //prints elements of the stack <br/> &emsp; &emsp; 
                                System.out.println("Elements in Stack: " + stk); <br/> &emsp; &emsp;  
                                result = stk.empty();  <br/> &emsp; &emsp;
                                System.out.println("Is the stack empty? " + result); <br/> &emsp;   
                                &#125; <br/> 
                                &#125;
                            </div>
                        </div>
                        <Link to='/LinkedList'>
                            <button className='btn btn-dark bt' style={{margin:"2%"}}> Previous</button>
                        </Link>
                        <Link to='/Queue'>
                            <button className='btn btn-dark bt' style={{marginLeft:"80%"}}>Next</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

    