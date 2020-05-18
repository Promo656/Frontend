/* let headingElement= document.getElementById("test")
console.log(headingElement.innerHTML);
let newHeadingText=prompt("Enter the new title")
headingElement.innerHTML=newHeadingText
console.log(headingElement.innerHTML); 
console.log("----------------------------------------------");*/

/* let newHeadingText=prompt("Enter the new title")
$("#main-heading").text(newHeadingText)
$("body").append("<p> Это новый абзац</p>")
for (let i=0; i<3; i++) {
    let hobby=prompt("What kind of hobby")
    $("body").append("<p>"+ hobby+ "</p>")
} 
console.log("----------------------------------------------")*/

/* $("h1").text("This text soon disapear").fadeOut(3000).fadeIn(3000).slideUp(3000).slideDown(3000)
$("h2").slideUp(3000).slideDown(3000) 
for (let i=0; i<5; i++) {
    $("h1").fadeOut(3000).fadeIn(3000)
}
$("h1").fadeOut(2000)
$("h1").fadeIn(2000)*/

/* let arr1 = [
    "Vova",
    "Dima",
    "Egor"
]
for (let i = 0; i < arr1.length; i++) {
    $("body").append("<p>" + arr1[i] + " the BEST"+ "</p>")
}
$("h1").text("Hello, fiends")
$("p").hide()
$("p").fadeIn(3000)
console.log("----------------------------------------------") */

/* $("p").fadeOut(3000).delay(1000).fadeIn(3000)
$("h1").fadeTo(1000,0.1)
console.log("----------------------------------------------") */

/* let leftOffSet=0
let moveHeading=function(){
    $("p").offset({left:leftOffSet})
    leftOffSet++
    if (leftOffSet>200){
        leftOffSet=0
    }
}
setInterval(moveHeading,30)
console.log("----------------------------------------------") */


/* let clickHandler= function(event){
    console.log("Click! "+event.pageX+" "+event.pageY);
}
$("html").click(clickHandler) */

/* $("html").mousemove( function (event){
    $("#heading").offset({
        left: event.pageX,
        top: event.pageY
    })
}) */
/* $("html").mousemove(
    function(event){
        $("body").text("x: "+ event.pageX+ "y: " +event.pageY)
    }
) */

let move = function (event) {
    $("div").text(event.pageX)
}
$("html").mousemove(move)