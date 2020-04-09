This projects contains really nice css animation and shows outstanding react skills. The website was built using gatsby

The idea and motivation to build this was based on [Thiago Loschi's](https://github.com/thiagoloschi) version of the website. Check his repo here [personal website 2019](https://github.com/thiagoloschi/personal-website-2019)

### Build your own version

I wanted to build something reuseable. By changing the [config](https://github.com/clinton-slice/personal-website-2020/blob/develop/src/config.json) file, you can adapt the template to your own experiences and within some minutes, build your own personal website.

```js
{
  "personalInfo": {
    "name": {
      "firstName": "Clinton",
      "lastName": "Nkemdilim"
    },
    "jobTitle": "Front End Engineer",
    "location": "Ottawa, Canada",
    "summary": "Highly skilled and resourceful UI Developer, possessing strong analytical thought process, creative thinking, problem solving and interpersonal skills focused on creating engaging and interactive user applications.",
    "ctaText": "Download my Resume",
    "contacts": [
      {
        "name": "linkedin",
        "url": "https://linkedin.com/in/clinton-nkemdilim/",
        "color": "#2d76b0",
        "fill": "#2D76B0"
      },
      {
        "name": "github",
        "url": "https://github.com/clinton-slice",
        "color": "#000",
        "fill": "#000"
      },
      {
        "name": "codepen",
        "url": "https://codepen.io/clinton-nkemdilim",
        "color": "#000",
        "fill": "#000"
      },
      {
        "name": "instagram",
        "url": "https://instagram.com/sir_clinton",
        "color": "#9a2970",
        "fill": "url(#simpleInsta)"
      },
      {
        "name": "facebook",
        "url": "https://facebook.com/clintonnkemdilim",
        "color": "#3b5998",
        "fill": "#3b5998"
      }
    ]
  },
  "education": [
    {
      "period": {
        "beginDate": "2017",
        "endDate": "2018"
      },
      "school": "Carleton University",
      "major": "Information Technology (Network Technologies)",
      "type": "Masters of Information Technology",
      "place": "Ottawa, Canada",
      "badge": "http://seekvectorlogo.com/wp-content/uploads/2018/03/carleton-university-vector-logo.png",
      "url": "https://carleton.ca/"
    },
    {
      "period": {
        "beginDate": "2011",
        "endDate": "2015"
      },
      "school": "Babcock University",
      "major": "Computer Science",
      "type": "Bachelor of Science",
      "place": "Ogun, Nigeria",
      "badge": "http://academix.ng/blog/wp-content/uploads/2017/09/Babcock-University-logo.jpg",
      "url": "https://www.babcock.edu.ng/"
    }
  ],
  "experiences": [
    {
      "period": {
        "beginDate": "Nov 2019",
        "endDate": "current"
      },
      "jobTitle": "Front End Engineer",
      "company": "Slice Labs",
      "location": "Ottawa, Canada",
      "description": "Currently working in a team consisting of unique and creative individuals focused on building compelling user facing applications which delivers ground-breaking services that provide new innovative insurance solutions directly to end users.\n\n Building web and mobile applications using top-notch technologies such as like React, React Native, Webpack, Babel, Apollo, Github, RESTful APIs and GraphQL. Performing JavaScript testing/ automation with tools such as enzyme, jest and chai. Making use of typing tools such as Flow or TypeScript",
      "url": "https://slice.is/",
      "image": "",
      "color": "#d1384b",
      "text": "#fff"
    },
    {
      "period": {
        "beginDate": "June 2018",
        "endDate": "October 2019"
      },
      "jobTitle": "Computing Specialist and Web developer",
      "company": "Carleton University Online (CUOL)",
      "location": "Ottawa, Canada",
      "description": "This role at Carleton University provided me with the opportunity to improve my Web developing skills and my knowledge of quality video content delivery. It involved me being responsible for managing, providing strategic planning and innovation around the video delivery infrastructure at Carleton University Online (CUOL).\n\n In this position I worked with PHP, Python and JavaScript libraries such as jQuery to build various UIs/Admin interfaces for various in-house build systems\n\n Implemented the convocation video web application utilizing YouTube Data API with React and Redux on the front end\n\n Built integration around content management system APIs from Kaltura",
      "url": "https://carleton.ca/cuol/",
      "image": "https://www.kaszek.com/wp-content/uploads/2018/03/qa.png",
      "color": "#191919",
      "text": "#fff"
    },
    {
      "period": {
        "beginDate": "January 2017",
        "endDate": "June 2018"
      },
      "jobTitle": "Freelance Web Developer",
      "company": "Self",
      "location": "Ottawa, Canada",
      "description": "During this time, I was enrolled in a graduate program at Carleton University but due to the limitations in my study permit, I decided to become a freelancer. I was opportune to work with different clients on various projects. Some of the projects include:\n\n - Designed a customer web form for a local skincare clinic\n\n - Used React.js to develop a searchable YouTube web application\n\n - Online Newspaper 'Vanguard' - vanguardngr.com: Created and defined news categories for newspaper Web site to improve user experience.",
      "url": "https://carleton.ca/cuol/",
      "image": "https://www.kaszek.com/wp-content/uploads/2018/03/qa.png",
      "color": "#fafafa",
      "text": "#333333"
    },
    {
      "period": {
        "beginDate": "September 2015",
        "endDate": "December 2016"
      },
      "jobTitle": "Junior Full Stack Developer ",
      "company": "MRS Oil and Gas",
      "location": "Lagos, Nigeria",
      "description": "After successful completion of my bachelor’s degree at Babcock University, I was hired in a team of outstanding and experienced developers at MRS Oil and Gas. The main focus of the team was in building and maintaining a real time PMS carrier tracking system for retailer clients around Nigeria.\n\n My primary responsibilities were to analyze, design and build new components \n\n Technologies used in the project includes JavaScript ES6, React.js, Redux, Python, PHP, Git and Jira",
      "url": "https://www.mrsoilnigplc.net/",
      "image": "https://scontent.fcgh23-1.fna.fbcdn.net/v/t31.0-8/17635230_1487664674639567_6041624776622573815_o.jpg?_nc_cat=107&_nc_ht=scontent.fcgh23-1.fna&oh=6c1f6872873769658634a387beed7640&oe=5CA429CA",
      "color": "#7E0224",
      "text": "#fff"
    },
    {
      "period": {
        "beginDate": "June 2014",
        "endDate": "August 2014"
      },
      "jobTitle": "Web Developer",
      "company": "Ritan360",
      "location": "Lagos, Nigeria",
      "description": "Successfully completed an intense 12 weeks Full-Immersion Web Development Training Bootcamp\n\n During this training, I was exposed to work-like, project-oriented environment that was focused on coding around specific technologies as well as frameworks/libraries \n\n Trained in building and deploying outstanding web applications using HTML5, CSS, JavaScript and Hypertext Preprocessor (PHP)",
      "url": "https://instmanager.herokuapp.com",
      "image": "https://instmanager.herokuapp.com/img/main.png",
      "color": "rgb(59, 89, 152)",
      "text": "#fff"
    }
  ],
  "theme": {
    "color": "#fff",
    "fontUrl": "https://fonts.googleapis.com/css?family=Montserrat",
    "fontName": "'Montserrat', sans-serif",
    "fontColor": "#000"
  }
}

```

To develop your own website, clone the project and follow these [instructions to set up your own github pages](https://guides.github.com/features/pages/), then read [gatsby docs on starting the project](https://www.gatsbyjs.org/docs/quick-start). Note that if you're cloning an existing project, you can jump to [starting the development server](https://www.gatsbyjs.org/docs/quick-start#start-development-server), after [installing the dependencies](https://www.gatsbyjs.org/docs/quick-start#install-gatsbys-command-line-tool). Once you're done with editting the config file, follow this article on how to easily [deploy your website to github pages](https://www.gatsbyjs.org/docs/how-gatsby-works-with-github-pages/). You should then be ready to go! 

### Demo

A demo can be seen live at my own personal website: [https://clintonnkemdilim.now.sh/](https://clintonnkemdilim.now.sh/)

### Screenshots

<br />

**Desktop:** 🖥💻
![](https://github.com/clinton-slice/personal-website-2020/blob/develop/images/desktopview.png)

<br />

**Mobile:**📱
![](https://github.com/clinton-slice/personal-website-2020/blob/develop/images/mobileview.png)



