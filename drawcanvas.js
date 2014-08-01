var circle={
    centerX:0,
    centerY:0,
    radius:0,
    startAngle:0,
    endAngle:2*Math.PI,
    clockwise:true,
    fill:"rgba(0,0,0,0.5)"
}

function drawCircle(x,y,radius,ctx)
{
    var running = true;
    var id = window.setInterval(function () {
        if (circle.centerX < x)
            circle.centerX += 10;
        if (circle.centerY < y)
            circle.centerY += 10;
        if (circle.centerX >= x && circle.centerY >= y) {
            clearInterval(id);
            running = false;
        }

        draw();

        function draw() {
            ctx.clearRect(0, 0, w, h);
            ctx.fillStyle = circle.fill;
            ctx.beginPath();
            ctx.arc(circle.centerX, circle.centerY, radius, circle.startAngle, circle.endAngle, circle.clockwise);
            
            if (!running)
            {
                ctx.rect(0, 0, window.innerWidth-5, window.innerHeight-5);
                ctx.fill();
                circle.centerX = 0;
                circle.centerY = 0;
                circle.radius = 0;
            }
            else
                ctx.fill();

        }
    }, 10);
}
