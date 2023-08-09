import React from 'react'
import './Array.css';
import Sidebar from './Sidebar';
import './Sidebar.css';
import {Link} from 'react-router-dom';
import $ from 'jquery';

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
              <h4><strong>Hashing and HashTable</strong> </h4>
              <p> Hashing is one of the searching techniques that uses a constant time. The time complexity in hashing is O(1). Till now, we read the two techniques for searching, i.e., linear search and binary search. The worst time complexity in linear search is O(n), and O(logn) in binary search. In both the searching techniques, the searching depends upon the number of elements but we want the technique that takes a constant time. So, hashing technique came that provides a constant time.
              </p>
              <p> In Hashing technique, the hash table and hash function are used. Using the hash function, we can calculate the address at which the value can be stored.
              </p>     
              <p> In Hashing technique, the hash table and hash function are used. Using the hash function, we can calculate the address at which the value can be stored.
              </p>
              <p> Index = hash(key) </p>
              <img src="https://static.javatpoint.com/ds/images/hash-table.png"></img>
              <p><b>There are three ways of calculating the hash function:</b></p>
              <ul>
                <li>Division method</li>
                <li>Folding method</li>
                <li>Mid square method</li>
              </ul>
                
              <div className='video' style={{marginLeft:"20%"}}>
                <iframe width="640" height="360" src="https://www.youtube.com/embed/W5q0xgxmRd8" title="L-6.1: What is hashing with example | Hashing in data structure" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>

              <p>In the division method, the hash function can be defined as:</p>
              <p><b>h(ki) = ki % m;</b></p>
              <p>where m is the size of the hash table.</p>
              <p>For example, if the key value is 6 and the size of the hash table is 10. When we apply the hash function to key 6 then the index would be:</p>

              <p>h(6) = 6%10 = 6</p>

              <p>The index is 6 at which the value is stored.</p>

              <p> <b>Collision</b> </p>
              <p>When the two different values have the same value, then the problem occurs between the two values, known as a collision.</p>
              <p>In the above example, the value is stored at index 6. If the key value is 26, then the index would be:
              <br></br>h(26) = 26%10 = 6<br></br>
              Therefore, two values are stored at the same index, i.e., 6, and this leads to the collision problem. To resolve these collisions, we have some techniques known as collision techniques.</p>
              <p>The following are the collision techniques:</p>
              <ul>
                <li>Open Hashing: It is also known as closed addressing.</li>
                <li>Closed Hashing: It is also known as open addressing.</li>
              </ul>
              <strong>Open Hashing</strong>
              <p>In Open Hashing, one of the methods used to resolve the collision is known as a chaining method.</p>
              <img src='https://static.javatpoint.com/ds/images/hash-table2.png'></img>
                
              <div className='flex d-flex mb-3 mt-3'>
                <strong>Java Program for Hashing by HashTable Based Method.</strong> 
                <button className='fa fa-copy btn btn-dark' style={{marginLeft:"55%"}} onClick={copyCode}></button>
              </div>
                
              <div className="expl code" id="code"> 
                import java.util.*;  <br/> <br/>
                public class HashTableDemo  <br/>
                &#123; <br/> &emsp;
                /* Driver Code */   <br/> &emsp;
                public static void main(String args[]) <br/> &emsp;
                &#123;   <br/> &emsp; &emsp;
                /* Create a HashTable to store String values corresponding to integer keys */  <br/> &emsp; &emsp; 
                Hashtable&lt;Integer, String&gt; hm = new Hashtable&lt;Integer, String&gt;();   <br/>  &emsp; &emsp;
                /* Input the values */ <br/>  &emsp; &emsp;
                hm.put(3, "You are visiting");   <br/>  &emsp; &emsp;
                hm.put(5, "Hello");   <br/> &emsp; &emsp;
                hm.put(1, "website");   <br/> &emsp; &emsp;
                hm.put(2, "Javatpoint");   <br/> &emsp; &emsp;
                /* Display the Hashtable */   <br/> &emsp; &emsp;
                System.out.println(hm);   <br/> &emsp; 
                &#125;  <br/>
                &#125; 
              </div>
              <div className='flex d-flex mb-3 mt-3'>
                <strong>Java Program for Hashing by HashTable Based Method.</strong> 
                <button className='fa fa-copy btn btn-dark' style={{marginLeft:"55%"}} onClick={copyCode}></button>
              </div>
                
              <div className="expl code" id="code"> 
                import java.util.*; <br/> <br/>
                public class HashMapDemo <br/>
                &#123; <br/> &emsp; 
                /* Function to create HashMap from array */   <br/> &emsp; 
                static void HashMapCreation(int arr[])   <br/> &emsp; 
                &#123;   <br/> &emsp; &emsp;
                /* Creates an empty HashMap */   <br/> &emsp;  &emsp;
                HashMap&lt;Integer, Integer&gt; hashmap = new HashMap&lt;Integer, Integer&gt;();   <br/> &emsp;  &emsp;
                for (int i = 0; i &lt; arr.length; i++)<br/> &emsp; &emsp; 
                &#123; <br/> &emsp;  &emsp; &emsp;
                /* Get if the element is present */   <br/> &emsp;  &emsp; &emsp;
                Integer n = hashmap.get(arr[i]);   <br/> &emsp; &emsp; &emsp; 
                /* If this is first occurrence of element Insert the element */   <br/> &emsp; &emsp; &emsp; 
                if (hashmap.get(arr[i]) == null)<br/> &emsp;  &emsp; &emsp;
                &#123;   <br/> &emsp;  &emsp; &emsp; &emsp;
                hashmap.put(arr[i], 1);   <br/> &emsp;  &emsp; &emsp;
                &#125;   <br/> &emsp;  &emsp; &emsp;
                /* If element is already present in hash map Increment the count of element by 1 */   <br/> &emsp;  &emsp; &emsp;
                else<br/> &emsp;  &emsp; &emsp; 
                &#123;   <br/> &emsp;  &emsp; &emsp; &emsp;
                hashmap.put(arr[i], ++n);   <br/> &emsp; &emsp; &emsp; 
                &#125;   <br/> &emsp;  &emsp;
                &#125;   <br/> &emsp;  &emsp;
                /* Display HashMap */   <br/> &emsp;  &emsp;
                System.out.println(hashmap);  <br/> &emsp;  
                &#125;   <br/> &emsp;
                /* Driver Code */   <br/> &emsp; 
                public static void main(String[] args)   <br/> &emsp; 
                &#123;   <br/> &emsp;  &emsp;
                int arr[] = &#123; 1, 6, 5, 10, 6, 6, 10 &#125;;   <br/>  &emsp; &emsp; 
                HashMapCreation(arr);   <br/>   &emsp;
                &#125;   <br/> 
                &#125; 
              </div>

              <div className='flex d-flex mb-3 mt-3'>
                <strong>Java Program for Hashing by LinkedHashMap-Based Method.</strong> 
                <button className='fa fa-copy btn btn-dark' style={{marginLeft:"48%"}} onClick={copyCode}></button>
                </div>
                
                <div className="expl code" id="code"> 
                  {/* 3. LinkedHashMap-based method(Similar to HashMap, but keeps order of elements) */}
                  import java.util.*;  <br/> <br/>  
                  public class LinkedHashMapDemo  <br/>  
                  &#123; <br/> &emsp; 
                  /* Driver Code */  <br/> &emsp;
                  public static void main(String arg[])   <br/> &emsp;
                  &#123; <br/> &emsp; &emsp;
                  /* Creates a Linked Hashmap */  <br/> &emsp; &emsp; 
                  LinkedHashMap&lt;String, String&gt; lhm = new LinkedHashMap&lt;String, String&gt;();   <br/> &emsp; &emsp; 
                  /* Enter key values to the Hashmap */   <br/> &emsp; &emsp;
                  lhm.put("One", "Robin"); <br/> &emsp; &emsp;
                  lhm.put("Two", "Satyam"); <br/> &emsp; &emsp;
                  lhm.put("Three", "Kanishk"); <br/> &emsp; &emsp;   
                  /* Prints the elements of Hashmap in an order as they are entered */ <br/> &emsp; &emsp;
                  System.out.println(lhm); <br/> &emsp; &emsp;
                  System.out.println("Getting value for key 'one': " + lhm.get("One"));  <br/> &emsp; &emsp;  
                  System.out.println("Size of the Hashmap: " + lhm.size()); <br/> &emsp; &emsp;
                  System.out.println("Is Hashmap empty? " + lhm.isEmpty()); <br/> &emsp; &emsp; 
                  System.out.println("Contains key 'two'? "+  lhm.containsKey("Two")); <br/> &emsp; &emsp;   
                  System.out.println("Contains value 'Kanishk? "+ lhm.containsValue("Kanishk"));  <br/> &emsp; &emsp; 
                  System.out.println("delete element 'one': " +  lhm.remove("One"));  <br/> &emsp; &emsp;
                  System.out.println(lhm); <br/> &emsp;
                  &#125; <br/>
                  &#125; 
                </div>

                <div className='flex d-flex mb-3 mt-3'>
                  <strong>Java Program for Hashing by ConcurrentHashMap-Based Method.</strong> 
                  <button className='fa fa-copy btn btn-dark' style={{marginLeft:"45%"}} onClick={copyCode}></button>
                </div>
                
                <div className="expl code" id="code"> 
                  {/* 4. ConcurretHashMap-based Method (Similar to HashTable, Synchronized, but faster as multiple locks are used) */}
                  import java.util.concurrent.*;  <br/> <br/> 
                  public class DemoforConcurrentHashMap  <br/>
                  &#123;  <br/> &emsp;
                  /* Driver Code */   <br/> &emsp;
                  public static void main(String[] args)   <br/> &emsp;
                  &#123;   <br/> &emsp; &emsp;
                  /* Creates a ConcurrentHashMap */   <br/> &emsp; &emsp;
                  ConcurrentHashMap&lt;Integer, String&gt; ch = new ConcurrentHashMap&lt;Integer, String&gt;();   <br/> &emsp; &emsp;
                  ch.put(201, "How");   <br/> &emsp; &emsp;
                  ch.put(202, "are");   <br/> &emsp; &emsp;
                  ch.put(203, "you");   <br/> &emsp; &emsp;
                  /* Display the elements of ConcurrentHashMap */   <br/> &emsp;&emsp;
                  System.out.println("ConcurentHashMap: " + ch);<br/> &emsp;&emsp;  
                  /* add 'How' at 202 key. As it is already present in ConcurrentHashMap object use putIfAbsent method */  <br/> &emsp;&emsp; 
                  ch.putIfAbsent(202, "How");  <br/> &emsp;&emsp; 
                  /* Display the elements of ConcurrentHashMap */ <br/> &emsp;&emsp;  
                  System.out.println("\nConcurentHashMap: " + ch);  <br/> &emsp;&emsp; 
                  /* replace the value for key 201 from "How" to "Who" */  <br/> &emsp;&emsp; 
                  ch.replace(201, "How", "Who");  <br/> &emsp;&emsp; 
                  /* Display the elements of ConcurrentHashMap */  <br/> &emsp;&emsp; 
                  System.out.println("\nConcurentHashMap: " + ch); <br/> &emsp;&emsp;  
                  /* Try to remove entry for 203 key as it is present */  <br/> &emsp;&emsp; 
                  ch.remove(203, "you");  <br/> &emsp;&emsp; 
                  /* Display the elements of ConcurrentHashMap */  <br/> &emsp;&emsp; 
                  System.out.println("\nConcurentHashMap: " + ch);  <br/> &emsp;
                  &#125;<br/> 
                  &#125; 
                </div>
            </div>
            <Link to='/Heap'>
              <button className='btn btn-dark bt' style={{margin:"2%"}}>Previous</button>
            </Link>
            <Link to='/Graph'>
              <button className='btn btn-dark bt' style={{marginLeft:"80%"}}>Next</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

    