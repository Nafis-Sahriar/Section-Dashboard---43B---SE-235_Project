import { notices, courses, routine, upcomingExams, deadlines } from '../data/mockDb';

const delay = (ms = 300) => new Promise(resolve => setTimeout(resolve, ms));

export const getActiveNotices = async () => {
  await delay();
  return notices.filter(notice => notice.status === 'active');
};

export const getAllNotices = async () => {
  await delay();
  return notices;
};

export const getCourses = async () => {
  await delay();
  return courses;
};

export const getCourseById = async (id) => {
  await delay();
  return courses.find(course => course.id === id);
};

export const getRoutineByDay = async (dayString) => {
  await delay();
  return routine.filter(session => session.day.toLowerCase() === dayString.toLowerCase());
};

export const getFullRoutine = async () => {
  await delay();
  return routine;
};

export const getDeadlines = async () => {
  await delay();
  return deadlines;
};

export const getUpcomingExams = async () => {
  await delay();
  return upcomingExams;
};