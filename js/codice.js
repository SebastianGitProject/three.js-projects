var bottones = document.getElementById("bottone");
var txt3 = document.getElementById("testo1");
var txt4 = document.getElementById("testo2");
bottones.addEventListener("click", clickBottone);

function fadeOut(el, duration) {
    let step = 25;
    let opacity = 1;
    let interval = setInterval(function() {
      opacity -= step / 100;
      el.style.opacity = opacity;
      if (opacity <= 0) {
        clearInterval(interval);
        el.style.display = "none";
      }
    }, duration / (100 / step));
  }
  
  let element3 = document.querySelector('.loader-wrapper');
  
  setTimeout(function() {
    fadeOut(element3, 100);
  }, 2200);
  

//setInterval(click, 4000);
function inizio(){
    console.log("La pagina è stata caricata!");
    txt3.value='';
    txt4.value='';
}

/*function click(){
    ele.innerHTML = ("<i><b>Cliccami!<b></i>");
}*/

let element = document.querySelector('.loader-inner');
let element2 = document.querySelector('.loader');

element.addEventListener('animationiteration', function() {
  console.log('Primo ciclo dell\'animazione 1 terminato');
  element.style.animationPlayState = "paused";
});

element2.addEventListener('animationiteration', function() {
    console.log('Primo ciclo dell\'animazione 2 terminato');
    element2.style.animationPlayState = "paused";
    //let element3 = document.querySelector('.loader-wrapper');
  
    //fadeOut(element3, 500);
})

function clickBottone(){
  var txt = document.getElementById("testo1").value;
  var txt2 = document.getElementById("testo2").value;
  if(txt === "seba" && txt2 === "admin"){
    console.log("Hai scritto in username: " + txt + " e in password: " + txt2);
    txt3.value ='';
    txt4.value ='';
    window.location.href = "universo.html";
  }else{
    console.log("Dati sbagliati! non ti sei registrato!");
  }
}

let x = 0, y = 0, initialX = 0, initialY = 0;
let shakeAmount = 10;
let shakeTime = 100;
var txttttt = document.getElementById("signup_link");

function shake() {
  if (x === initialX && y === initialY) {
    x += shakeAmount;
    setTimeout(window.shake, shakeTime);
  } else if (x !== initialX && y === initialY) {
    x -= shakeAmount;
    y += shakeAmount;
    setTimeout(window.shake, shakeTime);
  } else if (x !== initialX && y !== initialY) {
    x = initialX;
    y = initialY;
  }
  window.moveTo(x, y);
};

txttttt.addEventListener("click", function() {
  initialX = window.screenX;
  initialY = window.screenY;
  shake();
});

  
  
