/*
*
* Has Path
*
*/

const graph = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
}

// Depth First
const hasPath_Depth = (graph, src, dst) => {
    if(src === dst) return true;
    for (let neighbor of graph[src]){
        if(hasPath_Depth(graph, neighbor, dst) === true){
            return true;
        }
    }
    return false;
}

// Breadth First
const hasPath_Breadth = (graph, src, dst) => {
    const queue = [src];
    while (queue.length > 0){
        const current = queue.shift();
        if(current === dst) return true;
        for(let neighbor of graph[current]){
            queue.push(neighbor);
        }
    }
    return false;
}

// console.log(hasPath_Depth(graph, 'f', 'k'));
console.log(hasPath_Breadth(graph, 'f', 'k'));