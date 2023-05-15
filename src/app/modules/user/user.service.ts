import { IUser } from "./user.interface";
import User from "./user.model";

//4. create a instance for model & Database query
export const createUserToDB = async (payload: IUser): Promise<IUser> => {
    const user = new User(payload);
    await user.save();
    return user;
}

export const getUsersFromDB = async (): Promise<IUser[]> => {
    const users = await User.find();
    return users;
}

export const getUserByIdFromDB = async (payload: string): Promise<IUser | null> => {
    const user = await User.findOne({ id: payload }, { name: 1, contactNo: 1 });
    return user;
}

export const getAdminUsersFromDB = async () => {
    const admins = await User.getAdminUsers();
    return admins;
}

// {
//     id: "4",
//     role: "student",
//     password: "absas#1",
//     name: {
//         firstName: "Mr. Z",
//         middleName: "Ahmed",
//         lastName: "Hridoy",
//     },
//     dateOfBirth: "10-10-1998",
//     gender: "Male",
//     email: "neasher@gmail.com",
//     contactNo: "0130322323",
//     emergencyContactNo: "01221212",
//     presentAddress: "Pabna Sadar",
//     permanentAddress: "Chatmoahar"

// }