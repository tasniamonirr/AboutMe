
//make a window prompt style box

document.addEventListener("DOMContentLoaded", function () {
    // Get the canvas element and its 2D rendering context
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    // Set the fill style to blue
    ctx.fillStyle = "#16a8bd";

    // Draw a gray rectangle
    roundedRect(ctx,0, 0, 300, 650,15);
   
    
    ctx.fillStyle = "#3A3535";
    ctx.fillRect(0, 25, 300, 600)
    //draw circle
    ctx.beginPath();
    ctx.arc(24, 12, 8, 0, 2 * Math.PI);
    ctx.fillStyle = "red"; // You can change the circle's color here
    ctx.fill();
    ctx.closePath();


    //draw circle
    ctx.beginPath();
    ctx.arc(50, 12, 8, 0, 2 * Math.PI);
    ctx.fillStyle = "#e7c24a"; // You can change the circle's color here
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(75, 12, 8, 0, 2 * Math.PI);
    ctx.fillStyle = "#70e74a"; // You can change the circle's color here
    ctx.fill();
    ctx.closePath();

    ctx.fillStyle = "green";
    ctx.font = "16px monospace"; // Specify the font style and size

    // Add text to the canvas
    
    ctx.fillText("Languages:", 50, 50); // ("Text", x, y)

 
    
});
// make rectangle corners rounded

function roundedRect(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.arcTo(x + width, y, x + width, y + radius, radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.arcTo(x + width, y + height, x + width - radius, y + height, radius);
    ctx.lineTo(x + radius, y + height);
    ctx.arcTo(x, y + height, x, y + height - radius, radius);
    ctx.lineTo(x, y + radius);
    ctx.arcTo(x, y, x + radius, y, radius);
    ctx.closePath();
    ctx.fill();
   
}

