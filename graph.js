const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

/*
*
* INTRODUCTION
*
*/

const depthFirstPrint_Iterative = (graph, source) => {
    const stack = [source];
    while(stack.length > 0){
        const current = stack.pop();
        console.log(current);
        for(let neighbor of graph[current]){
            stack.push(neighbor);
        } 
    }
}

const depthFirstPrint_Recursive = (graph, source) => {
    console.log(source);
    for (let neighbor of graph[source]){
        depthFirstPrint_Recursive(graph, neighbor);
    }
}

depthFirstPrint_Iterative(graph, 'a');
// depthFirstPrint_Recursive(graph, 'a');

const breadthFirstPrint_Iterative = (graph, source) => {
    const queue = [source];
    while(queue.length > 0){
        const current = queue.shift();
        console.log(current);
        for (let neighbor of graph[current]){
            queue.push(neighbor)
        }
    }
}

// breadthFirstPrint_Iterative(graph, 'a');