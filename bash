git push heroku master


Just create a Procfile in the root of your project and define the following:
web: node server.js

Ensure One Instance Is Running
heroku ps:scale web=1

Deploying Code
git push heroku master