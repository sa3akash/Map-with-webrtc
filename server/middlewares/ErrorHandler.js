const { DEBUG_MODE } = require("../config");

const notFoundErr = (req,res,next) => {
    next(new Error(`Can't find ${req.headers?.host}${req.originalUrl} on the server.`))
}

const createError = (status, message) => {
    const error = new Error();
    error.status = status;
    error.message = message;
    return error;
}

const customErrorHandler = (error, req, res, next) => {
    let errorStatus = error.status || 500;
    let errorMessage = error.message ||"This is server side error";

    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        ...(DEBUG_MODE === "true" && {stack: error.stack}),
    });
}


module.exports = {
    createError,
    customErrorHandler,
    notFoundErr
}