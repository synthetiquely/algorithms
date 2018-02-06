const topoSort = (edges) => {
  let nodes = [];

  //accumulate unique nodes into a large list
  for (let edge in edges) {
    for (let node in edge) {
      if (nodes.indexOf(node) === -1) {
        nodes.push(node);
      }
    }
  }

  //initialize the placement of nodes into the sorted array at the end
  let place = nodes.length;

  //initialize the sorted array with the same length as the unique nodes array
  let sorted = new Array(nodes.length);

  //define a visitor function that recursively traverses dependencies.
  var visit = (node, predecessors) => {
    //check if a node is dependent of itself
    if (predecessors.length !== 0 && predecessors.indexOf(node) !== -1) {
      throw new Error(
        `Cyclic dependency found. ${node} is dependent of itself.\nDependency chain: ${predecessors.join(
          ' -> ',
        )} => ${node}`,
      );
    }

    let index = nodes.indexOf(node);

    //if the node still exists, traverse its dependencies
    if (index !== -1) {
      let copy = false;

      //mark the node as false to exclude it from future iterations
      nodes[index] = false;

      //loop through all edges and follow dependencies of the current node
      for (let edge in edges) {
        if (edge[0] === node) {
          //lazily create a copy of predecessors with the current node concatenated onto it
          copy = copy || predecessors.concat([node]);

          //recurse to node dependencies
          visit(edge[1], copy);
        }
      }

      //add the node to the next place in the sorted array
      sorted[--place] = node;
    }
  };

  for (let i = 0; i < nodes.length; i++) {
    let node = nodes[i];

    //ignore nodes that have been excluded
    if (node !== false) {
      //mark the node as false to exclude it from future iterations
      nodes[i] = false;

      //loop through all edges and follow dependencies of the current node
      for (let edge in edges) {
        if (edge[0] === node) {
          //recurse to node dependencies
          visit(edge[1], [node]);
        }
      }

      //add the node to the next place in the sorted array
      sorted[--place] = node;
    }
  }

  return sorted;
};

module.exports = topoSort;
