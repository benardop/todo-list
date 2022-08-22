import '../assets/images/done.png';
import '../assets/images/unchecked-checkbox.png';
import threeDots from '../assets/images/three-dots-vertical.svg';
import trash from '../assets/images/trash.svg';

const generateTask = (task) => {
  const html = `
    <img id="unchecked" class="unchecked" src="./assets/images/unchecked-checkbox.png" alt="">
    <img id="done" class="done" src="./assets/images/done.png" alt="">
    <input type="text" value="${task}">
    <img class="three-dots" src="${threeDots}" alt="">
    <img class="trash" src="${trash}" alt="">
    `;
  const div = document.createElement('div');
  div.classList.add('task-wrapper');
  div.innerHTML = html;
  return div;
};

export default generateTask;