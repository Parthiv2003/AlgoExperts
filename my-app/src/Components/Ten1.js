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
                            <h1> Traffic Light </h1>
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
                                            <p className="expl"> You find yourself on an unusual crossroad with a weird traffic light. That traffic light has three possible colors: red (r), yellow (y), green (g). It is known that the traffic light repeats its colors every n seconds and at the i-th second the color s<sub>i</sub> is on. <br/> That way, the order of the colors is described by a string. For example, if s="rggry", then the traffic light works as the following: red-green-green-red-yellow-red-green-green-red-yellow- ... and so on. <br/> More formally, you are given a string s<sub>1</sub>,s<sub>2</sub>,…,s<sub>n</sub> of length n. At the first second the color s<sub>1</sub> is on, at the second — s<sub>2</sub>, ..., at the n-th second the color s<sub>n</sub> is on, at the n+1-st second the color s<sub>1</sub> is on and so on. <br/> You need to cross the road and that can only be done when the green color is on. <br/> You know which color is on the traffic light at the moment, but you don't know the current moment of time. You need to find the minimum amount of time in which you are guaranteed to cross the road. <br/>You can assume that you cross the road immediately. <br/>For example, with s="rggry" and the current color r there are two options: either the green color will be on after 1 second, or after 3. That way, the answer is equal to 3 — that is the number of seconds that we are guaranteed to cross the road, if the current color is r. </p>
                                            
                                            <br/>
                                            <h4 className="head"> INPUT </h4>
                                            <br/> <br/> <br/> 
                                            <p className="expl">The first line contains a single integer t (1≤t≤10<sup>4</sup>) — the number of test cases. <br/> Then the description of the test cases follows. <br/> The first line of each test case contains an integer n and a symbol c (1≤n≤2⋅10<sup>5</sup>, c is one of allowed traffic light colors r, y or g)— the length of the string s and the current color of the traffic light. <br/> The second line of each test case contains a string s of the length n, consisting of the letters r, y and g. <br/>It is guaranteed that the symbol g is in the string s and the symbol c is in the string s. <br/>It is guaranteed, that the sum of n over all test cases does not exceed 2⋅10<sup>5</sup>.</p>  
                                            <br/>
                                            <h4 className="head"> OUTPUT </h4>  
                                            <br/> <br/> <br/>  
                                            <p className="expl"> For each test case output the minimal number of second in which you are guaranteed to cross the road.</p> <br/>

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
                                                    <td className="input" style={{borderTop: "1px solid gray"}}> 6 </td>
                                                </tr>
                                                <tr>
                                                    <td className="input"> 5 &emsp; r </td>
                                                </tr>
                                                <tr>
                                                    <td className='input'> rggry </td>
                                                </tr>
                                                <tr>
                                                    <td className="input"> 1 &emsp; g </td>
                                                </tr>
                                                <tr>
                                                    <td className='input'> g </td>
                                                </tr>
                                                <tr>
                                                    <td className="input"> 3 &emsp; r </td>
                                                </tr>
                                                <tr>
                                                    <td className='input'> rrg </td>
                                                </tr>
                                                <tr>
                                                    <td className="input"> 5 &emsp; y </td>
                                                </tr>
                                                <tr>
                                                    <td className='input'> yrrgy </td>
                                                </tr>
                                                <tr>
                                                    <td className="input"> 7 &emsp; r </td>
                                                </tr>
                                                <tr>
                                                    <td className='input'> rgrgyrg </td>
                                                </tr>
                                                <tr>
                                                    <td className="input"> 9 &emsp; y </td>
                                                </tr>
                                                <tr>
                                                    <td className='input'  style={{borderBottom: "1px solid gray"}}> rrrgyyygy </td>
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
                                                    <td className="output" style={{borderTop: "1px solid gray"}}> 3 </td>
                                                </tr>
                                                <tr>
                                                    <td className="output"> 0 </td>
                                                </tr>
                                                <tr>
                                                    <td className="output"> 2 </td>
                                                </tr>
                                                <tr>
                                                    <td className="output"> 4 </td>
                                                </tr>
                                                <tr>
                                                    <td className="output"> 1 </td>
                                                </tr>
                                                <tr>
                                                    <td className="output" style={{borderBottom: "1px solid gray"}}> 4 </td>
                                                </tr>
                                            </table>
                                            <br/>

                                            <h4 className="head"> EXPLANATION </h4>  
                                            <br/> <br/> <br/> 
                                            <p className='expl' style={{paddingLeft: '0px'}}> The first test case is explained in the statement. <br/> In the second test case the green color is on so you can cross the road immediately. <br/> In the third test case, if the red color was on at the second second, then we would wait for the green color for one second, and if the red light was on at the first second, then we would wait for the green light for two seconds. <br/> In the fourth test case the longest we would wait for the green color is if we wait for it starting from the fifth second.</p> 
                                            <br/>

                                            <h4 className="head"> TAGS </h4>  
                                            <br/> <br/> <br/>  
                                            <p className="expl tag"> Binary Search </p> 
                                            <p className="expl tag"> Implementation </p>
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
                                                using namespace std; <br/> 
                                                #define ll long long <br/>
                                                #define py cout&lt;&lt;"YES&lt;&lt;endl <br/>
                                                #define pn cout&lt;&lt;"NO"&lt;&lt;endl <br/> <br/>
                                                int main()  <br/>
                                                &#123;   <br/> &emsp;
                                                int t; <br/> &emsp;
                                                cin&gt;&gt;t; <br/> &emsp;
                                                while (t--) <br/> &emsp;
                                                &#123;   <br/> &emsp; &emsp;
                                                int n; <br/> &emsp; &emsp;
                                                char ch;    <br/> &emsp; &emsp;
                                                string s;  <br/> &emsp; &emsp;
                                                cin&gt;&gt;n&gt;&gt;ch;&gt;&gt;s; <br/> <br/> &emsp; &emsp;
                                                if(ch == 'g') <br/> &emsp; &emsp;
                                                &#123;   <br/> &emsp; &emsp; &emsp;
                                                cout&lt;&lt;"0"&lt;&lt;endl; <br/> &emsp; &emsp; &emsp;
                                                continue; <br/> &emsp; &emsp;
                                                &#125;   <br/> <br/> &emsp; &emsp;
                                                vector&lt;int&gt; idxG, idxCh; <br/> &emsp; &emsp;
                                                for(int i = 0; i &lt; n; i++) <br/> &emsp; &emsp;
                                                &#123;   <br/> &emsp; &emsp; &emsp;
                                                if(s[i] == ch) <br/> &emsp; &emsp; &emsp;
                                                &#123;   <br/> &emsp; &emsp; &emsp; &emsp;
                                                idxCh.push_back(i); <br/> &emsp; &emsp; &emsp;
                                                &#125; <br/> &emsp; &emsp; &emsp;
                                                else if(s[i] == 'g')<br/> &emsp; &emsp; &emsp;
                                                &#123; <br/> &emsp; &emsp; &emsp; &emsp;
                                                idxG.push_back(i); <br/> &emsp; &emsp; &emsp;
                                                &#125; <br/> &emsp; &emsp; 
                                                &#125; <br/> <br/> &emsp; &emsp; 
                                                int ans = INT_MIN; <br/> &emsp; &emsp;
                                                for(int i = 0; i &lt; idxCh.size(); i++) <br/> &emsp; &emsp;
                                                &#123; &emsp; &emsp; <br/> &emsp; &emsp; &emsp;
                                                auto it = upper_bound(idxG.begin(), idxG.end(), idxCh[i]); <br/> &emsp; &emsp; &emsp;
                                                if(it == idxG.end()) <br/> &emsp; &emsp; &emsp;
                                                &#123;<br/> &emsp; &emsp; &emsp; &emsp;
                                                int dist = n - idxCh[i] + idxG[0]; <br/> &emsp; &emsp; &emsp; &emsp;
                                                ans = max(ans, dist); <br/>  &emsp; &emsp;  &emsp;
                                                &#125; <br/> &emsp;  &emsp; &emsp;
                                                else <br/> &emsp; &emsp; &emsp;
                                                &#123;   <br/> &emsp; &emsp; &emsp; &emsp;
                                                int dist = *it - idxCh[i]; <br/> &emsp; &emsp; &emsp; &emsp;
                                                ans = max(ans, dist); <br/> &emsp; &emsp; &emsp;
                                                &#125; <br/>&emsp; &emsp; 
                                                &#125; <br/> <br/> &emsp; &emsp;
                                                cout&lt;&lt;ans&lt;&lt;endl; <br/> &emsp;
                                                &#125; <br/> <br/> &emsp;
                                                return 0; <br/>
                                                &#125; <br/> 
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
                                            <p className="expl tag"> Binary Search </p> 
                                            <p className="expl tag"> Implementation </p>
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
                                            <p className="expl"> You find yourself on an unusual crossroad with a weird traffic light. That traffic light has three possible colors: red (r), yellow (y), green (g). It is known that the traffic light repeats its colors every n seconds and at the i-th second the color s<sub>i</sub> is on. <br/> That way, the order of the colors is described by a string. For example, if s="rggry", then the traffic light works as the following: red-green-green-red-yellow-red-green-green-red-yellow- ... and so on. <br/> More formally, you are given a string s<sub>1</sub>,s<sub>2</sub>,…,s<sub>n</sub> of length n. At the first second the color s<sub>1</sub> is on, at the second — s<sub>2</sub>, ..., at the n-th second the color s<sub>n</sub> is on, at the n+1-st second the color s<sub>1</sub> is on and so on. <br/> You need to cross the road and that can only be done when the green color is on. <br/> You know which color is on the traffic light at the moment, but you don't know the current moment of time. You need to find the minimum amount of time in which you are guaranteed to cross the road. <br/>You can assume that you cross the road immediately. <br/>For example, with s="rggry" and the current color r there are two options: either the green color will be on after 1 second, or after 3. That way, the answer is equal to 3 — that is the number of seconds that we are guaranteed to cross the road, if the current color is r. </p> <br/>

                                            <h4 className="head"> INPUT </h4>
                                            <br/> <br/> <br/> 
                                            <p className="expl"> The first line contains a single integer t (1≤t≤10<sup>4</sup>) — the number of test cases. <br/> Then the description of the test cases follows. <br/> The first line of each test case contains an integer n and a symbol c (1≤n≤2⋅10<sup>5</sup>, c is one of allowed traffic light colors r, y or g)— the length of the string s and the current color of the traffic light. <br/> The second line of each test case contains a string s of the length n, consisting of the letters r, y and g. <br/>It is guaranteed that the symbol g is in the string s and the symbol c is in the string s. <br/>It is guaranteed, that the sum of n over all test cases does not exceed 2⋅10<sup>5</sup>.</p>
                                            <br/>

                                            <h4 className="head"> OUTPUT </h4>  
                                            <br/> <br/> <br/>  
                                            <p className="expl"> For each test case output the minimal number of second in which you are guaranteed to cross the road.</p> <br/>

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
                                                    <td className="input" style={{borderTop: "1px solid gray;"}}> 6 </td>
                                                </tr>
                                                <tr>
                                                    <td className="input"> 5 &emsp; r </td>
                                                </tr>
                                                <tr>
                                                    <td className='input'> rggry </td>
                                                </tr>
                                                <tr>
                                                    <td className="input"> 1 &emsp; g </td>
                                                </tr>
                                                <tr>
                                                    <td className='input'> g </td>
                                                </tr>
                                                <tr>
                                                    <td className="input"> 3 &emsp; r </td>
                                                </tr>
                                                <tr>
                                                    <td className='input'> rrg </td>
                                                </tr>
                                                <tr>
                                                    <td className="input"> 5 &emsp; y </td>
                                                </tr>
                                                <tr>
                                                    <td className='input'> yrrgy </td>
                                                </tr>
                                                <tr>
                                                    <td className="input"> 7 &emsp; r </td>
                                                </tr>
                                                <tr>
                                                    <td className='input'> rgrgyrg </td>
                                                </tr>
                                                <tr>
                                                    <td className="input"> 9 &emsp; y </td>
                                                </tr>
                                                <tr>
                                                    <td className='input'  style={{borderBottom: "1px solid gray"}}> rrrgyyygy </td>
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
                                                    <td className="output" style={{borderTop: "1px solid gray"}}> 3 </td>
                                                </tr>
                                                <tr>
                                                    <td className="output"> 0 </td>
                                                </tr>
                                                <tr>
                                                    <td className="output"> 2 </td>
                                                </tr>
                                                <tr>
                                                    <td className="output"> 4 </td>
                                                </tr>
                                                <tr>
                                                    <td className="output"> 1 </td>
                                                </tr>
                                                <tr>
                                                    <td className="output" style={{borderBottom: "1px solid gray"}}> 4 </td>
                                                </tr>
                                            </table>
                                            <br/> 

                                            <h4 className="head"> EXPLANATION </h4>  
                                            <br/> <br/> <br/>  
                                            <p className="expl" style={{paddingLeft: "0px"}}> The first test case is explained in the statement. <br/> In the second test case the green color is on so you can cross the road immediately.<br/> In the third test case, if the red color was on at the second second, then we would wait for the green color for one second, and if the red light was on at the first second, then we would wait for the green light for two seconds. <br/> In the fourth test case the longest we would wait for the green color is if we wait for it starting from the fifth second. </p> <br/>
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
                                                using namespace std; <br/> 
                                                #define ll long long <br/>
                                                #define py cout&lt;&lt;"YES&lt;&lt;endl <br/>
                                                #define pn cout&lt;&lt;"NO"&lt;&lt;endl <br/> <br/>
                                                int main()  <br/>
                                                &#123;   <br/> &emsp;
                                                int t; <br/> &emsp;
                                                cin&gt;&gt;t; <br/> &emsp;
                                                while (t--) <br/> &emsp;
                                                &#123;   <br/> &emsp; &emsp;
                                                int n; <br/> &emsp; &emsp;
                                                char ch;    <br/> &emsp; &emsp;
                                                string s;  <br/> &emsp; &emsp;
                                                cin&gt;&gt;n&gt;&gt;ch;&gt;&gt;s; <br/> <br/> &emsp; &emsp;
                                                if(ch == 'g') <br/> &emsp; &emsp;
                                                &#123;   <br/> &emsp; &emsp; &emsp;
                                                cout&lt;&lt;"0"&lt;&lt;endl; <br/> &emsp; &emsp; &emsp;
                                                continue; <br/> &emsp; &emsp;
                                                &#125;   <br/> <br/> &emsp; &emsp;
                                                vector&lt;int&gt; idxG, idxCh; <br/> &emsp; &emsp;
                                                for(int i = 0; i &lt; n; i++) <br/> &emsp; &emsp;
                                                &#123;   <br/> &emsp; &emsp; &emsp;
                                                if(s[i] == ch) <br/> &emsp; &emsp; &emsp;
                                                &#123;   <br/> &emsp; &emsp; &emsp; &emsp;
                                                idxCh.push_back(i); <br/> &emsp; &emsp; &emsp;
                                                &#125; <br/> &emsp; &emsp; &emsp;
                                                else if(s[i] == 'g')<br/> &emsp; &emsp; &emsp;
                                                &#123; <br/> &emsp; &emsp; &emsp; &emsp;
                                                idxG.push_back(i); <br/> &emsp; &emsp; &emsp;
                                                &#125; <br/> &emsp; &emsp; 
                                                &#125; <br/> <br/> &emsp; &emsp; 
                                                int ans = INT_MIN; <br/> &emsp; &emsp;
                                                for(int i = 0; i &lt; idxCh.size(); i++) <br/> &emsp; &emsp;
                                                &#123; &emsp; &emsp; <br/> &emsp; &emsp; &emsp;
                                                auto it = upper_bound(idxG.begin(), idxG.end(), idxCh[i]); <br/> &emsp; &emsp; &emsp;
                                                if(it == idxG.end()) <br/> &emsp; &emsp; &emsp;
                                                &#123;<br/> &emsp; &emsp; &emsp; &emsp;
                                                int dist = n - idxCh[i] + idxG[0]; <br/> &emsp; &emsp; &emsp; &emsp;
                                                ans = max(ans, dist); <br/>  &emsp; &emsp;  &emsp;
                                                &#125; <br/> &emsp;  &emsp; &emsp;
                                                else <br/> &emsp; &emsp; &emsp;
                                                &#123;   <br/> &emsp; &emsp; &emsp; &emsp;
                                                int dist = *it - idxCh[i]; <br/> &emsp; &emsp; &emsp; &emsp;
                                                ans = max(ans, dist); <br/> &emsp; &emsp; &emsp;
                                                &#125; <br/>&emsp; &emsp; 
                                                &#125; <br/> <br/> &emsp; &emsp;
                                                cout&lt;&lt;ans&lt;&lt;endl; <br/> &emsp;
                                                &#125; <br/> <br/> &emsp;
                                                return 0; <br/>
                                                &#125; <br/>  
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
                                            <br/> 
                                            <div className="expl">
                                                <b> OR Select File: </b>
                                                <input type="file" style={{marginTop:"-25px"}}/>
                                                <br/> <br/>
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

                                <p id="cf"> You can read on <a href="https://codeforces.com/problemset/problem/1744/C" target="_blank" id="cf_link"> Codeforcse</a></p>
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