class Node {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    static getNodes(nodes) {
        return nodes.map(([x, y, z]) => new Node(x, y, z));
    }
};
