/* let canvas1=document.getElementById("canvas1")
let ctx=canvas1.getContext("2d")
ctx.fillRect(0,0,10,10) */

/* let canvas1=document.getElementById("canvas1")
let ctx=canvas1.getContext("2d")
for (let i=0; i<8; i++){
    ctx.fillRect(i*10,i*10,i*10,i*10)
} */
/* /* $("html").mousemove(function(event){
    $("p").text("x: "+event.pageX+"y: "+event.pageY)
}) 
let canvas1=document.getElementById("canvas1")
let ctx=canvas1.getContext("2d")
ctx.fillStyle="Green"
ctx.strokeStyle="DeepPink"
ctx.lineWidth="5"
ctx.strokeRect(25,0,50,50)
ctx.fillRect(45,50,10,30)
ctx.fillRect(0,70,100,10)
ctx.fillRect(20,80,60,60)
ctx.fillRect(20,140,10,100)
ctx.fillRect(70,140,10,100) */

let canvas2=document.getElementById("canvas2")
let ctx=canvas2.getContext("2d")
ctx.strokeStyle="Red"
ctx.lineWidth="5"
ctx.beginPath()
ctx.moveTo(150,150)
ctx.lineTo(200,200)
ctx.moveTo(200,150)
ctx.lineTo(150,200)
ctx.stroke()