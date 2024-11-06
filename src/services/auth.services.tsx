import axios from 'axios';
import {LoginInterface, SignUpInterface} from '../interface/user.interface';
import { BASE_URL } from '../assets/constanst';

export const signUpService = async (user: SignUpInterface) => {
  try {
    const res = await axios.post(`${BASE_URL}/auth/signup`, user);

    return res;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const loginService = async (user: LoginInterface) => {
  try {
    const res = await axios.post(`${BASE_URL}/auth/login`, user);

    return res;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
