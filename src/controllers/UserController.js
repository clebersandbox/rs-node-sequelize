const User = require('../models/User');

module.exports = {

    async store(req, res) {
        const { name, email } = req.body;
        
        const user = await User.create({    //Objeto descrito em short Syntax
            name,
            email
        });

        return res.json(user);
    }
}