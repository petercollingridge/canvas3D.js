class Node {
    constructor(x=0, y=0, z=0) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}

class Edge {
    constructor(node1, node2) {
        this.node1 = node1;
        this.node2 = node2;
    }
}

class Shape3D {
    constructor(nodes=[], edges=[]) {
        this.nodes = [];
        this.edges = [];
        this.addNodes(nodes);
        this.addEdges(edges);
    }

    addNodes(nodes) {
        this.nodes = this.nodes.concat(
            nodes.map(([x, y, z]) => new Node(x, y, z))
        )
    }

    addEdges(edges) {
        this.edges = this.edges.concat(
            edges.map(([n1, n2]) => {
                const node1 = this.nodes[n1];
                const node2 = this.nodes[n2];
                if (!node1) { throw `Node ${n1} not found`; }
                if (!node2) { throw `Node ${n2} not found`; }
                return new Edge(node1, node2);
            })
        )
    }
}
