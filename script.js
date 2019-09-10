// const affirmativeAnswers =
// ["It is certain.",
// "It is decidedly so.",
// "Without a doubt.",
// "Yes - definitely.",
// "You may rely on it.",
// "As I see it, yes.",
// "Most likely.",
// "Outlook good.",
// "Yes.",
// "Signs point to yes."]

// const nonCommittalAnswers =
// ["Reply hazy, try again.",
// "Ask again later.",
// "Better not tell you now.",
// "Cannot predict now.",
// "Concentrate and ask again."]

// const negativeAnswers =
// ["Don't count on it.",
// "My reply is no.",
// "My sources say no.",
// "Outlook not so good.",
// "Very doubtful."]

const answers = [
"Don't count on it.",
"My reply is no.",
"My sources say no.",
"Outlook not so good.",
"Very doubtful.",
"Reply hazy, try again.",
"Ask again later.",
"Better not tell you now.",
"Cannot predict now.",
"Concentrate and ask again.",
"It is certain.",
"It is decidedly so.",
"Without a doubt.",
"Yes - definitely.",
"You may rely on it.",
"As I see it, yes.",
"Most likely.",
"Outlook good.",
"Yes.",
"Signs point to yes."
]

// Returns a answer from the array above

let buttonShake = document.getElementById("shakeBall")
document.getElementById("shakeBall").addEventListener("click", answer);
function answer() {
    let result = Math.ceil(Math.random() * 19)
    document.getElementById("finalAnswer").innerHTML = answers[result]
}

// Resets the text on screen

document.getElementById("resetBall").addEventListener("click", reset);

function reset() {
    document.getElementById("finalAnswer").innerHTML = ""
}