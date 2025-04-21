import { Document } from 'mongoose';
export interface IAuth extends Document {
    id: string;
    email: string;
    name?: string;
    avatar?: string;
    bio?: string;
    status: 'active' | 'inactive' | 'banned';
    emailVerified: boolean;
    password?: string;
    createdAt: Date;
    updatedAt: Date;
    interests?: string[];
    photos?: string[];
    gender?: string;
    birthday?: string;
}
