import React from 'react';
import './Eight1.css';
import {Link} from 'react-router-dom';
import $ from 'jquery';

$(function(){
    $(window).on('scroll',function(){        
        if(this.scrollY > 500){
            $('.go-top').addClass("show");
        }
        else{
            $('.go-top').removeClass("show");
        }
    });

    $('.go-top').on('click',function(){
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehavior", "auto");
    });
});


function Alert(){
    alert('Successfully Submitted.....');
}

function Post(){
    alert('Query Posted....');
    var txt = document.getElementById('query');
    txt.innerText = "";
}

function copyInput(){
    var copyT = document.getElementsByClassName("input");
    var str = "";
    for(var i=0;i < copyT.length;i++) {
        str += copyT[i].innerText;
        str += "\n";
    }
    navigator.clipboard.writeText(str);

    alert("Inputs are Copied!!!");
}

function copyOutput(){
    var copyT = document.getElementsByClassName("output");
    var str = "";
    for(var i=0;i < copyT.length;i++)  {
        str += copyT[i].innerText;
        str += "\n";
    }
    navigator.clipboard.writeText(str);

    alert("Outputs are Copied!!!");
}

function copyCode(){
    var copyT = document.getElementById("code");
    var str = copyT.innerText;            
    navigator.clipboard.writeText(str);

    alert("Source Code are Copied!!!");
}

function copyPracticeCode(){
    var copyT = document.getElementById("practice");
    var str = copyT.value;            
    navigator.clipboard.writeText(str);

    alert("Practice Code are Copied!!!");
}

