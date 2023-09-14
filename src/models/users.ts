import { Schema, model } from 'mongoose';
import { IUser } from './user.model';

// 1. create user schema
const userSchema = new Schema<IUser>({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: Object, required: false },
    phone: { type: String, required: true },
    website: { type: String, required: true },
    company: { type: Object, required: false },
});
// 2. create a model
const User = model<IUser>('Users', userSchema);

export default User;