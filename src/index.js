const app  = require('./app')
const port = process.env.PORT






app.listen(port, () => {
    console.log('Server is up on port ' + port)
})


// const Task = require('./models/task')
// const User = require('./models/user')
// const main = async () => {
//     // const task = await Task.findById('6449315bede16347592c8ba8')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)
//     const user = await User.findById('64493064b1c4ae41016790c9')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)

// }


// main()


// const pet = {
//     name: 'Hal'
// }





// pet.toJSON = function() {
//     return {}
// }

// console.log(JSON.stringify(pet))

// const bcrypt = require('bcryptjs')
// const myFunction = async () => {
//     const password = 'Red12345'
//     const hashedPassword = await bcrypt.hash(password, 8)

//     console.log(password)
//     console.log(hashedPassword)

//     const isMatched = await bcrypt.compare('Red12345', hashedPassword)
//     console.log(isMatched)
// }

// myFunction()


// const multer = require('multer')
// const upload = multer({
//     dest: 'images',
//     limit: {
//         fileSize: 1000000
//     },
//     fileFilter(req, file, cb) {
//         if (!file.originalname.match(/\.(doc|docx)$/)) {
//             return cb(new Error('Please upload a Word document'))
//         }

//         cb(undefined, true)


//         // cb(new Error('File must be a pdf'))
//         // cb(undefined, true)
//         // cb(undefined, false)
//     }
// })


// app.post('/upload', upload.single('upload'), async (req, res) => {
//     res.send()
// }, (error, req, res, next) => {
//     res.status(400).send({error: error.message})
// })

// app.use((req, res, next) => {
//     if (req.method == "GET"){
//         res.send('GET requests are disabled')
//     } else {
//         next()
//     }
// })


// Maintainence mode 
// app.use((req, res, next) => {
//     res.status(503).send("The site is under maintainence") 
// })
