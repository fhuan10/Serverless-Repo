// Declare a variable in order to access the NPM package 'parse-multipart'
// Pretty much, bring code from the library into this folder, in which the code can be used here
const multipart = require('parse-multipart');
 
module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
   
    // here's your boundary:
    const boundary = multipart.getBoundary(req.headers['content-type']);
   
    // TODO: assign the body variable the correct value
    const body = req.body;
 
    // parse the body
    const parts = multipart.Parse(body, boundary);
 
    let convertedResult = Buffer.from(parts[0].data).toString('base64');
    // FILL IN THE BLANK
 
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: convertedResult
    };
}

