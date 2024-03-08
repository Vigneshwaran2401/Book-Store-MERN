import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
export const PORT = 5555;
export const mongoDBURI = process.env.MongodbURI;
