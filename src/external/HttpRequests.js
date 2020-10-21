const http = require('http');
const Chalk = require('chalk');

exports.sendRequest = function(requestBody, options, callback) {
    //Defines a const that caries the url of the request

    console.log('options: ', options);
    const url = ` ${options.hostname}${options.path}`;
    //Creates the request
    const req = http.request(options, res => {
        //Declares a variable that will hold the body
        let body = '';
        //Set a listener for data received
        res.on('data', chunk => {
            //Save the chuck into the data variable

            console.log('chunk ', chunk);

            body += chunk;
        });

        //Set a listener for when the request ends
        res.on('end', _ => {
            //Log the status code and url
            console.log(Chalk.green(`${Chalk.blue(res.statusCode)} <- ${url}`));


            console.log('res on end: ', res);

            //Check if the request was not successful
            if (res.statusCode > 400) {
                //Return the body as a error
                callback(null, body);
            } else {
                //Return the body

                console.log('return the body', body);
                callback(body, null);
            }
        });
    }).on('error', error => {
        //Log the error

        console.log('Error...');
        console.log(Chalk.red(`${Chalk.white(error)} <- ${url}`));
        //Return the error
        callback(null, error);
    });

    //Log the request
    console.log(Chalk.green(`${Chalk.blue(options.method)} -> ${url}`));

    //Check if the request has a body
    if (requestBody) {
        //Write the body into the request
        req.write(requestBody);
    }

    //Ends the request
    req.end();
};