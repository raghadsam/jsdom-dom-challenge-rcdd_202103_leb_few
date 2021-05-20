let submit=document.getElementById("submit");
submit.addEventListener("click",(event)=>{
  let input=document.getElementById("comment-input");
  let list=document.getElementById("list");
  list.innerHTML+=`<li>${input.value}</li>`;
  input.value="";
  event.preventDefault();
})


  //timer increments every 1 sec
  let i = 0;
  let counter=document.getElementById("counter");
  let timer=setInterval(function() {
    i++;
    counter.innerText=`${i}`;
  }, 1000);

  //increment by 1
let  increment=document.getElementById("plus");
  increment.addEventListener("click",()=>{
    i++;
    counter.innerText=`${i}`;
  });

  //decrement by 1
let  decrement=document.getElementById("minus");
  decrement.addEventListener("click",()=>{
    i--;
    counter.innerText=`${i}`;
  });

  //heart
  let heart=document.getElementById("heart");
  let likesList=document.getElementById("likesList");
  let array=[];
  let j=-1;
  let repeated=1;;
  heart.addEventListener('click',()=>{
    //to check if the element is duplicated
    if(i!==array[j])
        {array.push(i);
          j++;
          repeated=1; //reinitialize it
    likesList.innerHTML+=`<li>${i} was liked <span>${repeated}</span> times</li>`;
      }
    else {
      repeated++;
      document.getElementsByTagName("span")[j].innerText=`${repeated}`;
      console.log(`${i} was liked ${repeated} times`);
    }
    //likesList.innerHTML+=`<li>${i} was liked ${repeated} times</li>`;
        //console.log(array);
  });

  //pause and resume
  pause=document.getElementById("pause");
  let timesClicked=0;
  pause.addEventListener('click',()=>{

    if(timesClicked%2===0)
    {
      clearInterval(timer);

      decrement.disabled = true;
      increment.disabled = true;
      heart.disabled = true;
      submit.disabled = true;

      pause.innerText="resume";

      timesClicked++;

      console.log(`timesclicked = ${timesClicked} and i=${i}`);}
    else {
        timer=setInterval(function() {
        i++;
        counter.innerText=`${i}`;
        }, 1000);
      decrement.disabled = false;
      increment.disabled = false;
      heart.disabled = false;
      submit.disabled = false;
      pause.innerText="pause";
      timesClicked++;
      console.log(`timesclicked = ${timesClicked} and i=${i}`);}
    });


  //restart
  restart=document.getElementById("restart");
  restart.addEventListener("click",()=>{
    clearInterval(timer);
    decrement.disabled = false;
    increment.disabled = false;
    heart.disabled = false;
    submit.disabled = false;
    pause.innerText="pause";
    i=-1;
    timer=setInterval(function() {
      i++;
      counter.innerText=`${i}`;
    }, 1000);
  });
