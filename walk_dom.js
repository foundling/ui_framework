/* 
 *
 * walk the dom looking for 'x' attributes.
 *
 */

let results = [];

let isOurs = (node) => node.hasAttribute('x');

const walk_dom = function(node, func) {

  func(node);
  node = node.firstChild;

  while (node) {
      walk_dom(node, func);
      node = node.nextSibling;
  }

};

const find_framework_nodes = function(node) {

  if (node.nodeType === 1 && isOurs(node)) {
    results.push(node);
  }

};

walk_dom(document.body, find_framework_nodes);
console.log(results);
