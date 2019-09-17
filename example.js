const nodes = ([
    new Node(-100, -100, -100),
    new Node(-100, -100, 100),
    new Node(-100, 100, -100),
    new Node(-100, 100, 100),
    new Node( 100, -100, -100),
    new Node( 100, -100, 100),
    new Node( 100, 100, -100),
    new Node( 100, 100, 100),
]);

const edges = [
    [0, 1], [1, 3], [3, 2], [2, 0],
    [4, 5], [5, 7], [7, 6], [6, 4],
    [0, 4], [1, 5], [2, 6], [3, 7],
];

console.log(nodes)