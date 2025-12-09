let a = document.querySelector('.button1');
let b = document.querySelector('.button2');
let c = document.querySelector('.button3');
let d = document.querySelector('.button4');

a.addEventListener("click",function (){
  document.body.style.backgroundColor = "green";
})
b.addEventListener("click",function (){
  document.body.style.backgroundColor = 'blue'
})
  c.addEventListener("click",function (){
  document.body.style.backgroundColor = 'red'
  })

  d.addEventListener("click",function (){
  document.body.style.backgroundColor = 'yellow'
  })
