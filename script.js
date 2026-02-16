//DRINKS PAGE INTERACTION
//select all drink items on page and message box element
const drinkItems=document.querySelectorAll('.drink-item');
const messageBox=document.getElementById('message-box');

//possible positions where snarky message can appear
const positions=[
'position-left-top',
'position-left-middle',
'position-left-bottom',
'position-right-top',
'position-right-middle',
'position-right-bottom'
];

//check if we actually have drink items and message box before running
if(drinkItems.length>0 && messageBox){

//loop through each drink item
drinkItems.forEach(item=>{

//listen for click events on each drink
item.addEventListener('click',()=>{

//get snarky message from data-message attribute
const message=item.getAttribute('data-message');

//reset message box classes so old positions are removed
messageBox.className='message-box';

//pick random position class for message
const randomPosition=positions[Math.floor(Math.random()*positions.length)];
messageBox.classList.add(randomPosition);

//set message text inside box
messageBox.textContent=message;

//remove 'hidden' class to show message
messageBox.classList.remove('hidden');

//hide message again after 3 seconds
setTimeout(()=>{messageBox.classList.add('hidden');},3000);

});
});
}

//ABOUT PAGE STATS COUNTER
//set initial values for counters
let opens=0;let items=0;let regrets=0;

//select elements that display numbers
const opensEl=document.getElementById('opens');
const itemsEl=document.getElementById('items');
const regretsEl=document.getElementById('regrets');
const messageEl=document.getElementById('message');
const btn=document.getElementById('open-fridge-btn');

//array of snarky messages for under button
const messages=[
"Still nothing new in there...",
"You literally just checked 2 seconds ago.",
"The food isn't going to change.",
"Maybe lower your standards?",
"This is becoming concerning.",
"Are you okay?",
"Just order takeout already.",
"The fridge is judging you now.",
"Seriously?",
"Nothing has changed.",
"Still the same old leftovers.",
"The milk is still questionable.",
"Just eat the cheese and move on."
];

//make sure button exists before adding listener
if(btn){

//listen for clicks on open fridge button
btn.addEventListener('click',()=>{

//increment opens counter each click
opens++;
opensEl.textContent=opens;

//30% chance to increase items eaten
if(Math.random()<0.3){items++;itemsEl.textContent=items;}

//40% chance to increase regrets counter
if(Math.random()<0.4){regrets++;regretsEl.textContent=regrets;}

//pick random message from array
const randomMessage=messages[Math.floor(Math.random()*messages.length)];
messageEl.textContent=randomMessage;

//simple button click animation
btn.style.transform='scale(0.95)';
setTimeout(()=>{btn.style.transform='scale(1)';},100);

});
}
