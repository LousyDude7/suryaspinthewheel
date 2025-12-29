const options = [
    "Bumper Prize ₹10k Kit", 
    "Free LASIK Workup", 
    "15% Off Frames", 
    "₹500 Off Consult", 
    "Family Vision Pass", 
    "Free Eye Gift!", 
    "Free Eye Mask", 
    "Smile Please! :)", 
    "Better Luck Next Time"
];


function drawWheel() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const outerRingWidth = 18;
    const bulbRadius = 4;
    const bulbCount = 18;

    // Draw slices
    options.forEach((option, i) => {
        const angleStart = i * sliceAngle;
        const angleMid = angleStart + sliceAngle / 2;

        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius - outerRingWidth, angleStart, angleStart + sliceAngle);
        ctx.closePath();
        ctx.fillStyle = colors[i % colors.length];
        ctx.fill();

        // Text
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(angleMid);
        ctx.textAlign = "center";
        ctx.fillStyle = "#ffffff";
        ctx.font = "bold 16px Arial";
        ctx.fillText(option, (radius - outerRingWidth) * 0.65, 6);
        ctx.restore();
    });

    // Outer ring
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius - outerRingWidth / 2, 0, Math.PI * 2);
    ctx.lineWidth = outerRingWidth;
    ctx.strokeStyle = "#f39c12";
    ctx.stroke();

    // Bulbs
    for (let i = 0; i < bulbCount; i++) {
        const angle = (i / bulbCount) * Math.PI * 2;
        const x = centerX + Math.cos(angle) * (radius - outerRingWidth / 2);
        const y = centerY + Math.sin(angle) * (radius - outerRingWidth / 2);

        ctx.beginPath();
        ctx.arc(x, y, bulbRadius, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.fill();
    }

    // Center hub
    ctx.beginPath();
    ctx.arc(centerX, centerY, 28, 0, Math.PI * 2);
    ctx.fillStyle = "#f39c12";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(centerX, centerY, 18, 0, Math.PI * 2);
    ctx.fillStyle = "#ffffff";
    ctx.fill();
}