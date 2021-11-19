lwx = 0
rwx = 0
difference = 0
function setup () {
    canvas = createCanvas(600,300)
canvas.position(600,200)
video = createCapture(VIDEO)
video.size(300,300)
video.position(200,200)
posenet = ml5.poseNet(video,modelloaded)
posenet.on("pose",gotposes)
}                                         
function draw() {
   background("white")
   document.getElementById("textsize").innerHTML="Font Size of the Text will be "+difference+"px"
   fill("blue")
   textSize(difference)
   text("Carelene",10,150)
}

function modelloaded () {
    console.log("The Model has been loaded")
}

function gotposes (result) {
    if (result.length>0)  {
        console.log(result)
      lwx = result[0].pose.leftWrist.x
      rwx = result[0].pose.rightWrist.x
      difference = floor(lwx-rwx)
 
    }
 
}



