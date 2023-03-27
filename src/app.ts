import "express-async-errors";
import express from "express";
import userRoutes from "./routes/users.routes";
import handleError from "./errors/handleError";
import sessionRoutes from "./routes/session.routes";
import contactsRoutes from "./routes/contacts.routes";
import cors from "cors"

const app = express();
app.use(express.json());

app.use(cors())

app.use("/users", userRoutes);
app.use("/login", sessionRoutes);
app.use("/contacts", contactsRoutes);

app.use(handleError);

export default app;
