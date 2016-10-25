let results = [];

const walk_dom = function(node, func) {

  func(node);
  node = node.firstChild;
  while (node) {
      walk_dom(node, func);
      node = node.nextSibling;
  }

};

const find_framework_nodes = function() {

  if (node.nodeType === 1 && node.hasAttribute('xyz')) {
    results.push(node);
  }

};

walk_dom(document.body, find_framework_nodes);
console.log(results);
