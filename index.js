const express = require('express')

const { todoController } = require('./Controllers/Todo.controller')

const { authenticate } = require('./Middlewares/auth.middleware')

const cors = require('cors');

require('dotenv').config();

const connection = require('./Server/db')

const app = express()

app.use(express.json())

app.use(cors())

const { userController } = require('./Controllers/User.controller')
app.get('/', (req, res) => {
    try {
        res.send('Hello World')
    } catch (err) {
        res.send({ error: err.message })
    }
})

app.use('/user', userController);

app.use(authenticate)

app.use('/todos', todoController);

app.listen(process.env.PORT, async () => {
    try {
        await connection;
        console.log(`Listening on Port ${process.env.PORT}`);
    }
    catch (err) {
        console.log(err.message);
    }
});