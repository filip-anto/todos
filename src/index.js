import { compareAsc, format } from 'date-fns'
import addTask, { addSampleTasks, loadTasks } from './taskManagement';
import createTask from './task';
console.log("Hello World");
const dates = [
  new Date(1995, 6, 2),
  new Date(1987, 1, 11),
  new Date(1989, 6, 10),
]
console.log(dates.sort(compareAsc))
addSampleTasks();
loadTasks();
