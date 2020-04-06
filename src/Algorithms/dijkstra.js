export function dijkstra(grid, startNode, finishNode) {
  const visitedNodesInOrder = [];
  startNode.distance = 0;
  const unvisitedNodes = getAllNodes(grid);
  while (!!unvisitedNodes.length) {
    sortNodesByDistance(unvisitedNodes);
    const closestNode = unvisitedNodes.shift();
    // HANDLE WALLS LATER
    // while(currentNode.status == "wall" && unvisitedNodes.length){
    //     currentNode = getClosestNode(nodes, unvisitedNodes);
    // }
    // HANDE IMPOSSIBLE LATER
    // if(closestNode.distance === Infinity) return false;
    // ANIMATE LATER
    // nodesToAnimate.push(closestNode;)
    closestNode.isVisited = true;
    if (closestNode === finishNode) return visitedNodesInOrder;
    updateNeighbours(closestNode, grid);
  }
}

function sortNodesByDistance(unvisitedNodes) {
  unvisitedNodes.sort((nodeA, nodeB) => nodeA.distance - nodeB.distance);
}

function updateNeighbours(node, grid) {
  const neighbours = getNeighbours(node, grid);
  for (const neighbour of neighbours) {
    neighbour.distance = node.distance + 1;
  }
}

function getNeighbours(node, grid) {
  const neighbours = [];
  const { col, row } = node;
  if (row > 0) neighbours.push(grid[row - 1][col]);
  if (row < grid.length - 1) neighbours.push(grid[row + 1][col]);
  if (col > 0) neighbours.push(grid[row][col - 1]);
  if (col < grid[0].length - 1) neighbours.push(grid[row][col + 1]);
}

function getAllNodes(grid) {
  const nodes = [];
  for (const row of grid) {
    for (const node of row) {
      nodes.push(node);
    }
  }
  return nodes;
}
