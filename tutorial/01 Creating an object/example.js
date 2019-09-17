const nodes = ([
    new Node(-100, -100, -100),
    new Node(-100, -100,  100),
    new Node(-100,  100, -100),
    new Node(-100,  100,  100),
    new Node( 100, -100, -100),
    new Node( 100, -100,  100),
    new Node( 100,  100, -100),
    new Node( 100,  100,  100),
]);

const edges = ([
    new Edge(nodes[0], nodes[1]),
    new Edge(nodes[1], nodes[3]),
    new Edge(nodes[3], nodes[2]),
    new Edge(nodes[2], nodes[0]),
    new Edge(nodes[4], nodes[5]),
    new Edge(nodes[5], nodes[7]),
    new Edge(nodes[7], nodes[6]),
    new Edge(nodes[6], nodes[4]),
    new Edge(nodes[0], nodes[4]),
    new Edge(nodes[1], nodes[5]),
    new Edge(nodes[2], nodes[6]),
    new Edge(nodes[3], nodes[7]),
]);

const shape = new Shape3D();

shape.addNodes([
    [-100, -100, -100],
    [-100, -100,  100],
    [-100,  100, -100],
    [-100,  100,  100],
    [ 100, -100, -100],
    [ 100, -100,  100],
    [ 100,  100, -100],
    [ 100,  100,  100],
]);

shape.addEdges([
    [0, 1],
    [1, 3],
    [3, 2],
    [2, 0],
    [4, 5],
    [5, 7],
    [7, 6],
    [6, 4],
    [0, 4],
    [1, 5],
    [2, 6],
    [3, 7],
]);

console.log(nodes);
console.log(shape);