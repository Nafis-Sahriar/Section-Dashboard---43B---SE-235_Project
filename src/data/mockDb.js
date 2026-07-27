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
    description: "The evaluation of the Operating System and System Programming lab will be conducted on 20th July 2026. Syllabus : Linux Commands that were taught till 2nd Lab Class." 
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
    id: "SE-231",
    title: "System Analysis & Design Capstone Project",
    coverImage: "",
    instructor: {
      name: "Dr.Kamrul Islam Shahin",
      email: "drshahin.swe@diu.edu.bd",
      phone: "+880 1936724404",
      room: "608"
    },
    links: {
      whatsapp: "https://chat.whatsapp.com/LtiUIeVg14bGBBLuvyRnj7",
      blc: "https://elearn.daffodilvarsity.edu.bd/course/view.php?id=36923",
      drive: "https://drive.google.com/drive/u/0/folders/1ToS_WPR-6xMqOdkT14g10j3uWmmgVLzt"
    },
    recordedClasses: [
        {
        id: 1,
        classTitle: "SAD - Online Class 1",
        date: "N/A",
        embedLink: "https://www.youtube.com/embed/UphDxjGCjXc?si=TUQNosrKTJPQQjIm" 
      },
        {
        id: 2,
        classTitle: "SAD - Online Class 2",
        date: "N/A",
        embedLink: "https://www.youtube.com/embed/h0MDxwCGWME?si=EJhXJSMZEURgKTpL" 
      },
      {
        id: 3,
        classTitle: "SAD - Online Class 3",
        date: "N/A",
        embedLink: "https://www.youtube.com/embed/85hcxz1aV-U?si=YR_xCM8q98w_SJF3"
      },
      {
        id: 4,
        classTitle: "SAD - Online Class 4",
        date: "N/A",
        embedLink: "https://www.youtube.com/embed/3Q8MbIKsVo8?si=ipc4iqFZsa4wsI6Z"
      }
    ],
    previousQuestions: []
  },
  {
    id: "SE-235",
    title: "Desktop & Web Programming",
    coverImage: "",
    instructor: {
      name: "Partha Chanda",
      email: "chanda.swe@diu.edu.bd",
      phone: "+880 1556-628930",
      room: "908"
    },
    links: {
      whatsapp: "https://chat.whatsapp.com/Krtn276t2Tm1UGQKj3goQc",
      blc: "https://elearn.daffodilvarsity.edu.bd/course/view.php?id=36472",
      drive: "https://drive.google.com/drive/folders/example-web"
    },
    recordedClasses: [],
    previousQuestions: [
      
    ]
  },
  {
    id: "SE-236",
    title: "Desktop & Web Programming Lab",
    coverImage: "",
    instructor: {
      name: "Partha Chanda",
      email: "chanda.swe@diu.edu.bd",
      phone: "+880 1556-628930",
      room: "908"
    },
    links: {
      whatsapp: "https://chat.whatsapp.com/Krtn276t2Tm1UGQKj3goQc",
      blc: "https://elearn.daffodilvarsity.edu.bd/course/view.php?id=36472",
      drive: "https://drive.google.com/drive/folders/example-web"
    },
    recordedClasses: [],
    previousQuestions: []
  },
  {
    id: "SE-232",
    title: "Operating System & System Programming",
    coverImage: "",
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
        classTitle: "OS - Online Class - Mid Syllabus Recap",
        date: "01/07/2026",
        embedLink: "https://www.youtube.com/embed/PQZmhykty4o?si=yBlUDAuqk5X0iW88" 
      }
    ],
    previousQuestions: [
      {
        id: 1,
        semester: "Fall 25",
        examType: "Final",
        fileLink: "/osFinalFall2025.pdf"
      },
       {
        id: 2,
        semester: "Spring 24",
        examType: "Final",
        fileLink: "/os_Final_Spring_2024.pdf"
      },
    ]
  },
  {
    id: "SE-233",
    title: "Operating System & System Programming Lab",
    coverImage: "",
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
    recordedClasses: [],
    previousQuestions: []
  },
  {
    id: "SE-234",
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
  
];

export const upcomingExams = [
  { 
    id: 1, 
    course: "Operating System & System Programming", 
    date: "19/07/2026", 
    time: "10:00 AM", 
    type: "Quiz-2", 
    syllabus: "" 
  },
  { 
    id: 2, 
    course: "Operating System & System Programming", 
    date: "20/07/2026", 
    time: "11:30 AM (B1) / 01:00 PM (B2)", 
    type: "Lab Evaluation", 
    syllabus: "Linux Commands that were taught till 2nd Lab Class" 
  },
];

export const deadlines = [
  { id: 1, course: "System Analysis & Design Capstone Project", title: "Lab Evaluation - Presentaion", dueDate: "15/07/2026", type: "Presentation", status: "expired" },
  { id: 2, course: "Desktop & Web Programming", title: "Lab Assignment Submission", dueDate: "19/07/2026", type: "Assignment", status: "active" } 
];