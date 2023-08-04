//
// majorsData.js is housing the queestions/major/descriptions. Adds more space for my MajorChooser.js and breaks down my project even more
// for us to be able to work on it easier as a team.
//

// TODO: Add rest of majors after web scraping
export const availableMajors = [
  {
    id: 1, 
    name: 'Computer Science', 
    description: 'computer systems and programming', 
    affinity: 10, 
  },
  {
    id: 2, 
    name: 'Psychology', 
    description: 'computer systems and programing', 
    affinity: 10, 
  },
  {
    id: 3, 
    name: 'Business Administration', 
    description: 'computer systems and programing', 
    affinity: 10,
  },
  {
    id: 4, 
    name: 'Mechanical Engineering', 
    description:'computer systems and programing' ,
    affinity: 10
  },
  {
    id: 5, 
    name: 'Biology', 
    description: 'computer systems and programing' ,
    affinity: 10
  },
  {
    id: 6, 
    name: 'Art History', 
    description: 'computer systems and programing' ,
    affinity: 10
  },
  {
    id: 7, 
    name: 'Environmental Science', 
    description: 'computer systems and programing' ,
    affinity: 10
  },
  {
    id: 8, 
    name: 'Journalism', 
    description: 'computer systems and programing' ,
    affinity: 10
  },
  // {
  //   id: 9, 
  //   name: 'Marketing', 
  //   description: 'computer systems and programing' ,
  //   affinity: 10
  // },
  // {
  //   id: 10, 
  //   name: 'English Literature', 
  //   description: 'computer systems and programing' ,
  //   affinity: 10
  // },
  // {
  //   id: 11, 
  //   name: 'Civil Engineering', 
  //   description: 'computer systems and programing' ,
  //   affinity: 10
  // },
  // {
  //   id: 12, 
  //   name: 'Political Science', 
  //   description: 'computer systems and programing' ,
  //   affinity: 10
  // },
  // {
  //   id: 13, 
  //   name: 'Chemistry', 
  //   description: 'computer systems and programing',
  //   affinity: 10
  // },
  // {
  //   id: 14, 
  //   name: 'Music Performance', 
  //   description: 'computer systems and programing' ,
  //   affinity: 10
  // },
  // {
  //   id: 15, 
  //   name: 'Economics', 
  //   description: 'computer systems and programing' ,
  //   affinity: 10
  // },
  // {
  //   id: 16, 
  //   name: 'Sociology', 
  //   description: 'computer systems and programing' ,
  //   affinity: 10
  // },
  // {
  //   id: 17, 
  //   name: 'Nursing', 
  //   description: 'computer systems and programing' ,
  //   affinity: 10
  // },
  // {
  //   id: 18, 
  //   name: 'Graphic Design', 
  //   description: 'computer systems and programing',
  //   affinity: 10
  // },
  // {
  //   id: 19, 
  //   name: 'Physics', 
  //   description: 'computer systems and programing' ,
  //   affinity: 10
  // },
  // {
  //   id: 20, 
  //   name: 'History', 
  //   description: 'computer systems and programing' ,
  //   affinity: 10
  // }, 
];
  
// TODO: Add rest of questions after web scraping
export const questionsToAsk = [
  {
    id: 1, 
    text: 'I need the freedom to be creative and express myself.', 
    weights: [
      1, // Computer Science
      0, // Psychology
      0, // Business Administration
      1, // Mechanical Engineering
      0, // Biology
      2, // Art History
      2, // Environmental Science
      3, // Journalism
      // 1, // Marketing
      // 1, // English Literature
      // 1, // Civil Engineering
      // 1, // Political Science
      // 1, // Chemistry
      // 1, // Music Performance
      // 1, // Economics
      // 1, // Sociology
      // 1, // Nursing
      // 1, // Graphic Design
      // 1, // Physics
      // 1, // History
    ], 
  },
  { 
    id: 2, 
    text: 'I care about the state of the environment and want to help improve it in my career.', 
    weights: [
      0, // Computer Science
      0, // Psychology
      0, // Business Administration
      0, // Mechanical Engineering
      2, // Biology
      0, // Art History
      3, // Environmental Science
      0, // Journalism
      // 1, // Marketing
      // 1, // English Literature
      // 1, // Civil Engineering
      // 1, // Political Science
      // 1, // Chemistry
      // 1, // Music Performance
      // 1, // Economics
      // 1, // Sociology
      // 1, // Nursing
      // 1, // Graphic Design
      // 1, // Physics
      // 1, // History
    ], 
  },
  { 
    id: 3, 
    text: 'I like to give advice.', 
    weights: [
      1, // Computer Science
      3, // Psychology
      0, // Business Administration
      1, // Mechanical Engineering
      0, // Biology
      0, // Art History
      0, // Environmental Science
      2, // Journalism
      // 1, // Marketing
      // 1, // English Literature
      // 1, // Civil Engineering
      // 1, // Political Science
      // 1, // Chemistry
      // 1, // Music Performance
      // 1, // Economics
      // 1, // Sociology
      // 1, // Nursing
      // 1, // Graphic Design
      // 1, // Physics
      // 1, // History
    ], 
  },
  { 
    id: 4, 
    text: 'I am interested in rehabilitating and healing people.', 
    weights: [
      0, // Computer Science
      3, // Psychology
      0, // Business Administration
      0, // Mechanical Engineering
      2, // Biology
      0, // Art History
      0, // Environmental Science
      0, // Journalism
    ], 
  },
  { 
    id: 5, 
    text: 'I am very ambitious, persuasive, and love coming up with new ideas.', 
    weights: [
      1, // Computer Science
      0, // Psychology
      3, // Business Administration
      0, // Mechanical Engineering
      0, // Biology
      0, // Art History
      2, // Environmental Science
      2, // Journalism
    ], 
  },
  { 
    id: 6, 
    text: 'I enjoy learning about different parts of the world.', 
    weights: [
      0, // Computer Science
      0, // Psychology
      2, // Business Administration
      0, // Mechanical Engineering
      0, // Biology
      3, // Art History
      2, // Environmental Science
      1, // Journalism
    ], 
  },
  { 
    id: 7, 
    text: 'I like math and figuring out how things work.', 
    weights: [
      3, // Computer Science
      0, // Psychology
      0, // Business Administration
      3, // Mechanical Engineering
      2, // Biology
      0, // Art History
      0, // Environmental Science
      0, // Journalism
    ], 
  },
];