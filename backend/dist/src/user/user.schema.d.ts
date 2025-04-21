import mongoose from "mongoose";
import { IAuth } from "./user.interface";
declare const User: mongoose.Model<IAuth, {}, {}, {}, mongoose.Document<unknown, {}, IAuth> & IAuth & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
export default User;
