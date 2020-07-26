//namespace
const zodiacApp = {};

//questions from html
zodiacApp.questions = [
// label will relate to name attribute and classes in HTML
// answer will relate to one of the values of the inputs
    {label: 'questionOne', answer: 'aries'},
    {label: 'questionTwo', answer: 'scales'},
    {label: 'questionThree', answer: 'cancer'},
    {label: 'questionFour', answer: 'fish'},
    {label: 'questionFive', answer: 'fire'},
    {label: 'questionSix', answer: 'gemini'},
    {label: 'questionSeven', answer: 'taurus'},
    {label: 'questionEight', answer: 'virgo'},
    {label: 'questionNine', answer: 'twelve'}
];

//define init method
zodiacApp.init = () => {
//define init method
zodiacApp.questions.forEach((question) => {
//console.log(question);

//Event listener -> change in my radio inputs    
    $(`input[name="${question.label}"]`).on('change', function() {
            
//determine the input that has been selected    
    const $userChoice = $(`input[name="${question.label}"]:checked`).val();
//display message on based on selection    
    if ($userChoice === question.answer) {
//console.log('Getting the answer');
    $(`.${question.label}-answer`).text(` ✨ Yaaaasss! you got it right its ${question.answer}! ✨ `)
    } else {
    $(`.${question.label}-answer`).text(`❌ Sorry! you got it wrong ❌`);
            }
        })
    })
}

//document ready
$(function() {
//init method
zodiacApp.init();    
}) 