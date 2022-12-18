function setup( ){
    video = createCapture(VIDEO)
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560,150);

    pozeNet = ml5.pozeNet(video, modelLoad);
    pozeNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized!');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}