import { notices, courses, routine, upcomingExams, deadlines } from '../data/mockDb';



export const getActiveNotices = async () => {

  return notices.filter(notice => notice.status === 'active');
};

export const getAllNotices = async () => {
 
  return notices;
};

export const getCourses = async () => {
 
  return courses;
};

export const getCourseById = async (id) => {
 
  return courses.find(course => course.id === id);
};

export const getRoutineByDay = async (dayString) => {

  return routine.filter(session => session.day.toLowerCase() === dayString.toLowerCase());
};

export const getFullRoutine = async () => {
  
  return routine;
};

export const getDeadlines = async () => {
  
  return deadlines;
};

export const getUpcomingExams = async () => {
  
  return upcomingExams;
};