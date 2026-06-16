
const responseMiddleware = (req, res, next) => {

    req.startTime = Date.now();

    next();
};

export { responseMiddleware };

