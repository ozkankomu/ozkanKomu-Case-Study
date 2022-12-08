
# PROJECT : My Case Study

## Table of contents

- [Screenshot](#screenshot)
- [Links](#links)
- [Libraries-Tools](#libraries-tools)
- [Project Skeleton ](#project-skeleton)
- [Project Structure](#project-structure)
- [Testing Content](#testing-content)
- [Author](#author)

## Screenshot

<p align="center">
<img  src="screen.gif" alt="screenshot">
</p>

## Links

- [Live Website](https://ozkankomu.github.io/ozkanKomu-Case-Study/)


## Libraries-Tools



- sass
- react testing library
- jest
- MUI
- MUI icons
- axios
- bootstrap
- json-server
- react-toastify


CASE DESCRIPTION : In my case study, I used Json-Server Api as database. I pulled data from Api using Axios and Async-Await structure. I added an Add Cargo button to enter new cargo information under SerchInput. A modal opens when the Add Cargo button is pressed. In the module that opens, when the cargo information is entered and the Add Cargo button is pressed, the post process is performed with axios and new cargo information is added to the database. When any entry is made to Serach Input, the data is rendered to the table. If a space is entered, no filtering is performed. Search can be made by name or policy number. If an unavailable data is searched, the text not found is displayed. Tostify messages are issued after each successful or unsuccessful transaction. When the search is made, the matching data is printed on the screen. A delete button has been added for each cargo information. Here, when the delete button is pressed, a new post operation is made to the api. The data is deleted from the screen and from the database. I used bootstrap for responsive design. I used the React testinng Library library for testing. The test process can be started with the yarn test command to be written to the terminal.


## Project Skeleton

```
 My Case Study (folder)

|----public
     |----index.html
|----src
    |
    |----api
    |----components
         |----_tests_
                |----App.test.js
                |----Home.test.js
                |----Modal.test.js
                |----Table.test.js
         |----Modal.jsx
         |----Table.jsx
         
         |----pages
             |----Home.jsx

         |----SCSS
             |---- _reset.scss
		 |---- _variables.scss.scss
	       |---- App.scss
		 |---- Home.scss
		 |---- Table.scss

         |----toastify
               |------Toastify.js
         |----Ap.js
         |----index.js
         |----setupTest.js
         |----gitignore
         |----package-lock.json
         |----package.json
         |----Readme
```

## Component Structure

<p align="center">
<img  src="./table.jpg" alt="screenshot">
</p>

## Testing Content

- Testing infinite scrolling
- Testing API Requests and rendering afterwards
- Testing Components
- Testing Home page
- Testing dynamic data rendering in the same component
- Testing Button
- Testing Input



## Author

- Author - [OZKAN KOMU]
<p><i>All codes belong to me</i></p>
<center> &#8987; Happy Coding  &#9997; </center>
