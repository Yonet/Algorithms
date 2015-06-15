def find_eulerian_tour(graph):
    result = []
    firstNode = graph.pop(0)
    result.append(firstNode[0])
    result.append(firstNode[1])
    l = len(graph)
    for i in range(l):
        node = graph.pop(0)
        result.append(node[1])
    return result
print find_eulerian_tour([(1, 2), (2, 3), (3, 1)])