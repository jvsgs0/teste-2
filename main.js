function preload()
{

}

function setup()
{
canvas = createCanvas(640, 480);
canvas.position(220, 220);
video = createCapture(VIDEO);
video.hide();

}

function draw()
{
image(video, 70, 70, 500, 340);
rect(55, 417, 530, 55);
rect(63, 7.5, 530, 55);
rect(27.5, 30, 55, 420);
rect(557.5, 30, 55, 420);
ellipse(55, 35, 55, 55);
ellipse(585, 445, 55, 55);
ellipse(55, 445, 55, 55);
ellipse(585, 35, 55, 55);
}

function takeSnapshot()
{
    save('foto.png');
}

