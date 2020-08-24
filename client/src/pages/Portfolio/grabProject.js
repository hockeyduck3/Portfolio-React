export default function (dataName) {
    switch (dataName) {
        case 'quiz':
            return {
                bigViewTitle: 'My Quiz Game',
                bigImg: './images/Quiz-2.jpg',
                bigAlt: 'My Quiz Game',
                liveLink: 'https://hockeyduck3.github.io/Quiz-Game/',
                repoLink: 'https://github.com/hockeyduck3/Quiz-Game',
                marginTop: '65px',
                description: 'This is a quick and simple quiz game that I made for Full Stack Web Course. Using just regular HTML, Bootstrap, and vanilla Javascript. The point of the game is simple, you have 60 seconds to answer all 10 questions! For every question you get right you\'ll recieve 5 points, but if you get a question wrong you\'ll love 5 seconds off the timer. Good luck and have fun!',
                techUsed: [
                    'fa-html5',
                    'fa-css3-alt',
                    'fa-bootstrap',
                    'fa-js-square'
                ]
            }

        case 'password':
            return {
                bigViewTitle: 'My Password Generator',
                bigImg: './images/Password-2.jpg',
                bigAlt: 'My Password Generator',
                liveLink: 'https://hockeyduck3.github.io/Password-Generator/',
                repoLink: 'https://github.com/hockeyduck3/Password-Generator',
                marginTop: '80px',
                description: 'This was a quick little project I made based off of the password generator assignment I had for my Full Stack Web Course. A lot of the code I made for that assignment I moved over to this site with some slight changes. The main thing that\'s different between the two is that for my assignment I had to use alerts for user input, this project doesn\'t, and the UI is my design instead of the design that was given to me.',
                techUsed: [
                    'fa-html5',
                    'fa-css3-alt',
                    'fa-bootstrap',
                    'fa-js-square',
                    {
                        name: 'jQuery',
                        img: './images/jQuery.png'
                    }
                ]
            };

        case 'weather':
            return {
                bigViewTitle: 'My Weather App',
                bigImg: './images/Weather-2.jpg',
                bigAlt: 'My Weather App',
                liveLink: 'https://hockeyduck3.github.io/Weather-Site/',
                repoLink: 'https://github.com/hockeyduck3/Weather-Site',
                marginTop: '80px',
                description: 'This project was an api assignment for my Full Stack Web Course. I used the Open Weather api for grabbing all of the weather data. The rest of the site was built with HTML, Bootstrap, and jQuery. This assignment took me around 2 weeks to get the website where I wanted it to be, and I\'m really happy with how it turned out!',
                techUsed: [
                    'fa-html5',
                    'fa-css3-alt',
                    'fa-bootstrap',
                    {
                        name: 'jQuery',
                        img: './images/jQuery.png'
                    }
                ]
            };

        case 'covid':
            return {
                bigViewTitle: 'COVID-19 Website',
                bigImg: './images/Covid-2.jpg',
                bigAlt: 'COVID-19 Website',
                liveLink: 'https://hockeyduck3.github.io/COVID-Website/',
                repoLink: 'https://github.com/hockeyduck3/COVID-Website',
                marginTop: '88px',
                description: 'This project was my first group project in my Full Stack Web Course. We made this website to help keep others informed about what was going on with a specific country and their COVID-19 cases. When you select a country or search for one, you\'ll see COVID-19 for that country as well as NY Times articles with related with that country. You\'ll also see Bloomberg articles to stay up to date on financial news around the globe.',
                techUsed: [
                    'fa-html5',
                    'fa-css3-alt',
                    {
                        name: 'Foundation',
                        img: './images/Foundation.png'
                    },
                    {
                        name: 'jQuery',
                        img: './images/jQuery.png'
                    }
                ]
            };

        case 'note':
            return {
                bigViewTitle: 'Simple Note Taker',
                bigImg: './images/Note-Taker-2.jpg',
                bigAlt: 'My Simple Note Taker',
                liveLink: 'https://simple-notes-taker.herokuapp.com/',
                repoLink: 'https://github.com/hockeyduck3/Simple-Note-Taker',
                marginTop: '76px',
                description: 'This project was another assignment given to me from my Full Stack Web Course. For this assignment the front-end was given to us, but we had to go and build the backend ourselves. But after I was done building the backend I did go and change up the frontend just a little bit. 😁',
                techUsed: [
                    'fa-html5',
                    'fa-css3-alt',
                    'fa-bootstrap',
                    {
                        name: 'jQuery',
                        img: './images/jQuery.png'
                    },
                    {
                        name: 'NodeJs',
                        img: './images/NodeJS.png'
                    },
                    {
                        name: 'express',
                        img: './images/express.png'
                    }
                ]
            };

        case 'employeeManage':
            return {
                bigViewTitle: 'Employee Management App',
                bigImg: './images/Employee-Management-2.jpg',
                bigAlt: 'My Employee Management App',
                liveLink: 'https://www.youtube.com/watch?v=UztqwmOUK84&feature=youtu.be',
                repoLink: 'https://github.com/hockeyduck3/Employee-Management-System',
                marginTop: '101px',
                description: 'For this project I had to go and build a Node.js app that also connected to a SQL server! The app can be used to help keep track and employee\'s in the company, what job they have, what department they\'re in, what their salary is, and even who their manager is! This app doesn\'t have a live website attached to it, but feel free to watch the video below to see this project in action!',
                techUsed: [
                    {
                        name: 'NodeJs',
                        img: './images/NodeJS.png'
                    },
                    {
                        name: 'mySQL',
                        img: './images/mySQL.png'
                    }
                ]
            };

        case 'burger':
            return {
                bigViewTitle: 'Eat-Dat-Burger',
                bigImg: './images/Eat-Dat-Burger-2.jpg',
                bigAlt: 'My Eat-Dat-Burger App',
                liveLink: 'https://eat-dat-burger-website.herokuapp.com/',
                repoLink: 'https://github.com/hockeyduck3/Eat-Dat-Burger',
                marginTop: '75px',
                description: 'For this project I had to go and make a simple burger eating website that utilized a SQL database. The website itself is using Handlebars for HTML handling, Bootstrap, jQuery, Express, and JawsDB. The main point of this website is simple, you can add a burger to the "Burgers to Devour" list, and then once you click on that burger it will move over to the "Devoured burgers" list! All of this is saved within a JawsDB SQL server.',
                techUsed: [
                    {
                        name: 'Handlebars',
                        img: './images/Handlebars.jpg'
                    },
                    'fa-css3-alt',
                    'fa-bootstrap',
                    {
                        name: 'jQuery',
                        img: './images/jQuery.png'
                    },
                    {
                        name: 'NodeJs',
                        img: './images/NodeJS.png'
                    },
                    {
                        name: 'express',
                        img: './images/express.png'
                    },
                    {
                        name: 'mySQL',
                        img: './images/mySQL.png'
                    }
                ]
            };

        case 'poke':
            return {
                bigViewTitle: 'Poke-Build',
                bigImg: './images/Poke-Build-2.jpg',
                bigAlt: 'the Poke-Build Website',
                liveLink: 'https://poke-build.herokuapp.com/',
                repoLink: 'https://github.com/Akessler314/PokE-Build',
                marginTop: '61px',
                description: 'This was my second group project in my Full Stack Web Course. We wanted to do something really fun for this project, something that both challenged us and something that we\'d be proud of! With Poke-Build you can go and view other user created Pokemon, Battle Pokemon, or simply make your own Pokemon!',
                techUsed: [
                    {
                        name: 'Handlebars',
                        img: './images/Handlebars.jpg'
                    },
                    'fa-css3-alt',
                    'fa-bootstrap',
                    {
                        name: 'jQuery',
                        img: './images/jQuery.png'
                    },
                    {
                        name: 'NodeJs',
                        img: './images/NodeJS.png'
                    },
                    {
                        name: 'express',
                        img: './images/express.png'
                    },
                    {
                        name: 'mySQL',
                        img: './images/mySQL.png'
                    }
                ]
            };
        
        case 'budget':
            return {
                bigViewTitle: 'Progressive Budget',
                bigImg: './images/Budget-2.png',
                bigAlt: 'my Progressive Budget App',
                liveLink: 'https://simple-budget-tracker-site.herokuapp.com/',
                repoLink: 'https://github.com/hockeyduck3/Progressive-Budget',
                marginTop: '57px',
                description: 'With this project I was tasked with making a simple budget app into a PWA (Progressive Web App). The code for the front-end was provided, but I did make some small changes to it. For the backend database, this project is using MongoDB. The main functionality of this app is to be able to save your budget changes to the indexedDB in the browser if internet connect is lost, and have them upload in bulk once a connection is re-established.',
                techUsed: [
                    'fa-html5',
                    'fa-css3-alt',
                    'fa-bootstrap',
                    {
                        name: 'NodeJs',
                        img: './images/NodeJS.png'
                    },
                    {
                        name: 'express',
                        img: './images/express.png'
                    },
                    {
                        name: 'MongoDB',
                        img: './images/mongodb.png'
                    }
                ]
            }

        case 'directory':
            return {
                bigViewTitle: 'Employee Directory',
                bigImg: './images/Directory-2.png',
                bigAlt: 'my Employee Directory App',
                liveLink: 'https://hockeyduck3.github.io/Employee-Directory/',
                repoLink: 'https://github.com/hockeyduck3/Employee-Directory',
                marginTop: '56px',
                description: 'For this small project I had to go and build a simple employee directory from scratch using React. In terms of functionality, all of the users are randomly generated using the randomuser.me API. You also have search functionality, so you can search by first or last name, age, or date of birth. There\'s also a way to sort the employee\'s by name or age. One thing I did want to note is that this website was my first time building anything with the React framework, and I\'m really happy with how it turned out!',
                techUsed: [
                    'fa-react',
                    'fa-css3-alt',
                    'fa-bootstrap'
                ]
            }

        case 'book':
            return {
                bigViewTitle: 'Google Books Search',
                bigImg: './images/Book-Search-2.png',
                bigAlt: 'my Google Books Search App',
                liveLink: 'https://gbooks-react-site.herokuapp.com/',
                repoLink: 'https://github.com/hockeyduck3/React-Google-Books',
                marginTop: '52px',
                description: 'This is a simple website I made for my Full Stack Web Course. I built this simple Google Books search page from scratch using React, and MongoDB as my database. The functionality of this website is pretty simple. You can search for any book you\'d like, and you can either view more about that book which will take you to the Google Books page, or you can save the book for viewing later.',
                techUsed: [
                    'fa-react',
                    'fa-css3-alt',
                    'fa-bootstrap',
                    {
                        name: 'NodeJs',
                        img: './images/NodeJS.png'
                    },
                    {
                        name: 'express',
                        img: './images/express.png'
                    },
                    {
                        name: 'MongoDB',
                        img: './images/mongodb.png'
                    }
                ]
            }

        default:
            return {
                bigViewTitle: 'Change of Seasons',
                bigImg: './images/COS-2.png',
                bigAlt: 'Change of Seasons Game',
                liveLink: 'https://changeofseasonstcg.herokuapp.com/',
                repoLink: 'https://github.com/Bounty556/ChangeOfSeasonsTCG',
                marginTop: '53px',
                description: 'Change of Seasons is an online multiplayer card game built by my group (the Dream-Team) as our final project. The game is based off the four seasons, Spring, Summer, Fall, and Winter. Once you make an account and select your desired deck, you\'ll then be able to hop into a match with a friend by sharing the game id automatically created after clicking "Create Match". Right now the game is in "Alpha" phase, with new features coming down the pipeline!',
                techUsed: [
                    'fa-react',
                    'fa-css3-alt',
                    'fa-bootstrap',
                    {
                        name: 'NodeJs',
                        img: './images/NodeJS.png'
                    },
                    {
                        name: 'express',
                        img: './images/express.png'
                    },
                    {
                        name: 'MongoDB',
                        img: './images/mongodb.png'
                    },
                    {
                        name: 'Socket',
                        img: './images/Socket.png'
                    }
                ]
            }
    }
}
