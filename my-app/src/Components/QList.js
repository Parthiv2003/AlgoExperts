import React from 'react'
import './QList.css';
import $ from 'jquery';
import { Link } from 'react-router-dom';

$(function () {
    var front = document.getElementsByClassName("front");
    var back = document.getElementsByClassName("back");

    var highest = 0;
    var absoluteSide = "";

    for (var i = 0; i < front.length; i++) {
        if (front[i].offsetHeight > back[i].offsetHeight) {
            if (front[i].offsetHeight > highest) {
                highest = front[i].offsetHeight;
                absoluteSide = ".front";
            }
        }
        else if (back[i].offsetHeight > highest) {
            highest = back[i].offsetHeight;
            absoluteSide = ".back";
        }
    }

    $(".front").css("height", highest);
    $(".back").css("height", highest);
    $(absoluteSide).css("position", "absolute");

    $('.smallScreen').on('click', function () {
        $('#nav #navlist').toggleClass("active");
        $('.smallScreen i').toggleClass("active");
    });
});

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

function showAlgo() {
    var op = document.getElementById("ratting").selectedIndex;
    $(function () {
        $("#card1").hide();
        $("#card2").hide();
        $("#card3").hide();
        $("#card4").hide();
        $("#card5").hide();
        $("#card6").hide();
        $("#card7").hide();
        $("#card8").hide();
        $("#card9").hide();
        $("#card10").hide();
        $("#card11").hide();
        $("#card12").hide();
        $("#card13").hide();
        $("#card14").hide();
        $("#card15").hide();
        $("#card16").hide();
        $("#card17").hide();
        $("#card18").hide();
        $("#card19").hide();
        $("#card20").hide();
        $("#card21").hide();
    });

    var cards;
    if (op == 0)
        cards = document.getElementsByClassName("all");
    else if (op == 1)
        cards = document.getElementsByClassName("eight");
    else if (op == 2)
        cards = document.getElementsByClassName("nine");
    else if (op == 3)
        cards = document.getElementsByClassName("thd");
    else if (op == 4)
        cards = document.getElementsByClassName("eleven");
    else if (op == 5)
        cards = document.getElementsByClassName("twl");
    else if (op == 6)
        cards = document.getElementsByClassName("thirteen");
    else if (op == 7)
        cards = document.getElementsByClassName("fourteen");
    else if (op == 8)
        cards = document.getElementsByClassName("fifteen");
    else if (op == 9)
        cards = document.getElementsByClassName("sixteen");
    else if (op == 10)
        cards = document.getElementsByClassName("seventeen");
    else if (op == 11)
        cards = document.getElementsByClassName("eighteen");
    else if (op == 12)
        cards = document.getElementsByClassName("nineteen");
    else if (op == 13)
        cards = document.getElementsByClassName("twenty");

    var c = 0;
    $(function () {
        if (c < cards.length) {
            $("#card1").show();
            c++;
        }
        if (c < cards.length) {
            $("#card2").show();
            c++;
        }
        if (c < cards.length) {
            $("#card3").show();
            c++;
        }
        if (c < cards.length) {
            $("#card4").show();
            c++;
        }
        if (c < cards.length) {
            $("#card5").show();
            c++;
        }
        if (c < cards.length) {
            $("#card6").show();
            c++;
        }
        if (c < cards.length) {
            $("#card7").show();
            c++;
        }
        if (c < cards.length) {
            $("#card8").show();
            c++;
        }
        if (c < cards.length) {
            $("#card9").show();
            c++;
        }
        if (c < cards.length) {
            $("#card10").show();
            c++;
        }
        if (c < cards.length) {
            $("#card11").show();
            c++;
        }
        if (c < cards.length) {
            $("#card12").show();
            c++;
        }
        if (c < cards.length) {
            $("#card13").show();
            c++;
        }
        if (c < cards.length) {
            $("#card14").show();
            c++;
        }
        if (c < cards.length) {
            $("#card15").show();
            c++;
        }
        if (c < cards.length) {
            $("#card16").show();
            c++;
        }
        if (c < cards.length) {
            $("#card17").show();
            c++;
        }
        if (c < cards.length) {
            $("#card18").show();
            c++;
        }
        if (c < cards.length) {
            $("#card19").show();
            c++;
        }
        if (c < cards.length) {
            $("#card20").show();
            c++;
        }
        if (c < cards.length) {
            $("#card21").show();
            c++;
        }

        for (var i = 0; i < cards.length; i++) {
            var head = document.getElementsByClassName("qname");
            var qn = cards[i].getElementsByClassName("qname");
            head[2 * i].innerHTML = qn[0].innerHTML;
            var nt1 = document.getElementsByClassName("p1");
            var nt2 = document.getElementsByClassName("p2");
            var t1 = cards[i].getElementsByClassName("p1");
            var t2 = cards[i].getElementsByClassName("p2");
            nt1[i].innerHTML = t1[0].innerHTML;
            nt2[i].innerHTML = t2[0].innerHTML;
            var exp = document.getElementsByClassName("expl");
            var mxp = cards[i].getElementsByClassName("expl");
            exp[i].innerHTML = mxp[0].innerHTML;
            var ques = document.getElementsByClassName("getQ");
            var qs  = cards[i].getElementsByClassName("getQ");
            ques[i].innerHTML = qs[0].innerHTML;
        }
    });
}

