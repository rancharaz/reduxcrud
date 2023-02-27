npm config set legacy-peer-deps true // before npm install
npm install // install node module
npm start // start project on browser
pages folder is for the crud and routing
*AddEmployee page is for create function
*ViewEmployee page is for read function
*EditEmployee page is for update function
*Homepage with all the rmployee information 
*Errorpage in case a non existant url is added it redirects on this page
redux folder is for state management between pages
*action pages is for action types and methods // actions.js is for business logic
*reducers is for dispatching the actions and variable
*store is for storing the reducers for dispatching
