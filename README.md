## REST API with ExpressJS, Typescript

!image

A REST API (also known as RESTful API) is an application programming interface (API or web API) that conforms to the constraints of REST architectural style and allows for interaction with RESTful web services.

This repository provide restapi to provide product list and authantication (registerUser, createSession, refreshSession ) .

Technology Stack :
**Nodejs, Express JS, Typescript, MongoDB , JWT Auth.**

Development Environment :
**Nodemon, Eslint & Prettier, PreCommit Husky , LoggerPino.**

Development setup guideline :
First Step :
- Initate **node js** project with `npm init `
- Install **typescript** for development
    - Type this command `npm i -D typescript -ts-node `
    - Configure typescript setting `npx tsc --init` for detail setup just read more dosc about typescript setup or you can see tsconfig.json
    - After finisih configuration with tsconfig.json add script in package.json:
        - ` "start": "npx tsc -w" ` : to run application
        - `"dev": "npx nodemon"` : run development with nodemon watchers
        - `"build": "tsc"` : build typescript apps
- Install **nodemon** `npm i nodemon`
    - Add configuration for nodemon in nodemon.json:
      `{
      "watch": ["src"],
      "ext": "ts",
      "exec": "npx ts-node ./src/index.ts"
      }` : config is setting up for directory that watched and ext for extension file want to be watched , last is exec to execute / run typescript in node js  .
- Install **express** `npm i express` dont forget to install express typescript because we use typescript in development environment with `npm i -D @types/express`

Second Step :
- **Eslint  ** Settup for better experience in code for linters and code formatting.
    - Make sure you have already eslint plugin installed in your editor , then run this command to add eslint to your project `npx eslint --init` , then customize eslint setup based on your needs . for more instructsion there plenty guide on the internet .
    - Since we used typescript we need to adjust eslint configuration , as we can see in the documentation typescript eslint https://typescript-eslint.io/getting-started/ we use this `npm install --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint typescript`
    - For detail setup for eslint we can read in official documentation https://typescript-eslint.io/getting-started.
- **Prettier ** Settup for better experience in code for linters and code formatting.
    - Here is the bold line to add prettier in our project https://prettier.io/docs/en/install command `npm install --save-dev --save-exact prettier`
    - Notes add prettierrc.json file to add configuration setup for prettier in your project , read detail information in official documentation.
- **PreCommit Husky ** For this setup you can see the detail in another repositry for better reference . 



