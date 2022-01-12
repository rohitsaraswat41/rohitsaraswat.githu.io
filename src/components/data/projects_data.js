import tweetme from '../../assets/projects_images/tweetme.PNG'
import chatapp from '../../assets/projects_images/chatapp.JPG'
import hardware_store from '../../assets/projects_images/hardware_store.jpg'
import portfolio from '../../assets/projects_images/portfolio.JPG'
import new_year from '../../assets/projects_images/new_year.jpg'
import color_classification from '../../assets/projects_images/color_classification.jpg'
import blinking from '../../assets/projects_images/blinking.JPG'
import COVID from '../../assets/projects_images/COVID.jpg'
import Dev_talks from '../../assets/projects_images/Dev_talks.jpg'
import Health from '../../assets/projects_images/Health.png'
import Bus from '../../assets/projects_images/Bus.png'
import Login from '../../assets/projects_images/Login.png'


const data_projects = [
    {
        name: 'COVID 19 tracker',
        image: COVID,
        deployed_url: '!#',
        github_url: '!#',
        category: ['react.js']
    },

    {
        name: 'Swasthya Abhilekh',
        image: Health,
        deployed_url: 'https://github.com/rohitsaraswat41/Registration-Login-form',
        github_url: 'https://github.com/rohitsaraswat41/Registration-Login-form',
        category: ['node.js', 'mongoDB']
    },

    {
        name: 'Realtime Chat App',
        image: chatapp,
        deployed_url: 'https://github.com/rohitsaraswat41/Real-time-chat',
        github_url: 'https://github.com/rohitsaraswat41/Real-time-chat',
        category: ['node.js', 'socket.io', 'react.js']
    },

    {
        name: 'Bus-Booking',
        image: Bus,
        deployed_url: 'https://github.com/rohitsaraswat41/Bus-booking-System',
        github_url: 'https://github.com/rohitsaraswat41/Bus-booking-System',
        category: ['mongoDB', 'react.js','node.js']
    },

    {
        name: 'Login-Registartion',
        image: Login,
        deployed_url: 'https://github.com/rohitsaraswat41/Registration-Login-form',
        category: ['html_css', 'vanilla']
    },

    {
        name: 'My Portfolio',
        image: portfolio,
        deployed_url: '!#',
        category: ['vanilla']
    },

    {
        name: 'Bengali New Year',
        image: new_year,
        deployed_url: '!#',
        category: ['vanilla']
    },

    {
        name: 'Color Classification using tf.js',
        image: color_classification,
        deployed_url: '!#',
        github_url: '!#',
        category: ['node']
    },

    {
        name: 'Blinking bubbles',
        image: blinking,
        deployed_url: '!#',
        github_url: '!#',
        category: ['processing']
    }
]

export default data_projects;