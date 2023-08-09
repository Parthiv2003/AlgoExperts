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
                            <h1> Joysticks </h1>
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
                                            <p className="expl">Friends are going to play console. They have two joysticks and only one charger for them. Initially first joystick is charged at a<sub>1</sub> percent and second one is charged at a<sub>2</sub> percent. You can connect charger to a joystick only at the beginning of each minute. In one minute joystick either discharges by 2 percent (if not connected to a charger) or charges by 1 percent (if connected to a charger). <br/> <br/> Game continues while both joysticks have a positive charge. Hence, if at the beginning of minute some joystick is charged by 1 percent, it has to be connected to a charger, otherwise the game stops. If some joystick completely discharges (its charge turns to 0), the game also stops. <br/> <br/> Determine the maximum number of minutes that game can last. It is prohibited to pause the game, i. e. at each moment both joysticks should be enabled. It is allowed for joystick to be charged by more than 100 percent.</p>
                                            <br/>

                                            <h4 className="head"> INPUT </h4>
                                            <br/> <br/> <br/> 
                                            <p className="expl">The first line of the input contains two positive integers a<sub>1</sub> and a<sub>2</sub> (1 ≤ a<sub>1</sub>, a<sub>2</sub> ≤ 100), the initial charge level of first and second joystick respectively.</p>
                                            <br/>

                                            <h4 className="head"> OUTPUT </h4>  
                                            <br/> <br/> <br/>  
                                            <p className="expl"> Output the only integer, the maximum number of minutes that the game can last. Game continues until some joystick is discharged.</p> <br/>

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
                                                    <td className="input" style={{border: "1px solid gray"}}> 3 &emsp; 5 </td>
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
                                                    <td className="output" style={{border: "1px solid gray"}}> 6 </td>
                                                </tr>
                                            </table>
                                            <br/>

                                            <h4 className="head"> EXPLANATION </h4>  
                                            <br/> <br/> <br/>  
                                            <p className='expl'>
                                            In the first sample game lasts for 6 minute by using the following algorithm:
                                            </p>
                                            <ul className="expl" style={{paddingLeft: "-80px"}}>
                                                <li> at the beginning of the first minute connect first joystick to the charger, by the end of this minute first joystick is at 4%, second is at 3%; </li>
                                                <li> continue the game without changing charger, by the end of the second minute the first joystick is at 5%, second is at 1%; </li>
                                                <li> at the beginning of the third minute connect second joystick to the charger, after this minute the first joystick is at 3%, the second one is at 2%; </li>
                                                <li> continue the game without changing charger, by the end of the fourth minute first joystick is at 1%, second one is at 3%; </li>
                                                <li>at the beginning of the fifth minute connect first joystick to the charger, after this minute the first joystick is at 2%, the second one is at 1%;</li>
                                                <li>at the beginning of the sixth minute connect second joystick to the charger, after this minute the first joystick is at 0%, the second one is at 2%. </li>
                                            </ul> <br/>
                                            <p className='expl'>
                                            After that the first joystick is completely discharged and the game is stopped.
                                            </p> <br/>

                                            <h4 className="head"> TAGS </h4>  
                                            <br/> <br/> <br/>  
                                            <p className="expl tag"> Greedy </p> 
                                            <p className="expl tag"> DP </p>
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
                                            #include&lt;iostream&gt;<br/> <br/>
                                            typedef long long int ll; <br/>
                                            #define pp pair&lt;ll,ll&gt; <br/>
                                            #define inf 1000000007 <br/>
                                            #define max2(a,b) ((a&lt;b)?b:a) <br/>
                                            #define max3(a,b,c) max2(max2(a,b),c) <br/>
                                            #define min2(a,b) ((a&gt;b)?b:a) <br/>
                                            #define min3(a,b,c) min2(min2(a,b),c) <br/> <br/>
                                            using namespace std; <br/> <br/>
                                            int main() <br/>
                                            &#123; <br/> &emsp;
                                            ll i,j,k; <br/> &emsp;
                                            ll count=0; <br/> &emsp;
                                            ll a,b; <br/> &emsp;
                                            cin&gt;&gt;a&gt;&gt;b; <br/> &emsp;
                                            if(a==1 && b==1) <br/> &emsp;
                                            &#123;  <br/> &emsp; &emsp;
                                            cout&lt;&lt;"0"; <br/> &emsp; &emsp;
                                            return 0; <br/> &emsp; 
                                            &#125; <br/> <br/> &emsp;
                                            while(a&gt;0 && b&gt;0)
                                            &#123; <br/> &emsp; &emsp;
                                            if(a&gt;b)<br/> &emsp; &emsp;
                                            &#123;<br/> &emsp; &emsp; &emsp;
                                            a-=2;<br/> &emsp; &emsp; &emsp;
                                            b++;<br/> &emsp; &emsp;
                                            &#125;<br/> &emsp; &emsp;
                                            else<br/> &emsp; &emsp;
                                            &#123; <br/> &emsp; &emsp; &emsp;
                                            a++;<br/> &emsp; &emsp; &emsp;
                                            b-=2; <br/> &emsp; &emsp;
                                            &#125; <br/> <br/> &emsp; &emsp;
                                            count++; <br/> &emsp;
                                            &#125; <br/> <br/> &emsp;
                                            cout&lt;&lt;count;<br/> &emsp; 
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
                                            <p className="expl tag"> Greedy </p> 
                                            <p className="expl tag"> DP </p> 
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
                                            <p className="expl">Friends are going to play console. They have two joysticks and only one charger for them. Initially first joystick is charged at a<sub>1</sub> percent and second one is charged at a<sub>2</sub> percent. You can connect charger to a joystick only at the beginning of each minute. In one minute joystick either discharges by 2 percent (if not connected to a charger) or charges by 1 percent (if connected to a charger). <br/> <br/> Game continues while both joysticks have a positive charge. Hence, if at the beginning of minute some joystick is charged by 1 percent, it has to be connected to a charger, otherwise the game stops. If some joystick completely discharges (its charge turns to 0), the game also stops. <br/> <br/> Determine the maximum number of minutes that game can last. It is prohibited to pause the game, i. e. at each moment both joysticks should be enabled. It is allowed for joystick to be charged by more than 100 percent.</p>
                                            <br/>

                                            <h4 className="head"> INPUT </h4>
                                            <br/> <br/> <br/> 
                                            <p className="expl">The first line of the input contains two positive integers a<sub>1</sub> and a<sub>2</sub> (1 ≤ a<sub>1</sub>, a<sub>2</sub> ≤ 100), the initial charge level of first and second joystick respectively.</p>
                                            <br/>

                                            <h4 className="head"> OUTPUT </h4>  
                                            <br/> <br/> <br/>  
                                            <p className="expl">Output the only integer, the maximum number of minutes that the game can last. Game continues until some joystick is discharged.</p> <br/>

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
                                                    <td className="input" style={{border: "1px solid gray"}}> 3 &emsp; 5 </td>
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
                                                    <td className="output" style={{border: "1px solid gray"}}> 6 </td>
                                                </tr>
                                            </table>
                                            <br/> 

                                            <h4 className="head"> EXPLANATION </h4>  
                                            <br/> <br/> <br/>  
                                            <p className='expl'>
                                            In the first sample game lasts for 6 minute by using the following algorithm:
                                            </p>
                                            <ul className="expl" style={{paddingLeft: "-20px"}}>
                                                <li> at the beginning of the first minute connect first joystick to the charger, by the end of this minute first joystick is at 4%, second is at 3%; </li>
                                                <li> continue the game without changing charger, by the end of the second minute the first joystick is at 5%, second is at 1%; </li>
                                                <li> at the beginning of the third minute connect second joystick to the charger, after this minute the first joystick is at 3%, the second one is at 2%; </li>
                                                <li> continue the game without changing charger, by the end of the fourth minute first joystick is at 1%, second one is at 3%; </li>
                                                <li>at the beginning of the fifth minute connect first joystick to the charger, after this minute the first joystick is at 2%, the second one is at 1%;</li>
                                                <li>at the beginning of the sixth minute connect second joystick to the charger, after this minute the first joystick is at 0%, the second one is at 2%. </li>
                                            </ul> <br/>
                                            <p className='expl'>
                                            After that the first joystick is completely discharged and the game is stopped.
                                            </p> <br/>
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
                                            #include&lt;iostream&gt;<br/> <br/>
                                            typedef long long int ll; <br/>
                                            #define pp pair&lt;ll,ll&gt; <br/>
                                            #define inf 1000000007 <br/>
                                            #define max2(a,b) ((a&lt;b)?b:a) <br/>
                                            #define max3(a,b,c) max2(max2(a,b),c) <br/>
                                            #define min2(a,b) ((a&gt;b)?b:a) <br/>
                                            #define min3(a,b,c) min2(min2(a,b),c) <br/> <br/>
                                            using namespace std; <br/> <br/>
                                            int main() <br/>
                                            &#123; <br/> &emsp;
                                            ll i,j,k; <br/> &emsp;
                                            ll count=0; <br/> &emsp;
                                            ll a,b; <br/> &emsp;
                                            cin&gt;&gt;a&gt;&gt;b; <br/> &emsp;
                                            if(a==1 && b==1) <br/> &emsp;
                                            &#123;  <br/> &emsp; &emsp;
                                            cout&lt;&lt;"0"; <br/> &emsp; &emsp;
                                            return 0; <br/> &emsp; 
                                            &#125; <br/> <br/> &emsp;
                                            while(a&gt;0 && b&gt;0)
                                            &#123; <br/> &emsp; &emsp;
                                            if(a&gt;b)<br/> &emsp; &emsp;
                                            &#123;<br/> &emsp; &emsp; &emsp;
                                            a-=2;<br/> &emsp; &emsp; &emsp;
                                            b++;<br/>  &emsp; &emsp;
                                            &#125;<br/> &emsp; &emsp;
                                            else<br/> &emsp; &emsp;
                                            &#123; <br/> &emsp; &emsp; &emsp;
                                            a++;<br/> &emsp; &emsp; &emsp;
                                            b-=2; <br/> &emsp; &emsp;
                                            &#125; <br/> <br/> &emsp; &emsp;
                                            count++; <br/> &emsp;
                                            &#125; <br/> <br/> &emsp;
                                            cout&lt;&lt;count;<br/> &emsp; 
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

                                <p id="cf"> You can read on <a href="https://codeforces.com/contest/651/problem/A" target="_blank" id="cf_link"> Codeforcse</a></p>
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