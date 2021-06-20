const graph = {};
graph.a = ['b','c']
graph.b = ['f']
graph.c = ['d','e']
graph.d = ['f']
graph.e = ['g']


function graphSearch(graph,start,end){
    let queue = [];
    queue.push(start)
    while (queue.length > 0){
        const current = queue.shift()
        if (!graph[current]){
            graph[current] = [];
        }
        if (graph[current].includes(end)){
            return true;
        }else {
            queue = [...queue, ...graph[current]]
        }
    }
    return false;
}

console.log(graphSearch(graph,'a','g'))
