const defaults = () => { return {
    CLIENT_URL  : "localhost",
    API         : "https://pokeapi.co/api/v2/",
    PORT        : 3001,
    CLIENT_PORT : 5173,
    VERBOSE     : 0   ,
    MORGAN      : 0   
    }}
    appConfig = ()=>{
        if (!process.env.SINCE) {
             process.env.SINCE = new Date()
             let configDefault = defaults()
             if (process.env.NODE_ENV !== 'production') {
                const fs = require('fs')
                if (fs.existsSync(".env")) {
                  const db = {},
                    result = require('dotenv').config({ processEnv: db })
                  if (!result.error) {
                    "PORT, NODE_ENV, DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_DIALECT, CLIENT_PORT, CLIENT_URL"
                      .split(", ")
                      .forEach((value) => {
                        if ( db[value]) {
                          process.env[value] = db[value]
                        }
                      })
                  }
                }
              }      
              Object.entries(configDefault)
              .forEach(([property, value]) => {
                process.env[property] =
                process.env[property]
                || value
              })
        }
        return true
    }
    
    module.exports = appConfig()
    