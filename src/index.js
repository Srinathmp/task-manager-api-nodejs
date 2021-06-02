const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT 



app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})


// app.use((req,res,next)=>{
//     if(req.method === 'GET'){
//         res.send('GET requests are disabled!')
//     }
//     else{
//         next()
//     }
    
// })


// app.use((req,res,next)=>{
//     res.status(503).send('Sorry Site is under maintenence! Please come back after some time.')
//     // next()
// })

// const jwt = require('jsonwebtoken')

// const myFunction = async()=>{
//     const token = jwt.sign({_id:'abc123'},'thisismynewcourse',{expiresIn : '7d'})
//     console.log(token);

//     const data = jwt.verify(token,'thisismynewcourse')
//     console.log(data);
// }


// const bcrypt = require('bcryptjs')

// const myFunction = async () => {
//     const password = 'Red12345!'
//     const hashedPassword = await bcrypt.hash(password, 8)

//     console.log(password)
//     console.log(hashedPassword)

//     const isMatch = await bcrypt.compare('red12345!', hashedPassword)
//     console.log(isMatch)
// }

// myFunction()

// const Task = require('./models/task')
// const User = require('./models/user')

// const main = async ()=>{
    // const task = await Task.findById('60b4dee14092de4e50a743e8')
    // await task.populate('owner').execPopulate()
    // console.log(task.owner);

//     const user = await User.findById('60b4eb77b1692f32d8a36de6')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks);
// }

// main()