import express, { Application } from "express";
import cors from "cors";

const app: Application = express();

//Application Routes
import userRoutes from "./app/modules/user/user.route";

//using cors
app.use(cors());

//parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/user', userRoutes);

export default app;

//inserting a test data into mongodb

/*
    step1: interface
    step2: schema
    step3: model
    step4: database query on Modal
*/
    // res.send('Hello World!')

/*
Modular Pattern Follow

interface -> interface.ts
Schema, Model -> model.ts

route
route function -> controller.ts
Database query function -> service.ts

*/