// twocatz Part 1
// Import this code
const fetch = require('node-fetch');

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    // Make a request to the cat service api
    const resp = await fetch("https://bit-cat.azurewebsites.net/cat/says/serverless", {
        method: 'GET'
    });
    
    // Receive the data, in terms of a buffer
    const data = await resp.arrayBuffer()
    // we need to receive it as a buffer since this is an image we are receiving from the API
    // Buffer?? https://developer.mozilla.org/en-US/docs/Web/API/Blob

    // Convert data into base64 data
    let base64data = Buffer.from(data).toString('base64')
    //put what you want to turn into base64 inside "originaldata"
    //"originaldata" will be encoded in base64.

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: { base64data }  // Return the picture in base64 (display the block of data where you convert it (from base64 to image))
    };
}
