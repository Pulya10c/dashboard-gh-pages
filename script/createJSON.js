/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
const startTime = new Date();
const fs = require('fs');
XLSX = require('xlsx');
const uuid = require('uuid/v4');

const coupleMentorStudent = XLSX.readFile('./script/_source/Mentor-students pairs.xlsx');
const tasks = XLSX.readFile('./script/_source/Tasks.xlsx');
const scoreStudents = XLSX.readFile('./script/_source/Mentor score.xlsx');

const tasksList = tasks.Sheets.Sheet1;
const list1MentorSrudent = coupleMentorStudent.Sheets['second_name-to_github_account'];
const list2MentorSrudent = coupleMentorStudent.Sheets.pairs;
const scoreStudentsList = scoreStudents.Sheets['Form Responses 1'];

const listTasks = (tasksXLSX) => {
  const taskAll = {};
  let currentRow = 2;
  let A = `A${currentRow}`;
  let B = `B${currentRow}`;
  let C = `C${currentRow}`;
  let nameT;
  while (tasksXLSX[A]) {
    nameT = tasksXLSX[A].v.trim().toLowerCase();
    const task = {
      id: uuid(),
      name: tasksXLSX[A].v.trim().toLowerCase(),
      link: tasksXLSX[B] ? tasksXLSX[B].v.trim() : 'missing',
      status: tasksXLSX[C].v.trim().toLowerCase(),
    };
    taskAll[nameT] = task;
    currentRow++;
    A = `A${currentRow}`;
    B = `B${currentRow}`;
    C = `C${currentRow}`;
  }
  return taskAll;
};

const result = {};
result.tasks = listTasks(tasksList);

// eslint-disable-next-line consistent-return
const compareTasks = (taskStud, taskData) => {
  if (result.tasks[taskStud].status === 'in progress') {
    return 'yellow';
  }
  if (result.tasks[taskStud].status === 'todo') {
    return 'gray';
  }
  if (result.tasks[taskStud].status === 'checking' && taskData === 'missing') {
    return 'red';
  }
  if (result.tasks[taskStud].status === 'checked' && taskData === 'missing') {
    return 'red';
  }
  if (result.tasks[taskStud].status === 'checked' && taskData === 'checking') {
    return 'pink';
  }
  if (result.tasks[taskStud].status === 'checking' && taskData === 'checking') {
    return 'pink';
  }
  if (result.tasks[taskStud].status === 'checked' && taskData === 'checked') {
    return 'green';
  }
  if (result.tasks[taskStud].status === 'checking' && taskData === 'checked') {
    return 'green';
  }
};

const scoreStatusTask = (scoreInfoFile, nickNameStudents, nameTask) => {
  let currentRow = 2;
  let C = `C${currentRow}`;
  let D = `D${currentRow}`;
  let F = `F${currentRow}`;
  let flag = 0;
  let res;
  while (scoreInfoFile[C] && flag === 0) {
    res = '';
    if (scoreInfoFile[C].w.toLowerCase().indexOf(nickNameStudents) !== -1
    && nameTask.toLowerCase() === scoreInfoFile[D].w.trim().toLowerCase()) {
      flag = 1;
      if (scoreInfoFile[F]) {
        if (scoreInfoFile[F].v === 0) {
          res = compareTasks(nameTask, 'missing');
        } else {
          res = compareTasks(nameTask, 'checked');
        }
      // eslint-disable-next-line no-else-return
      } else {
        res = compareTasks(nameTask, 'checking');
      }
    }
    currentRow++;
    C = `C${currentRow}`;
    D = `D${currentRow}`;
    F = `F${currentRow}`;
  }
  if (flag === 0) {
    res = compareTasks(nameTask, 'missing');
  }
  return res;
};

const tasksListStudents = (sheetTask, nickNameStd) => {
  const taskAll = {};
  let currentRow = 2;
  let A = `A${currentRow}`;
  let nameT;
  while (sheetTask[A]) {
    const tasckName = sheetTask[A].v.trim().toLowerCase();
    nameT = tasckName;
    const task = {
      id: uuid(),
      className: scoreStatusTask(scoreStudentsList, nickNameStd, tasckName.toLowerCase()),
    };
    taskAll[nameT] = task;
    currentRow++;
    A = `A${currentRow}`;
  }
  return taskAll;
};

const getListStudentAtMentor = (sheet, nameMentor) => {
  let students = [];
  let currentRow = 2;
  let A = `A${currentRow}`;
  let B = `B${currentRow}`;
  while (sheet[A]) {
    const name = sheet[A].v.trim().toLowerCase();
    const nameStudent = sheet[B].w.trim().toLowerCase();
    if (name === nameMentor) {
      const student = {
        id: uuid(),
        student: nameStudent,
        linkGithub: `https://github.com/${nameStudent}`,
        tasks: tasksListStudents(tasksList, nameStudent),
      };
      students = [...students, ...[student]];
    }
    currentRow++;
    A = `A${currentRow}`;
    B = `B${currentRow}`;
  }
  return students;
};

const getListMentor = (sheet, sheet2) => {
  const mentors = {};
  let currentRow = 2;
  let A = `A${currentRow}`;
  let B = `B${currentRow}`;
  let E = `E${currentRow}`;
  let nameM;
  while (sheet[A]) {
    const name = sheet[A].w.trim().toLowerCase();
    const lastName = sheet[B].w.trim().toLowerCase();
    // eslint-disable-next-line prefer-destructuring
    nameM = sheet[E].v.split('/')[3];
    const mentor = {
      id: uuid(),
      name: `${name} ${lastName}`,
      mentorGithub: sheet[E].v.split('/')[3],
      linckGithub: sheet[E].v,
      students: getListStudentAtMentor(sheet2, `${name} ${lastName}`),
    };
    // mentors = [...mentors, ...mentor];
    mentors[nameM] = mentor;
    currentRow++;
    A = `A${currentRow}`;
    B = `B${currentRow}`;
    E = `E${currentRow}`;
  }
  return mentors;
};

result.mentors = getListMentor(list1MentorSrudent, list2MentorSrudent, tasksList);
const json = JSON.stringify(result);

fs.writeFile('public/data.json', json, 'utf8', () => {
  console.log('writing is done! The path to the file: public/data.json');
});


const finishTime = new Date();
console.log('Script time:', (finishTime - startTime) / 1000, 'sec');
