
/*window.addEventListener("load", function(){
    var ele = document.getElementById("titolo");
    ele.innerHTML = (" ");
    setTimeout(function(){
        ele.innerHTML = ("<i>Caricamento</i>");
        setTimeout(function(){
            ele.innerHTML = ("<i>Caricamento.</i>");
            setTimeout(function(){
                ele.innerHTML = ("<i>Caricamento..</i>");
                setTimeout(function(){
                    ele.innerHTML = ("<i>Caricamento...</i>");
                    setTimeout(function(){
                        ele.innerHTML = ("Caricamento");
                        let element3 = document.querySelector('.background');
  
                        setTimeout(function() {
                        fadeOut(element3, 100);
                        }, 1500);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
});*/

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




