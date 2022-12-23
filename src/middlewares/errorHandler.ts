import { Request, Response, NextFunction } from "express";
import { HttpError } from "../utils/httpError";

export const errorHandler = async (err: HttpError, _: Request, res: Response, next: NextFunction) => {
	console.log("----------------------------------");
	console.log(err);
	console.log("----------------------------------");

	const { message, statusCode } = err as HttpError;
	res.status(statusCode).json(message);
	return next();
};
