const graph = {
    0 : [8,1,5],
    1 : [0],
    5 : [0,8],
    8 : [0,5],
    2 : [3,4],
    3 : [2,4],
    4 : [3,2]
}

const largestComponent = (graph) => {
    let visited = new Set();
    let longest = 0;
    for(let node in graph){
         let count = exploreCount(graph, node, visited);
         if(count > longest) longest = count;
    }
    return longest;
}

const exploreCount = (graph, node, visited) => {
    if(visited.has(String(node))) return 0;
    visited.add(String(node));

    let count = 1;
    for(let neighbor of graph[node]){
        count += exploreCount(graph, neighbor, visited)
    }
    return count;
}


console.log(largestComponent(graph));