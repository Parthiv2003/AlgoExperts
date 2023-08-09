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
    for(var i=0;i < copyT.length;i++) {
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

function Alert(){
    alert('Successfully Submitted.....');
}

function Post(){
    alert('Query Posted....');
    var txt = document.getElementById('query');
    txt.innerText = "";
}

export default function Eight1() {
    return (
        <> 
            <div className="d-flex flex-column">
                <div className="d-flex">
                    <div className="card1">
                        <div className="container">
                            <h1> Vasya and Coins </h1>
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
                                            <br />
                                            <h4 className="head"> PROBLEM STATEMENT </h4>
                                            <br/> <br/> <br/> <br/>
                                            <p className="expl"> Vasya decided to go to the grocery store. He found in his wallet a coins of 1 burle and b coins of 2 burles. He does not yet know the total cost of all goods, so help him find out s (s&gt;0): the minimum positive integer amount of money he cannot pay without change or pay at all using only his.<br/> <br/> For example, if a = 1 and b = 1 (he has one 1-burle coin and one 2-burle coin), then: </p>
                                            <ul className="expl">
                                                <li> he can pay 1 burle without change, paying with one 1-burle coin,</li>
                                                <li> he can pay 2 burle without change, paying with one 2-burle coin,</li>
                                                <li> he can pay 3 burle without change by paying with one 1-burle coin and one 2-burle coin,</li>
                                                <li> he cannot pay 4 burle without change (moreover, he cannot pay this amount at all).</li>
                                            </ul>
                                            <br/>
                                            <p className="expl"> So for a = 1 and b = 1 the answer is s = 4.</p>
                                            <br/>
                                            <h4 className="head"> INPUT </h4>
                                            <br/> <br/> <br/> 
                                            <p className="expl"> The first line of the input contains an integer t (1 ≤ t ≤ 10<sup>4</sup>) — the number of test cases in the test.</p>  <br/>
                                            <p className="expl">The description of each test case consists of one line containing two integers ai and bi (0 ≤ a<sub>i</sub>,b<sub>i</sub> ≤ 10<sup>8</sup>) — the number of 1-burle coins and 2-burles coins Vasya has respectively.</p>
                                            <br/>
                                            <h4 className="head"> OUTPUT </h4>  
                                            <br/> <br/> <br/>  
                                            <p className="expl"> For each test case, on a separate line print one integer s (s &gt; 0): the minimum  positive integer amount of money that Vasya cannot pay without change or pay at all.</p> <br/>

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
                                                    <td className="input" style={{borderTop: "1px solid gray"}}> 5 </td>
                                                </tr>
                                                <tr>
                                                    <td className="input"> 1 &emsp; 1 </td>
                                                </tr>
                                                <tr>
                                                    <td className="input"> 4 &emsp; 0 </td>
                                                </tr>
                                                <tr>
                                                    <td className="input"> 0 &emsp; 2 </td>
                                                </tr>
                                                <tr>
                                                    <td className="input"> 0 &emsp; 0 </td>
                                                </tr>
                                                <tr>
                                                    <td className="input" style={{borderBottom: "1px solid gray"}}> 2314 &emsp; 2374 </td>
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
                                                    <td className="output" style={{borderTop: "1px solid gray"}}> 4 </td>
                                                </tr>
                                                <tr>
                                                    <td className="output"> 5 </td>
                                                </tr>
                                                <tr>
                                                    <td className="output"> 1 </td>
                                                </tr>
                                                <tr>
                                                    <td className="output"> 1 </td>
                                                </tr>
                                                <tr>
                                                    <td className="output" style={{borderBottom: "1px solid gray"}}> 7063 </td>
                                                </tr>
                                            </table>
                                            <br/>

                                            <h4 className="head"> EXPLANATION </h4>  
                                            <br/> <br/> <br/>  
                                            <ul className="expl" style={{paddingLeft: "0px"}}>
                                                <li> The first test case of the example is clarified into the main part of the statement. </li>
                                                <li> In the second test case, Vasya has only 1 burle coins, and he can collect either any amount from 1 to 4, but 5 can't. </li>
                                                <li> In the second test case, Vasya has only 2 burle coins, and he cannot pay 1 burle without change. </li>
                                                <li> In the fourth test case you don't have any coins, and he can't even pay 1 burle. </li>
                                            </ul> <br/>

                                            <h4 className="head"> TAGS </h4>  
                                            <br/> <br/> <br/>  
                                            <p className="expl tag"> Greedy </p> 
                                            <p className="expl tag"> Math </p>
                                            <br/>

                                            <h4 className="head"> SOURCE CODE </h4>  
                                            <br/> <br/> <br/>  
                                            <p className="expl" style={{fontSize: "18px"}}> Language: <b>C++</b> </p>
                                            <button type="button" className="toolTip copy" onClick={copyCode} style={{left: "-10%", top: "-30px", width: "30px", height: "30px"}}>
                                                <span className="toolText" id="tip"> Copy </span>
                                                <i className="fa fa-copy"></i>
                                            </button>
                                            <div className="expl code" id="code"> 
                                                #include&lt;iostream&gt; <br/>
                                                using namespace std; <br/> <br/>
                                                int main() <br/>
                                                &#123;   <br/> &emsp;
                                                int t; <br/> &emsp;
                                                cin&gt;&gt;t; <br/> &emsp;
                                                while (t--) <br/> &emsp;
                                                &#123;   <br/> &emsp; &emsp;
                                                int a,b; <br/> &emsp; &emsp;
                                                cin&gt;&gt;a&gt;&gt;b; <br/> <br/> &emsp; &emsp;
                                                if(a != 0) <br/> &emsp; &emsp;
                                                &#123;   <br/> &emsp; &emsp; &emsp;
                                                    cout&lt;&lt;a+(2*b)+1&lt;&lt;endl; <br/> &emsp; &emsp;
                                                &#125;   <br/> &emsp; &emsp;
                                                else <br/> &emsp; &emsp;
                                                &#123;   <br/> &emsp; &emsp; &emsp;
                                                    cout&lt;&lt;"1"&lt;&lt;endl; <br/> &emsp; &emsp;
                                                &#125; <br/> &emsp; 
                                                &#125; <br/> 
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
                                            <textarea name="pcode" id="practice" className="expl code" cols="30" rows="10"> </textarea>
                                            <br/> <br/>
                                            <div className="expl">
                                                <b> OR Select File: </b>
                                                <input type="file" style={{marginTop: "-25px"}}/> <br/>
                                                <button type="submit" style={{border: "2px solid dimgray", borderRadius: "8px", backgroundColor: "aquamarine", color: "blue", padding: "5px"}} onClick={Alert}> SUBMIT </button>
                                            </div> <br/>

                                            <h4 className="head"> QUERY </h4>  
                                            <br/> <br/> <br/>  
                                            <div className="expl" style={{marginBottom: "50px"}}>
                                                <form action="#" method='GET'>
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
                                                                <button type="submit" className="post" onSubmit={Post}> POST </button>
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
                                            <h4 className="head"> TAGS </h4>  
                                            <br/> <br/> <br/>  
                                            <p className="expl tag"> Greedy </p> 
                                            <p className="expl tag"> Math </p>
                                            <br/>
                                        </div>
                                    </div>
                                </div>

                                <div id="prexp" className="tab-pane fade">
                                    <div className="inner-card">
                                        <div className="inner-container">
                                            <h4 className="head"> PROBLEM STATEMENT </h4>
                                            <br/> <br/> <br/> <br/>
                                            <p className="expl">Vasya decided to go to the grocery store. He found in his wallet a coins of 1 burle and b coins of 2 burles. He does not yet know the total cost of all goods, so help him find out s (s&gt;0): the minimum positive integer amount of money he cannot pay without change or pay at all using only his.</p>
                                            <br/>
                                            <p className="expl"> For example, if a = 1 and b = 1 (he has one 1-burle coin and one 2-burle coin), then: </p>
                                            <ul className="expl">
                                                <li> he can pay 1 burle without change, paying with one 1-burle coin,</li>
                                                <li> he can pay 2 burle without change, paying with one 2-burle coin,</li>
                                                <li> he can pay 3 burle without change by paying with one 1-burle coin and one 2-burle coin,</li>
                                                <li> he cannot pay 4 burle without change (moreover, he cannot pay this amount at all).</li>
                                            </ul>
                                            <br/>
                                            <p className="expl"> So for a = 1 and b = 1 the answer is s = 4.</p>
                                            <br/>

                                            <h4 className="head"> INPUT </h4>
                                            <br/> <br/> <br/> 
                                            <p className="expl"> The first line of the input contains an integer t (1 ≤ t ≤ 10<sup>4</sup>) — the number of test cases in the test.</p>  <br/>
                                            <p className="expl">The description of each test case consists of one line containing two integers ai and bi (0 ≤ a<sub>i</sub>,b<sub>i</sub> ≤ 10<sup>8</sup>) — the number of 1-burle coins and 2-burles coins Vasya has respectively.</p>
                                            <br/>

                                            <h4 className="head"> OUTPUT </h4>  
                                            <br/> <br/> <br/>  
                                            <p className="expl"> For each test case, on a separate line print one integer s (s &gt; 0): the minimum  positive integer amount of money that Vasya cannot pay without change or pay at all.</p> <br/>

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
                                                    <td className="input" style={{borderTop: "1px solid gray;"}}> 5 </td>
                                                </tr>
                                                <tr>
                                                    <td className="input"> 1 &emsp; 1 </td>
                                                </tr>
                                                <tr>
                                                    <td className="input"> 4 &emsp; 0 </td>
                                                </tr>
                                                <tr>
                                                    <td className="input"> 0 &emsp; 2 </td>
                                                </tr>
                                                <tr>
                                                    <td className="input"> 0 &emsp; 0 </td>
                                                </tr>
                                                <tr>
                                                    <td className="input" style={{borderBottom: "1px solid gray"}}> 2314 &emsp; 2374 </td>
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
                                                    <td className="output" style={{borderTop: "1px solid gray"}}> 4 </td>
                                                </tr>
                                                <tr>
                                                    <td className="output"> 5 </td>
                                                </tr>
                                                <tr>
                                                    <td className="output"> 1 </td>
                                                </tr>
                                                <tr>
                                                    <td className="output"> 1 </td>
                                                </tr>
                                                <tr>
                                                    <td className="output" style={{borderBottom: "1px solid gray"}}> 7063 </td>
                                                </tr>
                                            </table>
                                            <br/> 

                                            <h4 className="head"> EXPLANATION </h4>  
                                            <br/> <br/> <br/>  
                                            <ul className="expl" style={{paddingLeft: "0px"}}>
                                                <li> The first test case of the example is clarified into the main part of the statement. </li>
                                                <li> In the second test case, Vasya has only 1 burle coins, and he can collect either any amount from 1 to 4, but 5 can't. </li>
                                                <li> In the second test case, Vasya has only 2 burle coins, and he cannot pay 1 burle without change. </li>
                                                <li> In the fourth test case you don't have any coins, and he can't even pay 1 burle. </li>
                                            </ul> <br/>
                                        </div>
                                    </div>
                                </div>

                                <div id="scode" className="tab-pane fade">
                                    <div className="inner-card">
                                        <div className="inner-container">
                                            <h4 className="head"> SOURCE CODE </h4>  
                                            <br/> <br/> <br/>  
                                            <p className="expl" style={{fontSize: "18px"}}> Language: <b>C++</b> </p>
                                            <button type="button" className="toolTip copy" onClick={copyCode} style={{left: "-10%", top: "-30px", width: "30px", height: "30px"}}>
                                                <span className="toolText" id="tip"> Copy </span>
                                                <i className="fa fa-copy"></i>
                                            </button>
                                            <div className="expl code" id="code"> 
                                                #include&lt;iostream&gt; <br/>
                                                using namespace std; <br/> <br/>
                                                int main() <br/>
                                                &#123;   <br/> &emsp;
                                                int t; <br/> &emsp;
                                                cin&gt;&gt;t; <br/> &emsp;
                                                while (t--) <br/> &emsp;
                                                &#123;   <br/> &emsp; &emsp;
                                                int a,b; <br/> &emsp; &emsp;
                                                cin&gt;&gt;a&gt;&gt;b; <br/> <br/> &emsp; &emsp;
                                                if(a != 0) <br/> &emsp; &emsp;
                                                &#123;   <br/> &emsp; &emsp; &emsp;
                                                cout&lt;&lt;a+(2*b)+1&lt;&lt;endl; <br/> &emsp; &emsp;
                                                &#125;   <br/> &emsp; &emsp;
                                                else <br/> &emsp; &emsp;
                                                &#123;   <br/> &emsp; &emsp; &emsp;
                                                cout&lt;&lt;"1"&lt;&lt;endl; <br/> &emsp; &emsp;
                                                &#125; <br/> &emsp; 
                                                &#125;   <br/> 
                                                &#125; <br/>
                                            </div> 
                                            <br/>
                                        </div>
                                    </div>
                                </div>

                                <div id="submit" className="tab-pane fade">
                                    <div className="inner-card">
                                        <div className="inner-container">
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
                                            <textarea name="pcode" id="practice" className="expl code" cols="30" rows="10"> </textarea>
                                            <br/> <br/>
                                            <div className="expl">
                                                <b> OR Select File: </b>
                                                <input type="file" style={{marginTop:"-25px", marginLeft: "125px"}}/>
                                                <button type="submit" style={{border: "2px solid dimgray", borderRadius: "8px", backgroundColor: "aquamarine", color: "blue", padding: "5px"}}
                                                onClick={Alert}> SUBMIT </button>
                                            </div> <br/>
                                        </div>
                                    </div>
                                </div> 

                                <div id="Query" className="tab-pane fade">
                                    <div className="inner-card">
                                        <div className="inner-container">
                                            <h4 className="head"> QUERY </h4>  
                                            <br/> <br/> <br/>  
                                            <div className="expl" style={{marginBottom: "50px"}}>
                                                <form action="#" method='GET'>
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
                                                                <button type="submit" className="post" onSubmit={Post}> POST </button>
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

                                <p id="cf"> You can read on <a href="https://codeforces.com/contest/1660/problem/A" target="_blank" id="cf_link"> Codeforcse</a></p>
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
