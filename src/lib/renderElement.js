import { normalizeVNode } from "./normalizeVNode";
import { updateElement } from "./updateElement";
import { createElement } from "./createElement";
import { setupEventListeners } from "./eventManager";

const oldNodeMap = new Map();

export function renderElement(vNode, container) {
  if (!vNode || !container) return;

  const _oldNode = oldNodeMap.get(container);
  const _newNode = normalizeVNode(vNode);

  if (!_oldNode && !container.innerHTML) {
    const _dom = createElement(_newNode);
    container.appendChild(_dom);
  } else {
    updateElement(container, _newNode, _oldNode);
  }

  oldNodeMap.set(container, _newNode);
  setupEventListeners(container);
}
