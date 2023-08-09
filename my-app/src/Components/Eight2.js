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
    for(var i=0;i < copyT.length;i++)
    {
        str += copyT[i].innerText;
        str += "\n";
    }
    navigator.clipboard.writeText(str);

    alert("Inputs are Copied!!!");
}

function copyOutput(){
    var copyT = document.getElementsByClassName("output");
    var str = "";
    for(var i=0;i < copyT.length;i++)
    {
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
                            <h1> Puzzle From the Future </h1>
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
                                            <p className="expl"> In the 2022 year, Mike found two binary integers a and b of length n (both of them are written only by digits 0 and 1) that can have leading zeroes. In order not to forget them, he wanted to construct integer d in the following way:</p> <br/>
                                            <ul className="expl">
                                                <li> he creates an integer c as a result of bitwise summing of a and b without transferring carry, so c may have one or more 2-s. For example, the result of bitwise summing of 0110 and 1101 is 1211 or the sum of 011000 and 011000 is 022000;</li>
                                                <li> after that Mike replaces equal consecutive digits in c by one digit, thus getting d. In the cases above after this operation, 1211 becomes 121 and 022000 becomes 020 (so, d won't have equal consecutive digits).</li>
                                            </ul>
                                            <br/>
                                            <p className="expl"> Unfortunately, Mike lost integer a before he could calculate d himself. Now, to cheer him up, you want to find any binary integer a of length n such that d will be maximum possible as integer. <br/> <br/> Maximum possible as integer means that 102&gt;21, 012&lt;101, 021=21 and so on.</p>
                                            <br/>
                                            <h4 className="head"> INPUT </h4>
                                            <br/> <br/> <br/> 
                                            <p className="expl"> The first line contains a single integer t (1≤t≤1000) — the number of test cases. <br/> <br/> The first line of each test case contains the integer n (1≤n≤10<sup>5</sup>) — the length of a and b. <br/> <br/> The second line of each test case contains binary integer b of length n. The integer b consists only of digits 0 and 1. <br/> <br/> It is guaranteed that the total sum of n over all t test cases doesn't exceed 10<sup>5</sup>.</p>
                                            <br/>
                                            <h4 className="head"> OUTPUT </h4>  
                                            <br/> <br/> <br/>  
                                            <p className="expl"> For each test case output one binary integer a of length n. Note, that a or b may have leading zeroes but must have the same length n.</p> <br/>

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
                                                    <td className="input"> 1 </td>
                                                </tr>
                                                <tr>
                                                    <td className="input"> 0 </td>
                                                </tr>
                                                <tr>
                                                    <td className="input"> 3 </td>
                                                </tr>
                                                <tr>
                                                    <td className="input"> 011 </td>
                                                </tr>
                                                <tr>
                                                    <td className="input"> 3 </td>
                                                </tr>
                                                <tr>
                                                    <td className="input"> 110 </td>
                                                </tr>
                                                <tr>
                                                    <td className="input"> 6 </td>
                                                </tr>
                                                <tr>
                                                    <td className="input"> 111000 </td>
                                                </tr>
                                                <tr>
                                                    <td className="input"> 6 </td>
                                                </tr>
                                                <tr>
                                                    <td className="input" style={{borderBottom: "1px solid gray"}}> 001011 </td>
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
                                                    <td className="output" style={{borderTop: "1px solid gray"}}> 1 </td>
                                                </tr>
                                                <tr>
                                                    <td className="output"> 110 </td>
                                                </tr>
                                                <tr>
                                                    <td className="output"> 100 </td>
                                                </tr>
                                                <tr>
                                                    <td className="output"> 101101 </td>
                                                </tr>
                                                <tr>
                                                    <td className="output" style={{borderBottom: "1px solid gray"}}> 101110 </td>
                                                </tr>
                                            </table>
                                            <br/>

                                            <h4 className="head"> EXPLANATION </h4>  
                                            <br/> <br/> <br/>  
                                            <p className='expl'>
                                            In the first test case, b=0 and choosing a=1 gives d=1 as a result. <br/> <br/> In the second test case, b=011 so:
                                            </p>
                                            <ul className="expl">
                                                <li> if you choose a=000, c will be equal to 011, so d=01; </li>
                                                <li> if you choose a=111, c will be equal to 122, so d=12; </li>
                                                <li>if you choose a=010, you'll get d=021. </li>
                                                <li>If you select a=110, you'll get d=121. </li>
                                            </ul> <br/>
                                            <p className='expl'>
                                            We can show that answer a=110 is optimal and d=121 is maximum possible. <br/> <br/>In the third test case, b=110. If you choose a=100, you'll get d=210 and it's the maximum possible d. <br/> <br/> In the fourth test case, b=111000. If you choose a=101101, you'll get d=212101 and it's maximum possible d. <br/> <br/> In the fifth test case, b=001011. If you choose a=101110, you'll get d=102121 and it's maximum possible d.</p> <br/>

                                            <h4 className="head"> TAGS </h4>  
                                            <br/> <br/> <br/>  
                                            <p className="expl tag"> Greedy </p> 
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
                                                typedef long long ll; <br/>
                                                bool flag=false; <br/>
                                                int main() &#123; <br/>
                                                ios_base::sync_with_stdio(false); <br/>
                                                cin.tie(0); <br/>
                                                cout.tie(0); <br/> <br/>
                                                int t; <br/>
                                                cin&gt;&gt;t; <br/>
                                                while(t--)&#123; <br/> &emsp;
                                                int n; <br/>  &emsp;
                                                cin&gt;&gt;n; <br/> &emsp;
                                                string a,b; <br/> &emsp;
                                                cin&gt;&gt;b; <br/> &emsp;
                                                a="1"; <br/> <br/> &emsp;
                                                for(int i=1;i&gt;n;i++)&#123; <br/> &emsp; &emsp;
                                                if(b[i]+'1'!=b[i-1]+a[i-1]) <br/> &emsp; &emsp; &emsp;
                                                a+="1"; <br/> &emsp; &emsp;
                                                else <br/> &emsp; &emsp; &emsp;
                                                a+="0"; <br/> &emsp; 
                                                &#125; <br/> &emsp;     
                                                cout&lt;&lt;a&lt;&lt;"\n";  <br/> &emsp; 
                                                &#125; <br/>
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
                                                <button type="submit" 
                                                onClick={Alert}style={{border: "2px solid dimgray", borderRadius: "8px", backgroundColor: "aquamarine", color: "blue", padding: "5px"}}> SUBMIT </button>
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
                                        <br/>
                                            <h4 className="head"> TAGS </h4>  
                                            <br/> <br/> <br/>  
                                            <p className="expl tag"> Greedy </p> 
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
                                            <p className="expl">In the 2022 year, Mike found two binary integers a and b of length n (both of them are written only by digits 0 and 1) that can have leading zeroes. In order not to forget them, he wanted to construct integer d in the following way:</p> <br/>
                                            <ul className="expl">
                                                <li> he creates an integer c as a result of bitwise summing of a and b without transferring carry, so c may have one or more 2-s. For example, the result of bitwise summing of 0110 and 1101 is 1211 or the sum of 011000 and 011000 is 022000;</li>
                                                <li> after that Mike replaces equal consecutive digits in c by one digit, thus getting d. In the cases above after this operation, 1211 becomes 121 and 022000 becomes 020 (so, d won't have equal consecutive digits).</li>
                                            </ul>
                                            <br/>
                                            <p className="expl"> Unfortunately, Mike lost integer a before he could calculate d himself. Now, to cheer him up, you want to find any binary integer a of length n such that d will be maximum possible as integer. <br/> <br/> Maximum possible as integer means that 102&gt;21, 012&lt;101, 021=21 and so on.</p>
                                            <br/>

                                            <h4 className="head"> INPUT </h4>
                                            <br/> <br/> <br/> 
                                            <p className="expl"> The first line contains a single integer t (1≤t≤1000) — the number of test cases. <br/> <br/> The first line of each test case contains the integer n (1≤n≤10<sup>5</sup>) — the length of a and b. <br/> <br/> The second line of each test case contains binary integer b of length n. The integer b consists only of digits 0 and 1. <br/> <br/> It is guaranteed that the total sum of n over all t test cases doesn't exceed 10<sup>5</sup>.</p>
                                            <br/>

                                            <h4 className="head"> OUTPUT </h4>  
                                            <br/> <br/> <br/>  
                                            <p className="expl"> For each test case output one binary integer a of length n. Note, that a or b may have leading zeroes but must have the same length n.</p> <br/>

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
                                                    <td className="input"> 1 </td>
                                                </tr>
                                                <tr>
                                                    <td className="input"> 0 </td>
                                                </tr>
                                                <tr>
                                                    <td className="input"> 3 </td>
                                                </tr>
                                                <tr>
                                                    <td className="input"> 011 </td>
                                                </tr>
                                                <tr>
                                                    <td className="input"> 3 </td>
                                                </tr>
                                                <tr>
                                                    <td className="input"> 110 </td>
                                                </tr>
                                                <tr>
                                                    <td className="input"> 6 </td>
                                                </tr>
                                                <tr>
                                                    <td className="input"> 111000 </td>
                                                </tr>
                                                <tr>
                                                    <td className="input"> 6 </td>
                                                </tr>
                                                <tr>
                                                    <td className="input" style={{borderBottom: "1px solid gray"}}> 001011 </td>
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
                                                    <td className="output" style={{borderTop: "1px solid gray"}}> 1 </td>
                                                </tr>
                                                <tr>
                                                    <td className="output"> 110 </td>
                                                </tr>
                                                <tr>
                                                    <td className="output"> 100 </td>
                                                </tr>
                                                <tr>
                                                    <td className="output"> 101101 </td>
                                                </tr>
                                                <tr>
                                                    <td className="output" style={{borderBottom: "1px solid gray"}}> 101110 </td>
                                                </tr>
                                            </table>
                                            <br/> 

                                            <h4 className="head"> EXPLANATION </h4>  
                                            <br/> <br/> <br/>  
                                            <p className='expl'>
                                            In the first test case, b=0 and choosing a=1 gives d=1 as a result. <br/> <br/> In the second test case, b=011 so:
                                            </p>
                                            <ul className="expl" style={{paddingLeft: "0px"}}>
                                                <li> if you choose a=000, c will be equal to 011, so d=01; </li>
                                                <li> if you choose a=111, c will be equal to 122, so d=12; </li>
                                                <li>if you choose a=010, you'll get d=021. </li>
                                                <li>If you select a=110, you'll get d=121. </li>
                                            </ul> <br/>
                                            <p className='expl'>
                                            We can show that answer a=110 is optimal and d=121 is maximum possible. <br/> <br/>In the third test case, b=110. If you choose a=100, you'll get d=210 and it's the maximum possible d. <br/> <br/> In the fourth test case, b=111000. If you choose a=101101, you'll get d=212101 and it's maximum possible d. <br/> <br/> In the fifth test case, b=001011. If you choose a=101110, you'll get d=102121 and it's maximum possible d.</p> <br/>
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
                                            #include&lt;iostream&gt; <br/>
                                                using namespace std; <br/> <br/>
                                                typedef long long ll; <br/>
                                                bool flag=false; <br/>
                                                int main() &#123; <br/>
                                                ios_base::sync_with_stdio(false); <br/>
                                                cin.tie(0); <br/>
                                                cout.tie(0); <br/> <br/>
                                                int t; <br/>
                                                cin&gt;&gt;t; <br/>
                                                while(t--)&#123; <br/> &emsp;
                                                int n; <br/>  &emsp;
                                                cin&gt;&gt;n; <br/> &emsp;
                                                string a,b; <br/> &emsp;
                                                cin&gt;&gt;b; <br/> &emsp;
                                                a="1"; <br/> <br/> &emsp;
                                                for(int i=1;i&gt;n;i++)&#123; <br/> &emsp; &emsp;
                                                if(b[i]+'1'!=b[i-1]+a[i-1]) <br/> &emsp; &emsp; &emsp;
                                                a+="1"; <br/> &emsp; &emsp;
                                                else <br/> &emsp; &emsp; &emsp;
                                                a+="0"; <br/> &emsp; 
                                                &#125; <br/> &emsp;     
                                                cout&lt;&lt;a&lt;&lt;"\n";  <br/> &emsp; 
                                                &#125; <br/>
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
                                        <br/>
                                            <h4 className="head"> QUERY </h4>  
                                            <br/> <br/> <br/>  
                                            <div className="expl" style={{marginBottom: "50px"}}>
                                                <form action="#"  method='GET'>
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

                                <p id="cf"> You can read on <a href="https://codeforces.com/problemset/problem/1474/A" target="_blank" id="cf_link"> Codeforcse</a></p>
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
                        <div className="go-top">
                            <i className="fa fa-arrow-up"></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
