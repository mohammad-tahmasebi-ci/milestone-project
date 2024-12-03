<p align="center"><img src="assets/images/am-i-responsive.png" alt="am i responsive check" width="800px" height="500px"></p>

# Memory Game

The game is about uncovering faces of famous actors hidden under a question mark.  The user will uncover two images, by clicking on
each, and if reveal the hidden images.  If the images belong to the same actor, then they will remain unhidden.  If the images do not
belong to the same actor, they will be covered again and the user will have to make another guess and reveal other covered images.
The process continues until all images are matched correctly.  At this time, the user will be offered another chance to play the
game again.  If the user chooses to play again, images are shuffeled and the process of choosing matching images is repeated.
If the user chooses not to play again, the game stops and all matched images remain uncovered.

# Table of Contents 

* [Design](#design)

    * Technologies Used 
    * Frameworks, Libraries, Programs Used

* [User Experience](#user-experience)

    * Features

        * Current Features
        * Future Enhancements

* [User Stories](#user-stories)

* [Testing](#testing)

    * HTML Validation
    * CSS Validation
    * JS Validation
    * Manual Testing
    * Functional Testing
    * Website Performance Test
    * Issues Encountered


* [Deployment](#deployment)

    * Github Pages
    * Local Clone

* [Credits and Acknowledgements](#credits-and-acknowledgements)

## Design Idea

Wireframes are created using Word software.  Font family used: Arial, Helvetica, sans-serif.
All content was written by the developer.
Design is broken into the following main sections:

	- Header
	- Introduction
	- Game area
	- Goodbye area
	- Footer

All above sections are included on one page and as such a minimal navbar is provided to return the user to the introduction
screen.  
On page load, below the header, the introduction area, is displayed.  
The introduction area provides a brief description of the game's objective.  Below the description, a carousel of images is
displayed that clearly demonstrates the aim of the game.  A Play button, is provided to enable the user to have a go at playing
the game.
Once the Play button is clicked, the introduction area is hidden, and the game area is presented to the user.  After matching
all hidden images, a message is presented to ask the user to play again.  If the answer is yes, then the images are shuffeled,
rearranged, and the new screen is presented to the user to continue with the game.  If the answer is no, the game area is hidden
and a short, Goodbye, message is presented to thank the user for playing.

### Design Wireframes

<p align="center"><img src="assets/images/introduction-design.png" alt="introduction area design" width="400px" height="200px"></p>
<p align="center"><img src="assets/images/game-area-design.png" alt="game area design" width="400px" height="200px"></p>
<p align="center"><img src="assets/images/goodbye-design.png" alt="goodbye area design" width="400px" height="200px"></p>

### Design Actual

<p align="center"><img src="assets/images/header.png" alt="navbar" width="1200px" height="70px"></p>
<p align="center"><img src="assets/images/footer.png" alt="footer" width="1300px" height="50px"></p>
<p align="center"><img src="assets/images/animation1.png" alt="introduction area 1" width="400px" height="400px"></p>
<p align="center"><img src="assets/images/animation4.png" alt="introduction area 2" width="400px" height="400px"></p>
<p align="center"><img src="assets/images/animation6.png" alt="introduction area 3" width="400px" height="400px"></p>

## Technologies Used

- HTML
- CSS
- Bootstrap
- Javascript
- JQuery

## Frameworks, Libraries, Programs Used

- Github
- Flexbox
- Fontawsome
- Am I Responsive
- Lighthouse
- W3C HTML/CSS validator
- W3C Markup validator
- Javascript validator

## Features

- simple, uncluttered, one page site
- no need to navigate between pages
- no need to scroll
- clear introduction
- intuitive game
- responsive on all device sizes

### Current Features

- navbar contains a single menu option to return the user to the introduction area
- introduction area describes the purpose of the game verbally, as well as visually
- a reaction is caused only when the designated areas are clicked
- a shake effect is caused when selected images do not match
- relevant emoji is displayed upon a successful/failed selection
- access to the four most popular social sites via the footer

### Future Features

- extend number, and type, of images
- add actual questions corresponding to specific images
- add different levels of complexity
- add a timer such that limits the user's selection/total time

## User Stories

As a user I'd like to play an entertaining online game that:

1) has a clean and consistent interface
2) has clear instructions
3) has a demonstration section, ideally
4) behaves as indicated in the instructions
5) has a relatively short play time
6) has a feature to replay
7) has no adverse effect when clicking outside the game area unintentionally

User story result:

1) game area has a matrix of hidden images displayed clearly and consistently
2) welcome page provides clear instruction
3) welcome page provides a demonstration of different stages of the game
4) two, and only two, images can be revealed for matching purposes; matched images stay uncovered and the rest will have to be matched
5) only 16 images are provided in order to keep the paly time to a short period
6) once all images are matched, a message is displayed giving the user the opportunity to replay the game
7) clicking on the Home menu option, covered images in the game area, and social sites' icons will result in an action

## Testing

### Validation

<p align="center"><img src="assets/images/html-validation.png" alt="HTML validation" width="900px" height="900px"></p>
<p align="center"><img src="assets/images/style-validation.png" alt="CSS validation" width="900px" height="900px"></p>
<p align="center"><img src="assets/images/script-validation.png" alt="JS validation" width="900px" height="900px"></p>

### Manual Testing

The website was tested manually, using MS Edge, Google Chrome, and Firefox.  All available device settings were tested one at a time by:
- Load the page on Firefox, MS Edge, Google Chrome
- Taking advantage of the development tool on the above platforms to test different viewports
- Accessing external social sites
- Testing the single menu option

### Functional Testing

<p align="center"><img src="assets/images/functional-tests.png" alt="functional tests result" width="700px" height="1000px"></p>

### Lighthouse Report

<p align="center"><img src="assets/images/lighthouse-report.png" alt="lighthouse report" width="300px" height="300px"></p>

### Issues Encountered

Introduction, Game, and Goodbye areas where developed separately and when combined shome CSS settings clashes occured.  These were
resolved using the inspect functionality of the browser's developer tool.
Logic bugs occured in the JS shuffelCards, changeImage, matchedFaces, and displayReaction functions which were resolved by using
the console.log functionality.
The modal message, enabling replay of the game, loads only once.  This issue is yet to be resolved.
