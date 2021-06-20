const graph = {};
graph.a = {'b':2 ,'c':1},
graph.b = {'f': 9},
graph.c = {'d': 4, 'e': 6}
graph.d = {'f': 1}
graph.e = {}


function matrix(graph,start,end){
    const costs = {};
    const process = [];
    let neighbours = {};
    Object.keys(graph).forEach(node => {
        if (node !== start){
            let value = graph[start][node]
            costs[node] = value || 10000;
        }
    })
    let node = findModel(costs, process)
    while (node){
        const cost = costs[node]
        neighbours = graph[node]
        Object.keys(neighbours).forEach(neighbour => {
            let newCost = cost + neighbours[neighbour]
            if (newCost < cost[neighbour]){
                cost[neighbour] = newCost
            }
        })
        process.push(node)
        node = findModel(cost, process)
    }
    return costs;
}


function findModel(costs,process){
    let lower = 10000000;
    let lowerNode;
    Object.keys(costs).forEach(node => {
        let cost = costs[node]
        if (cost < lower && !process.includes(node)){
            lower = cost;
            lowerNode = node
        }
    })
    return lowerNode
}

console.log(matrix(graph,'a','g'))
