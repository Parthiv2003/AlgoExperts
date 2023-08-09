import React from 'react'
import './Array.css';
import Sidebar from './Sidebar';
import './Sidebar.css';
import {Link} from 'react-router-dom';
import './BST1.png';
import './BST2.png';
import './BST3.png';
import './BST4.png';
import './BST5.png';
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
              <h4><strong>Binary Search Tree</strong></h4>
                <p> A binary search tree follows some order to arrange the elements. In a Binary search tree, the value of left node must be smaller than the parent node, and the value of right node must be greater than the parent node. This rule is applied recursively to the left and right subtrees of the root.
                </p>
                <p>Let's understand the concept of Binary search tree with an example.</p>
                <img src={require('./BST1.png')}></img>
                <p>In the above figure, we can observe that the root node is 40, and all the nodes of the left subtree are smaller than the root node, and all the nodes of the right subtree are greater than the root node.</p>
                <p>Similarly, we can see the left child of root node is greater than its left child and smaller than its right child. So, it also satisfies the property of binary search tree. Therefore, we can say that the tree in the above image is a binary search tree.</p>
                <p>Suppose if we change the value of node 35 to 55 in the above tree, check whether the tree will be binary search tree or not.</p>
                <img src={require('./BST2.png')}></img>
                <p> In the above tree, the value of root node is 40, which is greater than its left child 30 but smaller than right child of 30, i.e., 55. So, the above tree does not satisfy the property of Binary search tree. Therefore, the above tree is not a binary search tree.</p>
                <strong>Advantages of Binary search tree</strong>
                <ul>
                    <li>Searching an element in the Binary search tree is easy as we always have a hint that which subtree has the desired element.</li>
                    <li>As compared to array and linked lists, insertion and deletion operations are faster in BST.</li>
                </ul>

                <div className='video' style={{marginLeft:"20%"}}>
                  <iframe width="640" height="360" src="https://www.youtube.com/embed/sXABdGalFNg?list=PLxCzCOWd7aiEwaANNt3OqJPVIxwp2ebiT" title="Binary Search Tree in Data Structure | Insertion and Traversal in BST" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

                <strong>Example of creating a binary search tree</strong>
                <p>Now, let's see the creation of binary search tree using an example.</p>
                <p>Suppose the data elements are - 45, 15, 79, 90, 10, 55, 12, 20, 50</p>
                <ul>
                    <li>First, we have to insert 45 into the tree as the root of the tree.</li>
                    <li>Then, read the next element; if it is smaller than the root node, insert it as the root of the left subtree, and move to the next element.</li>
                    <li>Otherwise, if the element is larger than the root node, then insert it as the root of the right subtree</li>
                </ul>
                <strong>Searching in Binary search tree</strong>
                <p> Searching means to find or locate a specific element or node in a data structure. In Binary search tree, searching a node is easy because elements in BST are stored in a specific order. The steps of searching a node in Binary Search tree are listed as follows -
                  <ol>
                      <li>First, compare the element to be searched with the root element of the tree.</li>
                      <li>If root is matched with the target element, then return the node's location.</li>
                      <li>If it is not matched, then check whether the item is less than the root element, if it is smaller than the root element, then move to the left subtree.</li>
                      <li>If it is larger than the root element, then move to the right subtree.</li>
                      <li>Repeat the above procedure recursively until the match is found.</li>
                      <li>If the element is not found or not present in the tree, then return NULL.</li>
                  </ol>
                </p>
                <p> Now, let's understand the searching in binary tree using an example. We are taking the binary search tree formed above. Suppose we have to find node 20 from the below tree.
                </p>
                <strong>Step 1:</strong><br></br>
                <img src={require('./BST3.png')}></img><br></br>
                <strong>Step 2:</strong><br></br>
                <img src={require('./BST4.png')}></img><br></br>
                <strong>Step 3:</strong><br></br>
                <img src={require('./BST5.png')}></img><br></br>
                <div className='flex d-flex mb-3 mt-3'>
                  <strong>Binary Search Tree</strong> 
                  <button className='fa fa-copy btn btn-dark' style={{marginLeft:"80%"}} onClick={copyCode}></button>
                </div>
                <div className="expl code" id="code"> 
                  #include &lt;iostream&gt; <br/> 
                  using namespace std; <br/> <br/>
                  struct Node &#123; <br/> &emsp;  
                  int data; <br/> &emsp; 
                  Node *left; <br/> &emsp; 
                  Node *right; <br/>  
                  &#125;;  <br/> <br/>
                  Node* create(int item) <br/>
                  &#123; <br/> &emsp;  
                  Node* node = new Node;  <br/> &emsp; 
                  node-&gt;data = item;  <br/> &emsp; 
                  node-&gt;left = node-&gt;right = NULL;<br/> &emsp;   
                  return node;  <br/>
                  &#125; <br/>  <br/>
                  //Inorder traversal of the tree formed <br/> 
                  void inorder(Node *root) <br/> 
                  &#123; <br/> &emsp;  
                  if (root == NULL)  <br/> &emsp; &emsp;
                  return;  <br/> &emsp; 
                  inorder(root-&gt;left); //traverse left subtree  <br/> &emsp; 
                  cout &lt;&lt; root-&gt;data &lt;&lt; "   "; //traverse root node  <br/> &emsp; 
                  inorder(root-&gt;right); //traverse right subtree  <br/>  
                  &#125; <br/> <br/> 
                  Node* findMinimum(Node* cur) /*To find the inorder successor*/  <br/> 
                  &#123; <br/> &emsp; 
                  while(cur-&gt;left != NULL) &#123; <br/> &emsp; &emsp; 
                  cur = cur-&gt;left;  <br/> &emsp; 
                  &#125; <br/> &emsp;   
                  return cur;  <br/>  
                  &#125; <br/> <br/>
                  Node* insertion(Node* root, int item) /*Insert a node*/ <br/> 
                  &#123;  <br/> &emsp; 
                  if (root == NULL)  <br/> &emsp; &emsp;
                  return create(item); /*return new node if tree is empty*/  <br/> &emsp; 
                  if (item &lt; root-&gt;data)  <br/> &emsp; &emsp;
                  root-&gt;left = insertion(root-&gt;left, item);  <br/> &emsp; 
                  else  <br/> &emsp;  &emsp;
                  root-&gt;right = insertion(root-&gt;right, item);  <br/> &emsp; &emsp;
                  return root;  <br/>
                  &#125;  <br/> <br/>
                  void search(Node* &cur, int item, Node* &parent)  <br/>
                  &#123;  <br/> &emsp; 
                  while (cur != NULL && cur-&gt;data != item)  <br/> &emsp; 
                  &#123;  <br/> &emsp; &emsp;
                  parent = cur;  <br/> &emsp; &emsp;
                  if (item &lt; cur-&gt;data)  <br/> &emsp; &emsp; &emsp;
                  cur = cur-&gt;left;  <br/> &emsp;  &emsp;
                  else  <br/> &emsp; &emsp; &emsp;
                  cur = cur-&gt;right;<br/> &emsp;   
                  &#125;  <br/>
                  &#125;  <br/> <br/>
                  void deletion(Node*& root, int item) /*function to delete a node*/  <br/>
                  &#123;  <br/> &emsp; 
                  Node* parent = NULL;  <br/> &emsp; 
                  Node* cur = root;  <br/> &emsp; 
                  search(cur, item, parent); /*find the node to be deleted*/  <br/> &emsp; 
                  if (cur == NULL)  <br/> &emsp; &emsp;
                  return;  <br/> &emsp; 
                  if (cur-&gt;left == NULL && cur-&gt;right == NULL) /*When node has no children*/  <br/> &emsp; 
                  &#123;  <br/> &emsp; &emsp; 
                  if (cur != root)  <br/>  &emsp; &emsp;
                  &#123;  <br/> &emsp; &emsp; &emsp;
                  if (parent-&gt;left == cur)  <br/>  &emsp;&emsp; &emsp; &emsp;
                  parent-&gt;left = NULL;  <br/> &emsp; &emsp; &emsp;
                  else  <br/> &emsp; &emsp; &emsp; &emsp;
                  parent-&gt;right = NULL;  <br/>  &emsp;&emsp;
                  &#125;  <br/> &emsp; &emsp; 
                  else  <br/> &emsp; &emsp; &emsp;
                  root = NULL;  <br/> &emsp;  &emsp; &emsp;
                  free(cur);  <br/> &emsp; 
                  &#125;  <br/> &emsp; 
                  else if (cur-&gt;left && cur-&gt;right)  <br/> &emsp;
                  &#123;  <br/> &emsp; &emsp; 
                  Node* succ  = findMinimum(cur-&gt;right); <br/> &emsp; &emsp;
                  int val = succ-&gt;data;  <br/> &emsp; &emsp;
                  deletion(root, succ-&gt;data);  <br/> &emsp; &emsp;
                  cur-&gt;data = val;  <br/> &emsp;
                  &#125;  <br/> &emsp;
                  else  <br/> &emsp;
                  &#123;  <br/> &emsp; &emsp;
                  Node* child = (cur-&gt;left)? cur-&gt;left: cur-&gt;right;  <br/> &emsp; &emsp;
                  if (cur != root)  <br/> &emsp; &emsp;
                  &#123;  <br/> &emsp; &emsp; &emsp;
                  if (cur == parent-&gt;left)  <br/> &emsp; &emsp; &emsp; &emsp;
                  parent-&gt;left = child;  <br/> &emsp; &emsp; &emsp;
                  else  <br/> &emsp; &emsp;&emsp; &emsp;
                  parent-&gt;right = child;  <br/> &emsp; &emsp;
                  &#125;  <br/> &emsp; &emsp; 
                  else  <br/> &emsp; &emsp;&emsp;
                  root = child;  <br/> &emsp; &emsp; &emsp;
                  free(cur);  <br/>&emsp; 
                  &#125;  <br/>
                  &#125;  <br/>
                  int main()  <br/>
                  &#123;  <br/> &emsp;
                  Node* root = NULL;  <br/> &emsp;
                  root = insertion(root, 45);  <br/> &emsp;
                  root = insertion(root, 30); <br/> &emsp; 
                  root = insertion(root, 50); <br/> &emsp; 
                  root = insertion(root, 25);  <br/> &emsp;
                  root = insertion(root, 35);  <br/> &emsp;
                  root = insertion(root, 45);  <br/> &emsp;
                  root = insertion(root, 60); <br/> &emsp; 
                  root = insertion(root, 4);  <br/> &emsp;
                  printf("The inorder traversal of the given binary tree is - \n");  <br/> &emsp;
                  inorder(root);  <br/> &emsp;
                  deletion(root, 25); <br/> &emsp; 
                  printf("\nAfter deleting node 25, the inorder traversal of the given binary tree is - \n");  <br/> &emsp;
                  inorder(root);<br/> &emsp;   
                  insertion(root, 2);  <br/> &emsp;
                  printf("\nAfter inserting node 2, the inorder traversal of the given binary tree is - \n");  <br/> &emsp;
                  inorder(root);<br/> &emsp;  
                  return 0; <br/>  
                  &#125; 
                </div>
              </div>
            <Link to='/BinaryTree'><button className='btn btn-dark bt' style={{margin:"2%"}}>Previous</button></Link>
            <Link to='/Heap'><button className='btn btn-dark bt' style={{marginLeft:"80%"}}>Next</button></Link>
          </div>
        </div>
      </div>
    </>
  )
}

    