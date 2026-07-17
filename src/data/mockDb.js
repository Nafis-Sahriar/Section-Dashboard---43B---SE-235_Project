export const notices = [
  {
    id: 1,
    title: "Regarding Web Programming Lab Assignment",
    date: "19/07/2026",
    priority: "high",
    status: "active",
    description: "Use The lab assignment report coverpage for submission in BLC"
  },
  {
    id: 2,
    title: "Operating System and System Programming Lab Evaluation",
    date: "20/07/2026",
    priority: "high",
    status: "active",
    description: "The evaluation of the Operating System and System Programming lab will be conducted on 20th July 2026. All students are required to submit their lab reports before the evaluation." 
  },
];

export const routine = [
  { day: "Saturday", time: "11:30 - 01:00", course: "Operating System & System Programming", room: "811", teacher: "IS" },
  { day: "Saturday", time: "02:30 - 04:00", course: "Desktop & Web Programming", room: "811", teacher: "PC" },
  { day: "Sunday", time: "10:00 - 11:30", course: "Operating System & System Programming", room: "YKSG-3 -107", teacher: "IS" },
  { day: "Sunday", time: "11:30 - 01:00", course: "Desktop & Web Programming", room: "YKSG-3 -108", teacher: "PC" },
  { day: "Sunday", time: "02:30 - 04:00", course: "Theory of Computing", room: "101A", teacher: "DDK" },
  { day: "Monday", time: "08:30 - 10:00", course: "Theory of Computing", room: "913", teacher: "DDK" },
  { day: "Monday", time: "11:30 - 01:00", course: "SE-233 - LAB B1", room: "814 B", teacher: "IS" },
  { day: "Monday", time: "11:30 - 01:00", course: "SE-236 - LAB B2", room: "814 A", teacher: "PC" },
  { day: "Monday", time: "01:00 - 02:30", course: "SE-236 - LAB B1", room: "814 A", teacher: "PC" },
  { day: "Monday", time: "01:00 - 02:30", course: "SE-233 - LAB B2", room: "814 B", teacher: "IS" },
  { day: "Wednesday", time: "08:30 - 11:30", course: "System Analysis & Design Capstone Project (Lab) — B2", room: "903", teacher: "DKS" },
  { day: "Wednesday", time: "01:00 - 04:00", course: "System Analysis & Design Capstone Project (Lab) — B1", room: "903", teacher: "DKS" },
  { day: "Thursday", time: "01:00 - 02:30", course: "System Analysis & Design Capstone Project", room: "Online", teacher: "DKS" }
];

export const courses = [
  {
    id: "SE-235",
    title: "Desktop & Web Programming",
    coverImage: "/images/web-prog-cover.jpg",
    instructor: {
      name: "Partha Chanda",
      email: "chanda.swe@diu.edu.bd",
      phone: "+880 1556-628930",
      room: "811"
    },
    links: {
      whatsapp: "https://chat.whatsapp.com/Krtn276t2Tm1UGQKj3goQc",
      blc: "https://elearn.daffodilvarsity.edu.bd/course/view.php?id=36472",
      drive: "https://drive.google.com/drive/folders/example-web"
    },
    recordedClasses: [],
    previousQuestions: [
      {
        id: 1,
        semester: "Fall 25",
        examType: "Midterm",
        fileLink: "https://drive.google.com/file/d/example-mid"
      }
    ]
  },
  {
    id: "SE233",
    title: "Operating System & System Programming",
    coverImage: "/images/os-cover.jpg",
    instructor: {
      name: "Israt Sultana",
      email: "ishrat.swe@diu.edu.bd",
      phone: "", 
      room: ""
    },
    links: {
      whatsapp: "", 
      blc: "https://blc.university.edu/course/view.php?id=233",
      drive: ""
    },
    recordedClasses: [
      {
        id: 1,
        classTitle: "Process Scheduling Algorithms",
        date: "10/06/2026",
        embedLink: "https://www.youtube.com/embed/example3"
      }
    ],
    previousQuestions: []
  },
  {
    id: "TOC101",
    title: "Theory of Computing",
    coverImage: "", 
    instructor: {
      name: "Dipta Dipayan Kaur",
      email: "dipta.swe.0203.c@diu.edu.bd",
      phone: "",
      room: ""
    },
    links: {
      whatsapp: "https://chat.whatsapp.com/example-toc",
      blc: "https://blc.university.edu/course/view.php?id=101",
      drive: "https://drive.google.com/drive/folders/example-toc"
    },
    recordedClasses: [],
    previousQuestions: []
  },
  {
    id: "SE-231",
    title: "System Analysis & Design Capstone Project",
    coverImage: "",
    instructor: {
      name: "DKS",
      email: "drshahin.swe@diu.edu.bd",
      phone: "",
      room: ""
    },
    links: {
      whatsapp: "",
      blc: "",
      drive: ""
    },
    recordedClasses: [],
    previousQuestions: []
  }
];

export const upcomingExams = [
  { id: 1, course: "Operating System & System Programming", date: "25/07/2026", time: "10:00 AM", type: "Midterm", syllabus: "Chapters 1-4" },
  { id: 2, course: "Desktop & Web Programming", date: "28/07/2026", time: "02:00 PM", type: "Quiz", syllabus: "React Hooks & Context API" },
  { id: 3, course: "Theory of Computing", date: "05/08/2026", time: "11:30 AM", type: "Class Test", syllabus: "" } 
];

export const deadlines = [
  { id: 1, course: "System Analysis & Design Capstone Project", title: "Project Proposal Submission", dueDate: "20/07/2026", type: "Presentation" },
  { id: 2, course: "Operating System & System Programming", title: "Scheduling Algorithm Implementation", dueDate: "22/07/2026", type: "Lab Assignment" },
  { id: 3, course: "Desktop & Web Programming", title: "React Component Library Setup", dueDate: "24/07/2026", type: "" } 
];