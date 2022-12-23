import { SessionOptions } from "express-session";
import ConnectMongo from "connect-mongo";
import { Database } from "./database";

const TTL = 3600000;

const SESSION_STORE = ConnectMongo.create({
	collectionName: "sessions",
	ttl: TTL,
	client: new Database().client,
});

export const SESSION_OPTIONS: SessionOptions = {
	secret: process.env.SESSION_COOKIE_SECRET as string,
	cookie: {
		maxAge: TTL,
		signed: true,
		secure: process.env.NODE_ENV === "development" ? false : true,
	},
	resave: false,
	saveUninitialized: false,
	store: SESSION_STORE,
};
