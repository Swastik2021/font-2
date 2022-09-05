function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}
function draw() {
    background('#ff0000');
    textSize(difference-100);
    fill('#008080');
    text('SONITH',400-noseX, noseY );
}
function modelLoaded() {
    console.log("poseNet is loaded");
}
noseX=0;
noseY=0;
difference = 0;
rightWristx = 0;
leftWristx = 0;
function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        noseY = results[0].pose.nose.y;
        noseX = results[0].pose.nose.x;
        console.log('Nose X = ' + noseX + 'Nose Y =' + noseY);

        rightWristx = results[0].pose.rightWrist.x;
        leftWristx = results[0].pose.leftWrist.x;
        difference = floor(leftWristx - rightWristx);
        console.log('leftWrist = ' + leftWristx + 'rightWrist = ' + rightWristx + 'difference = ' + difference);

    }
}