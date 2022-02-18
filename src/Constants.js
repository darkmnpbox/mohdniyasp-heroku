import ANGULAR_LISTING from './Assets/Projects/angular-listing.jpeg';
import TRENDING_MOVIES from './Assets/Projects/react-movies.jpg';
import LOAN_CALC from './Assets/Projects/loan-calculator.jpg';
import DEEP_REINFORCEMENT from './Assets/Projects/deep-reinforcement-learning.jpeg';
import NEARBY from './Assets/Projects/nearby.jpg';
import IRIS_FLOWER from './Assets/Projects/iris-flower.webp';
import VEG_FRUIT from './Assets/Projects/vag-fruits.jpeg';
import MAZE_SOLVER from './Assets/Projects/maze-solver.jpeg'


export const PROJECTS = [
  {
    image: ANGULAR_LISTING,
    name: "Full Stack Angular Application",
    technologyUsed: "Angular, OpenID,  Socket-Connection, Express, RabbitMq, NestJs, Postgres, Submodules",
    description: "Created Listing Application that you can read, create, update, delete entities by request to api-gatway. Then Api-gateway will request to microservice then get back data to user.",
    url: "https://github.com/darkmnpbox/ex3-mnp-gateway",
  },
  {
    image: TRENDING_MOVIES,
    name: "Listing Trending Movies - React",
    technologyUsed: "React, Redux-saga, REST API",
    description: "Craeted a react app to show trending movies of the week by using REST API and Redux-saga to create a single point of truth.",
    url: "https://jolly-lamport-fc6a39.netlify.app/",
  },
  {
    image: DEEP_REINFORCEMENT,
    name: "Deep Reinforcement Project",
    technologyUsed: "Python, Numpy, OpenCV, ",
    description: `This is the project in Deep Reinforcement. We need to create the
    environment and Agent. So we need to optimize the agent to get
    maximum reward from the field. For this project i used combination of
    opencv to render the environment and for agent i used many ideas from
    value based and policy based reinforcement algorithms to create my own
    model.`,
    url: "https://1drv.ms/p/s!Ai9xzVM4rU0qhlyKzo2j-T3cZxjj",
  },
  {
    image: LOAN_CALC,
    name: "Loan Calculator",
    technologyUsed: "ReactJs",
    description: "Calcute the Loan EMI, Total Payable, Total Intrest from given data",
    url: "https://github.com/darkmnpbox/react_loan_calculator",
  },
  {
    image: NEARBY,
    name: "Near BY",
    technologyUsed: "React",
    description: "Created App to find what is near by me. Just used Rest Api to get Loaction details then served to user",
    url: "https://mnp-nearby.herokuapp.com/",
  },
  {
    image: IRIS_FLOWER,
    name: "Iris Flower Classification",
    technologyUsed: "",
    description: "Used KNN classification to create a model that will predict the type for given parameter.",
    url: "https://darkmnpbox.herokuapp.com/ML/irisflower/",
  },
  {
    image: VEG_FRUIT,
    name: "Identify Vegitables and Fruits",
    technologyUsed: "Tensorflow, Transfer-Learning, OpenCV",
    description: "This is model created to identify the vegitable and fruits only from a fixed set. You upload a image then it will says what is the item it is.",
    url: "https://github.com/darkmnpbox/veg-fruit-model-heroku",
  },
  {
    image: MAZE_SOLVER,
    name: "Maze-Agent Solver",
    technologyUsed: "GYM, OpenCV",
    description: "It is a customizeble maze environment then run agent to find a solution. It only give one possible path , then it will output the result as video how it solved.",
    url: "https://github.com/darkmnpbox/maze-agent-solver",
  },
];

export const SKILLS = [
  { name: "ReactJs", initialRating: 4 },
  { name: "Angular", initialRating: 4 },
  { name: "JavaScript", initialRating: 5 },
  { name: "Redux", initialRating: 4 },
  { name: "AWS : S3 | EC2 | Lambda...", initialRating: 4 },
  { name: "Nodejs", initialRating: 5 },
  { name: "HTML", initialRating: 5 },
  { name: "CSS", initialRating: 4 },
  { name: "TypeScript", initialRating: 4 },
  { name: "SQL", initialRating: 4 },
  { name: "NoSQL", initialRating: 4 },
  { name: "Python", initialRating: 5 },
  { name: "Numpy", initialRating: 4 },
  { name: "Pandas", initialRating: 4 },
  { name: "Keras", initialRating: 4 },
  { name: "TensorFlow", initialRating: 4 },
  { name: "Git", initialRating: 4 },
];

export const TOOLS = ["Visual Studio Code", "Git", "Chrome DevTools",
  "Npm (Node Package Manager)", "Github", "Docker", "Linux", "Heroku", "Postman", "Anaconda", "Jupyter", "pip(Python Package Manager)"]
