import connectDB from "./db/database";
import { app } from "./app";
import { v2 as cloudinary } from "cloudinary";

require("dotenv").config({
    path: "/.env",
});

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

console.log("cloud_name:: ", process.env.CLOUDINARY_CLOUD_NAME);

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8080, () => {
            console.log(
                `🌐 Server is running on port ${process.env.PORT || 8080} `
            );
        });
    })
    .catch((err) => {
        console.error(`❗Failed to connect MongoDB \n`, err);
    });
