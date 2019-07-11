# nod-log

Log for Nodejs

# Install

`npm i nodlogging`

#Use

```
const nl = require('nodlogging');

myfunction = ()=>{
  nl.register('INFO','My Message')
  return 'hello world'
}

myfunction()
//DateTime[2019-07-11T17:00:00];File['/myfile.js'];NumberLine[15];Method[myfunction];Type[INFO];My Message

```
