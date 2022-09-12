module.exports = (sequelize, Sequelize) => {
    const PhoneBook = sequelize.define("phone-book", {
        firstName: {
            type: Sequelize.STRING
        },
        lastName: {
            type: Sequelize.STRING
        },
        phoneNumber: {
            type: Sequelize.STRING
        }
    });
    return PhoneBook;
};