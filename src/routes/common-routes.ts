import { NextFunction, Request, Response, Router } from "express";
import { HttpError } from "../utils/httpError";
import CONFIG from "../config/page.config.json";

const router = Router();

router.get("/", async (_: Request, res: Response, next: NextFunction) => {
	try {
		return res.status(200).render("index", {
			title: `${CONFIG.MAIN_TITLE}`,
		});
	} catch (error) {
		const { message } = error as HttpError;
		return next(new HttpError(message, 500));
	}
});

export default router;
