'use server';

import { dbConnect } from '@/lib/dbConnect';
import User from '@/lib/models/user.model';
import bcrypt from 'bcrypt';

export async function createUser(user: {
    password: string;
    name: string;
    email: string;
}) {
    await dbConnect();

    const passwordHash = await bcrypt.hash(user.password, 10);
    const newUser = await User.create({
        ...user,
        password: passwordHash,
    });
    return JSON.parse(JSON.stringify(newUser));
}

export async function getUserByEmail(userEmail: string) {
    await dbConnect();

    const user = await User.findOne({ email: userEmail });

    if (!user) throw new Error('User Not Found');
    return JSON.parse(JSON.stringify(user));
}
