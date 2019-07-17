# nodlogging

Librery for register Log in Nodejs with `PM2`

# Install

`npm i nodlogging`

# Use

This library has 3 method, when you need indicate a log for info you need use

```
nl.register("my description").info()
```

if you need indicate a log for error, you can use

```
nl.register("my description").error()
```

if you need indicate a log for other reason, you can use

```
nl.register("my description").other()
```

For example this case generate this log in PM2
```
const nl = require('nodlogging');

myfunction = ()=>{
  nl.register('My Message').info()
  return 'hello world'
}

myfunction()
//DateTime[2019-07-11T17:00:00];File['/myfile.js'];NumberLine[15];Method[myfunction];Type[INFO];Description[My Message]

```
