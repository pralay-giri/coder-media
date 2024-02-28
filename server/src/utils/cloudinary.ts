import { v2 as cloudinary } from "cloudinary";



const uploadOnCloudinary = async (localPath: string) => {
    try {
        if (!localPath) return null;
    
        // upload file on cloudinary and response the object to the user
        const response = await cloudinary.uploader
            .upload(localPath)
            .then((res) => res)
    
        return response
    } catch(err) {
        console.log(err);
        return null
    }
};

export default uploadOnCloudinary;
