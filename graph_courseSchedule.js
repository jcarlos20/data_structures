let numCourses = 4;
let prerequisites = [[1,0],[2,0],[3,1],[3,2]];

var findOrder_Improved = function(numCourses, prerequisites) {
    let visited = new Set();
    let visiting = new Set();
    let graph = buildGraph(numCourses, prerequisites);

    for(let node in graph){
        if(hasCycle(graph, node, visiting, visited)) return []
    }
    return [...visited];
};

const hasCycle = (graph, node, visiting, visited) => {
    if(visiting.has(node)) return true;
    visiting.add(node);
    for(let neighbor of graph[node]){
        if(hasCycle(graph, neighbor, visiting, visited)) return true;
    }
    visiting.delete(node);
    visited.add(node);
    return false;
}

const buildGraph = (numCourses, prerequisites) => {
    let graph = {};
    for(let i =0; i < numCourses; i++){
        graph[i] = [];
    }
    for( let prereq of prerequisites){
        const [a,b] = prereq;
        graph[a].push(String(b))
    }
    return graph;
}

console.log(findOrder_Improved(numCourses, prerequisites));