export default function QList() {
    return (
        <>
            <div className="d-flex flex-column">
                <div className="d-flex">
                    <h2 id="heading"> <b> RATTINGWISE PROBLEM </b> </h2>
                    <select name="ratting" id="ratting">
                        <option value="all"> ---Select Ratting--- </option>
                        <option value="800"> 800 </option>
                        <option value="900"> 900 </option>
                        <option value="1000"> 1000 </option>
                        <option value="1100"> 1100 </option>
                        <option value="1200"> 1200 </option>
                        <option value="1300"> 1300 </option>
                        <option value="1400"> 1400 </option>
                        <option value="1500"> 1500 </option>
                        <option value="1600"> 1600 </option>
                        <option value="1700"> 1700 </option>
                        <option value="1800"> 1800 </option>
                        <option value="1900"> 1900 </option>
                        <option value="2000"> 2000 </option>
                    </select>
                    <button id="search" type="submit" onClick={showAlgo}>
                        <i className="fa fa-search"></i>
                    </button>
                    <div className="container" style={{marginBottom : "5%"}}>
                        <div className="row" style={{marginTop:"30%"}}>
                            <div className="col-md-4 card-container first eight all" id="card1">
                                <div className="card card-flip">
                                    <div className="front card-block">
                                        <h4 className="qname"> <b> Vasya and Coins </b> </h4>
                                        <p className="card-text p1"> 800 </p>
                                        <p className="card-text p2"> Greedy </p>
                                    </div>
                                    <div className="back card-block">
                                        <h3 className="qname"> <b> Problem Explanation </b> </h3>
                                        <br /> <br />
                                        <p className="expl"> For example, if a = 1 and b = 1 (he has one 1-burle coin and one 2-burle coin), then: <br/> 
                                            <ul>
                                                <li>he can pay 1 burle without change, paying with one 1-burle coin,</li>
                                                <li>he can pay 2 burle without change, paying with one 2-burle coin,...</li>
                                            </ul>
                                        </p>
                                        <div className='getQ'>
                                            <Link to='/Eight1'>
                                                <button className="rm"> Read More </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 card-container sc thd all" id="card2">
                                <div className="card card-flip">
                                    <div className="front card-block">
                                        <h4 className="qname"> <b> Traffic Light </b> </h4>
                                        <p className="card-text p1"> 1000 </p>
                                        <p className="card-text p2"> Implementation </p>
                                    </div>
                                    <div className="back card-block">
                                        <h3 className="qname"> <b> Problem Explanation </b> </h3>
                                        <br /> <br />
                                        <p className="expl"> You find yourself on an unusual crossroad with a weird traffic light. That traffic light has three possible colors: red (r), yellow (y), green (g). It is known that the traffic light repeats its colors every n seconds and at the i-th second the color ...</p>
                                        
                                        <div className='getQ'>
                                        <Link to='/Ten1'>
                                            <button className="rm"> Read More </button>
                                        </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 card-container sc fourteen all" id="card3">
                                <div className="card card-flip">
                                    <div className="front card-block">
                                        <h4 className="qname"> <b> Make It Round </b> </h4>
                                        <p className="card-text p1"> 1400 </p>
                                        <p className="card-text p2"> Brute Force </p>
                                    </div>
                                    <div className="back card-block">
                                        <h3 className="qname"> <b> Problem Explanation </b> </h3>
                                        <br /> <br />
                                        <p className="expl"> Inflation has occurred in Berlandia, so the store needs to change the price of goods. <br/> The current price of good n is given. It is allowed to increase the price of the good by k times, with 1≤k≤m, k is an integer. Output the roundest possible new price ...</p>
                                        <div className='getQ'>
                                        <Link to='/Fourteen1' >
                                            <button className="rm"> Read More </button>
                                        </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 card-container twl all" id="card4">
                                <div className="card card-flip">
                                    <div className="front card-block">
                                        <h4 className="qname"> <b> Land Lot </b> </h4>
                                        <p className="card-text p1"> 1200 </p>
                                        <p className="card-text p2"> Implementation </p>
                                    </div>
                                    <div className="back card-block">
                                        <h3 className="qname"> <b> Problem Explanation </b> </h3>
                                        <br /> <br />
                                        <p className="expl"> Vasya has a beautiful garden where wonderful fruit trees grow and yield fantastic harvest every year. But lately thieves started to sneak into the garden at nights and steal the fruit too often. Vasya can’t spend the nights in the garden and guard the fruit... </p>
                                        <div className='getQ'>
                                        <Link to='/Twelev1'>
                                            <button className="rm"> Read More </button>
                                        </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 card-container nine all" id="card5">
                                <div className="card card-flip">
                                    <div className="front card-block">
                                        <h4 className="qname"> <b> Discounts </b> </h4>
                                        <p className="card-text p1"> 900 </p>
                                        <p className="card-text p2"> Greedy </p>
                                    </div>
                                    <div className="back card-block">
                                        <h3 className="qname"> <b> Problem Explanation </b> </h3>
                                        <br /> <br />
                                        <p className="expl"> You came to a local shop and want to buy some chocolate bars. There are n bars in the shop, i-th of them costs a<sub>i</sub> coins (and you want to buy all of them). <br/>You have m different coupons that allow you to buy chocolate bars...</p>
                                        <div className='getQ'>
                                        <Link to='/nine1'>
                                            <button className="rm"> Read More </button>
                                        </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 card-container eight all" id="card6">
                                <div className="card card-flip">
                                    <div className="front card-block">
                                        <h4 className="qname"> <b> Puzzle From the Future </b> </h4>
                                        <p className="card-text p1"> 800 </p>
                                        <p className="card-text p2"> Greedy </p>
                                    </div>
                                    <div className="back card-block">
                                        <h3 className="qname"> <b> Problem Explanation </b> </h3>
                                        <br /> <br />
                                        <p className="expl">In the 2022 year, Mike found two binary integers a and b of length n <br/> (both of them are written only by digits 0 and 1) that can have leading zeroes. <br/> In order not to forget them, he wanted to construct integer d in the ...</p>
                                        <div className='getQ'>
                                        <Link to='/Eight2'>
                                            <button className="rm"> Read More </button>
                                        </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 card-container sixteen all" id="card7">
                                <div className="card card-flip">
                                    <div className="front card-block">
                                        <h4 className="qname"> <b>  Military Problem </b> </h4>
                                        <p className="card-text p1"> 1600 </p>
                                        <p className="card-text p2"> Graph </p>
                                    </div>
                                    <div className="back card-block">
                                        <h3 className="qname"> <b> Problem Explanation </b> </h3>
                                        <br /> <br />
                                        <p className="expl">In this problem you will have to help Berland army with organizing their command delivery system. <br/>There are n officers in Berland army. The first officer is the commander of the army, and he does not have any superiors. Every...</p>
                                        <div className='getQ'>
                                        <Link to='/Sixteen1'>
                                            <button className="rm"> Read More </button>
                                        </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 card-container thirteen all" id="card8">
                                <div className="card card-flip">
                                    <div className="front card-block">
                                        <h4 className="qname"> <b> Swords </b> </h4>
                                        <p className="card-text p1"> 1300 </p>
                                        <p className="card-text p2"> Math </p>
                                    </div>
                                    <div className="back card-block">
                                        <h3 className="qname"> <b> Problem Explanation </b> </h3>
                                        <br /> <br />
                                        <p className="expl">There were n types of swords in the theater basement which had been used during the plays. Moreover there were exactly x swords of each type. y people have broken into the theater basement and each of them has taken exactly z swords of ...</p>
                                        <div className='getQ'>
                                        <Link to='/Thirteen1'>
                                            <button className="rm"> Read More </button>
                                        </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 card-container thirteen all" id="card9">
                                <div className="card card-flip">
                                    <div className="front card-block">
                                        <h4 className="qname"> <b> Oh Those Palindromes </b> </h4>
                                        <p className="card-text p1"> 1300 </p>
                                        <p className="card-text p2"> Constructive </p>
                                    </div>
                                    <div className="back card-block">
                                        <h3 className="qname"> <b> Problem Explanation </b> </h3>
                                        <br /> <br />
                                        <p className="expl">A non-empty string is called palindrome, if it reads the same from the left to the right and from the right to the left. For example, "abcba", "a", and "abba" are palindromes, while "abab" and "xy" are not. <br/> A string is called a substring of another string, if ...</p>
                                        <div className='getQ'>
                                        <Link to='/Thirteen2'>
                                            <button className="rm"> Read More </button>
                                        </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 card-container thd all" id="card10">
                                <div className="card card-flip">
                                    <div className="front card-block">
                                        <h4 className="qname"> <b> Pasha and Stick </b> </h4>
                                        <p className="card-text p1"> 1000 </p>
                                        <p className="card-text p2"> Math </p>
                                    </div>
                                    <div className="back card-block">
                                        <h3 className="qname"> <b> Problem Explanation </b> </h3>
                                        <br /> <br />
                                        <p className="expl">Pasha has a wooden stick of some positive integer length n. He wants to perform exactly three cuts to get four parts of the stick. Each part must have some positive integer length and the sum of these lengths will obviously be n...</p>
                                        <div className='getQ'>
                                        <Link to='/Ten2' >
                                            <button className="rm"> Read More </button>
                                        </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 card-container twl all" id="card11">
                                <div className="card card-flip">
                                    <div className="front card-block">
                                        <h4 className="qname"> <b>  Lefthanders and Righthanders </b> </h4>
                                        <p className="card-text p1"> 1200 </p>
                                        <p className="card-text p2"> Implementation </p>
                                    </div>
                                    <div className="back card-block">
                                        <h3 className="qname"> <b> Problem Explanation </b> </h3>
                                        <br /> <br />
                                        <p className="expl"> One fine October day a mathematics teacher Vasily Petrov went to a class and saw there n pupils who sat at the n/2 desks, two people at each desk. Vasily quickly realized that number n is even. Like all true mathematicians, Vasily has all students ...</p>
                                        <div className='getQ'>
                                        <Link to='/Twelev2'>
                                            <button className="rm"> Read More </button>
                                        </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 card-container eleven all" id="card12">
                                <div className="card card-flip">
                                    <div className="front card-block">
                                        <h4 className="qname"> <b> Joysticks </b> </h4>
                                        <p className="card-text p1"> 1100 </p>
                                        <p className="card-text p2"> Greedy </p>
                                    </div>
                                    <div className="back card-block">
                                        <h3 className="qname"> <b> Problem Explanation </b> </h3>
                                        <br /> <br />
                                        <p className="expl">Friends are going to play console. They have two joysticks and only one charger for them. Initially first joystick is charged at a<sub>1</sub> percent and second one is charged at a<sub>2</sub> percent. You can connect charger to a joystick only at the beginning ...</p>
                                        <div className='getQ'>
                                        <Link to='/Eleven1'>
                                            <button className="rm"> Read More </button>
                                        </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 card-container nine all" id="card13">
                                <div className="card card-flip">
                                    <div className="front card-block">
                                        <h4 className="qname"> <b> Duff and Meat </b> </h4>
                                        <p className="card-text p1"> 900 </p>
                                        <p className="card-text p2"> Greedy </p>
                                    </div>
                                    <div className="back card-block">
                                        <h3 className="qname"> <b> Problem Explanation </b> </h3>
                                        <br /> <br />
                                        <p className="expl">Duff is addicted to meat! Malek wants to keep her happy for n days. In order to be happy in i-th day, she needs to eat exactly a<sub>i</sub> kilograms of meat. <br/> There is a big shop uptown and Malek wants to buy meat for her from ...</p>
                                        <div className='getQ'>
                                        <Link to='/Nine2'>
                                            <button className="rm"> Read More </button>
                                        </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 card-container twl all" id="card14">
                                <div className="card card-flip">
                                    <div className="front card-block">
                                        <h4 className="qname"> <b> The Wall </b> </h4>
                                        <p className="card-text p1"> 1200 </p>
                                        <p className="card-text p2"> Math </p>
                                    </div>
                                    <div className="back card-block">
                                        <h3 className="qname"> <b> Problem Explanation </b> </h3>
                                        <br /> <br />
                                        <p className="expl"> Iahub and his friend Floyd have started painting a wall. Iahub is painting the wall red and Floyd is painting it pink. You can consider the wall being made of a very large number of bricks, numbered 1, 2, 3 and so on <br/> Iahub has the ...</p>
                                        <div className='getQ'>
                                        <Link to='/Twelev3'>
                                            <button className="rm"> Read More </button>
                                        </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 card-container eight all" id="card15">
                                <div className="card card-flip">
                                    <div className="front card-block">
                                        <h4 className="qname"> <b>  Sleuth </b> </h4>
                                        <p className="card-text p1"> 800 </p>
                                        <p className="card-text p2"> Implementation </p>
                                    </div>
                                    <div className="back card-block">
                                        <h3 className="qname"> <b> Problem Explanation </b> </h3>
                                        <br /> <br />
                                        <p className="expl">Vasya plays the sleuth with his friends. The rules of the game are as follows: those who play for the first time, that is Vasya is the sleuth, he should investigate a "crime" and find out what is happening. He can ask any questions whatsoever that can be ...</p>
                                        <div className='getQ'>
                                        <Link to='/Eight3'>
                                            <button className="rm"> Read More </button>
                                        </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 card-container nine all" id="card16">
                                <div className="card card-flip">
                                    <div className="front card-block">
                                        <h4 className="qname"> <b> Delete from the Left</b> </h4>
                                        <p className="card-text p1"> 900 </p>
                                        <p className="card-text p2"> String </p>
                                    </div>
                                    <div className="back card-block">
                                        <h3 className="qname"> <b> Problem Explanation </b> </h3>
                                        <br /> <br />
                                        <p className="expl">You are given two strings s and t. In a single move, you can choose any of two strings and delete the first (that is, the leftmost) character. After a move, the length of the string decreases by 1. You can't choose a string if it is empty. <br/> For example:...</p>
                                        <div className='getQ'>
                                        <Link to='/Nine3'>
                                            <button className="rm"> Read More </button>
                                        </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 card-container fifteen all" id="card17">
                                <div className="card card-flip">
                                    <div className="front card-block">
                                        <h4 className="qname"> <b>Workout plan</b> </h4>
                                        <p className="card-text p1"> 1500 </p>
                                        <p className="card-text p2"> DS </p>
                                    </div>
                                    <div className="back card-block">
                                        <h3 className="qname"> <b> Problem Explanation </b> </h3>
                                        <br /> <br />
                                        <p className="expl">Alan decided to get in shape for the summer, so he created a precise workout plan to follow. His plan is to go to a different gym every day during the next N days and lift X[i] grams on day i. In order to improve his workout performance ...</p>
                                        <div className='getQ'>
                                        <Link to='/Fifteen1'>
                                            <button className="rm"> Read More </button>
                                        </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 card-container twenty all" id="card18">
                                <div className="card card-flip">
                                    <div className="front card-block">
                                        <h4 className="qname"> <b> Generate a String </b> </h4>
                                        <p className="card-text p1"> 2000 </p>
                                        <p className="card-text p2"> DFS </p>
                                    </div>
                                    <div className="back card-block">
                                        <h3 className="qname"> <b> Problem Explanation </b> </h3>
                                        <br /> <br />
                                        <p className="expl">zscoder wants to generate an input file for some programming competition problem. <br/> His input is a string consisting of n letters 'a'. He is too lazy to write a generator so he will manually generate the input in a text editor...</p>
                                        <div className='getQ'>
                                        <Link to='/Twenty1'>
                                            <button className="rm"> Read More </button>
                                        </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 card-container twl all" id="card19">
                                <div className="card card-flip">
                                    <div className="front card-block">
                                        <h4 className="qname"> <b> Code Parsing </b> </h4>
                                        <p className="card-text p1"> 1200 </p>
                                        <p className="card-text p2"> Implementation </p>
                                    </div>
                                    <div className="back card-block">
                                        <h3 className="qname"> <b> Problem Explanation </b> </h3>
                                        <br/> <br />
                                        <p className="expl">Little Vitaly loves different algorithms. Today he has invented a new algorithm just for you. Vitaly's algorithm works with string s, consisting of characters "x" and "y", and uses two following operations at runtime: <br/> 
                                            <ul style={{listStyle: "number"}}>
                                                <li> Find two consecutive ...</li>
                                            </ul>
                                        </p>
                                        <div className='getQ'>
                                            <Link to='/Twelev4' >
                                                <button className="rm"> Read More </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 card-container thirteen all" id="card20">
                                <div className="card card-flip">
                                    <div className="front card-block">
                                        <h4 className="qname"> <b>  Vika and Squares </b> </h4>
                                        <p className="card-text p1"> 1300 </p>
                                        <p className="card-text p2"> Constructive </p>
                                    </div>
                                    <div className="back card-block">
                                        <h3 className="qname"> <b> Problem Explanation </b> </h3>
                                        <br /> <br />
                                        <p className="expl"> Vika has n jars with paints of distinct colors. All the jars are numbered from 1 to n and the i-th jar contains ai liters of paint of color i. <br/> Vika also has an infinitely long rectangular piece of paper of width 1, consisting of squares of size 1 × 1...</p>
                                        <div className='getQ'>
                                        <Link to='/Thirteen3'>
                                            <button className="rm"> Read More </button>
                                        </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 card-container nineteen all" id="card21">
                                <div className="card card-flip">
                                    <div className="front card-block">
                                        <h4 className="qname"> <b> Event Dates </b> </h4>
                                        <p className="card-text p1"> 1900 </p>
                                        <p className="card-text p2"> Sorting </p>
                                    </div>
                                    <div className="back card-block">
                                        <h3 className="qname"> <b> Problem Explanation </b> </h3>
                                        <br /> <br />
                                        <p className="expl">On a history lesson the teacher asked Vasya to name the dates when n famous events took place. He doesn't remembers the exact dates but he remembers a segment of days [l<sub>i</sub>, r<sub>i</sub>] (inclusive) on which the event could have taken ...</p>
                                        <div className='getQ'>
                                        <Link to='/Nineteen1'>
                                            <button className="rm"> Read More </button>
                                        </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link to='/Choose'>
                            <a href="#" className="expl toolTip" style={{width: "30px", height: "30px", left: "-57%"}}>
                                <i className="fa fa-arrow-circle-left" id="back"></i>
                                <span className="toolText" id="tip" style={{top: "80%", left: "-80%", width: "200%", height: "180%", padding: "5px"}}> Back </span>
                            </a>
                        </Link>

                        <div class="go-top">
                            <i class="fa fa-arrow-up"></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}