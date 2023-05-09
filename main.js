function setup(){
    canvas = createCanvas(400, 400);
    canvas.center()
    video=createCapture(VIDEO);
    video.hide()
}
function draw() {
    image(video,40,40,320,320);
    fill("blue")
    rect(0,0,20,400)
    rect(380,0,20,400)
    rect(0,0,400,20)
    rect(0,380,400,20)
    fill("yellow")
    circle(10,10,50)
    circle(10,390,50)
    circle(390,10,50)
    circle(390,390,50)
  }
  function snapshot(){
    save("CHICKENWING.png")
  }
 