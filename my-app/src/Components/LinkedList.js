import React from 'react'
import './Array.css';
import Sidebar from './Sidebar';
import './Sidebar.css';
import './linked-list.png';
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
                        <div className="border Info mt-3 p-3">
                            <h4> <strong>Linked List </strong>  </h4>
                            <p> Linked List can be defined as collection of objects called nodes that are randomly stored in the memory.
                            A node contains two fields i.e. data stored at that particular address and the pointer which contains the address of the next node in the memory.
                            The last node of the list contains pointer to the null.
                            </p>
                            <img src={require('./linked-list.png')}></img><br></br> <br />
                            <strong>Uses of Linked List:</strong> 
                            <p> The list is not required to be contiguously present in the memory. The node can reside any where in the memory and linked together to make a list. This achieves optimized utilization of space.
                            list size is limited to the memory size and doesn't need to be declared in advance.
                            Empty node can not be present in the linked list.
                            We can store values of primitive types or objects in the singly linked list.
                            </p>
                            <string>Why use linked list over array?</string>
                            <p> Till now, we were using array data structure to organize the group of elements that are to be stored individually in the memory. However, Array has several advantages and disadvantages which must be known in order to decide the data structure which will be used throughout the program.
                            </p>
                            <p>Array contains following limitations:</p>
                            <ol>
                                <li>The size of array must be known in advance before using it in the program.</li>
                                <li>Increasing size of the array is a time taking process. It is almost impossible to expand the size of the array at run time.</li>
                                <li>All the elements in the array need to be contiguously stored in the memory. Inserting any element in the array needs shifting of all its predecessors.</li>
                            </ol>
                            <p>Linked list is the data structure which can overcome all the limitations of an array. Using linked list is useful because,</p>
                            <ol>
                                <li>It allocates the memory dynamically. All the nodes of linked list are non-contiguously stored in the memory and linked together with the help of pointers.</li>
                                <li>Sizing is no longer a problem since we do not need to define its size at the time of declaration. List grows as per the program's demand and limited to the available memory space.</li>
                            </ol>
                            <strong>Types of Linked List:</strong>
                            <p>There are various types of Linked List as follows -
                                <ul>    
                                    <li> Singly Linked List:
                                        <p> In this type of linked list, every node stores address or reference of the next node in the list and the last node has the next address or reference as NULL.
                                        </p>
                                    </li>
                                    <li> Doubly Linked List:
                                        <p> In this type of Linked list, there are two references associated with each node, One of the reference points to the next node and one to the previous node. The advantage of this data structure is that we can traverse in both directions and for deletion, we do not need to have explicit access to the previous node.
                                        </p>
                                    </li>
                                    <li> Circular Linked List:
                                        <p> Circular linked list is a linked list where all nodes are connected to form a circle. There is no NULL at the end. A circular linked list can be a singly circular linked list or a doubly circular linked list. The advantage of this data structure is that any node can be made as starting node. This is useful in the implementation of the circular queues in the linked list
                                        </p>
                                    </li>
                                    <li> Circular Doubly Linked List:
                                        <p> The circular doubly linked list is a combination of the doubly linked list and the circular linked list. It means that this linked list is bidirectional and contains two pointers and the last pointer points to the first pointer.
                                        </p>
                                    </li>
                                </ul>
                            </p>
                            <strong>Representation of a Linked List</strong>
                            <p>A linked list is represented by a pointer to the first node of the linked list. The first node is called the head of the linked list. If the linked list is empty, then the value of the head points to NULL.
                            Each node in a list consists of at least two parts:
                                <ul>
                                    <li> A Data Item (we can store integer, strings, or any type of data). </li>
                                    <li> Pointer (Or Reference) to the next node (connects one node to another) or An address of another node </li>
                                </ul>
                            </p>
                            <strong>Traversal operation</strong>
                            <p>This operation is performed to traverse through the array elements. 
                            It prints all array elements one after another.
                            We can understand it with the below program - </p>
                            <div style={{marginLeft:"20%"}}>
                                <iframe width="640" height="360" src="https://www.youtube.com/embed/2B9XutZ6GX8" title="2  About Linked List" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            
                            <div className='flex d-flex mb-3 mt-3'>
                                <strong>Java Program to illustrate how to declare, instantiate, initialize and traverse the Java array.</strong> 
                                <button className='fa fa-copy btn btn-dark' style={{marginLeft:"25%"}} onClick={copyCode}></button>
                            </div>
                            <div className="expl code" id="code"> 
                                #include&lt;stdio.h&gt;  <br/> 
                                #include&lt;stdlib.h&gt;  <br/> <br/> 
                                struct node   <br/> 
                                &#123; <br/> &emsp;
                                int data; <br/> &emsp;
                                struct node *next; <br/> 
                                &#125;; <br/>  
                                struct node *head;  <br/> <br/> 
                                void beginsert (); <br/>
                                void lastinsert ();  <br/>
                                void randominsert(); <br/>
                                void begin_delete();  <br/>
                                void last_delete();  <br/>  
                                void random_delete(); <br/> 
                                void display(); <br/>
                                void search(); <br/> <br/>
                                void main ()  <br/> 
                                &#123; <br/> &emsp;
                                int choice =0; <br/> &emsp;
                                while(choice != 9) <br/> &emsp;
                                &#123; <br/> &emsp; &emsp; 
                                printf("\n\n*********Main Menu*********\n"); <br/> &emsp; &emsp; 
                                printf("\nChoose one option from the following list ...\n"); <br/> &emsp; &emsp;   
                                printf("\n===============================================\n"); <br/> &emsp; &emsp;   
                                printf("\n1.Insert in begining\n2.Insert at last\n3.Insert at any random location\n4.Delete from Beginning\n5.Delete from last\n<br/> &emsp; &emsp; 6.Delete node after specified location\n7.Search for an element\n8.Show\n9.Exit\n"); <br/> &emsp; &emsp;   
                                printf("\nEnter your choice?\n"); <br/> &emsp; &emsp;         
                                scanf("\n%d",&choice); <br/> &emsp; &emsp;   
                                switch(choice) <br/> &emsp; &emsp; 
                                &#123;  <br/> &emsp; &emsp; &emsp;  
                                case 1: <br/> &emsp; &emsp; &emsp; &emsp; 
                                beginsert(); <br/> &emsp; &emsp; &emsp; &emsp;      
                                break;  <br/> &emsp; &emsp; &emsp;
                                case 2:  <br/> &emsp; &emsp; &emsp; &emsp; 
                                lastinsert();  <br/> &emsp; &emsp; &emsp; &emsp; 
                                break;  <br/> &emsp; &emsp; &emsp;
                                case 3:  <br/> &emsp; &emsp; &emsp; &emsp; 
                                randominsert();  <br/> &emsp; &emsp; &emsp; &emsp; 
                                break;  <br/> &emsp; &emsp; &emsp; 
                                case 4:  <br/> &emsp; &emsp; &emsp; &emsp; 
                                begin_delete(); <br/> &emsp; &emsp; &emsp; &emsp; 
                                break;  <br/> &emsp; &emsp; &emsp;
                                case 5:  <br/> &emsp; &emsp; &emsp; &emsp; 
                                last_delete();  <br/> &emsp; &emsp; &emsp; &emsp; 
                                break;  <br/> &emsp; &emsp; &emsp;
                                case 6: <br/> &emsp; &emsp; &emsp; &emsp; 
                                random_delete(); <br/> &emsp; &emsp; &emsp; &emsp; 
                                break;  <br/> &emsp; &emsp; &emsp;
                                case 7: <br/> &emsp; &emsp; &emsp; &emsp; 
                                search(); <br/> &emsp; &emsp; &emsp; &emsp;     
                                break;  <br/> &emsp; &emsp; &emsp;
                                case 8:  <br/> &emsp; &emsp; &emsp; &emsp; 
                                display();  <br/> &emsp; &emsp; &emsp; &emsp;   
                                break;  <br/> &emsp; &emsp; &emsp;
                                case 9:  <br/> &emsp; &emsp; &emsp; &emsp; 
                                exit(0); <br/> &emsp; &emsp; &emsp; &emsp; 
                                break;  <br/> &emsp; &emsp; &emsp;
                                default: <br/> &emsp; &emsp; &emsp;  
                                printf("Please enter valid choice.."); <br/>  &emsp; &emsp;
                                &#125; <br/> &emsp;
                                &#125;  <br/>
                                &#125;  <br/> <br/>
                                void beginsert()  
                                &#123; <br/> &emsp; 
                                struct node *ptr; <br/> &emsp;
                                int item; <br/> &emsp;
                                ptr = (struct node *) malloc(sizeof(struct node *)); <br/> &emsp;  
                                if(ptr == NULL) <br/> &emsp;
                                &#123; <br/> &emsp; &emsp;
                                printf("\nOVERFLOW"); <br/> &emsp;
                                &#125; <br/> &emsp;
                                else <br/> &emsp;
                                &#123; <br/> &emsp; &emsp;
                                printf("\nEnter value\n"); <br/> &emsp; &emsp;
                                scanf("%d",&item); <br/> &emsp; &emsp;
                                ptr-&gt;data = item; <br/> &emsp; &emsp;
                                ptr-&gt;next = head; <br/> &emsp; &emsp;
                                head = ptr; <br/> &emsp; &emsp;
                                printf("\nNode inserted"); <br/> &emsp;
                                &#125; <br/> 
                                &#125; <br/> <br/>
                                void lastinsert() <br/>
                                &#123; <br/> &emsp;
                                struct node *ptr,*temp; <br/> &emsp;  
                                int item; <br/> &emsp;
                                ptr = (struct node*)malloc(sizeof(struct node)); <br/> &emsp;      
                                if(ptr == NULL) <br/> &emsp;
                                &#123; <br/> &emsp; &emsp;
                                printf("\nOVERFLOW");<br/> &emsp;   
                                &#125; <br/> &emsp;  
                                else  <br/> &emsp; 
                                &#123;  <br/> &emsp; &emsp;  
                                printf("\nEnter value?\n"); <br/> &emsp; &emsp;  
                                scanf("%d",&item);  <br/> &emsp; &emsp; 
                                ptr-&gt;data = item;  <br/> &emsp; &emsp; 
                                if(head == NULL)  <br/> &emsp; &emsp; 
                                &#123; <br/> &emsp; &emsp; &emsp;
                                ptr -&gt; next = NULL; <br/> &emsp; &emsp; &emsp;
                                head = ptr; <br/> &emsp; &emsp; &emsp; 
                                printf("\nNode inserted"); <br/> &emsp; &emsp;  
                                &#125; <br/> &emsp; &emsp;
                                else <br/> &emsp; &emsp;  
                                &#123; <br/> &emsp; &emsp; &emsp;
                                temp = head; <br/> &emsp; &emsp; &emsp;  
                                while (temp -&gt; next != NULL)   <br/> &emsp; &emsp; &emsp;
                                &#123;  <br/> &emsp; &emsp; &emsp; &emsp;
                                temp = temp -&gt; next;  <br/> &emsp; &emsp; &emsp;
                                &#125; <br/> &emsp; &emsp;  &emsp;
                                temp-&gt;next = ptr; <br/> &emsp; &emsp;  &emsp; 
                                ptr-&gt;next = NULL; <br/> &emsp; &emsp; &emsp;  
                                printf("\nNode in serted"); <br/> &emsp; &emsp;  
                                &#125;  <br/> &emsp;
                                &#125;  <br/> 
                                &#125; <br/> <br/>  
                                void randominsert() <br/> 
                                &#123; <br/> &emsp; 
                                int i,loc,item;  <br/> &emsp;   
                                struct node *ptr, *temp;  <br/> &emsp;  
                                ptr = (struct node *) malloc (sizeof(struct node));  <br/> &emsp; 
                                if(ptr == NULL)  <br/> &emsp;
                                &#123;  <br/> &emsp; &emsp;  
                                printf("\nOVERFLOW");  <br/> &emsp; 
                                &#125; <br/> &emsp; 
                                else <br/> &emsp; 
                                &#123; <br/> &emsp; &emsp; 
                                printf("\nEnter element value"); <br/> &emsp; &emsp;   
                                scanf("%d",&item); <br/> &emsp; &emsp;  
                                ptr-&gt;data = item; <br/> &emsp; &emsp; 
                                printf("\nEnter the location after which you want to insert ");<br/> &emsp; &emsp;  
                                scanf("\n%d",&loc); <br/> &emsp; &emsp;
                                temp=head;  <br/> &emsp; &emsp;
                                for(i=0;i&lt;loc;i++) <br/> &emsp; &emsp; 
                                &#123; <br/> &emsp; &emsp; &emsp;
                                temp = temp-&gt;next; <br/> &emsp; &emsp; &emsp;  
                                if(temp == NULL) <br/> &emsp; &emsp; &emsp;   
                                &#123; <br/> &emsp; &emsp; &emsp; &emsp; &emsp;
                                printf("\ncan't insert\n"); <br/> &emsp; &emsp;  &emsp; &emsp; &emsp;
                                return; <br/> &emsp;  &emsp; &emsp;
                                &#125; <br/> &emsp;  &emsp;
                                &#125; <br/> &emsp; &emsp; 
                                ptr -&gt;next = temp -&gt;next; <br/> &emsp; &emsp;
                                temp -&gt;next = ptr; <br/> &emsp; &emsp;   
                                printf("\nNode inserted"); <br/> &emsp;  
                                &#125; <br/> 
                                &#125; <br/> <br/>
                                void begin_delete() <br/> 
                                &#123;  <br/> &emsp;
                                struct node *ptr; <br/> &emsp;  
                                if(head == NULL)  <br/> &emsp; 
                                &#123;  <br/> &emsp; &emsp; 
                                printf("\nList is empty\n"); <br/> &emsp;
                                &#125;  <br/> &emsp;
                                else  <br/> &emsp; 
                                &#123;  <br/> &emsp; &emsp; 
                                ptr = head; <br/> &emsp; &emsp;  
                                head = ptr-&gt;next; <br/> &emsp; &emsp;  
                                free(ptr); <br/> &emsp; &emsp;  
                                printf("\nNode deleted from the begining ...\n"); <br/> &emsp;   
                                &#125; <br/>   
                                &#125; <br/> <br/>
                                void last_delete() <br/>
                                &#123; <br/> &emsp;
                                struct node *ptr,*ptr1;  <br/> &emsp;
                                if(head == NULL)  <br/> &emsp;
                                &#123;<br/> &emsp; &emsp;  
                                printf("\nlist is empty");<br/> &emsp; 
                                &#125;<br/> &emsp;  
                                else if(head -&gt; next == NULL)<br/> &emsp;  
                                &#123; <br/> &emsp; &emsp;
                                head = NULL; <br/> &emsp; &emsp;
                                free(head);<br/> &emsp; &emsp;  
                                printf("\nOnly node of the list deleted ...\n");<br/> &emsp;  
                                &#125;  <br/> &emsp;
                                else<br/> &emsp;  
                                &#123;<br/> &emsp; &emsp;
                                ptr = head; <br/> &emsp; &emsp; 
                                while(ptr-&gt;next != NULL)<br/> &emsp;  &emsp;
                                &#123;<br/> &emsp; &emsp; &emsp; 
                                ptr1 = ptr;<br/> &emsp; &emsp; &emsp; 
                                ptr = ptr -&gt;next; <br/> &emsp; &emsp; 
                                &#125; <br/> &emsp; &emsp;
                                ptr1-&gt;next = NULL;<br/> &emsp; &emsp;  
                                free(ptr); <br/> &emsp; &emsp;
                                printf("\nDeleted Node from the last ...\n"); <br/> &emsp; 
                                &#125;<br/>    
                                &#125; <br/> <br/>
                                void random_delete() <br/>
                                &#123; <br/> &emsp;
                                struct node *ptr,*ptr1; <br/> &emsp;  
                                int loc,i; <br/> &emsp;  
                                printf("\n Enter the location of the node after which you want to perform deletion \n"); <br/> &emsp;
                                scanf("%d",&loc); <br/> &emsp; 
                                ptr=head; <br/> &emsp;
                                for(i=0;i&lt;loc;i++) <br/> &emsp; 
                                &#123;<br/> &emsp; &emsp; 
                                ptr1 = ptr; <br/> &emsp; &emsp;    
                                ptr = ptr-&gt;next; <br/> &emsp; &emsp;  
                                if(ptr == NULL) <br/> &emsp; &emsp; 
                                &#123; <br/> &emsp; &emsp; &emsp; 
                                printf("\nCan't delete"); <br/> &emsp; &emsp; &emsp; 
                                return; <br/> &emsp; &emsp; 
                                &#125; <br/> &emsp; 
                                &#125; <br/> &emsp; 
                                ptr1 -&gt;next = ptr -&gt;next; <br/> &emsp;
                                free(ptr); <br/> &emsp; 
                                printf("\nDeleted node %d ",loc+1); <br/> 
                                &#125; <br/> <br/>  
                                void search()  <br/>
                                &#123; <br/> &emsp;
                                struct node *ptr;  <br/> &emsp;
                                int item,i=0,flag;<br/> &emsp;  
                                ptr = head; <br/> &emsp;
                                if(ptr == NULL) <br/> &emsp;
                                &#123; <br/> &emsp; &emsp; 
                                printf("\nEmpty List\n"); <br/> &emsp; 
                                &#125; <br/> &emsp; 
                                else <br/> &emsp; 
                                &#123; <br/> &emsp; &emsp; 
                                printf("\nEnter item which you want to search?\n"); <br/> &emsp; &emsp;  
                                scanf("%d",&item); <br/> &emsp; &emsp;
                                while (ptr!=NULL) <br/> &emsp;  &emsp;
                                &#123; <br/> &emsp; &emsp; &emsp;
                                if(ptr-&gt;data == item)  <br/> &emsp; &emsp; &emsp;
                                &#123; <br/> &emsp; &emsp; &emsp; &emsp;
                                printf("item found at location %d ",i+1); <br/> &emsp; &emsp; &emsp; &emsp;
                                flag=0;  <br/> &emsp; &emsp; &emsp;
                                &#125; <br/> &emsp; &emsp; &emsp; 
                                else  <br/> &emsp; &emsp; &emsp; 
                                &#123; <br/> &emsp; &emsp; &emsp; &emsp;  &emsp;
                                flag=1;  <br/> &emsp; &emsp; &emsp; 
                                &#125; <br/> &emsp; &emsp;  &emsp;
                                i++; <br/> &emsp; &emsp; &emsp;
                                ptr = ptr -&gt; next;  <br/> &emsp; &emsp; 
                                &#125; <br/> &emsp; &emsp; 
                                if(flag==1)  <br/> &emsp; &emsp;
                                &#123; <br/> &emsp; &emsp; &emsp;
                                printf("Item not found\n");  <br/> &emsp; &emsp; 
                                &#125; <br/> &emsp;   
                                &#125; <br/>     
                                &#125; <br/> <br/>
                                void display()  <br/>
                                &#123; <br/> &emsp;
                                struct node *ptr;  <br/> &emsp;
                                ptr = head;   <br/> &emsp;
                                if(ptr == NULL)<br/> &emsp;  
                                &#123;  <br/> &emsp; &emsp;
                                printf("Nothing to print");  <br/> &emsp;
                                &#125;<br/> &emsp;  
                                else <br/> &emsp; 
                                &#123; <br/> &emsp; &emsp;
                                printf("\nprinting values . . . . .\n");  <br/> &emsp; &emsp; 
                                while (ptr!=NULL)  <br/> &emsp; &emsp;
                                &#123; <br/> &emsp; &emsp; &emsp;
                                printf("\n%d",ptr-&gt;data); <br/> &emsp; &emsp; &emsp; 
                                ptr = ptr -&gt; next;  <br/> &emsp; &emsp;
                                &#125; <br/> &emsp;
                                &#125; <br/> 
                                &#125; 
                            </div>
                        </div>
                        <Link to='/Array'>
                            <button className='btn btn-dark bt' style={{margin:"2%"}}> Previous</button>
                        </Link>
                        <Link to='/Stack'>
                            <button className='btn btn-dark bt' style={{marginLeft:"80%"}}> Next</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

    