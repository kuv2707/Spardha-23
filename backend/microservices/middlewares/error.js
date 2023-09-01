class AppError extends Error {
	constructor(message, statusCode = 500) {
		super(message);
		this.isOperational = true;//errors raised by us explicitly are operational errors
		//* constructor of Error(parent class)
		this.statusCode = statusCode;
		Error.captureStackTrace(this, this.constructor);
	}
}

export const errorMiddleware = (err, req, res, next) => {
	err.message = err.message || "Internal server error";
	err.statusCode = err.statusCode || 500;
	let sendobj = {
		success: false,
		message: err.message,
	};
	if(process.env.NODE_ENV==="development")
	sendobj.stack=err.stack;
	res.status(err.statusCode).json(sendobj);
};

export default AppError;
