const ApiError = require('@exceptions/api.exception')

module.exports = function(err, req, res, next) {
    console.log(err)
    if (err instanceof ApiError) {
        return res.status(err.status).json({message: err.message, errors: err.errors}).end()

    } else {
        return res.status(500).json({message: err.message}).end()
    }
}