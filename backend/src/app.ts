import express, {Request, Response}  from "express";
import cors from "cors";
import dotenv from "dotenv";
import usersRoutes from "./routes/usersRoutes";
import connectDB from "./database";


dotenv.config();

let app = express();

app.use(express.json());
app.use(cors());

(async () =>{
    try{
        await connectDB()
        console.log("Connected to DB...")
    }catch(e: unknown){
        if(e instanceof Error) {
            console.error(`błąd połączenie z MongoDB ${e}`)

        }else{
            console.log(`nie znany błąd połączenia `, e)
        }
        process.exit(1)
    }
})()


app.get("/", (req: Request, res: Response) => {
    res.json({message: "api stared"});
});

app.use("/users", usersRoutes)

export default app;