export default function Eight1() {
    return (
        <> 
            <div className="d-flex flex-column">
                <div className="d-flex">
                    <div className="card1">
                        <div className="container">
                            <h1> Delete from the Left </h1>
                            <ul className="nav nav-tabs" role='tablist'>
                                <li className='nav-item'><a data-toggle="tab" className="nav-link" href="#all"> TaskSet </a></li>
                                <li className='nav-item'><a data-toggle="tab" className="nav-link" href="#tag"> Tags </a></li>
                                <li className='nav-item'><a data-toggle="tab" className="nav-link" href="#prexp"> Problem Explanation </a></li>
                                <li className='nav-item'><a data-toggle="tab" className="nav-link" href="#scode"> View Code </a></li>
                                <li className='nav-item'><a data-toggle="tab" className="nav-link" href="#submit"> Submission </a></li>
                                <li className='nav-item'><a data-toggle="tab" className="nav-link" href="#Query"> Query </a></li>
                            </ul>
                            <div className="tab-content">
                                <div id="all" className="tab-pane fade">
                                    <div className="inner-card">
                                        <div className="inner-container">
                                            <br/>
                                            <h4 className="head"> PROBLEM STATEMENT </h4>
                                            <br/> <br/> <br/> <br/>
                                            <p className="expl">You are given two strings s and t. In a single move, you can choose any of two strings and delete the first (that is, the leftmost) character. After a move, the length of the string decreases by 1. You can't choose a string if it is empty. <br/> <br/> For example:</p>
                                            <br/>
                                            <ul className='expl'>
                                                <li>by applying a move to the string "where", the result is the string "here",</li>
                                                <li>by applying a move to the string "a", the result is an empty string "".</li>
                                            </ul> <br/>
                                            <p className='expl'>You are required to make two given strings equal using the fewest number of moves. It is possible that, in the end, both strings will be equal to the empty string, and so, are equal to each other. In this case, the answer is obviously the sum of the lengths of the initial strings. <br/> <br/> Write a program that finds the minimum number of moves to make two given strings s and t equal. </p> <br/>

                                            <h4 className="head"> INPUT </h4>
                                            <br/> <br/> <br/> 
                                            <p className="expl">The first line of the input contains s. In the second line of the input contains t. Both strings consist only of lowercase Latin letters. The number of letters in each string is between 1 and 2⋅10<sup>5</sup>, inclusive.</p>
                                            <br/>

                                            <h4 className="head"> OUTPUT </h4>  
                                            <br/> <br/> <br/>  
                                            <p className="expl">Output the fewest number of moves required. It is possible that, in the end, both strings will be equal to the empty string, and so, are equal to each other. In this case, the answer is obviously the sum of the lengths of the given strings.</p> <br/>

                                            <h4 className="head"> TESTCASE </h4>  
                                            <br/> <br/> <br/>  
                                            <table className="testcase expl">
                                                <tr>
                                                    <th style={{borderTop: "1px solid gray", backgroundColor: "darkgrey"}}>  Input
                                                        <button type="button" className="toolTip copy" onClick={copyInput}>
                                                            <span className="toolText" id="tip"> Copy </span>
                                                            <i className="fa fa-copy"></i>
                                                        </button>
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <td className="input" style={{borderTop: "1px solid gray"}}> test </td>
                                                </tr>
                                                <tr>
                                                    <td className="input" style={{borderBottom: "1px solid gray"}}> west </td>
                                                </tr>
                                            </table>
                                            <br/>
                                            <table className="testcase expl">
                                                <tr>
                                                    <th style={{borderTop: "1px solid gray", borderRadius: "6px", backgroundColor: "darkgrey"}}> Output 
                                                        <button type="button" className="toolTip copy" onClick={copyOutput}>
                                                            <span className="toolText" id="tip"> Copy </span>
                                                            <i className="fa fa-copy"></i>
                                                        </button>
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <td className="output" style={{border: "1px solid gray"}}> 2 </td>
                                                </tr>
                                            </table>
                                            <br/>

                                            <h4 className="head"> EXPLANATION </h4>  
                                            <br/> <br/> <br/>  
                                            <p className='expl'>
                                            In the first example, you should apply the move once to the first string and apply the move once to the second string. As a result, both strings will be equal to "est".
                                            </p>
                                            <br/>

                                            <h4 className="head"> TAGS </h4>  
                                            <br/> <br/> <br/>  
                                            <p className="expl tag"> Brute Force </p> 
                                            <p className="expl tag"> Implementation </p>
                                            <p className="expl tag"> String </p>
                                            <br/>

                                            <h4 className="head"> SOURCE CODE </h4>  
                                            <br/> <br/> <br/>  
                                            <p className="expl" style={{fontSize: "18px"}}> Language: <b>C++</b> </p>
                                            <button type="button" className="toolTip copy" onClick={copyCode} style={{left: "-10%", top: "-30px", width: "30px", height: "30px"}}>
                                                <span className="toolText" id="tip"> Copy </span>
                                                <i className="fa fa-copy"></i>
                                            </button>
                                            <div className="expl code" id="code"> 
                                            #include&lt;bits/stdc++.h&gt; <br/> <br/>
                                            typedef long long int ll;<br/> 
                                            typedef unsigned long long int ull;<br/> <br/> 
                                            #define dbg printf("in\n") <br/>
                                            #define nl printf("\n"); <br/>
                                            #define N 150 <br/>
                                            #define inf 1000000000 <br/>
                                            #define pp pair&lt;int,int&gt; <br/>
                                            #define sf(n) scanf("%d", &n) <br/>
                                            #define sff(n,m) scanf("%d%d",&n,&m) <br/>
                                            #define sfl(n) scanf("%I64d", &n) <br/>
                                            #define sffl(n,m) scanf("%I64d%I64d",&n,&m) <br/>
                                            #define pf(n) printf("%d",n) <br/>
                                            #define pfl(n) printf("%I64d",n) <br/>
                                            #define pfs(s) printf("%s",s) <br/>
                                            #define pb push_back <br/> <br/>
                                            using namespace std; <br/> <br/>
                                            int main() <br/>
                                            &#123; <br/> &emsp;
                                            freopen("in.txt", "r", stdin); <br/> &emsp;
                                            int i,j,k; <br/> &emsp;
                                            int n,m; <br/> &emsp;
                                            string s,t; <br/> &emsp;
                                            cin&gt;&gt;s&gt;&gt;t; <br/> &emsp;
                                            n=min(s.length(),t.length()); <br/> &emsp;
                                            int cnt=0; <br/> &emsp;
                                            j=s.length()-1; <br/> &emsp;
                                            k=t.length()-1; <br/> <br/> &emsp;
                                            while(n--) <br/> &emsp;
                                            &#123; <br/> &emsp; &emsp;
                                            if(s[j]==t[k]) <br/> &emsp; &emsp; &emsp;
                                            cnt++, k--, j--; <br/> &emsp; &emsp;
                                            else  <br/> &emsp; &emsp; &emsp;
                                            break; <br/> &emsp; 
                                            &#125; <br/> <br/> &emsp;
                                            int ans=(s.length()-cnt)+(t.length()-cnt); <br/> &emsp;
                                            cout&lt;&lt;ans; <br/> <br/> &emsp;
                                            return 0; <br/> 
                                            &#125;
                                            </div> 
                                            <br/>

                                            <h4 className="head"> SUBMISSION </h4>  
                                            <br/> <br/> <br/>  
                                            <div className="expl"> 
                                                <label for="language"> Select Language: <span style={{color: "red"}}>*</span> </label>
                                                <select id="language" required>
                                                    <option value="C"> C </option>
                                                    <option value="C++"> C++ </option>
                                                    <option value="Java"> Java </option>
                                                    <option value="Python"> Python </option>
                                                </select>
                                                <button type="button" className="toolTip copy" onClick={copyPracticeCode} style={{width: "30px",height: "30px"}}>
                                                    <span className="toolText" id="tip"> Copy </span>
                                                    <i className="fa fa-copy"></i>
                                                </button>
                                                <button type="button" className="toolTip copy" style={{width: "30px", height: "30px", marginRight: "2%"}}>
                                                    <a href="https://www.programiz.com/cpp-programming/online-compiler/" target="_blank" style={{color: "black"}}> <i className="fa fa-code"></i> </a>
                                                    <span className="toolText" id="tip" style={{width: "800%",left: "-400%"}}> Go to online Compiler </span>
                                                </button>
                                            </div>
                                            <textarea name="pcode" id="practice" className="expl code" cols="30" rows="10">
                                            </textarea>
                                            <br/> <br/>
                                            <div className="expl">
                                                <b> OR Select File: </b>
                                                <input type="file" style={{marginTop: "-25px"}}/> <br/>
                                                <button type="submit" onClick={Alert} style={{border: "2px solid dimgray", borderRadius: "8px", backgroundColor: "aquamarine", color: "blue", padding: "5px"}}> SUBMIT </button>
                                            </div> <br/>

                                            <h4 className="head"> QUERY </h4>  
                                            <br/> <br/> <br/>  
                                            <div className="expl" style={{marginBottom: "50px"}}>
                                                <form action="#" method="GET">
                                                    <table>
                                                        <tr>
                                                            <td>
                                                                <label for="name" > Name:* </label>
                                                            </td>
                                                            <td>
                                                                <input type="text" name="name" id="name" className="query" placeholder="Enter your Name..." required/>
                                                            </td>
                                                            <td>
                                                                <label for="number" style={{marginLeft: "100px"}}>  Mobile No.:* &ensp;</label>
                                                            </td>
                                                            <td>
                                                                <input type="number" name="number" className="query" id="number" placeholder="Enter your Mobile Number..." required/>
                                                            </td>
                                                        </tr>
                                                        <tr> 
                                                            <td>
                                                                <br/>
                                                            </td> 
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <label for="email" > Email ID:* </label>
                                                            </td>
                                                            <td colspan="3">
                                                                <input type="email" name="email" id="email" placeholder="Enter your Email Id..." className="query" style={{width: "75%"}} required/>
                                                            </td>
                                                        </tr>
                                                        <tr> 
                                                            <td>
                                                                <br/>
                                                            </td> 
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <label for="subject"> Subject:* </label> 
                                                            </td>
                                                            <td colspan="3">
                                                                <input type="text" name="subject" id="subject" placeholder="Query on which section..." className="query" style={{width: "75%"}} required/>
                                                            </td>
                                                        </tr>
                                                        <tr> 
                                                            <td>
                                                                <br/>
                                                            </td> 
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <label for="query"> Query:* </label> 
                                                            </td>
                                                            <td colspan="3">
                                                                <textarea name="txa" id="query" cols="50" rows="5" style={{resize: "none", overflow: "hidden"}} required>
                                                                </textarea>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <br/>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{width: "100px;"}}>
                                                                
                                                            </td>
                                                            <td>
                                                                <button type="submit" onSubmit={Post} className="post"> POST </button>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                    <br/>
                                                    <p style={{fontSize: "18px"}}> OR You Can Post Your Query on <a href="mailto: pvdholakiya2003@gmail.com" target="_blank"> <i className="fa fa-envelope" style={{color: "rgb(27, 108, 130)"}}></i> </a></p>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div id="tag" className="tab-pane fade">
                                    <div className="inner-card">
                                        <div className="inner-container">
                                            <br/>
                                            <h4 className="head"> TAGS </h4>  
                                            <br/> <br/> <br/>  
                                            <p className="expl tag"> Brute Force </p> 
                                            <p className="expl tag"> Implementation </p>
                                            <p className="expl tag"> String </p>
                                            <br/>  
                                            <br/>
                                        </div>
                                    </div>
                                </div>

                                <div id="prexp" className="tab-pane fade">
                                    <div className="inner-card">
                                        <div className="inner-container">
                                        <br/>
                                            <h4 className="head"> PROBLEM STATEMENT </h4>
                                            <br/> <br/> <br/> <br/>
                                            <p className="expl">You are given two strings s and t. In a single move, you can choose any of two strings and delete the first (that is, the leftmost) character. After a move, the length of the string decreases by 1. You can't choose a string if it is empty. <br/> <br/> For example:</p>
                                            <br/>
                                            <ul className='expl'>
                                                <li>by applying a move to the string "where", the result is the string "here",</li>
                                                <li>by applying a move to the string "a", the result is an empty string "".</li>
                                            </ul> <br/>
                                            <p className='expl'>You are required to make two given strings equal using the fewest number of moves. It is possible that, in the end, both strings will be equal to the empty string, and so, are equal to each other. In this case, the answer is obviously the sum of the lengths of the initial strings. <br/> <br/> Write a program that finds the minimum number of moves to make two given strings s and t equal. </p>
                                            <br/>

                                            <h4 className="head"> INPUT </h4>
                                            <br/> <br/> <br/> 
                                            <p className="expl">The first line of the input contains s. In the second line of the input contains t. Both strings consist only of lowercase Latin letters. The number of letters in each string is between 1 and 2⋅10<sup>5</sup>, inclusive.</p>
                                            <br/>

                                            <h4 className="head"> OUTPUT </h4>  
                                            <br/> <br/> <br/>  
                                            <p className="expl">Output the fewest number of moves required. It is possible that, in the end, both strings will be equal to the empty string, and so, are equal to each other. In this case, the answer is obviously the sum of the lengths of the given strings.</p> <br/>

                                            <h4 className="head"> TESTCASE </h4>  
                                            <br/> <br/> <br/>  
                                            <table className="testcase expl">
                                                <tr>
                                                    <th style={{borderTop: "1px solid gray", backgroundColor: "darkgrey"}}>  Input
                                                        <button type="button" className="toolTip copy" onClick={copyInput}>
                                                            <span className="toolText" id="tip"> Copy </span>
                                                            <i className="fa fa-copy"></i>
                                                        </button>
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <td className="input" style={{borderTop: "1px solid gray"}}> test </td>
                                                </tr>
                                                <tr>
                                                    <td className="input" style={{borderBottom: "1px solid gray"}}> west </td>
                                                </tr>
                                            </table>
                                            <br/>
                                            <table className="testcase expl">
                                                <tr>
                                                    <th style={{borderTop: "1px solid gray", borderRadius: "6px", backgroundColor: "darkgrey"}}> Output 
                                                        <button type="button" className="toolTip copy" onClick={copyOutput}>
                                                            <span className="toolText" id="tip"> Copy </span>
                                                            <i className="fa fa-copy"></i>
                                                        </button>
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <td className="output" style={{border: "1px solid gray"}}> 2 </td>
                                                </tr>
                                            </table>
                                            <br/> 

                                            <h4 className="head"> EXPLANATION </h4>  
                                            <br/> <br/> <br/>  
                                            <p className='expl'>In the first example, you should apply the move once to the first string and apply the move once to the second string. As a result, both strings will be equal to "est".</p> <br/>
                                        </div>
                                    </div>
                                </div>

                                <div id="scode" className="tab-pane fade">
                                    <div className="inner-card">
                                        <div className="inner-container">
                                            <br/>
                                            <h4 className="head"> SOURCE CODE </h4>  
                                            <br/> <br/> <br/>  
                                            <p className="expl" style={{fontSize: "18px"}}> Language: <b>C++</b> </p>
                                            <button type="button" className="toolTip copy" onClick={copyCode} style={{left: "-10%", top: "-30px", width: "30px", height: "30px"}}>
                                                <span className="toolText" id="tip"> Copy </span>
                                                <i className="fa fa-copy"></i>
                                            </button>
                                            <div className="expl code" id="code"> 
                                            #include&lt;bits/stdc++.h&gt; <br/> <br/>
                                            typedef long long int ll;<br/> 
                                            typedef unsigned long long int ull;<br/> <br/> 
                                            #define dbg printf("in\n") <br/>
                                            #define nl printf("\n"); <br/>
                                            #define N 150 <br/>
                                            #define inf 1000000000 <br/>
                                            #define pp pair&lt;int,int&gt; <br/>
                                            #define sf(n) scanf("%d", &n) <br/>
                                            #define sff(n,m) scanf("%d%d",&n,&m) <br/>
                                            #define sfl(n) scanf("%I64d", &n) <br/>
                                            #define sffl(n,m) scanf("%I64d%I64d",&n,&m) <br/>
                                            #define pf(n) printf("%d",n) <br/>
                                            #define pfl(n) printf("%I64d",n) <br/>
                                            #define pfs(s) printf("%s",s) <br/>
                                            #define pb push_back <br/> <br/>
                                            using namespace std; <br/> <br/>
                                            int main() <br/>
                                            &#123; <br/> &emsp;
                                            freopen("in.txt", "r", stdin); <br/> &emsp;
                                            int i,j,k; <br/> &emsp;
                                            int n,m; <br/> &emsp;
                                            string s,t; <br/> &emsp;
                                            cin&gt;&gt;s&gt;&gt;t; <br/> &emsp;
                                            n=min(s.length(),t.length()); <br/> &emsp;
                                            int cnt=0; <br/> &emsp;
                                            j=s.length()-1; <br/> &emsp;
                                            k=t.length()-1; <br/> <br/> &emsp;
                                            while(n--) <br/> &emsp;
                                            &#123; <br/> &emsp; &emsp;
                                            if(s[j]==t[k]) <br/> &emsp; &emsp; &emsp;
                                            cnt++, k--, j--; <br/> &emsp; &emsp;
                                            else  <br/> &emsp; &emsp; &emsp;
                                            break; <br/> &emsp; 
                                            &#125; <br/> <br/> &emsp;
                                            int ans=(s.length()-cnt)+(t.length()-cnt); <br/> &emsp;
                                            cout&lt;&lt;ans; <br/> <br/> &emsp;
                                            return 0; <br/> 
                                            &#125; 
                                            </div> 
                                            <br/>
                                        </div>
                                    </div>
                                </div>

                                <div id="submit" className="tab-pane fade">
                                    <div className="inner-card">
                                        <div className="inner-container">
                                        <br/>
                                            <h4 className="head"> SUBMISSION </h4>  
                                            <br/> <br/> <br/>  
                                            <div className="expl"> 
                                                <label for="language"> Select Language: <span style={{color: "red"}}>*</span> </label>
                                                <select id="language" required>
                                                    <option value="C"> C </option>
                                                    <option value="C++"> C++ </option>
                                                    <option value="Java"> Java </option>
                                                    <option value="Python"> Python </option>
                                                </select>
                                                <button type="button" className="toolTip copy" onClick={copyPracticeCode} style={{width: "30px", height: "30px"}}>
                                                    <span className="toolText" id="tip"> Copy </span>
                                                    <i className="fa fa-copy"></i>
                                                </button>
                                                <button type="button" className="toolTip copy" style={{width: "30px", height: "30px",marginRight: "2%"}}>
                                                    <a href="https://www.programiz.com/cpp-programming/online-compiler/" target="_blank" style={{color: "black"}}> <i className="fa fa-code"></i> </a>
                                                    <span className="toolText" id="tip" style={{width: "800%", left: "-400%"}}> Go to online Compiler </span>
                                                </button>
                                            </div>
                                            <textarea name="pcode" id="practice" className="expl code" cols="30" rows="10">
                                            </textarea>
                                            <br/> <br/>
                                            <div className="expl">
                                                <b> OR Select File: </b>
                                                <input type="file" style={{marginTop:"-25px"}}/>
                                                <br/>
                                                <button type="submit" onClick={Alert} style={{border: "2px solid dimgray", borderRadius: "8px", backgroundColor: "aquamarine", color: "blue", padding: "5px"}}> SUBMIT </button>
                                            </div> <br/>
                                        </div>
                                    </div>
                                </div> 

                                <div id="Query" className="tab-pane fade">
                                    <div className="inner-card">
                                        <div className="inner-container">
                                            <br/>
                                            <h4 className="head"> QUERY </h4>  
                                            <br/> <br/> <br/>  
                                            <div className="expl" style={{marginBottom: "50px"}}>
                                                <form action="#" method="GET">
                                                    <table>
                                                        <tr>
                                                            <td>
                                                                <label for="name" > Name:* </label>
                                                            </td>
                                                            <td>
                                                                <input type="text" name="name" id="name" className="query" placeholder="Enter your Name..." required/>
                                                            </td>
                                                            <td>
                                                                <label for="number" style={{marginLeft: "100px"}}>  Mobile No.:* &ensp;</label>
                                                            </td>
                                                            <td>
                                                                <input type="number" name="number" className="query" id="number" placeholder="Enter your Mobile Number..." required/>
                                                            </td>
                                                        </tr>
                                                        <tr> 
                                                            <td>
                                                                <br/>
                                                            </td> 
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <label for="email" > Email ID:* </label>
                                                            </td>
                                                            <td colspan="3">
                                                                <input type="email" name="email" id="email" placeholder="Enter your Email Id..." className="query" style={{width: "75%"}} required/>
                                                            </td>
                                                        </tr>
                                                        <tr> 
                                                            <td>
                                                                <br/>
                                                            </td> 
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <label for="subject"> Subject:* </label> 
                                                            </td>
                                                            <td colspan="3">
                                                                <input type="text" name="subject" id="subject" placeholder="Query on which section..." className="query" style={{width: "75%"}} required/>
                                                            </td>
                                                        </tr>
                                                        <tr> 
                                                            <td>
                                                                <br/>
                                                            </td> 
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <label for="query"> Query:* </label> 
                                                            </td>
                                                            <td colspan="3">
                                                                <textarea name="txa" id="query" cols="50" rows="5" style={{resize: "none", overflow: "hidden"}} required>
                                                                </textarea>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <br/>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{width: "100px"}}>
                                                                
                                                            </td>
                                                            <td>
                                                                <button type="submit" onSubmit={Post} className="post"> POST </button>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                    <br/>
                                                    <p style={{fontSize: "18px"}}> OR You Can Post Your Query on <a href="mailto: pvdholakiya2003@gmail.com" target="_blank"> <i className="fa fa-envelope" style={{color: "rgb(27, 108, 130)"}}></i> </a></p>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <p id="cf"> You can read on <a href="https://codeforces.com/contest/1005/problem/B" target="_blank" id="cf_link"> Codeforcse</a></p>
                                <p id="cf"> <i> #Happy Coading </i></p>
                                <Link to='/QList'>
                                    <a href="#" className="expl toolTip" style={{width: "30px", height: "30px", left: "-43%"}}>
                                        <i className="fa fa-arrow-circle-left" id="back"></i>
                                        <span className="toolText" id="tip" style={{top: "80%", left: "-80%", width: "200%", height: "180%", padding: "5px"}}> Back </span>
                                    </a>
                                </Link>
                                <div style={{height: "30px"}}>
                                </div>
                            </div> 
                        </div>
                        <div class="go-top">
                            <i class="fa fa-arrow-up"></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}