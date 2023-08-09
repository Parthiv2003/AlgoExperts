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

export default function Eight1() {
    return (
        <> 
            <div className="d-flex flex-column">
                <div className="d-flex">
                    <div className="card1">
                        <div className="container">
                            <h1> Workout plan </h1>
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
                                            <p className="expl">Alan decided to get in shape for the summer, so he created a precise workout plan to follow. His plan is to go to a different gym every day during the next N days and lift X[i] grams on day i. In order to improve his workout performance at the gym, he can buy exactly one pre-workout drink at the gym he is currently in and it will improve his performance by A grams permanently and immediately. In different gyms these pre-workout drinks can cost different amounts C[i] because of the taste and the gym's location but its permanent workout gains are the same. Before the first day of starting his workout plan, Alan knows he can lift a maximum of K grams. Help Alan spend a minimum total amount of money in order to reach his workout plan. If there is no way for him to complete his workout plan successfully output −1.</p>
                                            <br/>

                                            <h4 className="head"> INPUT </h4>
                                            <br/> <br/> <br/> 
                                            <p className="expl">The first one contains two integer numbers, integers N (1≤N≤10<sup>5</sup>) and K (1≤K≤10<sup>5</sup>) – representing number of days in the workout plan and how many grams he can lift before starting his workout plan respectively. The second line contains N integer numbers X[i] (1≤X[i]≤10<sup>9</sup>) separated by a single space representing how many grams Alan wants to lift on day i. The third line contains one integer number A (1≤A≤10<sup>9</sup>) representing permanent performance gains from a single drink. The last line contains N integer numbers C[i] (1≤C[i]≤10<sup>9</sup>) , representing cost of performance booster drink in the gym he visits on day i.</p>
                                            <br/>

                                            <h4 className="head"> OUTPUT </h4>  
                                            <br/> <br/> <br/>  
                                            <p className="expl"> One integer number representing minimal money spent to finish his workout plan. If he cannot finish his workout plan, output -1.</p> <br/>

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
                                                    <td className="input" style={{borderTop: "1px solid gray"}}> 5 &emsp; 10000 </td>
                                                </tr>
                                                <tr>
                                                    <td className="input"> 10000 &emsp; 30000 &emsp;30000 &emsp; 40000 &emsp; 20000 </td>
                                                </tr>
                                                <tr>
                                                    <td className="input"> 20000 </td>
                                                </tr>
                                                <tr>
                                                    <td className="input" style={{borderBottom: "1px solid gray"}}> 5 &emsp; 2 &emsp; 8 &emsp; 3 &emsp; 6  </td>
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
                                                    <td className="output" style={{border: "1px solid gray"}}> 5 </td>
                                                </tr>
                                            </table>
                                            <br/>

                                            <h4 className="head"> EXPLANATION </h4>  
                                            <br/> <br/> <br/>  
                                            <p className='expl'>First example: After buying drinks on days 2 and 4 Alan can finish his workout plan. Second example: Alan cannot lift 40000 grams on day 2.
                                            </p>
                                            <br/>

                                            <h4 className="head"> TAGS </h4>  
                                            <br/> <br/> <br/>  
                                            <p className="expl tag"> Greedy </p> 
                                            <p className="expl tag"> Data Structures </p>
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
                                            typedef long long int ll; <br/>
                                            typedef unsigned long long int ull; <br/> <br/>
                                            #define dbg printf("in\n") <br/>
                                            #define nl printf("\n") <br/>
                                            #define N 110 <br/>
                                            #define inf 1e9 <br/>
                                            #define sf(n) scanf("%d", &n) <br/>
                                            #define sff(n,m) scanf("%d%d",&n,&m) <br/>
                                            #define sfl(n) scanf("%I64d", &n) <br/>
                                            #define sffl(n,m) scanf("%I64d%I64d",&n,&m) <br/>
                                            #define pf(n) printf("%d",n) <br/>
                                            #define pff(n,m) printf("%d %d",n,m) <br/>
                                            #define pffl(n,m) printf("%I64d %I64d",n,m) <br/>
                                            #define pfl(n) printf("%I64d",n) <br/>
                                            #define pfs(s) printf("%s",s) <br/>
                                            #define pb push_back <br/>
                                            #define pp pair&lt;int, int&gt; <br/> <br/>
                                            using namespace std; <br/> <br/>
                                            int main() <br/>
                                            &#123; <br/> &emsp;
                                            freopen("in.txt", "r", stdin); <br/> &emsp;
                                            int i, j, k; <br/> &emsp;
                                            int n, m; <br/> &emsp;
                                            ll curr, A, ans = 0; <br/> &emsp;
                                            sf(n); <br/> &emsp;
                                            sfl(curr); <br/> &emsp;
                                            ll weight[n], cost[n]; <br/> <br/> &emsp;
                                            for(i = 0; i &lt; n; i++) <br/> &emsp; &emsp;
                                            sfl(weight[i]); <br/> <br/> &emsp;
                                            sfl(A); <br/> &emsp;
                                            for(i = 0; i &lt; n; i++) <br/> &emsp; &emsp;
                                            sfl(cost[i]); <br/> <br/> &emsp;
                                            priority_queue&lt;int, vector&lt;int&gt;, greater&lt;int&gt;&gt; pq; <br/> &emsp;
                                            for(i = 0; i &lt; n; i++) <br/> &emsp;
                                            &#123; <br/> &emsp; &emsp;
                                            pq.push(cost[i]);<br/> &emsp; &emsp;
                                            while(curr &lt; weight[i] && pq.size())<br/> &emsp; &emsp;
                                            &#123; <br/> &emsp; &emsp; &emsp;
                                            curr += A; <br/> &emsp; &emsp; &emsp;
                                            ans += pq.top();<br/> &emsp; &emsp; &emsp;
                                            pq.pop();<br/> &emsp;  &emsp;
                                            &#125;<br/> <br/> &emsp;  &emsp;
                                            if(curr &lt; weight[i])<br/> &emsp; &emsp;
                                            &#123; <br/> &emsp; &emsp;  &emsp;
                                            pf(-1);<br/> &emsp; &emsp;  &emsp;
                                            return 0;<br/> &emsp; &emsp; 
                                            &#125; <br/> &emsp;
                                            &#125;<br/> <br/> &emsp;
                                            pfl(ans);<br/> &emsp;
                                            return 0;<br/> 
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
                                            <p className="expl tag"> Greedy </p> 
                                            <p className="expl tag"> Data Structures </p> 
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
                                            <p className="expl">Alan decided to get in shape for the summer, so he created a precise workout plan to follow. His plan is to go to a different gym every day during the next N days and lift X[i] grams on day i. In order to improve his workout performance at the gym, he can buy exactly one pre-workout drink at the gym he is currently in and it will improve his performance by A grams permanently and immediately. In different gyms these pre-workout drinks can cost different amounts C[i] because of the taste and the gym's location but its permanent workout gains are the same. Before the first day of starting his workout plan, Alan knows he can lift a maximum of K grams. Help Alan spend a minimum total amount of money in order to reach his workout plan. If there is no way for him to complete his workout plan successfully output −1.</p>
                                            <br/>

                                            <h4 className="head"> INPUT </h4>
                                            <br/> <br/> <br/> 
                                            <p className="expl">The first one contains two integer numbers, integers N (1≤N≤10<sup>5</sup>) and K (1≤K≤10<sup>5</sup>) – representing number of days in the workout plan and how many grams he can lift before starting his workout plan respectively. The second line contains N integer numbers X[i] (1≤X[i]≤10<sup>9</sup>) separated by a single space representing how many grams Alan wants to lift on day i. The third line contains one integer number A (1≤A≤10<sup>9</sup>) representing permanent performance gains from a single drink. The last line contains N integer numbers C[i] (1≤C[i]≤10<sup>9</sup>) , representing cost of performance booster drink in the gym he visits on day i.</p>
                                            <br/>

                                            <h4 className="head"> OUTPUT </h4>  
                                            <br/> <br/> <br/>  
                                            <p className="expl"> One integer number representing minimal money spent to finish his workout plan. If he cannot finish his workout plan, output -1.</p> <br/>

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
                                                    <td className="input" style={{borderTop: "1px solid gray"}}> 5 &emsp; 10000 </td>
                                                </tr>
                                                <tr>
                                                    <td className="input"> 10000 &emsp; 30000 &emsp;30000 &emsp; 40000 &emsp; 20000 </td>
                                                </tr>
                                                <tr>
                                                    <td className="input"> 20000 </td>
                                                </tr>
                                                <tr>
                                                    <td className="input" style={{borderBottom: "1px solid gray"}}> 5 &emsp; 2 &emsp; 8 &emsp; 3 &emsp; 6  </td>
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
                                                    <td className="output" style={{border: "1px solid gray"}}> 5 </td>
                                                </tr>
                                            </table>
                                            <br/> 

                                            <h4 className="head"> EXPLANATION </h4>  
                                            <br/> <br/> <br/>  
                                            <p className='expl'>First example: After buying drinks on days 2 and 4 Alan can finish his workout plan. Second example: Alan cannot lift 40000 grams on day 2.
                                            </p>
                                            <br/>
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
                                            typedef long long int ll; <br/>
                                            typedef unsigned long long int ull; <br/> <br/>
                                            #define dbg printf("in\n") <br/>
                                            #define nl printf("\n") <br/>
                                            #define N 110 <br/>
                                            #define inf 1e9 <br/>
                                            #define sf(n) scanf("%d", &n) <br/>
                                            #define sff(n,m) scanf("%d%d",&n,&m) <br/>
                                            #define sfl(n) scanf("%I64d", &n) <br/>
                                            #define sffl(n,m) scanf("%I64d%I64d",&n,&m) <br/>
                                            #define pf(n) printf("%d",n) <br/>
                                            #define pff(n,m) printf("%d %d",n,m) <br/>
                                            #define pffl(n,m) printf("%I64d %I64d",n,m) <br/>
                                            #define pfl(n) printf("%I64d",n) <br/>
                                            #define pfs(s) printf("%s",s) <br/>
                                            #define pb push_back <br/>
                                            #define pp pair&lt;int, int&gt; <br/> <br/>
                                            using namespace std; <br/> <br/>
                                            int main() <br/>
                                            &#123; <br/> &emsp;
                                            freopen("in.txt", "r", stdin); <br/> &emsp;
                                            int i, j, k; <br/> &emsp;
                                            int n, m; <br/> &emsp;
                                            ll curr, A, ans = 0; <br/> &emsp;
                                            sf(n); <br/> &emsp;
                                            sfl(curr); <br/> &emsp;
                                            ll weight[n], cost[n]; <br/> <br/> &emsp;
                                            for(i = 0; i &lt; n; i++) <br/> &emsp; &emsp;
                                            sfl(weight[i]); <br/> <br/> &emsp;
                                            sfl(A); <br/> &emsp;
                                            for(i = 0; i &lt; n; i++) <br/> &emsp; &emsp;
                                            sfl(cost[i]); <br/> <br/> &emsp;
                                            priority_queue&lt;int, vector&lt;int&gt;, greater&lt;int&gt;&gt; pq; <br/> &emsp;
                                            for(i = 0; i &lt; n; i++) <br/> &emsp;
                                            &#123; <br/> &emsp; &emsp;
                                            pq.push(cost[i]);<br/> &emsp; &emsp;
                                            while(curr &lt; weight[i] && pq.size())<br/> &emsp; &emsp;
                                            &#123; <br/> &emsp; &emsp; &emsp;
                                            curr += A; <br/> &emsp; &emsp; &emsp;
                                            ans += pq.top();<br/> &emsp; &emsp; &emsp;
                                            pq.pop();<br/> &emsp;  &emsp;
                                            &#125;<br/> <br/> &emsp;  &emsp;
                                            if(curr &lt; weight[i])<br/> &emsp; &emsp;
                                            &#123; <br/> &emsp; &emsp;  &emsp;
                                            pf(-1);<br/> &emsp; &emsp;  &emsp;
                                            return 0;<br/> &emsp; &emsp; 
                                            &#125; <br/> &emsp;
                                            &#125;<br/> <br/> &emsp;
                                            pfl(ans);<br/> &emsp;
                                            return 0;<br/> 
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

                                <p id="cf"> You can read on <a href="https://codeforces.com/contest/1218/problem/F" target="_blank" id="cf_link"> Codeforcse</a></p>
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