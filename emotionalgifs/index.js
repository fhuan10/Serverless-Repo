// Declare a variable in order to access the NPM package 'parse-multipart'
// Pretty much, bring code from the library into this folder, in which the code can be used here
const multipart = require('parse-multipart');
const fetch = require('node-fetch');  // Means it will import node-fetch from its code
 
module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
   
    // here's your boundary:
    const boundary = multipart.getBoundary(req.headers['content-type']);
   
    // TODO: assign the body variable the correct value
    const body = req.body;
 
    // parse the body
    const parts = multipart.Parse(body, boundary);
 
    // let convertedResult = Buffer.from(parts[0].data).toString('base64');
    const result = await analyzeImage(parts[0].data);
    context.res = {
        body: {
            result
        }
    };
    console.log(result)
    context.done(); 
 
    // context.res = {
    //     // status: 200, /* Defaults to 200 */
    //     body: convertedResult
    // };
}

    // 'async function' means that this function will be running in the background
    async function analyzeImage(img){
        const subscriptionKey = process.env.SUBSCRIPTIONKEY;
        const uriBase = process.env.ENDPOINT + '/face/v1.0/detect';

        // This is creating URL search (after the website.com/______ <---)
        let params = new URLSearchParams({
            'returnFaceId': 'true',
            '<PARAMETER NAME>': 'emotion'
        })

        let resp = await fetch(uriBase + '?' + params.toString(), {
            method: 'POST',  //WHAT TYPE OF REQUEST?
            body: img,  //WHAT ARE WE SENDING TO THE API?
            headers: {
                'Content-Type': 'application/octet-stream',
                "Ocp-Apim-Subscription-Key": subscriptionKey  //do this in the next section
            }
        })
        let data = await resp.json();  // await always in asynch
        
        return data;
    }
    


