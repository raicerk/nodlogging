const moment = require('moment');

class nodlogging {

    /**
     * @name register
     * @description Function for register log of nodejs application in PM2
     * @param type Type of log, example ['ERROR', 'INFO', 'OTHER']
     * @param other Field aditional for save in the log
     */
    register = (type, other) => {
        var now = moment().locale("es").format("YYYY-MM-DDTHH:mm:ss:SSSS")
        let e = new Error();
        let frame = e.stack.split("\n")[2];
        let numberline = frame.split(":")[2];
        let file = frame.split(":")[1]
        let method = frame.split(" ")[5];
        console.log(`DateTime[${now}];File['${file}'];NumberLine[${numberline}];Method[${method}];Type[${type}];${other}`);
    }

}

module.exports = nodlogging;