module.exports = ((error, req, res, next) => {
    console.log(error);
    console.log(error);
    let status;
    let message;
    switch (error.name) {
        case "SequelizeValidationError":
        case "SequelizeUniqueConstraintError":
            status = 400
            message = error.errors[0]
            break;
        case "NotFound":
            status = 404
            message = "Data Not Found"
            break
        case "InvalidLogin":
            status = 401
            message = "Invalid email or password"
            break
        case "Unauthentificated":
            status = 401
            message = "Invalid Token"
        default:
            status = 500
            message = "Internal server error"
            break;
    }
    res.status(status).json({ message })
})