'use strict';
const score1 =document.querySelector("#score--0");
const score2 =document.querySelector("#score--1");
const dice_1 =document.querySelector(".dice");
const btnroll =document.querySelector(".btn--roll");
const hold_btn =document.querySelector(".btn--hold");
const btn_new = document.querySelector(".btn--new");
const currentScore1 =document.querySelector("#current--0");
const currentScore2 =document.querySelector("#current--1");
const player1 =document.querySelector(".player--0");
const player2 =document.querySelector(".player--1");
const playeractive =document.querySelector(".player--active");
score1.textContent=0;
score2.textContent=0;
var playing = true;
const switchplayer =function () {
    document.querySelector(`.score--${activeplayer}`).textContent=current_score;
    current_score=0;
    activeplayer =activeplayer == 0 ? 1 : 0 ;
    player1.classList.toggle("player--active");
    player2.classList.toggle("player--active");
}
var score =[0,0];
var activeplayer = 0;
var current_score = 0;
dice_1.classList.add("hidden");
btnroll.addEventListener("click",function(){
    if(playing){
dice_1.classList.remove("hidden");
const dice =Math.trunc(Math.random()*6)+1;
dice_1.src=`dice-${dice}.png`;
if(dice !== 1){
    current_score=current_score+dice;
    document.querySelector(`#current--${activeplayer}`).textContent=current_score;
}else{
    current_score=current_score+dice;
    document.querySelector(`#current--${activeplayer}`).textContent=0;
    current_score=0;
    activeplayer =activeplayer === 0 ? 1 : 0 ;
    player1.classList.toggle("player--active");
    player2.classList.toggle("player--active");
 }
}
})
hold_btn.addEventListener("click",function(){
    if(playing){
    score[activeplayer] += current_score;
    //score[1]= score[1] + current_score
    document.querySelector(`#score--${activeplayer}`).textContent=score[activeplayer];
    //player win
    if(score[activeplayer]>=20){
       playing = false
        dice_1.classList.add("hidden");

        document.querySelector(`.player--${activeplayer}`).classList.add(`player--winner`);
        document.querySelector(`.player--${activeplayer}`).classList.remove(`player--active`);

    }else{
   //switch next player
   switchplayer();
    }
}
})
btn_new.addEventListener("click",function(){
    playing = true
    score1.textContent=0;
    score2.textContent=0;
    currentScore1.textContent=0
    currentScore2.textContent=0
    document.querySelector(`.player--${activeplayer}`).classList.remove(`player--winner`);
    document.querySelector(`.player--${activeplayer}`).classList.add(`player--active`);

    







})


 