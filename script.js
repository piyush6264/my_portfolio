var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// For Sidemenu-------------------

var sidemeu = document.getElementById("sidemenu");
function openmenu(){
    sidemeu.style.right = "0";
}

function closemenu(){
    sidemeu.style.right = "-200px";
}

// For google sheet---------------

  const scriptURL = 'https://script.google.com/macros/s/AKfycbzPoOavDyqY0yzQl5NxgNjAw8bzCQH6JbQu0PozUUvNik6V5rPbwn3Wm6e7oaSSLV4R/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent sucessfully"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })


// function changeColor1(){
//     const cards = document.getElementById("card1")
//     cards.style.color = "white"
// }
// function changeColor2(){
//     const cards = document.getElementById("card2")
//     cards.style.color = "white"
// }
// function changeColor3(){
//     const cards = document.getElementById("card3")
//     cards.style.color = "white"
// }
AOS.init({
    offset: 120,
    delay: 200,
    duration: 800,
  });