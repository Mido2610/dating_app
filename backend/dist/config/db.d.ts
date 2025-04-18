import mongoose from 'mongoose';
declare const connectDB: () => Promise<mongoose.Connection | false>;
export default connectDB;
