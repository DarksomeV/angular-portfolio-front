export const availableLanguages = ['en-US', 'ru'];

export const languagesForResume = [
  {
    name: 'Ukrainian',
    current: 100
  },
  {
    name: 'Russian',
    current: 100
  },
  {
    name: 'English',
    current: 70
  }
];

export const languagesForResumeRu = [
  {
    name: 'Украинский',
    current: 100
  },
  {
    name: 'Русский',
    current: 100
  },
  {
    name: 'Английский',
    current: 70
  }
];

export const skills = {
  skillsForProgress: [
    {
      name: 'Angular 2+',
      progress: 75
    },
    {
      name: 'JavaScript',
      progress: 71
    },
    {
      name: 'TypeScript',
      progress: 70
    },
    {
      name: 'SCSS',
      progress: 85
    }
  ],
  anotherSkills: ['HTML5', 'CSS', 'Git', 'Photoshop']
};

export const education = [
  {
    name: 'Masters Degree',
    university: 'National Technical University of Ukraine "Igor Sikorsky Kyiv Polytechnic Institute"',
    dates: {
      start: 2018,
      end: 2020
    },
    description: 'Electrical Energetics, Electrical Engineering and Electromechanics'
  },
  {
    name: 'Bachelor Degree',
    university: 'National Technical University of Ukraine "Igor Sikorsky Kyiv Polytechnic Institute"',
    dates: {
      start: 2014,
      end: 2018
    },
    description: 'Electrical Energetics, Electrical Engineering and Electromechanics'
  },
  {
    name: 'Front-End + Angular',
    university: 'EASY CODE IT SCHOOL',
    dates: {
      start: 2018,
      end: 2018
    },
    description: 'Frontend-development specialized school'
  },
  {
    name: 'Angular',
    university: 'EASY CODE IT SCHOOL',
    dates: {
      start: 2019,
      end: 2019
    },
    description: 'Frontend-development specialized school'
  }
];

export const educationRu = [
  {
    name: 'Магистр',
    university: 'Национальный технический университет Украины "Киевский политехнический институт имени Игоря Сикорского"',
    dates: {
      start: 2018,
      end: 2020
    },
    description: 'Electrical Energetics, Electrical Engineering and Electromechanics'
  },
  {
    name: 'Бакалавр',
    university: 'Национальный технический университет Украины "Киевский политехнический институт имени Игоря Сикорского"',
    dates: {
      start: 2014,
      end: 2018
    },
    description: 'Electrical Energetics, Electrical Engineering and Electromechanics'
  },
  {
    name: 'Front-End + Angular',
    university: 'EASY CODE IT SCHOOL',
    dates: {
      start: 2018,
      end: 2018
    },
    description: 'Frontend-development specialized school'
  },
  {
    name: 'Angular',
    university: 'EASY CODE IT SCHOOL',
    dates: {
      start: 2019,
      end: 2019
    },
    description: 'Frontend-development specialized school'
  }
];

export const expierence = [
  {
    name: 'HTML markup coder/developer',
    company: 'Global Solutions for your bussiness GS4B',
    dates: {
      start: {
        month: 'September',
        year: '2018'
      },
      end: {
        month: 'October',
        year: 2019,
        now: false
      }
    },
    description: '- HTML , CSS , basic PHP , basic JS and jquery\n' +
      '- Integration with CMS Wordpress , Yii2.\n' +
      'Starting point in IT ^)'
  },
  {
    name: 'Angular 2+ developer',
    company: 'ITeam Ukraine',
    dates: {
      start: {
        month: 'October',
        year: '2019'
      },
      end: {
        month: '',
        year: 2020,
        now: true
      }
    },
    description: 'Angular Applications Development'
  },
];

export const expierenceRu = [
  {
    name: 'HTML markup coder/developer',
    company: 'Global Solutions for your bussiness GS4B',
    dates: {
      start: {
        month: 'Сентябрь',
        year: '2018'
      },
      end: {
        month: 'Октябрь',
        year: 2019,
        now: false
      }
    },
    description: '- HTML , CSS , basic PHP , basic JS and jquery\n' +
      '- Integration with CMS Wordpress , Yii2.\n' +
      'Starting point in IT ^)'
  },
  {
    name: 'Angular 2+ developer',
    company: 'ITeam Ukraine',
    dates: {
      start: {
        month: 'Октябрь',
        year: '2019'
      },
      end: {
        month: '',
        year: 2020,
        now: true
      }
    },
    description: 'Angular Applications Development'
  },
];

export const works = [
  {
    id: 1,
    title: 'My own portfolio',
    description: 'This place, where you are now - is made by me from nothing. Using my imagination I discussed with designer what I want to see, and according to my wishes was made psd templates. Then I made this Angular app.',
    technologies: ['Angular 8', 'Angular Material', 'Localization with i18n', 'Firebase'],
    pictures: ['assets/images/details/1-1.png'],
    url: 'https://portfolio-enviti.web.app/'
  },
  {
    id: 2,
    title: 'Company portfolio',
    description: 'Iteam company portfolio. I didnt make it from scratch, but redid most part of application.',
    technologies: ['Angular 8', 'Angular Material'],
    pictures: ['assets/images/details/2-1.png'],
    url: 'http://iteam-software.co.ua/'
  },
  {
    id: 3,
    title: 'Aircraft tickets booking system',
    description: 'The goal of the project is to allow companies to book air tickets for their employees in an affordable way with all kinds of discounts and a detailed search. My responsibilities wer: feature development, bug fixing etc',
    technologies: ['Angular 8', 'RxJs', 'NgRx'],
    pictures: ['assets/images/details/3-1.png'],
    url: null
  },
  {
    id: 4,
    title: 'Graphic content selling platform',
    description: 'A platform through which creative graphic content can receive a quality assessment instead of cryptocurrency. My responsibilities wer: feature development, bug fixing, multi-theming etc',
    technologies: ['Angular 8', 'Angular Material', 'RxJs', 'Akita'],
    pictures: ['assets/images/details/4-1.jpeg', 'assets/images/details/4-2.jpeg'],
    url: null
  }
]
