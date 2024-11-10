import axios from 'axios';
import {UserInfoInterface} from '../interface/user.interface';
import {BASE_URL} from '../assets/constanst';

export const getUserByIdService = async (id: string, token: string) => {
  try {
    const res = await axios.get(`${BASE_URL}/users/${id}`,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data;
  } catch (err: any) {
    console.error('Error updating user:', err.message);
    if (err.response) {
      console.error('Error response:', err.response.data.message);
    }
    throw err;
  }
}

export const updateUserService = async (
  id: string,
  user: UserInfoInterface,
  token: string,
) => {
  const formData = new FormData();
  if (user.img) {
    const imageFile = {
      uri: user.img,
      type: 'image/jpeg',
      name: `profile.jpg`,
    };
    formData.append('img', imageFile);
    // Agregar otros datos del usuario
    if (user.name) formData.append('name', user.name);
    if (user.lastName) formData.append('lastName', user.lastName);
    if (user.secondName) formData.append('secondName', user.secondName);
    if (user.phone) formData.append('phone', user.phone);
    if (user.email) formData.append('email', user.email);
    if (user.secondPhone) formData.append('secondPhone', user.secondPhone);
    if (user.address) formData.append('address', user.address);
    if (!imageFile.uri) {
      throw new Error('Invalid image URI');
    }
  }

  try {
    const res = await axios.patch(`${BASE_URL}/users/update/${id}`, user.img ? formData : user, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': user.img ? 'multipart/form-data' : 'application/json',
      },
    });
    return res;
  } catch (err: any) {
    console.error('Error updating user:', err.message);
    if (err.response) {
      console.error('Error response:', err.response.data.message);
    }
    throw err;
  }
};
