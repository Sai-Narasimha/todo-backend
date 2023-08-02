const validation = (schema) => {
    return async (req, res, next) => {
        const { username, email, password, age } = req.body;
        try {
            await schema.validate({ username, email, password, age });
            next(); 
        } catch (error) {
            res.status(400).json({error : error.errors[0]});
        }
    };
};

module.exports = validation;
