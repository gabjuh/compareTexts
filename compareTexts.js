'use strict'

const $ = (q) => document.querySelector(q)

const $$ = (q) => Array.from(document.querySelectorAll(q))

const promptTexts = [
    'Give the original Text in: ',
    'Give the changed Text in: '
]

// Save texts in array
let texts = ['', '']


// Show texts in boxes
const giveTextToTextbox = i => {
    tb()[i].innerHTML = texts[i]
}

// Fill empty boxes with placeholder "chick here"
const fillWithPlaceholder = (i) => (texts[i] === '') ? tb()[i].innerHTML = "<h2 class='placeholder'>Click here</h2>" : ""


// Open prompt to give text in
const openPrompt = () => {
    promptTexts.forEach((t, i) => {
        fillWithPlaceholder(i)
        tb()[i].addEventListener('click', event => {
            texts[i] = (prompt(promptTexts[i]))
            if (texts[i] !== '') giveTextToTextbox(i)
        })
        
    });
    return texts
}

// get textbox elements in array
const tb = () => $$('.textbox')

openPrompt()



// Validate input




// find and highlight differences
const compareTexts = () => {
    if (texts.every(e => e.length > 0) === true) {
        
    }
}

