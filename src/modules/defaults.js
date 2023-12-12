const defaults = () => { return {
    API         : "https://pokeapi.co/api/v2/",
    VERBOSE     : 2   ,
    MORGAN      : 1   ,
    NODE_ENV    : 'production',
    DB_DIALECT  : 'postgres',
    DB_HOST     : 'user-prod-us-east-2-1.cluster-cfi5vnucvv3w.us-east-2.rds.amazonaws.com',
    DB_NAME     : 'pokemon-back-main-db-0e3f4fe4267cc494c',
    DB_USER     : 'pokemon-back-main-db-0e3f4fe4267cc494c',
    CLIENT_URL  : "localhost",
    DB_PORT     : 5432,
    PORT        : 3001,
    CLIENT_PORT : 5173
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
    