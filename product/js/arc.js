var cvs0 = document.querySelector('#cvs');
var ctx0 = cvs.getContext('2d');

var cvs1 = document.querySelector('#cvs1');
var ctx1 = cvs1.getContext('2d');
var cvs2 = document.querySelector('#cvs2');
var ctx2 = cvs2.getContext('2d');

var cvs3 = document.querySelector('#cvs3');
var ctx3 = cvs3.getContext('2d');

var deg = Math.PI / 180;
Canvas(ctx0, 0, -90 * deg);
Canvas(ctx1, 50, 0.5 * 180 * deg);
Canvas(ctx2, 60, 0.6 * 180 * deg);
Canvas(ctx3, 80, 0.8 * 180 * deg)
function Canvas(ctx, percent, num) {
    ctx.translate(40, 50);
    ctx.beginPath();
    ctx.arc(0, 0, 35, 0, 2 * Math.PI);
    ctx.fillStyle = '#ccc';
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.arc(0, 0, 35, -90 * deg, num);
    ctx.lineTo(0, 0)
    ctx.fillStyle = 'orange';
    ctx.fill();
    ctx.closePath();


    ctx.beginPath();
    ctx.arc(0, 0, 30, 0, 2 * Math.PI);
    ctx.fillStyle = '#fff';
    ctx.fill();
    ctx.closePath();
    ctx.fillStyle = '#333';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(percent + '%', 0, 0);
}