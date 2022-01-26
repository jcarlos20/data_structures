const connectedComponentCount = (graph) => {
    let visited = new Set();
    let count = 0;
    for(let node in graph){
        console.log(node)
        if(explore(graph, node, visited)===true){
            count++;
        }
    }
    return count;
}

const explore = (graph, node, visited) => {

    if(visited.has(String(node))) return false;
    visited.add(String(node));

    for(let neighbor of graph[node]){
        explore(graph, neighbor, visited)
    }
    return true;
}

const graph = {
    1:[2],
    2:[1,8],
    6:[7],
    9:[8],
    7:[6,8],
    8:[9,7,2]
}

// const graph = {
//     0 : [8,1,5],
//     1 : [0],
//     5 : [0,8],
//     8 : [0,5],
//     2 : [3,4],
//     3 : [2,4],
//     4 : [3,2]
// }

// const graph = {
//     f: ['g', 'i'],
//     g: ['h'],
//     h: [],
//     i: ['g', 'k'],
//     j: ['i'],
//     k: []
// }

// const graph = {
//     i: [ 'j', 'k' ],
//     j: [ 'i' ],
//     k: [ 'i', 'm', 'l' ],
//     m: [ 'k' ],
//     l: [ 'k' ],
//     o: [ 'n' ],
//     n: [ 'o' ]
// }

console.log(connectedComponentCount(graph))