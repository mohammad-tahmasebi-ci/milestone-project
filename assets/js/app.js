/*jshint esversion: 6 */
/* configure general variables */
const totalImages = 8;
let cardOne, cardTwo = '';
let cardOneImg, cardTwoImg;
let matched = 0;
let disableDeck = false;
let imgTag = [];

/* set default image */
const defultImage = 'assets/images/questionmark.jpg';

/* configure array of images to be used */
const arr = ['assets/images/150211.jpg', 'assets/images/162153.png', 'assets/images/162441.png', 'assets/images/162733.png', 'assets/images/163610.png', 'assets/images/164126.png', 'assets/images/15050453.png', 'assets/images/15050626.png', 'assets/images/150211.jpg', 'assets/images/162153.png', 'assets/images/162441.png', 'assets/images/162733.png', 'assets/images/163610.png', 'assets/images/164126.png', 'assets/images/15050453.png', 'assets/images/15050626.png'];

/* get a reference to iamges collection to be manipulated */
const images = document.querySelectorAll('.image');

/* configure references to IDs to be manipulated */
const welcome = document.getElementById('welcome');
const showdemo = document.getElementById('show-demo');
const modal = document.getElementById('myModal');
const faces = document.getElementById('match-faces');
const btn = document.getElementById('modal-launch');
const goodbye = document.getElementById('goodbye');
const reactionImage = document.querySelector('.reaction img');
const reactionP = document.querySelector('.reaction p');

/* configure function to determine matching selected images */
function matchedImages(img1, img2) {
    if (img1 === img2) {
        matched++;
        displayReaction('Y', matched);
        if (matched == totalImages) {
            displayReaction('C', matched);
            btn.click();
        }
        cardOne.removeEventListener('click', changeImage);
        cardTwo.removeEventListener('click', changeImage);
        cardOne = cardTwo = '';
        disableDeck = false;
        return disableDeck;
    }
  
    displayReaction('N', matched);
    setTimeout(() => {
        cardOne.classList.add('shake');
        cardTwo.classList.add('shake');
    }, 400);

    setTimeout(() => {
        cardOne.classList.remove('shake', 'flip');
        cardTwo.classList.remove('shake', 'flip');
        cardOne.src = cardTwo.src = defultImage;
        cardOne = cardTwo = '';
        cardOneImg = cardTwoImg = '';
        disableDeck = false;
    }, 1200);
}

/* configure function to rebuild images array */
function shuffleCards() {
    matched = 0;
    disableDeck = false;
    cardOne = cardTwo = "";
    imgTag = [];
    reactionImage.src = '';
    reactionP.innerHTML = '';
    arr.sort(() => Math.random() > 0.5 ? 1 : -1);
    images.forEach((img, i) => {
        img.classList.remove("flip");
        img.src = defultImage;
        imgTag.push(`${arr[i]}`);
        img.addEventListener("click", changeImage);
    });
}

/* configure function to assign image to each selection */
const changeImage = (event) => {
    let isClicked = event.srcElement;
    if (cardOne !== isClicked && !disableDeck) {
        isClicked.classList.add('flip');
        if (!cardOne) {
            cardOne = isClicked;
            cardOneImg = imgTag[isClicked.id - 1];
            cardOne.src = cardOneImg;  
            return;
        }
        cardTwo = isClicked;
        disableDeck = true;
        cardTwoImg = imgTag[isClicked.id - 1];
        cardTwo.src = cardTwoImg;  
        matchedImages(cardOneImg, cardTwoImg);
    }
};

/* configure function to dispaly reaction to each selection */
function displayReaction(reaction, matched) {
    reactionImage.style.display = '';
    reactionImage.style.visibility = 'visible';
    reactionP.style.display = '';
    reactionP.style.visibility = 'visible';
    if (reaction ==='C') {
        reactionP.innerHTML = '';
        reactionImage.src = 'assets/images/clapping-2-2040755-clipart-library-com.jpg';
    } else if (reaction === 'Y') {
        reactionImage.src = 'assets/images/happy-face.png';
        reactionP.innerHTML = `Only ${totalImages - matched} left`;
    } else {
        reactionImage.src = 'assets/images/sad-face.png';
        reactionP.innerHTML = 'Try again';
    }
}

/* configure function to display images matrix */
function showGame() {
    welcome.style.display = 'none';
    showdemo.style.display = 'none';
    faces.style.display = '';
    shuffleCards();
}

/* configure function to launch on modal Yes selection */
function restarty() {
    reactionImage.style.display = 'none';
    modal.style.display = 'none';
    faces.style.display = '';
    faces.style.visibility = 'visible';
    shuffleCards();
}

/* configure function to launch on modal No selection */
function restartn() {
    modal.style.display = 'none';
    faces.style.display = 'none';
    goodbye.style.display = '';
    goodbye.style.visibility = 'visible';
    return;
}

/* configure event listeners for the images matrix */
images.forEach(img => {
    img.addEventListener("click", changeImage);
});

/* prevent images matrix form being displayed on initial load */
document.getElementById('match-faces').style.display = 'none';


