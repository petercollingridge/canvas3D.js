class Node {
    constructor(x=0, y=0, z=0) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    static getNodes(nodes) {
        return nodes.map(([x, y, z]) => new Node(x, y, z));
    }
};
