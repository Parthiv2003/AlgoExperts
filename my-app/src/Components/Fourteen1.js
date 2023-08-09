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
                            <h1> Make It Round </h1>
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
                                            <p className="expl"> Inflation has occurred in Berlandia, so the store needs to change the price of goods. <br/> <br/> The current price of good n is given. It is allowed to increase the price of the good by k times, with 1≤k≤m, k is an integer. Output the roundest possible new price of the good. That is, the one that has the maximum number of zeros at the end. <br/> <br/> For example, the number 481000 is more round than the number 1000010 (three zeros at the end of 481000 and only one at the end of 1000010). <br/> <br/> If there are several possible variants, output the one in which the new price is maximal. <br/> <br/> If it is impossible to get a rounder price, output n⋅m (that is, the maximum possible price). </p>
                                            
                                            <br/>
                                            <h4 className="head"> INPUT </h4>
                                            <br/> <br/> <br/> 
                                            <p className="expl">The first line contains a single integer t (1≤t≤10<sup>4</sup>) —the number of test cases in the test. <br/> <br/> Each test case consists of one line. <br/> <br/> This line contains two integers: n and m (1≤n,m≤10<sup>9</sup>). Where n is the old price of the good, and the number m means that you can increase the price n no more than m times</p>  

                                            <br/>
                                            <h4 className="head"> OUTPUT </h4>  
                                            <br/> <br/> <br/>  
                                            <p className="expl"> For each test case, output on a separate line the roundest integer of the form n⋅k (1≤k≤m, k — an integer). <br/> <br/> If there are several possible variants, output the one in which the new price (value n⋅k) is maximal. <br/> <br/> If it is impossible to get a more rounded price, output n⋅m (that is, the maximum possible price).</p> <br/>

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
                                                    <td className="input" style={{borderTop: "1px solid gray"}}> 10 </td>
                                                </tr>
                                                <tr>
                                                    <td className="input"> 6 &emsp; 11 </td>
                                                </tr>
                                                <tr>
                                                    <td className='input'> 5 &emsp; 43 </td>
                                                </tr>
                                                <tr>
                                                    <td className="input"> 13 &emsp; 5 </td>
                                                </tr>
                                                <tr>
                                                    <td className='input'> 4 &emsp; 16 </td>
                                                </tr>
                                                <tr>
                                                    <td className="input"> 10050 &emsp; 12345 </td>
                                                </tr>
                                                <tr>
                                                    <td className='input'> 2 &emsp; 6 </td>
                                                </tr>
                                                <tr>
                                                    <td className="input"> 4 &emsp; 30 </td>
                                                </tr>
                                                <tr>
                                                    <td className='input'> 25 &emsp; 10 </td>
                                                </tr>
                                                <tr>
                                                    <td className="input"> 2 &emsp; 81 </td>
                                                </tr>
                                                <tr>
                                                    <td className='input'  style={{borderBottom: "1px solid gray"}}> 1 &emsp; 7 </td>
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
                                                    <td className="output" style={{borderTop: "1px solid gray"}}> 60 </td>
                                                </tr>
                                                <tr>
                                                    <td className="output"> 200 </td>
                                                </tr>
                                                <tr>
                                                    <td className="output"> 65 </td>
                                                </tr>
                                                <tr>
                                                    <td className="output"> 60 </td>
                                                </tr>
                                                <tr>
                                                    <td className="output"> 120600000 </td>
                                                </tr>
                                                <tr>
                                                    <td className="output"> 10 </td>
                                                </tr>
                                                <tr>
                                                    <td className="output"> 100 </td>
                                                </tr>
                                                <tr>
                                                    <td className="output"> 200 </td>
                                                </tr>
                                                <tr>
                                                    <td className="output"> 100 </td>
                                                </tr>
                                                <tr>
                                                    <td className="output" style={{borderBottom: "1px solid gray"}}> 7 </td>
                                                </tr>
                                            </table>
                                            <br/>

                                            <h4 className="head"> EXPLANATION </h4>  
                                            <br/> <br/> <br/> 
                                            <p className='expl' style={{paddingLeft: '0px'}}> In the first case n=6, m=11. We cannot get a number with two zeros or more at the end, because we need to increase the price 50 times, but 50&gt;m=11. The maximum price multiple of 10 would be 6⋅10=60. <br/> <br/> In the second case n=5, m=43. The maximum price multiple of 100 would be 5⋅40=200. <br/> <br/> In the third case, n=13, m=5. All possible new prices will not end in 0, then you should output n⋅m=65. <br/> <br/> In the fourth case, you should increase the price 15 times. <br/> <br/>In the fifth case, increase the price 12000 times.</p> 
                                            <br/>

                                            <h4 className="head"> TAGS </h4>  
                                            <br/> <br/> <br/>  
                                            <p className="expl tag"> Brute Force </p> 
                                            <p className="expl tag"> Number Theory </p>
                                            <br/>

                                            <h4 className="head"> SOURCE CODE </h4>  
                                            <br/> <br/> <br/>  
                                            <p className="expl" style={{fontSize: "18px"}}> Language: <b>Python</b> </p>
                                            <button type="button" className="toolTip copy" onClick={copyCode} style={{left: "-10%", top: "-30px", width: "30px", height: "30px"}}>
                                                <span className="toolText" id="tip"> Copy </span>
                                                <i className="fa fa-copy"></i>
                                            </button>
                                            <div className="expl code" id="code"> 
                                                for _ in range(int(input())): <br/> &emsp;
                                                num, m = map(int, input().split()) <br/> &emsp;
                                                count_2 = 0 <br/> &emsp;
                                                count_5 = 0 <br/> &emsp;
                                                num_copy = num <br/> &emsp;
                                                while num_copy % 2 == 0: <br/> &emsp; &emsp;
                                                num_copy //= 2 <br/> &emsp; &emsp;
                                                count_2 += 1 <br/> &emsp; 
                                                while num_copy % 5 == 0: <br/> &emsp; &emsp;
                                                    num_copy //= 5 <br/> &emsp; &emsp;
                                                    count_5 += 1 <br/> <br/> &emsp;res = 1 <br/> <br/> &emsp;
                                                    b = 2 if count_2 &lt; count_5 else 5 <br/> &emsp;
                                                    for i in range(abs(count_5 - count_2)): <br/> &emsp; &emsp;
                                                    if (res * b) &lt; m: <br/> &emsp; &emsp; &emsp;
                                                    res *= b <br/> &emsp; &emsp;
                                                    else: <br/> &emsp; &emsp; &emsp;
                                                    break <br/> &emsp; 
                                                    while res * 10 &lt; m: <br/> &emsp; &emsp;
                                                    res *= 10 <br/> &emsp; &emsp;
                                                    res *= m // res <br/> &emsp; &emsp;
                                                    print(res * num) <br/>
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
                                            <p className="expl tag"> Number Theory </p>
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
                                            <p className="expl"> Inflation has occurred in Berlandia, so the store needs to change the price of goods. <br/> <br/> The current price of good n is given. It is allowed to increase the price of the good by k times, with 1≤k≤m, k is an integer. Output the roundest possible new price of the good. That is, the one that has the maximum number of zeros at the end. <br/> <br/> For example, the number 481000 is more round than the number 1000010 (three zeros at the end of 481000 and only one at the end of 1000010). <br/> <br/> If there are several possible variants, output the one in which the new price is maximal. <br/> <br/> If it is impossible to get a rounder price, output n⋅m (that is, the maximum possible price). </p> <br/>

                                            <h4 className="head"> INPUT </h4>
                                            <br/> <br/> <br/> 
                                            <p className="expl"> The first line contains a single integer t (1≤t≤10<sup>4</sup>) —the number of test cases in the test. <br/> <br/> Each test case consists of one line. <br/> <br/> This line contains two integers: n and m (1≤n,m≤10<sup>9</sup>). Where n is the old price of the good, and the number m means that you can increase the price n no more than m times</p>
                                            <br/>

                                            <h4 className="head"> OUTPUT </h4>  
                                            <br/> <br/> <br/>  
                                            <p className="expl"> For each test case, output on a separate line the roundest integer of the form n⋅k (1≤k≤m, k — an integer). <br/> <br/> If there are several possible variants, output the one in which the new price (value n⋅k) is maximal. <br/> <br/> If it is impossible to get a more rounded price, output n⋅m (that is, the maximum possible price).</p> <br/>

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
                                                    <td className="input" style={{borderTop: "1px solid gray;"}}> 10 </td>
                                                </tr>
                                                <tr>
                                                    <td className="input"> 6 &emsp; 11 </td>
                                                </tr>
                                                <tr>
                                                    <td className='input'> 5 &emsp; 43 </td>
                                                </tr>
                                                <tr>
                                                    <td className="input"> 13 &emsp; 5 </td>
                                                </tr>
                                                <tr>
                                                    <td className='input'> 4 &emsp; 16 </td>
                                                </tr>
                                                <tr>
                                                    <td className="input"> 10050 &emsp; 12345 </td>
                                                </tr>
                                                <tr>
                                                    <td className='input'> 2 &emsp; 6 </td>
                                                </tr>
                                                <tr>
                                                    <td className="input"> 4 &emsp; 30 </td>
                                                </tr>
                                                <tr>
                                                    <td className='input'> 25 &emsp; 10 </td>
                                                </tr>
                                                <tr>
                                                    <td className="input"> 2 &emsp; 81 </td>
                                                </tr>
                                                <tr>
                                                    <td className='input'  style={{borderBottom: "1px solid gray"}}> 1 &emsp; 7 </td>
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
                                                    <td className="output" style={{borderTop: "1px solid gray"}}> 60 </td>
                                                </tr>
                                                <tr>
                                                    <td className="output"> 200 </td>
                                                </tr>
                                                <tr>
                                                    <td className="output"> 65 </td>
                                                </tr>
                                                <tr>
                                                    <td className="output"> 60 </td>
                                                </tr>
                                                <tr>
                                                    <td className="output"> 120600000 </td>
                                                </tr>
                                                <tr>
                                                    <td className="output"> 10 </td>
                                                </tr>
                                                <tr>
                                                    <td className="output"> 100 </td>
                                                </tr>
                                                <tr>
                                                    <td className="output"> 200 </td>
                                                </tr>
                                                <tr>
                                                    <td className="output"> 100 </td>
                                                </tr>
                                                <tr>
                                                    <td className="output" style={{borderBottom: "1px solid gray"}}> 7 </td>
                                                </tr>
                                            </table>
                                            <br/> 

                                            <h4 className="head"> EXPLANATION </h4>  
                                            <br/> <br/> <br/>  
                                            <p className="expl" style={{paddingLeft: "0px"}}> In the first case n=6, m=11. We cannot get a number with two zeros or more at the end, because we need to increase the price 50 times, but 50&gt;m=11. The maximum price multiple of 10 would be 6⋅10=60. <br/> <br/> In the second case n=5, m=43. The maximum price multiple of 100 would be 5⋅40=200. <br/> <br/> In the third case, n=13, m=5. All possible new prices will not end in 0, then you should output n⋅m=65. <br/> <br/> In the fourth case, you should increase the price 15 times. <br/> <br/>In the fifth case, increase the price 12000 times.</p> <br/>
                                        </div>
                                    </div>
                                </div>

                                <div id="scode" className="tab-pane fade">
                                    <div className="inner-card">
                                        <div className="inner-container">
                                            <br/>
                                            <h4 className="head"> SOURCE CODE </h4>  
                                            <br/> <br/> <br/>  
                                            <p className="expl" style={{fontSize: "18px"}}> Language: <b> Python </b> </p>
                                            <button type="button" className="toolTip copy" onClick={copyCode} style={{left: "-10%", top: "-30px", width: "30px", height: "30px"}}>
                                                <span className="toolText" id="tip"> Copy </span>
                                                <i className="fa fa-copy"></i>
                                            </button>
                                            <div className="expl code" id="code"> 
                                            for _ in range(int(input())): <br/> &emsp;
                                                num, m = map(int, input().split()) <br/> &emsp;
                                                count_2 = 0 <br/> &emsp;
                                                count_5 = 0 <br/> &emsp;
                                                num_copy = num <br/> &emsp;
                                                while num_copy % 2 == 0: <br/> &emsp; &emsp;
                                                num_copy //= 2 <br/> &emsp; &emsp;
                                                count_2 += 1 <br/> &emsp; 
                                                while num_copy % 5 == 0: <br/> &emsp; &emsp;
                                                    num_copy //= 5 <br/> &emsp; &emsp;
                                                    count_5 += 1 <br/> <br/> &emsp;res = 1 <br/> <br/> &emsp;
                                                    b = 2 if count_2 &lt; count_5 else 5 <br/> &emsp;
                                                    for i in range(abs(count_5 - count_2)): <br/> &emsp; &emsp;
                                                    if (res * b) &lt; m: <br/> &emsp; &emsp; &emsp;
                                                    res *= b <br/> &emsp; &emsp;
                                                    else: <br/> &emsp; &emsp; &emsp;
                                                    break <br/> &emsp; 
                                                    while res * 10 &lt; m: <br/> &emsp; &emsp;
                                                    res *= 10 <br/> &emsp; &emsp;
                                                    res *= m // res <br/> &emsp; &emsp;
                                                    print(res * num) <br/> 
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

                                <p id="cf"> You can read on <a href="https://codeforces.com/problemset/problem/1759/D" target="_blank" id="cf_link"> Codeforcse</a></p>
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