const yup = require('yup')

const userValidation={

    userRegisterValidationSchema : yup.object({

       username: yup.string().required(),

       email: yup.string().email().matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,"email must be a valid email").required(),

       password: yup.string().matches(
           /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
           'Password must be, At least one upper case, At least lower case,At least one digit, At least one special character and Minimum 8 in length'
       ).required(),

       age:yup.number().required()
   }),

   userLoginValidationSchema:yup.object({

    email: yup.string().email().matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,"email must be a valid email").required(),

    password: yup.string().matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
        'Password must be, At least one upper case, At least lower case,At least one digit, At least one special character and Minimum 8 in length'
    ).required(),
    
}),
}

module.exports = userValidation;