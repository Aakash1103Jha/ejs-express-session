import { NextFunction, Request, Response } from "express";
import { HttpError } from "../utils/httpError";

export const validateSession = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { session } = req;
		if (!session.isAuth) return res.status(403).redirect("/login");
		return next();
	} catch (error) {
		const { message } = error as Error;
		return next(new HttpError(message, 500));
	}
};
