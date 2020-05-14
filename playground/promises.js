require('../src/db/mongoose')
const User = require('../src/models/user')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5eb5d4891f1da83a70e07bc3').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

// const update = async (id, age) => {
//     const user = await User.findByIdAndUpdate(id, { age })
//     const count = await User.countDocuments({ age })
//     return count
// }

// update('5eb5dae3383a730a4c2abd35', 23).then((count) => {
//     console.log(count)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTask = async (id) => {
    const task = await Task.findByIdAndRemove(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTask('5eb5d460e564052e747ca220').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})