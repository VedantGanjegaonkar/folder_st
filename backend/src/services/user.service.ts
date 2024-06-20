import { UserModel, User } from '../models/user.model';

const createUser = async (user: User) => {
  const newUser = new UserModel(user);
  return await newUser.save();
};



const updateUser = async () => {
  const users = await UserModel.find();
  return users;
};

const deleteUser = async (userId: number) => {
  return await UserModel.findOneAndDelete({ userId });
};



export { createUser,  updateUser, deleteUser};
