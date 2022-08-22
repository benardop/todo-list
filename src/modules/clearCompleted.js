import getTasks from './task.js';

const clearCompleted = () => {
  const arr = getTasks();
  const dom = document.querySelectorAll('.task-wrapper');
  const arr2 = arr.filter((element, index) => {
    if (element.complete) { dom[index].remove(); }
    return !element.complete;
  });

  arr2.sort((b, a) => b.index - a.index);
  localStorage.setItem('data', JSON.stringify(arr2));
};
export default clearCompleted;