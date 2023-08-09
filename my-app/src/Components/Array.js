import React from 'react'
import './Array.css';
import Sidebar from './Sidebar';
import './Sidebar.css';
import './Array1.jpeg';
import './ds-array2.png';
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
              <h3><strong>Array</strong></h3>
              <p>
                In C programming, they are the derived data types that can store the primitive type of data such as int, char, double, 
                float, etc. For example, if we want to store the marks of a student in 6 subjects, then we don't need to define a different 
                variable for the marks in different subjects. Instead, we can define an array that can store the marks in each subject at the 
                contiguous memory locations.
              </p>
              <strong>Properties of array</strong>
              <p>There are some of the properties of an array that are listed as follows -</p>
              <ul>    
                <li>Each element in an array is of the same data type and carries the same size that is 4 bytes.</li>
                <li>Elements in the array are stored at contiguous memory locations from which the first element is stored at the smallest memory location.</li>
                <li>Elements of the array can be randomly accessed since we can calculate the address of each element of the array with the given base address and the size of the data element.</li>
              </ul>

              <strong>Representation of an array</strong>
              <p>
                  We can represent an array in various ways in different programming languages. 
                  As an illustration, let's see the declaration of array in C language -
                  <img src={require("./Array1.jpeg")}/>
              </p>
            <p>
            As per the above illustration, there are some of the following important points -
            <ul>
              <li>Index starts with 0.</li>
              <li>The array's length is 10, which means we can store 10 elements.</li>
              <li>Each element in the array can be accessed via its index.</li>
            </ul>
            </p>
            <strong>Arrays are useful because -</strong>
            <ul>
              <li>Sorting and searching a value in an array is easier.</li>
              <li>Arrays are best to process multiple values quickly and easily.</li>
              <li>Arrays are good for storing multiple values in a single variable - In computer programming, most cases require storing a large number of data of a similar type. To store such an amount of data, we need to define a large number of variables. It would be very difficult to remember the names of all the variables while writing the programs. Instead of naming all the variables with a different name, it is better to define an array and store all the elements into it.</li>
            </ul>
            <strong>Memory allocation of an array</strong>
            <p>
              As stated above, all the data elements of an array are stored at contiguous locations in the main memory. The name of the array represents the base address or the address of the first element in the main memory. Each element of the array is represented by proper indexing.
            </p>
            <p>
              <p>We can define the indexing of an array in the below ways -</p>
              <ol>
                <li>0 (zero-based indexing): The first element of the array will be arr[0].</li>
                <li>1 (one-based indexing): The first element of the array will be arr[1].</li>
                <li>n (n - based indexing): The first element of the array can reside at any random index number.</li>
              </ol>
            </p>

            <img src={require("./ds-array2.png")}/> <br></br>
            <strong>Traversal operation</strong>
            <p> This operation is performed to traverse through the array elements. 
                It prints all array elements one after another.
                We can understand it with the below program -</p>
              <div style={{marginLeft:"20%"}}>
              <iframe width="640" height="360" src="https://www.youtube.com/embed/j7yJtvW96Sk" title="1  Arrays Basics || Abdul Bari" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
                <div className='flex d-flex mb-3 mt-3'>
                  <strong>Java Program to illustrate how to declare, instantiate, initialize and traverse the Java array.</strong> 
                  <button className='fa fa-copy btn btn-dark' style={{marginLeft:"25%"}} onClick={copyCode}></button>
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
                    for(int i=0;i&lt;a.length;i++) //length is the property of array <br/> &emsp; &emsp; &emsp;
                  System.out.println(a[i]);  <br/> &emsp; 
                  &#125; <br/>
                  &#125; 
              </div>
            </div>
            <Link to='/LinkedList'><button className='btn btn-dark bt' style={{marginLeft:"80%",marginTop:"2%"}}> Next</button></Link>
          </div>
        </div>
      </div>
    </>
  )
}
