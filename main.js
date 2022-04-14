mustachex = 0;
mustachey = 0;
lipstickx = 0;
lipsticky = 0;
function preload() {

}
function setup() {
    canvas = createCanvas(400,400);
    canvas.position(450,130);
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('poses',gotposes);
}
function modelLoaded() {
    console.log("modelLoaded");
}
function gotposes(results) {
    if (results.length > 0)
    {
       console.log(results);
       console.log("mustach x =" + results[0].pose.mustach.x);
       console.log("mustach y =" + results[0].pose.mustach.y);
       console.log("lipstick x =" + results[0].pose.lipstick.x);
       console.log("lipstick y =" + results[0].pose.lipstick.y);
    }
}
function draw() {

}

function take_snapshot() {
    save("yourposing_image.png");
}