const bcrypt = require('bcryptjs');

function encryptPassword(password) {
    // Generate a salt and hash the password with the salt
    const hashPassword = bcrypt.hashSync(password, 10);
    return hashPassword;
}

function checkPassword(password, hashedPassword) {
const isValidated = bcrypt.compareSync(password, hashedPassword);
return isValidated;
}

module.exports = {
    encryptPassword,
    checkPassword,
}
