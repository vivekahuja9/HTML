//For Buttons
//for auto
function auto(){
    console.log("you pressed auto")
}
//for cool
function cool(){
    console.log("you pressed cool")
}
//for hot
function hot(){
    console.log("you pressed hot")
}
//for dry
function dry(){
    console.log("you pressed dry")
}
//switch 1
function switch1(){
    console.log("you switched fan1")
}
//switch 2
function switch2(){
    console.log("you switched fan2")
}
//button effect

//getting value of fan speed |||||||||[Horizontal Slider]||||||||||
function updateTextInput(val) {
    var value1 = document.getElementById("range").value;
  //  document.getElementById('value1').innerHTML = "Roll Below:   " + value1;
    console.log(value1)
  
     }
////////////////////////////////////[Round slider customization]//////////////////////////////////////////////////
$("#slider").roundSlider();
$("#slider").roundSlider({
    sliderType: "min-range",
    handleShape: "round",
    width: 22,
    radius: 100,
    value: 51,
    startAngle: 270,
    lineCap: "round",
    mouseScrollAction: true,

    change: function (args) {
       console.log("slider moved")
    }
});