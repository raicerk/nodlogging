const moment = require('moment');

class nodlogging {

    constructor() {
        //
    }

    /**
     * @name register
     * @description Function for register log of nodejs application in PM2
     * @param Description Field text for save in the log
     * @implements .error() .info() .other() for indicate type of log
     */
    static register(Description) {

        let now = moment().locale("es").format("YYYY-MM-DDTHH:mm:ss:SSSS")
        let e = new Error();
        let frame = e.stack.split("\n")[2];
        let numberline = frame.split(":")[2];
        let file = frame.split(":")[1]
        let method = frame.split(" ")[5];

        let obj = {
            /**
             * @description Indicate log for errors
             */
            error: () => {
                console.log(`DateTime[${now}];File['${file}'];NumberLine[${numberline}];Method[${method}];Type[ERROR];Description[${Description}]`);
                return this;
            },
            /**
             * @description Indicate log for info
             */
            info: () => {
                console.log(`DateTime[${now}];File['${file}'];NumberLine[${numberline}];Method[${method}];Type[INFO];Description[${Description}]`);
                return this;
            },
            /**
             * @description Indicate log for other reason
             */
            other: () => {
                console.log(`DateTime[${now}];File['${file}'];NumberLine[${numberline}];Method[${method}];Type[OTHER];Description[${Description}]`);
                return this;
            }
        }
        return obj;
    }

}

module.exports = nodlogging;