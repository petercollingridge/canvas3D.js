const TAU = 2 * Math.PI;

const config = {
    nodeColour: 'rgb(100, 120, 200)',
    edgeColour: 'rgb(50, 50, 50)',
    nodeR: 5,
};

function drawToCanvas(canvasId, shape) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) throw new Error(`Canvas ${canvasId} not found`);

    const ctx = canvas.getContext('2d');
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.translate(canvas.width / 2, canvas.height / 2);

    ctx.strokeStyle = config.edgeColour;
    shape.edges.forEach(edge => {
        const node1 = edge.node1;
        const node2 = edge.node2;
        ctx.beginPath();
        ctx.moveTo(node1.x, node1.y);
        ctx.lineTo(node2.x, node2.y);
        ctx.stroke();
    })

    ctx.fillStyle = config.nodeColour;
    shape.nodes.forEach(node => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, config.nodeR, 0, TAU, true);
        ctx.fill();
    })
}