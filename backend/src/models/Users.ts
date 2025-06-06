import mongoose, {Document} from "mongoose";

export interface Users extends Document{
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    teamId: Number;
    role: string;
}

const UsersSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    teamId: {type: Number, required: false},
    role: {type: String, required: false},
})

export default mongoose.model<Users>('users', UsersSchema);