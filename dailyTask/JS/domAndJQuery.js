/* let headingElement= document.getElementById("test")
console.log(headingElement.innerHTML);
let newHeadingText=prompt("Enter the new title")
headingElement.innerHTML=newHeadingText
console.log(headingElement.innerHTML); */
let newHeadingText=prompt("Enter the new title")
$("#main-heading").text(newHeadingText)
$("body").append("<p> Это новый абзац</p>")
for (let i=0; i<3; i++) {
    let hobby=prompt("What kind of hobby")
    $("body").append("<p>"+ hobby+ "</p>")
}