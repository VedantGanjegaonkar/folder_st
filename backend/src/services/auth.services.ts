import { IUser, RegisterModel } from '../models/signup.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {NotFoundError, ValidationError, UnauthorizedError } from '../utils/error';
import { log } from 'console';

export class AuthService {

  async register(userData: IUser) {
    const { firstName,lastName, email, role, acceptTerms,password } = userData;

    const existingUser = await RegisterModel.findOne({ email });
            if (existingUser) {
                throw new ValidationError('Email is already registered');
            }
    
    const hashedPassword = await bcrypt.hash(password, 10);


    const user = new RegisterModel({ firstName,lastName, email, password:hashedPassword, role, acceptTerms});

    await user.save();
    return user;
  }

  public async findUserByEmail(email: string) {
    const user = await RegisterModel.findOne({ email });
    if (!user) {
        throw new NotFoundError('Email not found');
    }
    return user;
}

public async validatePassword(password: string, hashedPassword: string) {
    const isPasswordValid = await bcrypt.compare(password, hashedPassword);
    if (!isPasswordValid) {
        throw new UnauthorizedError('Invalid password');
    }
    return isPasswordValid;
}

public  generateAuthToken(userId: string, role: string,email:string): string {
    return jwt.sign({ userId, role,email }, 'secret', { expiresIn: '100h' });
    
}
}