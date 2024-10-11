// main page elements
var posterImg = document.querySelector('.poster-img');
var title = document.querySelector('.poster-title');
var quote = document.querySelector('.poster-quote');
//sections
var mainPoster = document.querySelector('.main-poster');
var posterForm = document.querySelector('.poster-form');
var posterImageUrl = document.querySelector('#poster-image-url');
var posterTitleInput = document.querySelector('#poster-title');
var posterQuoteInput = document.querySelector('#poster-quote');
var savedPosters = document.querySelector('.saved-posters');
//buttons
var showRandom = document.querySelector('.show-random');
var showSaved = document.querySelector('.show-saved');
var showForm = document.querySelector('.show-form');
var savePoster = document.querySelector('.save-poster');
var showMain = document.querySelector('.show-main');
var backToMain = document.querySelector('.back-to-main');
var makePosterBtn = document.querySelector('.make-poster');

var images = [
  { src: "./assets/bees.jpg", alt: "Bees at the entrance of an apiary." },
  { src: "./assets/bridge.jpg", alt: "Bridge lit up at night time." },
  { src: "./assets/butterfly.jpg", alt: "Butterfly on a leaf." },
  { src: "./assets/cliff.jpg", alt: "Person standing on a cliff edge with a mountain range in the distance." },
  { src: "./assets/elephant.jpg", alt: "Two elephants in a meadow." },
  { src: "./assets/flock.jpg", alt: "Flock of birds in the sky at sunrise with contrails in the background." },
  { src: "./assets/fox.jpg", alt: "Red fox beside some flowers near a forest." },
  { src: "./assets/frog.jpg", alt: "Frog on a leaf." },
  { src: "./assets/horse.jpg", alt: "Six horses near a walking path with shrubbery around." },
  { src: "./assets/lion.jpg", alt: "Yawning lion on grass." },
  { src: "./assets/mountain.jpg", alt: "Person in front of camera with mountains in the distance." },
  { src: "./assets/pier.jpg", alt: "Pier on a pond with hills in the background, surrounded by purple flowers." },
  { src: "./assets/puffins.jpg", alt: "Puffins standing on a flowery hillside." },
  { src: "./assets/pug.jpg", alt: "Pug wrapped in a blanket on a bed." },
  { src: "./assets/runner.jpg", alt: "Person running toward the sun on a hillside road." },
  { src: "./assets/squirrel.jpg", alt: "Squirrel coming down a tree toward the camera." },
  { src: "./assets/tiger.jpg", alt: "Tiger laying on a rock with leaves in the background." },
  { src: "./assets/turtle.jpg", alt: "Turtle swimming in water."}
];
var titles = [
  "determination",
  "success",
  "inspiration",
  "perspiration",
  "grit",
  "empathy",
  "feelings",
  "hope",
  "believe",
  "try",
  "conviction",
  "accomplishment",
  "achievement",
  "ambition",
  "clarity",
  "challenge",
  "commitment",
  "confidence",
  "action",
  "courage",
  "focus",
  "breathe",
  "gratitude",
  "imagination",
  "kindness",
  "mindfulness",
  "knowledge",
  "opportunity",
  "passion",
  "patience",
  "practice",
  "smile",
  "trust",
  "understanding",
  "wisdom"
];
var quotes = [
  "Don’t downgrade your dream just to fit your reality, upgrade your conviction to match your destiny.",
  "You are braver than you believe, stronger than you seem and smarter than you think.",
  "You are confined only by the walls you build yourself.",
  "The one who has confidence gains the confidence of others.",
  "Act as if what you do makes a difference. It does.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Never bend your head. Always hold it high. Look the world straight in the eye.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "Believe you can and you're halfway there.",
  "When you have a dream, you've got to grab it and never let go.",
  "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
  "No matter what you're going through, there's a light at the end of the tunnel.",
  "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.",
  "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.",
  'Limit your "always" and your "nevers."',
  "You are never too old to set another goal or to dream a new dream.",
  "Try to be a rainbow in someone else's cloud.",
  "You do not find the happy life. You make it.",
  "Inspiration comes from within yourself. One has to be positive. When you're positive, good things happen.",
  "Sometimes you will never know the value of a moment, until it becomes a memory.",
  "The most wasted of days is one without laughter.",
  "You must do the things you think you cannot do.",
  "It isn't where you came from. It's where you're going that counts.",
  "It is never too late to be what you might have been.",
  "Happiness often sneaks in through a door you didn't know you left open.",
  "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
  "Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination.",
  "Be the change that you wish to see in the world.",
  "Let us make our future now, and let us make our dreams tomorrow's reality.",
  "You don't always need a plan. Sometimes you just need to breathe, trust, let go, and see what happens.",
  "If I cannot do great things, I can do small things in a great way.",
  "Don't wait. The time will never be just right.",
  "With the right kind of coaching and determination you can accomplish anything.",
  "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.",
  "No matter what people tell you, words and ideas can change the world.",
  "Each person must live their life as a model for others.",
  "A champion is defined not by their wins but by how they can recover when they fall."
];
var savedPostersArray = [];
var currentPoster;

// event listeners go here
window.addEventListener('load', () => {
  showSection(mainPoster);
  setRandomContent();
});
showRandom.addEventListener('click', setRandomContent);
showSaved.addEventListener('click', () => showSection(savedPosters));
showMain.addEventListener('click', () => showSection(mainPoster));
backToMain.addEventListener('click', () => showSection(mainPoster));
showForm.addEventListener('click', showFormView);
showMain.addEventListener('click', showMainView);
makePosterBtn.addEventListener('click', makePoster);

// functions and event handlers go here
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length)
};

function createPoster(imageURL, title, quote) {
  return {
    id: Date.now(), 
    imageURL: imageURL,
    title: title, 
    quote: quote}
};

function initialSections() {
  posterForm.classList.add('hidden');
  savedPosters.classList.add('hidden');
  mainPoster.classList.remove('hidden');
}

function setRandomContent() {
  var randomImage = images[getRandomIndex(images)]
  var randomTitle = titles[getRandomIndex(titles)]
  var randomQuote = quotes[getRandomIndex(quotes)]
  
  var poster = createPoster(randomImage, randomTitle, randomQuote); 
    posterImg.src = poster.imageURL.src;
    posterImg.alt = poster.imageURL.alt;  
    title.textContent = poster.title;
    quote.textContent = poster.quote;    
}

function showSection(sectionToShow) {
  [mainPoster, posterForm, savedPosters].forEach(section => {
      if (section === sectionToShow) {
          section.classList.remove('hidden');
      } else {
          section.classList.add('hidden');
      }
  });
}

function makePoster(event) {
  event.preventDefault();
  var imageURL = document.querySelector('#poster-image-url').value;
  var posterTitle = document.querySelector('#poster-title').value;
  var posterQuote = document.querySelector('#poster-quote').value;

  currentPoster = createPoster(imageURL, posterTitle, posterQuote)

  images.push(imageURL);
  titles.push(posterTitle);
  quotes.push(posterQuote);

  // console.log('New poster created:', currentPoster);
  // console.log('Images array:', images);
  // console.log('Titles array:', titles);
  // console.log('Quotes array:', quotes);

  posterImg.src = currentPoster.imageURL;  
  title.textContent = currentPoster.title;
  quote.textContent = currentPoster.quote;

  showSection(mainPoster)
}

function showFormView() {
  showSection(posterForm);
}

function showMainView() {
  showSection(mainPoster);
}
console.log("a;sldknf")