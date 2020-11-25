const http = require('http');
const Chalk = require('chalk');

exports.sendRequest = (requestBody, options) => new Promise((resolve, reject) => { 

    //Defines a const that caries the url of the request
    const url = `${options.hostname}${options.path}`;
    //Creates the request
    const req = http.request(options, res => {
        //Declares a variable that will hold the body
        let body = '';
        //Set a listener for data received
        res.on('data', chunk => {
            //Save the chuck into the data variable
            body += chunk;
        });

        //Set a listener for when the request ends
        res.on('end', _ => {
            //Log the status code and url
            

            resolve(body);
        });
    }).on('error', error => {
        //Log the error
        
        //Return the error
        reject(error);
    });

    //Log the request
    

    //Check if the request has a body
    if (requestBody) {
        //Write the body into the request
        req.write(requestBody);
    }

    //Ends the request
    req.end();
});