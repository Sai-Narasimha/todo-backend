const validation = (schema) => {
    return async (req, res, next) => {
        const body = req.body;
        try {
            await schema.validate(body);
            next(); 
        } catch (error) {
            res.status(400).json({error : error.errors[0]});
        }
    };
};

module.exports = validation;
