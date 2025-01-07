

const employees = [
    {
      id: 1,
      firstName: "Arjun",
      email: "employee1@example.com",
      password: "123",
      tasks: [
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          taskTitle: "Prepare presentation",
          taskDescription: "Create slides for the upcoming client meeting.",
          taskDate: "2025-01-10",
          category: "Work",
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          taskTitle: "Complete documentation",
          taskDescription: "Finish the project documentation.",
          taskDate: "2025-01-02",
          category: "Documentation",
        },
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "Team brainstorming",
          taskDescription: "Join the team session for new project ideas.",
          taskDate: "2025-01-05",
          category: "Collaboration",
        },
      ],
      taskCount: { active: 2, newTask: 1, completed: 1, failed: 0 },
    },
    {
      id: 2,
      firstName: "Anjali",
      email: "employee2@example.com",
      password: "123",
      tasks: [
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "Fix bugs in code",
          taskDescription: "Resolve the issues reported in the bug tracker.",
          taskDate: "2025-01-08",
          category: "Development",
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          taskTitle: "Submit timesheet",
          taskDescription: "Fill in the timesheet for December.",
          taskDate: "2025-01-03",
          category: "Admin",
        },
      ],
      taskCount: { active: 1, newTask: 1, completed: 1, failed: 0 },
    },
    {
      id: 3,
      firstName: "Kiran",
      email: "employee3@example.com",
      password: "123",
      tasks: [
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          taskTitle: "Client feedback",
          taskDescription: "Follow up with the client on the feedback form.",
          taskDate: "2025-01-09",
          category: "Client",
        },
        {
          active: false,
          newTask: true,
          completed: false,
          failed: true,
          taskTitle: "Update database",
          taskDescription: "Perform data cleanup and update the schema.",
          taskDate: "2024-12-30",
          category: "Database",
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          taskTitle: "Team lunch planning",
          taskDescription: "Coordinate team lunch for January.",
          taskDate: "2025-01-01",
          category: "Planning",
        },
      ],
      taskCount: { active: 1, newTask: 1, completed: 1, failed: 1 },
    },
    {
      id: 4,
      firstName: "Priya",
      email: "employee4@example.com",
      password: "123",
      tasks: [
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          taskTitle: "Write test cases",
          taskDescription: "Develop test cases for the new feature.",
          taskDate: "2025-01-07",
          category: "Testing",
        },
        {
          active: false,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "Update user manual",
          taskDescription: "Add the latest feature details to the manual.",
          taskDate: "2025-01-06",
          category: "Documentation",
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          taskTitle: "Attend training session",
          taskDescription: "Complete the JavaScript advanced training.",
          taskDate: "2024-12-29",
          category: "Training",
        },
      ],
      taskCount: { active: 1, newTask: 1, completed: 1, failed: 0 },
    },
    {
      id: 5,
      firstName: "Rohan",
      email: "employee5@example.com",
      password: "123",
      tasks: [
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "Plan project roadmap",
          taskDescription: "Create a roadmap for Q1 projects.",
          taskDate: "2025-01-12",
          category: "Planning",
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          taskTitle: "Deploy new update",
          taskDescription: "Push the latest updates to production.",
          taskDate: "2024-12-31",
          category: "Development",
        },
      ],
      taskCount: { active: 1, newTask: 1, completed: 1, failed: 0 },
    },
  ];
  
  const admin = [
    {
      id: 1,
      firstName: "Vikram",
      email: "admin@example.com",
      password: "123",
      tasks: [
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          taskTitle: "Review employee performance",
          taskDescription: "Analyze quarterly performance reports.",
          taskDate: "2025-01-15",
          category: "Management",
        },
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "Update company policies",
          taskDescription: "Revise the leave and attendance policies.",
          taskDate: "2025-01-10",
          category: "Policy",
        },
      ],
      taskCount: { active: 2, newTask: 1, completed: 0, failed: 0 },
    },
  ];
  

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));

  const admin = JSON.parse(localStorage.getItem("admin"));
  return { employees, admin };
};
