<h1 align="center" font="blond"> Mar de Dudas Project</h1>

# Description of the project Mar de Dudas

The Mar de Dudas project has been carried out to meet the needs of the Mar de Niebla Social Action Foundation, which needed an application in which teachers could offer their students knowledge control questionnaires, but they wanted to do it in a way that students could interact on each question.
The teacher sends a question that the students receive on their pc to answer it, then the teacher corrects and explains the correct answer and the students will not be able to see the next question until the teacher sends the next question again.

<div align="center"><img src="./public/Images/Pag.Login.jpg"  alt="Page Login " height="400" width="550">
<p> Page Login </p></div>

<div align="center"><img src="./public/Images/Pag.Admin.jpg"  alt="Page Admin " height="400" width="550">
<p> Page Admin </p></div>

<div align="center"><img src="./public/Images/Pag.Questions.jpg"  alt=" Page Questions " height="400" width="550">
<p> Page Questions </p></div>

<div align="center"><img src="./public/Images/Pag.New question.jpg"  alt="Page New Question" height="400" width="550">
<p> Page New Question </p></div>

# Functional requirements

<ul>
<li>There are two user options:
  <ol>Administrator: will be the teachers.</ol>
  <ol>Users: will be the students.</ol>
</li>
<li>As a teacher, you will generate an exam of 20 random questions taken from the database.</li>
<li>The teacher throws the first question and all the students in the class receive the question and the 4 answers on their screen, so they can select the answer.</li>
<li>The teacher will receive on his screen a statistic of who has answered which question and which was correct.</li>
<li>The teacher will move on to the next question when he decides.</li>
<li>At the end of the exam, the results of each student will be registered in the database, to be able to follow up.</li>
</ul>

# Technical requirements
<ul>
<li>How Admin could do the CRUD for the questions (the question, 4 possible answers, 1 correct)</li>
<li>As a teacher, you will register the students (CRUD), in the app.</li>
<li>As a teacher, you will generate an exam of 20 random questions taken from the database.</li>
<li>Good software development practices.</li>
</ul>

# Design Explanation:
The app has several views with different options, a simple design has been chosen for a basic application, using the Mar de Niebla color palette and logo.

# Technical and used tools

 <div align="center">
  <img style="margin: 10px" src="https://logodownload.org/wp-content/uploads/2016/10/html5-logo-8.png" alt="HTML5" height="25">
  <img style="margin: 10px" src="https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-css-3-512.png" alt="CSS3" height="26">
  <img style="margin: 10px" src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="JavaScript" height="25">
  <img style="margin: 10px" src="https://cdn.freebiesupply.com/logos/large/2x/vue-9-logo-png-transparent.png" alt="Vue.js" height="25">
  <img style="margin: 10px" src="https://cdn-icons-png.flaticon.com/512/5968/5968672.png" alt="Bootstrap" height="25">
</div>
<div align="center">

  <img style="margin: 0 10px" src="https://cdn.freebiesupply.com/logos/large/2x/mysql-5-logo-png-transparent.png" alt="MySQL" height="45">
  <img style="margin: 0 10 5px" src="https://cdn.freebiesupply.com/logos/large/2x/php-1-logo-png-transparent.png" alt="PHP" height="25">
  <img style="margin: 2 10px" src="https://logospng.org/download/laravel/logo-laravel-icon-1024.png" alt="Laravel" height="35"> 
</div>
<div align="center">
  <img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/xampp.png" alt="XAMPP" height="25" />    
  <img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/git-scm-icon.svg" alt="Git" height="25" />  
  <img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/figma-icon.svg" alt="Figma" height="25" />  
  <img style="margin: 10px" src="https://img.stackshare.io/service/4202/Visual_Studio_Code_logo.png" alt="VSCode" height="25" />
  <img style="margin: 10px" src="https://img.stackshare.io/service/675/RNiSRYOF_400x400.jpg" alt="Slack" height="25"/>
</div>


# How to run the project locally?
## Link, Cloning and Installation of our repository:
Clone the project :


```bash
Front End: 
https://github.com/Crazy-House-Team/MarNieblaFront
```
```bash
Back End: 
https://github.com/Crazy-House-Team/MarNieblaBack
```


## Other project links:
<ul>

Figma:
https://www.figma.com/file/afgFT1XE7uLomjNMwEis0k/Mar-de-Niebla?node-id=1%3A4

Jira: 
- Board: https://quintomilenio.atlassian.net/jira/software/projects/MDN/boards/5
- Roadmap: https://quintomilenio.atlassian.net/jira/software/projects/MDN/boards/5/roadmap

Dailies:
https://docs.google.com/document/d/1KFy8GcioTqvkMKUMzWIs_8IQkCmEZF9OzD11M5AtNoo/edit?usp=sharing

</ul>

***
## Installation

Enter the project directory in the terminal and execute the following command:
```bash
php artisan migrate:fresh --seed
```
This will update our database.
**We will need to run this command every time we make changes to the project database.**


Install dependencies:
```bash
composer update
```
```bash
npm install
```
Import the following file into XAMPP: 
```bash
mardeniebla.sql
```
Start the server
```bash
npm run dev
```

***
## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup
```sh
npm install
```
### Compile and Hot-Reload for Development
```sh
npm run dev
```
### Compile and Minify for Production
```sh
npm run build
```
### Run Unit Tests with [Vitest](https://vitest.dev/)
```sh
npm run test:unit
```
### Lint with [ESLint](https://eslint.org/)
```sh
npm run lint
```
***
## Project Created by The Crazy House Team during the Factoría F5 Bootcamp 2022

***
## The Crazy House Team Contact

- Fran: gimli22@gmail.com
- Susana: asturias.susi.pro@gmail.com
- Sergio: sr.sergiofernandezfernandez@gmail.com
- Bea: btrabanco@gmail.com
- Mario: marioastur@gmail.com
- Dani: danimartinjuarez@gmail.com