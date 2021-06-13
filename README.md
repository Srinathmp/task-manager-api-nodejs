# task-manager-api-nodejs
<h3>A task manager api created using node js</h3> <br>
Deployed using Heroku accessible at - https://srinathmp-task-manager.herokuapp.com <br> 
Postman Public Link - https://www.getpostman.com/collections/037e7bfa5bbc2bf092ac <br>
<hr>
<h3>Usage</h3>
1. cd task-manager-api-nodejs <br>
2. mkdir config <br>
3. vi dev.env <br>
4. Fill in the dev.env with the required environment variables :  <br>
PORT=3000 <br>
SENDGRID_API_KEY=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 (sendgrid is an email sending service, you may have to login and get your api key to use the service ) <br>
MONGODB_URL=mongodb://127.0.0.1:27017/task-manager-api <br>
JWT_SECRET=thisisajwtsecretkey  <br>
5. npm install <br>
6. npm run dev / npm run start  <br>
<hr>
API Endpoints are (replace {{url}} with localhost:3000 when running locally) <br>
1. create user  -POST {{url}}/users <br> 
  Used to create a new user in the database <br>
  Content in Body-raw-json<br>
  Example : <br>
  {<br>
    "age" : 22,<br>
    "name" : "Stephen Curry",<br>
    "email" :  "curry@stephen.io",<br>
    "password" : "curry@stephen"<br>
}<br>

2. read profile -GET {{url}}/users/me<br>
Used to get the profile of the logged in user <br>

3. login user -POST {{url}}/users/login <br>
Used to login an existing user <br>
Content in Body-raw-json<br>
{<br>
 "email" :  "curry@stephen.io",<br>
 "password" : "curry@stephen"<br>
 }<br>
 
 4. update user -PATCH {{url}}/users/me 
 Used to updatean existing users attributes.
 Content in Body-raw-json can something like this <br> 
 {<br>
    "age" : 32,<br>
    "name" : "Wardell Stephen Curry",<br>
    "email" :  "wardell_curry@stephen.io",<br>
    "password" : "wardell_curry@stephen"<br>
}<br>

5. Logout User - POST {{url}}/users/logout/ <br><br>
5. Logout User - POST {{url}}/users/logout/ <br>
Used to logout a logged in user.<br>

6. Logout All -POST {{url}}/users/logoutAll <br>
Used to logout of all sessions/devices .<br>

7. Delete User -DELETE {{url}}/users/me<br>
Used to delete a logged in user<br>

8. Creating a task -POST {{url}}/tasks<br>
 Content in Body-raw-json can something like this <br> 
 {<br>
    "description" : "Winning third NBA championship!",<br>
    "completed" : "false"<br>
}<br>

9. Get all tasks of a user <br>
The queries can be of three formats-<br>
9.1 get tasks?completed=true / false --to get only completed/incompleted tasks<br>
9.2 get tasks?limit=10&skip=0 --to set a limit for no of queries to retrieve in a page and number of queries to skip.<br>
9.3 get tasks?sortBy=createdAt:asc / desc -- to sort the queries based in time of creation in ascending or descending order.<br>

10. Get task of a user by id - GET {{url}}/tasks/id (task id of user's task)<br>

11.Update a task PATCH {{url}}/tasks/id<br>
Content in Body-raw-json can something like this <br> 
 {<br>
    "description" : "Winning fourth NBA championship!",<br>
    "completed" : "true"<br>
}<br>

12. Delete a task by id-- DELETE {{url}}/tasks/id <br>
13. Upload avatar POST {{url}}/users/me/avatar<br>
in BODY - form data - add a new key avatar and select a jpg/png file<br>
14. Get avatar -- GET {{url}}//users/:id/avatar <br>
Get the avatar for a logged in user.<br>
15.Update avatar --POST {{url}}//users/:id/avatar <br>
Update the avatar for a logged in user.<br>
16.Delete avatar --DELETE {{url}}//users/:id/avatar <br>
DELETE the avatar for a logged in user.<br>
