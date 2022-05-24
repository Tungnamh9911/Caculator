
/*Dãy phím đầu*/
var Deleteall = document.querySelector(".deleteall")
var content = document.querySelector(".contentshowup")
var hint = document.querySelector(".hint")


var so1 = document.querySelector(".so1")
var so2 = document.querySelector(".so2")
var so3 = document.querySelector(".so3")
/*Dãy phím 5*/
var bang = document.querySelector("bang")

/**/ 
var dau = document.querySelectorAll(".dau")
var so = document.querySelectorAll(".so")

var dauphay = document.querySelector(".dauphay")

var Delete = document.querySelector(".delete")


Deleteall.onclick = function () {
    content.innerText = ""
    Deleteall.style.backgroundColor = "red"
    setTimeout(function(){
      Deleteall.style.backgroundColor = "#979797"
    },100)
}


for (var i = 0; i < so.length; i++) {
    so[i].onclick = function(e) {
        var contenthientai = content.innerText
        content.innerText = contenthientai + e.target.innerText
      e.target.style.backgroundColor = "orange"
      setTimeout(function(){
        e.target.style.backgroundColor = "#CCCCCC"
      },100)
    }
}
for (var i = 0; i < dau.length; i++) {
    dau[i].onclick = function(e) {
        var contenthientai = content.innerText
        content.innerText = contenthientai + e.target.innerText
        e.target.style.backgroundColor = "green"
        setTimeout(function(){
            e.target.style.backgroundColor = "#046fe5"
        },100)
    }
}

dauphay.onclick = function () {
    var contenthientai = content.innerText
    content.innerText = contenthientai + dauphay.innerText
    dauphay.style.backgroundColor = "orange"
    setTimeout(function(){
      dauphay.style.backgroundColor = "#CCCCCC"
    },100)
}

Delete.onclick = function () {
    var contenthient = Array.from(content.innerHTML)
    contenthient.splice(contenthient.length - 1,1)

    content.innerHTML = contenthient.join("")

    Delete.style.backgroundColor = "red"
    setTimeout(() => {
        Delete.style.backgroundColor = "#979797"
    }, 100);
}