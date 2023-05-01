
const User = require('../models/Users');

const signIn = async (req, res) => {
    try {
        const admin = await User.findOne({email: req.body.email, password: req.body.password}); // Use object destructuring if needed
        if(admin === null) {
           return  res.status(400).send("Not Match");
        }
        const {_id, email, firstName, lastName, role} = admin;
        res.json({_id, email, firstName, lastName, role});
    } catch (error) {
        console.error(error);
    }
};

module.exports = {signIn};

