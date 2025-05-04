const userModel = require("../models/user_model")

module.exports.createUser = async ({ fullname, email, password }) => {
    if (!fullname?.firstname || !email || !password) {
        throw new Error("Please fill all the fields");
    }

    const user = await userModel.create({
        fullname: {
            firstname: fullname.firstname,
            lastname: fullname.lastname
        },
        email,
        password
    })
    return user
}