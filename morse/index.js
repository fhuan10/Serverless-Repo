// Morse Code
const morse = require("morse-code-converter");

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    // Query the url for the parameter 'plaintext'
    const englishText = req.query.plaintext;
    let code = "";

    if (typeof englishText === 'undefined' || englishText === "") {
        // Error
        code = "Please enter some text to convert!"
    } else {
        // Convert the text into morse code
        code = morse.textToMorse(englishText);
    }

    // Display
    context.res = {
        body: code
    };
}