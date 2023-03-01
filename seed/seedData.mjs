export const modules = [
  { name: 'html-css', displayName: 'HTML/CSS' },
  { name: 'javascript', displayName: 'JavaScript' },
  { name: 'browsers', displayName: 'Browsers' },
  { name: 'using-apis', displayName: 'Using APIs' },
  { name: 'node', displayName: 'Node.js' },
  { name: 'databases', displayName: 'Databases' },
  { name: 'react', displayName: 'React' },
  { name: 'project', displayName: 'Project' },
];

export const classes = [
  {
    name: 'class32',
    startDate: '2021-2-23',
    graduationDate: '2021-11-7',
  },
  {
    name: 'class33',
    startDate: '2021-5-28',
    graduationDate: '2021-11-7',
  },
  {
    name: 'class34',
    startDate: '2021-9-2',
    graduationDate: '2022-4-2',
  },
  {
    name: 'class35',
    startDate: '2021-11-14',
    graduationDate: '2021-06-14',
  },
  {
    name: 'class36',
    startDate: '2022-1-5',
    graduationDate: '2021-8-5',
  },
];

export const students = [
  {
    name: 'Fede',
    className: 'class33',
    graduated: true,
  },
  {
    name: 'Tjebbe',
    className: 'class32',
    graduated: false,
  },
  { name: 'Rob', className: 'class34', gitHubName: 'robvk', graduated: true },
  {
    name: 'Wouter',
    className: 'class35',
    graduated: false,
  },
];

export const mentors = [
  {
    name: 'Stas',
    canTeach: ['javascript', 'browsers', 'using-apis'],
    nowTeaching: 'javascript',
  },
  {
    name: 'Andrej',
    canTeach: ['using-apis', 'node'],
  },
  {
    name: 'Shriyans',
    canTeach: ['react'],
    nowTeaching: 'react',
  },
  {
    name: 'Yash',
    canTeach: ['javascript', 'using-apis'],
  },
  {
    name: 'Rohan',
    canTeach: ['html/css/git', 'javascript', 'node'],
  },
  {
    name: 'Collin',
    canTeach: ['browsers', 'using-apis', 'node'],
  },
];
