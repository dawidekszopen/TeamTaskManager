import express, {Request, Response} from "express";
import UsersModel, {Users} from "../models/Users";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {

    try{
        if(Object.keys(req.query).length === 0){
            const users: Array<Users> = await UsersModel.find();
            res.json(users);
        }
        else{
            let email = req.query.email
            let password = req.query.password
            const users: Array<Users> = await UsersModel.find({email: email, password: password});

            if(Object.keys(users).length !== 0){
                res.json({canLogin: true, _id:users[0]._id})
            }
            else{
                res.json({canLogin: false})
            }
        }

    } catch(err){
        res.status(500).json({error: `Error with getting users ${err}`});
    }
})
router.post("/", async(req: Request, res: Response) => {
    try{
        const {firstName, lastName, email, password} = req.body;
        const newUsers: Users | null = new UsersModel({firstName, lastName, email, password});
        await newUsers.save();
        res.status(201).json({message: `Added new user: ${newUsers}`});

    }catch(err){
        res.status(500).json({error: `Error with addning user: ${err}`});
    }
})

router.post("/login", async(req: Request, res: Response) => {
    try{
        const {email, password} = req.body;
        const users: Array<Users> = await UsersModel.find({email: email, password: password});

        if(Object.keys(users).length !== 0){
            res.json({canLogin: true, _id:users[0]._id})
        }
        else{
            res.json({canLogin: false})
        }

    }catch(err){
        res.status(500).json({error: `Error with addning user: ${err}`});
    }
})

router.put("/:id", async(req: Request, res: Response) => {
    try{
        const {id} = req.params;

        const updatedUsers: Users|null = await UsersModel.findByIdAndUpdate(id, req.body, {new:true})
        if(!updatedUsers){
            res.status(404).json({error: "no user founded"})
            return;
        }
        res.json({message: `updated user`, movie: updatedUsers});

    }catch(err){
        res.status(500).json({error: "Error with updating user ", err});
    }
})


router.delete("/:id", async(req: Request, res: Response) => {
    try{
        const {id} = req.params;
        const deletedUsers = await UsersModel.findByIdAndDelete(id);
        if(!deletedUsers){
            res.status(404).json({error: "no user founded"})
            return
        }
        res.json({message: `Deleted user: ${deletedUsers}`});
    }catch(err){
        const error = err instanceof Error ? err : new Error("unknown error")
        res.status(500).json({error:`Error with deleting user${error.message}`});
    }
})

export default router;

