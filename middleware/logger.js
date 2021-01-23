// @desc logs require to console
const logger = (req, res, next) => {
    console.log('Middleware: Logger Ran');
    const { method, url } = req;
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log(`${method} on ${url} - ${ip}`);
    next();
};

module.exports = logger;
