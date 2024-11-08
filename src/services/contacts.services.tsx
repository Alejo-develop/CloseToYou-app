import axios from 'axios';
import {ContactInterface} from '../interface/contacts.interface';
import { BASE_URL } from '../assets/constanst';

export const getAllContactsServices = async (token: string) => {
  try {
    const res = await axios.get(`${BASE_URL}/contacts`, {headers: {
        Authorization: `Bearer ${token}`,
      },}) 

      const contacts = res.data as ContactInterface[] 
      return contacts
  } catch (err: any) {
    console.error('Error get contacts:', err.message);
    if (err.response) {
      console.error('Error response:', err.response.data.message);
    }
    throw err;
  }
};
