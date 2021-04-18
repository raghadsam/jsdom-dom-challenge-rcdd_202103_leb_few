let submit=document.getElementById("submit");
submit.addEventListener("click",(event)=>{
  let input=document.getElementById("comment-input");
  let list=document.getElementById("list");
  list.innerHTML+=`<li>${input.value}</li>`;
  input.value="";
  event.preventDefault();
})

function counter() {
  //timer increments every 1 sec
  let i = 0;
  let counter=document.getElementById("counter");
  let timer=setInterval(function() {
    counter.innerText=`${i++}`;
  }, 1000);

  //increment by 1
let  increment=document.getElementById("plus");
  increment.addEventListener("click",()=>{
    counter.innerText=`${i++}`;
  });

  //decrement by 1
let  decrement=document.getElementById("minus");
  decrement.addEventListener("click",()=>{
    counter.innerText=`${i--}`;
  });

  //heart
  let heart=document.getElementById("heart");
  let likesList=document.getElementById("likesList");
  let array=[];
  heart.addEventListener('click',()=>{
    for(let j=0; j < array.length; j++){
        if(array[j] === i-1)
            array.push(i-1);
          }
      console.log(array);
    likesList.innerHTML+=`<li>${i-1} was liked</li>`;
  });

  //pause and resume
  pause=document.getElementById("pause");
  let timesClicked=0;
  pause.addEventListener('click',()=>{

    if(timesClicked%2===0)
    {clearInterval(timer);
    decrement.disabled = true;
    increment.disabled = true;
    heart.disabled = true;
    submit.disabled = true;
    pause.innerText="resume";
    timesClicked++;
    console.log(`timesclicked = ${timesClicked} and i=${i-1}`);}
    else {
      timer=setInterval(function() {
      counter.innerText=`${i++}`;
    }, 1000);
      decrement.disabled = false;
      increment.disabled = false;
      heart.disabled = false;
      submit.disabled = false;
      pause.innerText="pause";
      timesClicked++;
      console.log(`timesclicked = ${timesClicked} and i=${i-1}`);}
    });


  //restart
  restart=document.getElementById("restart");
  restart.addEventListener("click",()=>{
    clearInterval(timer);
    i=0;
    timer=setInterval(function() {
      counter.innerText=`${i++}`;
    }, 1000);
  });

}
counter();
