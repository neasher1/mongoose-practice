import mongoose from "mongoose";
import app from "./app";

const port: number = 5000;

//mongoose connection
async function main() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/mongoose-practice');
        console.log(`Database connection is successfully`);

        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`)
        })
    }
    catch (err) {
        console.log(`Failed to database connect,`, err);
    }
}

main();
