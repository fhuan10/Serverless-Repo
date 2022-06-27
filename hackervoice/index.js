module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    // Parameter: Password
    let password = req.query.password;
    context.log(password);

    let result = password;  // temp

    // let result = "";

    // if (password == "letmein") {
    //     result = "Access granted.";
    // }
    // else {
    //     result = "Access denied.";
    // }

    context.res = {
        // status: 200, /* Defaults to 200 */
         body: result  // Will displayed onto the window

    };

    // To test it out with the parameter, localhosturlstuff?parameter_name=______ <-- the blank is what you type in as the parameter
}