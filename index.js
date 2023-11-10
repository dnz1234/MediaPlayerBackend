///import json-server library in index.js
const jsonServer = require ('json-server') /// ivde import chyan vendii reuire anu use chynud pinnee future use chyan vendi anu  const json server koduthath

/// create server using json-server library
const mediaPlayerServer = jsonServer.create()

///create a path to db.json datas link chyaan vendii
const router = jsonServer.router('db.json')

////middleware to convert (datas thamill contect chyam vendii)
const middleware =jsonServer.defaults()

/// contect to index.js and db.js
mediaPlayerServer.use(middleware)
mediaPlayerServer.use(router)   

/// setup set port for server  ( react 3000 server anuu run avunath appam randum koddi clash avand nikkan vendii )

const port = 5000 || process.env.PORT

////monitor 6000
mediaPlayerServer.listen(port,()=>{
    console.log(`mediaPlayerServer is listening to ${port} and waiting for the request`);
})