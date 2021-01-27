const io = require('./socket');

const sendAction = (message, data) => {
    io.emit(message, data);
};

module.exports = sendAction;
