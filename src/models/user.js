const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Task = require('./task') 

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique:true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain "password"')
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a postive number')
            }
        }
    },
    tokens : [{
        token : {
            type : String,
            required : true
        }
    }],
    avatar : {
        type: Buffer
    }
},{
    timestamps:true
})

userSchema.virtual('tasks',{ // name of virtual field
    ref : 'Task',
    localField : '_id',
    foreignField : 'owner'
})

userSchema.methods.toJSON =  function(){
    const user = this 
    const userObject  = user.toObject()

    delete userObject.password
    delete userObject.tokens
    delete userObject.avatar

    return userObject
}

userSchema.methods.generateAuthToken = async function(){ //standard function, to use this binding, can;t be used in case of arrow function, arrow function has this value same as the parents value
    const user = this
    const token = jwt.sign({_id: user._id.toString() },process.env.JWT_SECRET) 

    user.tokens = user.tokens.concat({token : token}) // or just {token}
    await user.save()

    return token
}

userSchema.statics.findByCredentials = async (email,password)=>{
    const user = await User.findOne({email:email}) 

    if(!user){
        throw new Error('Unable to login!')
    }

    const isMatched = await bcrypt.compare(password,user.password)

    if(!isMatched){
        throw new Error('Unable to login!')
    }

    return user
}

//Hash plain text password before saving 
userSchema.pre('save',async function(next){ //standard function, to use this binding 
    const user  = this

    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password,8)
    }

    next() // to tell that the program is over .
})

//delete user tasks when user is removed 
userSchema.pre('remove', async function(next) {
    const user = this
    await Task.deleteMany({owner: user._id})
    next()
})

const User = mongoose.model('User',userSchema )

module.exports = User