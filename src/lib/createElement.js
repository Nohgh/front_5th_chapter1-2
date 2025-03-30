import { addEvent } from "./eventManager";
/**가상돔을 돔으로 변환하는 함수
 * 1.vNode가 null, undefined, boolean일 경우 빈 텍스트 노드 반환
 * 2. vNode가 문자열이나 숫자면이면 텍스트 노드를 생성하여 반환
 * 3. vNode가 배열이면 DocumentFrament를 생성하고 각 자식에 대해 createElement를 재귀호출하여 추가한다.
 * 위의 경우가 아니면 실제 DOM요소를 생성한다.
 * vNode.type에 해당하는 요소를 생성
 * vNode.props의 속성들을 적용
 * vNOde.children의 각 자식에 대해 createElement를 재귀호출하여 추가* **/
export function createElement(vNode) {
  console.log(vNode, addEvent);
}

function updateAttributes($el, props) {
  console.log($el, props);
}
console.log(updateAttributes);
