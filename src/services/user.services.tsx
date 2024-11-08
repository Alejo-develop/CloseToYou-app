import axios from 'axios';
import {UserInfoInterface} from '../interface/user.interface';
import {BASE_URL} from '../assets/constanst';
// Función de retraso
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const updateUserService = async (
  id: string,
  user: UserInfoInterface,
  token: string,
) => {
  console.log('user', user);
  
  // Asegúrate de que la imagen esté lista
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
    if (user.secondNumber) formData.append('secondNumber', user.secondNumber);
    if (user.address) formData.append('address', user.address);
    if (!imageFile.uri) {
      throw new Error('Invalid image URI');
    }
  }

  // Añadir un retraso para asegurarse de que el archivo esté listo
  await delay(500);

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

export const deleteUserService = async () => {};
