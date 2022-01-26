const edges = [
    ['w','x'],
    ['x','y'],
    ['z','y'],
    ['z','v'],
    ['w','v']
]

const buildGraph = (edges) => {
    let graph = {};

    for(let edge of edges){
        const [a, b] = edge;
        if(!(a in graph)) graph[a] = [];
        if(!(b in graph)) graph[b] = [];
        graph[a].push(b);
        graph[b].push(a);
    }

    return graph;
}

const shortestPath = (edges, src, dst) => {
    let graph = buildGraph(edges);
    console.log(graph)
    let queue = [[src, 0]];
    let visited = new Set([src]);

    while(queue.length > 0){
        let current = queue.shift();
        const[node, distance] = current;
        if(node === dst) return distance;
        
        for (let neighbor of graph[node]){
            if(!visited.has(String(neighbor))){
                visited.add(String[neighbor])
                queue.push([neighbor, distance+1])
            }
        }
    }
    return -1;
}
console.log(shortestPath(edges, 'w', 'z'))