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

export default function Eight1() {
    return (
        <> 
            <div className="d-flex flex-column">
                <div className="d-flex">
                    <div className="card1">
                        <div className="container">
                            <h1> Military Problem </h1>
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
                                            <p className="expl"> In this problem you will have to help Berland army with organizing their command delivery system. <br/> There are n officers in Berland army. The first officer is the commander of the army, and he does not have any superiors. Every other officer has exactly one direct superior. If officer a is the direct superior of officer b, then we also can say that officer b is a direct subordinate of officer a. <br/> Officer x is considered to be a subordinate (direct or indirect) of officer y if one of the following conditions holds: </p> <br/>
                                            <ul className="expl">
                                                <li> officer y is the direct superior of officer x;</li>
                                                <li> the direct superior of officer x is a subordinate of officer y.</li>
                                            </ul>
                                            <br/>
                                            <p className="expl"> For example, on the picture below the subordinates of the officer 3 are: 5,6,7,8,9. <br/> The structure of Berland army is organized in such a way that every officer, except for the commander, is a subordinate of the commander of the army. <br/> Formally, let's represent Berland army as a tree consisting of n vertices, in which vertex u corresponds to officer u. The parent of vertex u corresponds to the direct superior of officer u. The root (which has index 1) corresponds to the commander of the army. <br/> Berland War Ministry has ordered you to give answers on q queries, the i-th query is given as (u<sub>i</sub>,k<sub>i</sub>), where u<sub>i</sub> is some officer, and k<sub>i</sub> is a positive integer. <br/> To process the i-th query imagine how a command from ui spreads to the subordinates of u<sub>i</sub>. Typical DFS (depth first search) algorithm is used here. <br/> Suppose the current officer is a and he spreads a command. Officer a chooses b — one of his direct subordinates (i.e. a child in the tree) who has not received this command yet. If there are many such direct subordinates, then a chooses the one having minimal index. Officer a gives a command to officer b. Afterwards, b uses exactly the same algorithm to spread the command to its subtree. After b finishes spreading the command, officer a chooses the next direct subordinate again (using the same strategy). When officer a cannot choose any direct subordinate who still hasn't received this command, officer a finishes spreading the command. <br/> Let's look at the following example:</p> <br/>
                                            <img className="expl" src='https://espresso.codeforces.com/a26785a0921dbecc44400765603c6f8cf526d8f4.png'/>
                                            <p className='expl'>
                                            If officer 1 spreads a command, officers receive it in the following order: [1,2,3,5,6,8,7,9,4]. <br/> If officer 3 spreads a command, officers receive it in the following order: [3,5,6,8,7,9]. <br/> If officer 7 spreads a command, officers receive it in the following order: [7,9]. <br/>If officer 9 spreads a command, officers receive it in the following order: [9]. <br/> To answer the i-th query (u<sub>i</sub>,k<sub>i</sub>), construct a sequence which describes the order in which officers will receive the command if the u<sub>i</sub>-th officer spreads it. Return the k<sub>i</sub>-th element of the constructed list or -1 if there are fewer than k<sub>i</sub> elements in it. <br/> You should process queries independently. A query doesn't affect the following queries.
                                            </p>
                                            <br/>

                                            <h4 className="head"> INPUT </h4>
                                            <br/> <br/> <br/> 
                                            <p className="expl"> The first line of the input contains two integers n and q (2≤n≤2⋅10<sup>5</sup>,1≤q≤2⋅10<sup>5</sup>) — the number of officers in Berland army and the number of queries. <br/> The second line of the input contains n−1 integers p<sub>2</sub>,p<sub>3</sub>,…,p<sub>n</sub> (1≤p<sub>i</sub>&lt;i), where p<sub>i</sub> is the index of the direct superior of the officer having the index i. The commander has index 1 and doesn't have any superiors. <br/> The next q lines describe the queries. The i-th query is given as a pair (u<sub>i</sub>,k<sub>i</sub>) (1≤u<sub>i</sub>,k<sub>i</sub>≤n), where u<sub>i</sub> is the index of the officer which starts spreading a command, and k<sub>i</sub> is the index of the required officer in the command spreading sequence.</p>
                                            <br/>

                                            <h4 className="head"> OUTPUT </h4>  
                                            <br/> <br/> <br/>  
                                            <p className="expl"> Print q numbers, where the i-th number is the officer at the position k<sub>i</sub> in the list which describes the order in which officers will receive the command if it starts spreading from officer u<sub>i</sub>. Print "-1" if the number of officers which receive the command is less than k<sub>i</sub>. <br/> You should process queries independently. They do not affect each other.</p> <br/>

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
                                                    <td className="input" style={{borderTop: "1px solid gray"}}> 9 &emsp; 6 </td>
                                                </tr>
                                                <tr>
                                                    <td className="input"> 1 &emsp; 1 &emsp; 1 &emsp; 3 &emsp; 5 &emsp; 3 &emsp; 5 &emsp; 7 </td>
                                                </tr>
                                                <tr>
                                                    <td className="input"> 3 &emsp; 1 </td>
                                                </tr>
                                                <tr>
                                                    <td className="input"> 1 &emsp; 5 </td>
                                                </tr>
                                                <tr>
                                                    <td className="input"> 3 &emsp; 4 </td>
                                                </tr>
                                                <tr>
                                                    <td className="input"> 7 &emsp; 3 </td>
                                                </tr>
                                                <tr>
                                                    <td className="input"> 1 &emsp; 8 </td>
                                                </tr>
                                                <tr>
                                                    <td className="input" style={{borderBottom: "1px solid gray"}}> 1 &emsp; 9 </td>
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
                                                    <td className="output"> 6 </td>
                                                </tr>
                                                <tr>
                                                    <td className="output"> 8 </td>
                                                </tr>
                                                <tr>
                                                    <td className="output"> -1 </td>
                                                </tr>
                                                <tr>
                                                    <td className="output"> 9 </td>
                                                </tr>
                                                <tr>
                                                    <td className="output" style={{borderBottom: "1px solid gray"}}> 4 </td>
                                                </tr>
                                            </table>
                                            <br/>

                                            <h4 className="head"> TAGS </h4>  
                                            <br/> <br/> <br/>  
                                            <p className="expl tag"> Graphs </p> 
                                            <p className="expl tag"> Trees </p> 
                                            <p className="expl tag"> DFS </p> 
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
                                            typedef long long int ll; <br/>
                                            typedef unsigned long long int ull; <br/>
                                            #define dbg printf("in\n") <br/>
                                            #define nl printf("\n"); <br/>
                                            #define N 200150 <br/>
                                            #define inf 1000000000 <br/>
                                            #define pp pair&lt;int,int&gt;  <br/> <br/>
                                            #define sf(n) scanf("%d", &n) <br/>
                                            #define sff(n,m) scanf("%d%d",&n,&m) <br/>
                                            #define sfl(n) scanf("%I64d", &n) <br/>
                                            #define sffl(n,m) scanf("%I64d%I64d",&n,&m) <br/> <br/>
                                            #define pf(n) printf("%d\n",n) <br/>
                                            #define pfl(n) printf("%I64d",n) <br/>
                                            #define pfs(s) printf("%s",s) <br/>
                                            #define pb push_back <br/> <br/>
                                            using namespace std; <br/> <br/>
                                            int start[N], fin[N], mp[N]; <br/>
                                            vector&lt;int&gt; adj[N]; <br/> <br/>
                                            int t=1; <br/>
                                            void dfs(int s) <br/>
                                            &#123; <br/> &emsp;
                                            start[s]=t; <br/> &emsp;
                                            mp[t]=s; t++; <br/> <br/> &emsp;
                                            for(int e : adj[s]) <br/> &emsp; &emsp;
                                            dfs(e); <br/> <br/> &emsp;
                                            fin[s]=t; <br/>
                                            &#125; <br/> <br/>
                                            int main()
                                            &#123; <br/> &emsp;
                                            freopen("in.txt", "r", stdin); <br/> &emsp;
                                            int i,j,k; <br/> &emsp;
                                            int n,m,q; <br/> &emsp;
                                            int u,v; <br/> &emsp;
                                            sff(n,q);<br/> &emsp;
                                            for(i=2;i&lte;n;i++) <br/> &emsp;
                                            &#123; <br/> &emsp; &emsp;
                                            sf(m);<br/> &emsp; &emsp;
                                            adj[m].pb(i); <br/> &emsp;
                                            &#125;  <br/> <br/> &emsp;
                                            memset(start,0,sizeof(start));<br/> &emsp;
                                            memset(fin,0,sizeof(fin));<br/> &emsp;
                                            memset(mp,0,sizeof(mp));<br/> &emsp;
                                            dfs(1);<br/> <br/> &emsp;
                                            while(q--)<br/> &emsp;
                                            &#123; <br/> &emsp; &emsp;
                                            sff(u,k); <br/> &emsp; &emsp;
                                            if(fin[u]-start[u]&lt;k)<br/> &emsp; &emsp; &emsp;
                                            pf(-1); <br/> &emsp; &emsp;
                                            else <br/> &emsp; &emsp; &emsp;
                                            pf(mp[start[u]+k-1]); <br/> &emsp;
                                            &#125;<br/> <br/> &emsp;
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
                                                <button type="submit" style={{border: "2px solid dimgray", borderRadius: "8px", backgroundColor: "aquamarine", color: "blue", padding: "5px"}}> SUBMIT </button>
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
                                                                <button type="submit" className="post"> POST </button>
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
                                            <p className="expl tag"> Graphs </p> 
                                            <p className="expl tag"> Trees </p> 
                                            <p className="expl tag"> DFS </p> 
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
                                            <p className="expl">In this problem you will have to help Berland army with organizing their command delivery system. <br/> There are n officers in Berland army. The first officer is the commander of the army, and he does not have any superiors. Every other officer has exactly one direct superior. If officer a is the direct superior of officer b, then we also can say that officer b is a direct subordinate of officer a. <br/> Officer x is considered to be a subordinate (direct or indirect) of officer y if one of the following conditions holds: </p> <br/>
                                            <ul className="expl">
                                                <li> officer y is the direct superior of officer x;</li>
                                                <li> the direct superior of officer x is a subordinate of officer y.</li>
                                            </ul>
                                            <br/>
                                            <p className="expl"> For example, on the picture below the subordinates of the officer 3 are: 5,6,7,8,9. <br/> The structure of Berland army is organized in such a way that every officer, except for the commander, is a subordinate of the commander of the army. <br/> Formally, let's represent Berland army as a tree consisting of n vertices, in which vertex u corresponds to officer u. The parent of vertex u corresponds to the direct superior of officer u. The root (which has index 1) corresponds to the commander of the army. <br/> Berland War Ministry has ordered you to give answers on q queries, the i-th query is given as (u<sub>i</sub>,k<sub>i</sub>), where u<sub>i</sub> is some officer, and k<sub>i</sub> is a positive integer. <br/> To process the i-th query imagine how a command from ui spreads to the subordinates of u<sub>i</sub>. Typical DFS (depth first search) algorithm is used here. <br/> Suppose the current officer is a and he spreads a command. Officer a chooses b — one of his direct subordinates (i.e. a child in the tree) who has not received this command yet. If there are many such direct subordinates, then a chooses the one having minimal index. Officer a gives a command to officer b. Afterwards, b uses exactly the same algorithm to spread the command to its subtree. After b finishes spreading the command, officer a chooses the next direct subordinate again (using the same strategy). When officer a cannot choose any direct subordinate who still hasn't received this command, officer a finishes spreading the command. <br/> Let's look at the following example:</p> <br/>
                                            <img className="expl" src='https://espresso.codeforces.com/a26785a0921dbecc44400765603c6f8cf526d8f4.png'/>
                                            <p className='expl'>
                                            If officer 1 spreads a command, officers receive it in the following order: [1,2,3,5,6,8,7,9,4]. <br/> If officer 3 spreads a command, officers receive it in the following order: [3,5,6,8,7,9]. <br/> If officer 7 spreads a command, officers receive it in the following order: [7,9]. <br/>If officer 9 spreads a command, officers receive it in the following order: [9]. <br/> To answer the i-th query (u<sub>i</sub>,k<sub>i</sub>), construct a sequence which describes the order in which officers will receive the command if the u<sub>i</sub>-th officer spreads it. Return the k<sub>i</sub>-th element of the constructed list or -1 if there are fewer than k<sub>i</sub> elements in it. <br/> You should process queries independently. A query doesn't affect the following queries.
                                            </p>
                                            <br/>

                                            <h4 className="head"> INPUT </h4>
                                            <br/> <br/> <br/> 
                                            <p className="expl"> The first line of the input contains two integers n and q (2≤n≤2⋅10<sup>5</sup>,1≤q≤2⋅10<sup>5</sup>) — the number of officers in Berland army and the number of queries. <br/> The second line of the input contains n−1 integers p<sub>2</sub>,p<sub>3</sub>,…,p<sub>n</sub> (1≤p<sub>i</sub>&lt;i), where p<sub>i</sub> is the index of the direct superior of the officer having the index i. The commander has index 1 and doesn't have any superiors. <br/> The next q lines describe the queries. The i-th query is given as a pair (u<sub>i</sub>,k<sub>i</sub>) (1≤u<sub>i</sub>,k<sub>i</sub>≤n), where u<sub>i</sub> is the index of the officer which starts spreading a command, and k<sub>i</sub> is the index of the required officer in the command spreading sequence.</p>
                                            <br/>

                                            <h4 className="head"> OUTPUT </h4>  
                                            <br/> <br/> <br/>  
                                            <p className="expl"> Print q numbers, where the i-th number is the officer at the position k<sub>i</sub> in the list which describes the order in which officers will receive the command if it starts spreading from officer u<sub>i</sub>. Print "-1" if the number of officers which receive the command is less than k<sub>i</sub>. <br/> You should process queries independently. They do not affect each other.</p> <br/>

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
                                                    <td className="input" style={{borderTop: "1px solid gray"}}> 9 &emsp; 6 </td>
                                                </tr>
                                                <tr>
                                                    <td className="input"> 1 &emsp; 1 &emsp; 1 &emsp; 3 &emsp; 5 &emsp; 3 &emsp; 5 &emsp; 7 </td>
                                                </tr>
                                                <tr>
                                                    <td className="input"> 3 &emsp; 1 </td>
                                                </tr>
                                                <tr>
                                                    <td className="input"> 1 &emsp; 5 </td>
                                                </tr>
                                                <tr>
                                                    <td className="input"> 3 &emsp; 4 </td>
                                                </tr>
                                                <tr>
                                                    <td className="input"> 7 &emsp; 3 </td>
                                                </tr>
                                                <tr>
                                                    <td className="input"> 1 &emsp; 8 </td>
                                                </tr>
                                                <tr>
                                                    <td className="input" style={{borderBottom: "1px solid gray"}}> 1 &emsp; 9 </td>
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
                                                    <td className="output"> 6 </td>
                                                </tr>
                                                <tr>
                                                    <td className="output"> 8 </td>
                                                </tr>
                                                <tr>
                                                    <td className="output"> -1 </td>
                                                </tr>
                                                <tr>
                                                    <td className="output"> 9 </td>
                                                </tr>
                                                <tr>
                                                    <td className="output" style={{borderBottom: "1px solid gray"}}> 4 </td>
                                                </tr>
                                            </table>
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
                                            #include&lt;iostream&gt; <br/>
                                            typedef long long int ll; <br/>
                                            typedef unsigned long long int ull; <br/>
                                            #define dbg printf("in\n") <br/>
                                            #define nl printf("\n"); <br/>
                                            #define N 200150 <br/>
                                            #define inf 1000000000 <br/>
                                            #define pp pair&lt;int,int&gt;  <br/> <br/>
                                            #define sf(n) scanf("%d", &n) <br/>
                                            #define sff(n,m) scanf("%d%d",&n,&m) <br/>
                                            #define sfl(n) scanf("%I64d", &n) <br/>
                                            #define sffl(n,m) scanf("%I64d%I64d",&n,&m) <br/> <br/>
                                            #define pf(n) printf("%d\n",n) <br/>
                                            #define pfl(n) printf("%I64d",n) <br/>
                                            #define pfs(s) printf("%s",s) <br/>
                                            #define pb push_back <br/> <br/>
                                            using namespace std; <br/> <br/>
                                            int start[N], fin[N], mp[N]; <br/>
                                            vector&lt;int&gt; adj[N]; <br/> <br/>
                                            int t=1; <br/>
                                            void dfs(int s) <br/>
                                            &#123; <br/> &emsp;
                                            start[s]=t; <br/> &emsp;
                                            mp[t]=s; t++; <br/> <br/> &emsp;
                                            for(int e : adj[s]) <br/> &emsp; &emsp;
                                            dfs(e); <br/> <br/> &emsp;
                                            fin[s]=t; <br/>
                                            &#125; <br/> <br/>
                                            int main()
                                            &#123; <br/> &emsp;
                                            freopen("in.txt", "r", stdin); <br/> &emsp;
                                            int i,j,k; <br/> &emsp;
                                            int n,m,q; <br/> &emsp;
                                            int u,v; <br/> &emsp;
                                            sff(n,q);<br/> &emsp;
                                            for(i=2;i&lte;n;i++) <br/> &emsp;
                                            &#123; <br/> &emsp; &emsp;
                                            sf(m);<br/> &emsp; &emsp;
                                            adj[m].pb(i); <br/> &emsp;
                                            &#125;  <br/> <br/> &emsp;
                                            memset(start,0,sizeof(start));<br/> &emsp;
                                            memset(fin,0,sizeof(fin));<br/> &emsp;
                                            memset(mp,0,sizeof(mp));<br/> &emsp;
                                            dfs(1);<br/> <br/> &emsp;
                                            while(q--)<br/> &emsp;
                                            &#123; <br/> &emsp; &emsp;
                                            sff(u,k); <br/> &emsp; &emsp;
                                            if(fin[u]-start[u]&lt;k)<br/> &emsp; &emsp; &emsp;
                                            pf(-1); <br/> &emsp; &emsp;
                                            else <br/> &emsp; &emsp; &emsp;
                                            pf(mp[start[u]+k-1]); <br/> &emsp;
                                            &#125;<br/> <br/> &emsp;
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
                                                <button type="submit" style={{border: "2px solid dimgray", borderRadius: "8px", backgroundColor: "aquamarine", color: "blue", padding: "5px"}}> SUBMIT </button>
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
                                                                <button type="submit" className="post"> POST </button>
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

                                <p id="cf"> You can read on <a href="https://codeforces.com/problemset/problem/1006/E" target="_blank" id="cf_link"> Codeforcse</a></p>
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
