// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
const synth = window.speechSynthesis;
const speakButton = document.getElementById('speak-btn');
const generateButton = document.getElementById('generate-btn');
const randomStoryButton = document.getElementById('random-story-btn');
const resetButton = document.getElementById('reset-btn');
const storyOutput = document.getElementById('story-output');

const noun1Btn = document.getElementById('noun1-btn');
const verbBtn = document.getElementById('verb-btn');
const adjectiveBtn = document.getElementById('adjective-btn');
const noun2Btn = document.getElementById('noun2-btn');
const placeBtn = document.getElementById('place-btn');

let textToSpeak = '';
let storyParts = { noun1: '', verb: '', adjective: '', noun2: '', place: '' };

const nouns1 = ['dog', 'cat', 'bird', 'child', 'teacher'];
const verbs = ['jumps', 'runs', 'flies', 'eats', 'sings'];
const adjectives = ['happy', 'sad', 'angry', 'excited', 'nervous'];
const nouns2 = ['ball', 'house', 'car', 'tree', 'book'];
const places = ['park', 'school', 'home', 'city', 'college'];

/* Functions
-------------------------------------------------- */
function speakNow(string) {
	const utterThis = new SpeechSynthesisUtterance(string);
	synth.speak(utterThis);
}

function getRandomWord(array) {
	return array[Math.floor(Math.random() * array.length)];
}

function updateStoryOutput() {
	if (storyParts.noun1 && storyParts.verb && storyParts.adjective && storyParts.noun2 && storyParts.place) {
		storyOutput.textContent = `The ${storyParts.adjective} ${storyParts.noun1} ${storyParts.verb} the ${storyParts.noun2} at the ${storyParts.place}.`;
		textToSpeak = storyOutput.textContent;
	} else {
		storyOutput.textContent = `Incomplete story: ${storyParts.adjective} ${storyParts.noun1} ${storyParts.verb} ${storyParts.noun2} ${storyParts.place}`;
		textToSpeak = '';
	}
}

function generateStory() {
	if (storyParts.noun1 && storyParts.verb && storyParts.adjective && storyParts.noun2 && storyParts.place) {
		speakNow(textToSpeak);
	} else {
		alert('Please select all parts of the story before generating it.');
	}
}

function generateRandomStory() {
	storyParts.noun1 = getRandomWord(nouns1);
	storyParts.verb = getRandomWord(verbs);
	storyParts.adjective = getRandomWord(adjectives);
	storyParts.noun2 = getRandomWord(nouns2);
	storyParts.place = getRandomWord(places);
	updateStoryOutput();
}

function resetStory() {
	storyParts = { noun1: '', verb: '', adjective: '', noun2: '', place: '' };
	textToSpeak = '';
	storyOutput.textContent = '';
}

/* Event Listeners
-------------------------------------------------- */
speakButton.addEventListener('click', function () {
	if (textToSpeak) {
		speakNow(textToSpeak);
	} else {
		alert('Please generate a story before trying to speak it.');
	}
});

generateButton.addEventListener('click', generateStory);

randomStoryButton.addEventListener('click', generateRandomStory);

resetButton.addEventListener('click', resetStory);

noun1Btn.addEventListener('click', function () {
	storyParts.noun1 = getRandomWord(nouns1);
	updateStoryOutput();
});

verbBtn.addEventListener('click', function () {
	storyParts.verb = getRandomWord(verbs);
	updateStoryOutput();
});

adjectiveBtn.addEventListener('click', function () {
	storyParts.adjective = getRandomWord(adjectives);
	updateStoryOutput();
});

noun2Btn.addEventListener('click', function () {
	storyParts.noun2 = getRandomWord(nouns2);
	updateStoryOutput();
});

placeBtn.addEventListener('click', function () {
	storyParts.place = getRandomWord(places);
	updateStoryOutput();
});
