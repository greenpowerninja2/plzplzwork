sX=0;
sY=0;

function preload() {
    stache = loadImage('https://i.postimg.cc/Vst22z8r/mustache-png.webp');
}

function setup() {
canvas = createCanvas(301, 301);
canvas.center();
video = createCapture(VIDEO);
video.size(301, 301);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}


function gotPoses(results)
{
if(results.length > 0)
{
    console.log(results);
sX = results[0].pose.stache.x;
sY = results[0].pose.stache.y;
    console.log("stache x = " + sX);
    console.log("stache y = " + sY);
}
}

function modelLoaded() {
    console.log('PoseNet is Initialized');
}
function draw() {
    image(stache, sX, sY, 30, 30);
}

function take_snapshot(){
    save('mustacheepicpic.png')
}