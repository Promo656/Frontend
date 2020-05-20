/* let canvas=document.getElementById("canvas")
let ctx=canvas.getContext("2d")
ctx.fillRect(0,0,10,10) */

/* let canvas=document.getElementById("canvas")
let ctx=canvas.getContext("2d")
for (let i=0; i<8; i++){
    ctx.fillRect(i*10,i*10,i*10,i*10)
} */
$("html").mousemove(function(event){
    $("p").text("x: "+event.pageX+"y: "+event.pageY)
})
let canvas=document.getElementById("canvas")
let ctx=canvas.getContext("2d")
ctx.fillStyle="Red"
ctx.fillRect(25,0,50,50)
ctx.fillRect(45,50,10,30)
ctx.fillRect(0,70,100,10)
ctx.fillRect(20,80,60,60)
ctx.fillRect(20,140,10,100)
ctx.fillRect(70,140,10,100)