// twocatz Part 1
// // Import this code
// const fetch = require('node-fetch');

// module.exports = async function (context, req) {
//     context.log('JavaScript HTTP trigger function processed a request.');

//     // Make a request to the cat service api
//     const resp = await fetch("https://bit-cat.azurewebsites.net/cat/says/serverless", {
//         method: 'GET'
//     });
    
//     // Receive the data, in terms of a buffer
//     const data = await resp.arrayBuffer()
//     // we need to receive it as a buffer since this is an image we are receiving from the API
//     // Buffer?? https://developer.mozilla.org/en-US/docs/Web/API/Blob

//     // Convert data into base64 data
//     let base64data = Buffer.from(data).toString('base64')
//     //put what you want to turn into base64 inside "originaldata"
//     //"originaldata" will be encoded in base64.

//     context.res = {
//         // status: 200, /* Defaults to 200 */
//         body: { base64data }  // Return the picture in base64 (display the block of data where you convert it (from base64 to image))
//     };
// }


// twocatz Step 2
// Import this code
const fetch = require('node-fetch');

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    // Get a cat picture, encoded in base64
    async function getCatPic() {
        // Make a request to the cat service api
        let resp = await fetch("https://cataas.com/cat/cute/says/Bitcamp", {
            method: 'GET'
        });

        // Receive the data, in terms of a buffer
        let data = await resp.arrayBuffer();
        // Convert data into base64 data
        let base64data = Buffer.from(data).toString('base64');

        return base64data;
    }

    // Get a random name from a list
    function getRandomNames() {
        let names = ["Shreya", "Emily", "Fifi", "Beau", "Evelyn", "Julia", "Daniel", "Fardeen"];
        let random_value = Math.floor(names.length * Math.random());
        let result_name = names[random_value];

        return result_name;
    }

    // Declare the variables
    let firstCat = await getCatPic();
    let secondCat = await getCatPic();
    let name1 = getRandomNames();
    let name2 = getRandomNames();

    context.res = {
        body: {
            cat1: firstCat,
            cat2: secondCat,
            names: [name1, name2]
        }
    };
}