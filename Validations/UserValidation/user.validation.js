const yup = require('yup')

const userValidationSchema = yup.object({
    username: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,10}$/,
        'Password must be between 4 and 10 characters, and contain at least one letter and one number'
    ).required(),
    age:yup.number().required()
});

module.exports = userValidationSchema;