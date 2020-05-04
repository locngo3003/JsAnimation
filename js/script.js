function showAlert() {
    // alert("hello world");
    // console.log("hello world in console");
    setTimeout(function () {
        alert("hello world");
        console.log("hello world in console");
    },3000)
}
function showLoop() {
setInterval(function () {
    alert('hello world from loop')
    console.log('hello world from loop')
},3000)
}
function  moveImage() {
 img = document.getElementById('movingImg')
     x = 10; //left
     y = 10; //top
    //speed= 500
    speed = Number(document.getElementById('speedInput').value);
    // create a function in loop, and loop it each half second
    setInterval(function () {
        if (x>=10 && x<=500 && y ==10){
            x  = x+ speed
        }
        else if ( x>=500 && y >=10&& y<=500){
            y= y+ speed
        }
        else if (x>=10){
            x= x-speed;
        }
        else  if (y>=10){
            y = y- speed
        }

        console.log('x=',x)
        console.log('y=',y)
        img.style.left = x +"px";
        img.style.top=y + "px";
    },500)

}
function movingWithoutLoop() {
    img = document.getElementById('movingImg')
    x = 10;
    y = 10;
    speed = 100;
    x= x+speed;
    y= y+speed;
    img.style.left=x+'px'
    img.style.top=y+'px'

}