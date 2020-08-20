export default function (dataName) {
    switch (dataName) {
        case 'quiz':
            return {
                bigViewTitle: 'My Quiz Game',
                bigImg: './images/Quiz-2.jpg',
                bigAlt: 'My Quiz Game',
                liveLink: 'https://hockeyduck3.github.io/Quiz-Game/',
                repoLink: 'https://github.com/hockeyduck3/Quiz-Game',
                marginTop: '5px',
                description: 'This is a quick and simple quiz game that I made for Full Stack Web Course. Using just regular HTML, Bootstrap, and vanilla Javascript. The point of the game is simple, you have 60 seconds to answer all 10 questions! For every question you get right you\'ll recieve 5 points, but if you get a question wrong you\'ll love 5 seconds off the timer. Good luck and have fun!'
            }

        case 'password':
            return {
                bigViewTitle: 'My Password Generator',
                bigImg: './images/Password-2.jpg',
                bigAlt: 'My Password Generator',
                liveLink: 'https://hockeyduck3.github.io/Password-Generator/',
                repoLink: 'https://github.com/hockeyduck3/Password-Generator',
                marginTop: '26px',
                description: 'This was a quick little project I made based off of the password generator assignment I had for my Full Stack Web Course. A lot of the code I made for that assignment I moved over to this site with some slight changes. The main thing that\'s different between the two is that for my assignment I had to use alerts for user input, this project doesn\'t, and the UI is my design instead of the design that was given to me.'
            };

        case 'weather':
            return {
                bigViewTitle: 'My Weather App',
                bigImg: './images/Weather-2.jpg',
                bigAlt: 'My Weather App',
                liveLink: 'https://hockeyduck3.github.io/Weather-Site/',
                repoLink: 'https://github.com/hockeyduck3/Weather-Site',
                marginTop: '18px',
                description: 'This project was an api assignment for my Full Stack Web Course. I used the Open Weather api for grabbing all of the weather data. The rest of the site was built with HTML, Bootstrap, and jQuery. This assignment took me around 2 weeks to get the website where I wanted it to be, and I\'m really happy with how it turned out!'
            };

        case 'covid':
            return {
                bigViewTitle: 'COVID-19 Website',
                bigImg: './images/Covid-2.jpg',
                bigAlt: 'COVID-19 Website',
                liveLink: 'https://hockeyduck3.github.io/COVID-Website/',
                repoLink: 'https://github.com/hockeyduck3/COVID-Website',
                marginTop: '35px',
                description: 'This project was my first group project in my Full Stack Web Course. We made this website to help keep others informed about what was going on with a specific country and their COVID-19 cases. When you select a country or search for one, you\'ll see COVID-19 for that country as well as NY Times articles with related with that country. You\'ll also see Bloomberg articles to stay up to date on financial news around the globe.'
            };

        case 'note':
            return {
                bigViewTitle: 'Simple Note Taker',
                bigImg: './images/Note-Taker-2.jpg',
                bigAlt: 'My Simple Note Taker',
                liveLink: 'https://simple-notes-taker.herokuapp.com/',
                repoLink: 'https://github.com/hockeyduck3/Simple-Note-Taker',
                marginTop: '20px',
                description: 'This project was another assignment given to me from my Full Stack Web Course. For this assignment the front-end was given to us, but we had to go and build the backend ourselves. But after I was done building the backend I did go and change up the frontend just a little bit. 😁'
            };

        case 'employeeManage':
            return {
                bigViewTitle: 'Employee Management App',
                bigImg: './images/Employee-Management-2.jpg',
                bigAlt: 'My Employee Management App',
                liveLink: 'https://www.youtube.com/watch?v=UztqwmOUK84&feature=youtu.be',
                repoLink: 'https://github.com/hockeyduck3/Employee-Management-System',
                marginTop: '45px',
                description: 'For this project I had to go and build a Node.js app that also connected to a SQL server! The app can be used to help keep track and employee\'s in the company, what job they have, what department they\'re in, what their salary is, and even who their manager is! This app doesn\'t have a live website attached to it, but feel free to watch the video below to see this project in action!'
            };

        case 'burger':
            return {
                bigViewTitle: 'Eat-Dat-Burger',
                bigImg: './images/Eat-Dat-Burger-2.jpg',
                bigAlt: 'My Eat-Dat-Burger App',
                liveLink: 'https://eat-dat-burger-website.herokuapp.com/',
                repoLink: 'https://github.com/hockeyduck3/Eat-Dat-Burger',
                marginTop: '22px',
                description: 'For this project I had to go and make a simple burger eating website that utilized a SQL database. The website itself is using Handlebars for HTML handling, Bootstrap, jQuery, Express, and JawsDB. The main point of this website is simple, you can add a burger to the "Burgers to Devour" list, and then once you click on that burger it will move over to the "Devoured burgers" list! All of this is saved within a JawsDB SQL server.'
            };

        default:
            return {
                bigViewTitle: 'Poke-Build',
                bigImg: './images/Poke-Build-2.jpg',
                bigAlt: 'the Poke-Build Website',
                liveLink: 'https://poke-build.herokuapp.com/',
                repoLink: 'https://github.com/Akessler314/PokE-Build',
                marginTop: '0px',
                description: 'This was my second group project in my Full Stack Web Course. We wanted to do something really fun for this project, something that both challenged us and something that we\'d be proud of! With Poke-Build you can go and view other user created Pokemon, Battle Pokemon, or simply make your own Pokemon!'
            };
    }
}
