<div id="top"></div>


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center">ReadMe - Job-Board</h3>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
         <li><a href="#Prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

Here is the Job-board project. It consists in a job advertisement management application, as Jobteaser or Indeed.

In this "readme" you will find documentation concerning project, as technical information and how to get started and run the application.


<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [Node.js](https://nodejs.org/)
* [Angular](https://angular.io/)
* [Bootstrap](https://getbootstrap.com)
* [mySQL](https://www.mysql.com/)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites
1. Install mySQL
   ```sh
   sudo apt update
   ```
   ```sh
   sudo apt install mysql-server
   ```
   
2. Create file db.config.js 
   ```js
   module.exports = {
   HOST: "localhost",
   USER: "yourusername",
   PASSWORD: "yourpassword",
   DB: "job_board",
   dialect: "mysql",
   pool: {
   max: 5,
   min: 0,
   acquire: 30000,
   idle: 10000
   }
   };
   ```

### Installation

1. Clone the repository

2. Install NPM packages
   ```sh
   npm install
   ```
3. Add your db.config.js to nodejs-express-sequelize-mysql/app/config folder

4. Launch database
   ```sh
   cd job-board/nodejs-express-sequelize-mysql
   ```
   ```sh
   node server.js
   ```
5. Launch application
   ```sh
   cd job-board/Angular12Crud
   ```
   ```sh
   ng serve --port 8081 --open
   ```

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Antonin DISPERATI - antonin.disperati@epitech.eu

<p align="right">(<a href="#top">back to top</a>)</p>
