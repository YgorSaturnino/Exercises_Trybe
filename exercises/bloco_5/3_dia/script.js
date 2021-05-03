function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();

  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  function daysMonth(array) {
    let list = document.querySelector('.task-list');
    for (let index = 0; index < array.length; index += 1) {
      let li = document.createElement('li');
      li.className = 'day';
      if (array[index] === 24 || array[index] === 31) {
        li.className = 'day holiday';
      }
      if (array[index] === 4 || array[index] === 11 || array[index] === 18) {
        li.className = 'day friday';
      }
      if (array[index] === 25) {
        li.className = 'day holiday friday';
      }
      list.appendChild(li);
      li.innerHTML = array[index];
    }
  }

  daysMonth(dezDaysList);
  
  function holidays (name) {
    let button = document.createElement('button');
    button.id = 'btn-holiday';
    button.innerHTML = name;
    document.querySelector('.buttons-container').appendChild(button);
  }

  holidays('feriados')