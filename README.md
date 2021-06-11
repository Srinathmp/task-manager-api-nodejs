# task-manager-api-nodejs
<h3>A task manager api created using node js</h3> <br>
Deployed using Heroku accessible at - https://srinathmp-task-manager.herokuapp.com <br> 
Postman Link - https://www.getpostman.com/collections/037e7bfa5bbc2bf092ac <br>
[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/14374306-8edb067a-c49a-49e4-870a-82b046831eec?action=collection%2Ffork&collection-url=entityId%3D14374306-8edb067a-c49a-49e4-870a-82b046831eec%26entityType%3Dcollection%26workspaceId%3D73992523-94af-4e66-bce7-8491864c0f48) <br>
API Endpoints are (replace {{url}} with localhost:3000 when running locally) <br>
1. create user  - {{url}}/users <br>
  Content in Body-raw-json<br>
  Example : <br>
  {<br>
    "age" : 22,<br>
    "name" : "Stephen Curry",<br>
    "email" :  "curry@stephen.io",<br>
    "password" : "curry@stephen"<br>
}<br>
