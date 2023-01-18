export function getRandomQuestion(inputText) {
    var questions = ["How?", "Why?" , "Why do you think so?", "So?", "What problem is this solving?", "Why does this occur?", "What is preventing me from solving this problem?"];
    var selectedQuestion = questions[Math.floor(Math.random()*questions.length)]; //more questions, insert pre-trained model for placing questions without randomness 
    return selectedQuestion;
}

