import mangoose from "mongoose";

export const dbConnection = () => {
    mangoose
    .connect(process.env.MONGO_URI, {
        dbName: "Hospital_Management_System"
    }).then(()=>{
        console.log("connected to database!")
    }).catch((err) => {
        console.log(`some error occured while connecting to database: ${err}`)
    });
};
