import Task from './task.js';
import Status from './addInterAction.js';

export default class TaskList {
  constructor() {
    this.listArray = [];
  }

  display() {
    const listContainer = document.querySelector('.listContainer');
    if (listContainer) {
      listContainer.innerHTML = '';
    }
    this.listArray.forEach((el) => {
      const li = [];
      const input = [];
      const p = [];
      const button = [];
      // List Element
      li[el.index] = document.createElement('li');
      li[el.index].setAttribute('id', el.index);
      li[el.index].contentEditable = true;

      // Input Element
      input[el.index] = document.createElement('input');
      input[el.index].setAttribute('type', 'checkbox');
      input[el.index].classList.add('checkbox');
      input[el.index].setAttribute('id', el.index);

      p[el.index] = document.createElement('p');
      p[el.index].textContent = el.description;
      p[el.index].setAttribute('id', el.index);

      // Button Element
      button[el.index] = document.createElement('button');
      button[el.index].setAttribute('id', el.index);
      button[el.index].innerHTML = '<i class="fa-solid fa-ellipsis-vertical"></i>';
      li[el.index].append(input[el.index], p[el.index], button[el.index]);
      listContainer.append(li[el.index]);

      // Delete task icon
      p[el.index].addEventListener('click', (e) => {
        e.target.nextSibling.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
        e.target.nextSibling.style.cursor = 'pointer';

        // Remove Task from list
        e.target.nextSibling.addEventListener('click', () => {
          li[el.index].remove();
          this.remove(el.index);
        });
      });

      li[el.index].addEventListener('mouseleave', (e) => {
        button[el.index].innerHTML = '<i class="fa-solid fa-ellipsis-vertical"></i>';
        this.update(e.target.id, e.target.innerText);
      });

      // Task Checkbox
      input[el.index].addEventListener('change', (e) => {
        const status = new Status();
        if (e.target.checked === true) {
          status.checked(this.listArray[el.index]);
        } else {
          status.unchecked(this.listArray[el.index]);
        }
        this.update(e.target.nextSibling.id, e.target.nextSibling.innerText);
      });

      // Task Update Checkbox
      if (this.listArray[el.index].completed === true) {
        input[el.index].setAttribute('checked', 'checked');
        li[el.index].classList.add('checked');
      } else if (this.listArray[el.index].completed === false) {
        input[el.index].removeAttribute('checked');
        li[el.index].classList.remove('checked');
      }
    });
  }

  add(description, completed, index) {
    const task = new Task(description, completed, index);
    this.listArray.push(task);
    localStorage.setItem('todo-list', JSON.stringify(this.listArray));
  }

  remove(num) {
    const key = num;
    if (this.listArray.length === 1) {
      this.listArray = [];
    } else {
      this.listArray.splice(key, 1);
    }
    this.listArray.forEach((el, index) => {
      el.index = index;
    });
    localStorage.setItem('todo-list', JSON.stringify(this.listArray));
    this.display();
  }

  update(num, description) {
    if (this.listArray[num].index === Number(num)) {
      this.listArray[num].description = description;
    }
    this.listArray.forEach((el, index) => {
      el.index = index;
    });
    localStorage.setItem('todo-list', JSON.stringify(this.listArray));
    this.display();
  }

  clearAll() {
    this.listArray = [];
    localStorage.clear();
    window.location.reload();
  }

    clearAllCompleted = () => {
      this.listArray = this.listArray.filter((element) => element.completed === false);
      this.listArray.forEach((el, index) => {
        el.index = index;
      });
      localStorage.setItem('todo-list', JSON.stringify(this.listArray));
      window.location.reload();
    };
}
