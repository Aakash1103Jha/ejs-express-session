import { MongoClient } from "mongodb";

const URI = process.env.MONGO_URI as string;
export class Database {
	client: MongoClient;
	constructor() {
		this.client = new MongoClient(URI);
	}
}

new Database().client;
