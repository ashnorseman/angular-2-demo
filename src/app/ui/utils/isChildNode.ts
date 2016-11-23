/**
 * Test if a is a child node of b
 */


export function isChildNode(a: Node, b: Node): boolean {
  if (a === b) { return true; }

  while (a.parentNode) {
    if (a.parentNode === b) { return true; }
    a = a.parentNode;
  }

  return false;
}
