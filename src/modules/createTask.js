import '../assets/images/done.png';
import '../assets/images/unchecked-checkbox.png';
import threeDot from '../assets/images/three-vertical-dots.svg';
import trashIcon from '../assets/images/trash-icon.svg';

const createTask = (task) => {
  const html = `
    <img id="unchecked" class="unchecked" src="./assets/images/unchecked-checkbox.png" alt="">
    <img id="done" class="done" src="./assets/images/done.png" alt="">
    <input type="text" value="${task}">
    <img class="three-dots" src="${threeDot}" alt="">
    <img class="trash" src="${trashIcon}" alt="">
    `;
  const div = document.createElement('div');
  div.classList.add('task-wrapper');
  div.innerHTML = html;
  return div;
};

export default createTask;