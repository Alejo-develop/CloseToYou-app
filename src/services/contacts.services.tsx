import axios from 'axios';
import {ContactInterface, CreateContactInterface} from '../interface/contacts.interface';
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

export const saveContactService = async (id: string, contact: CreateContactInterface, token: string) =>{
  const formData = new FormData();
  
  // Agregar todos los campos de contacto a formData
  formData.append('userId', id);
  if (contact.name) formData.append('name', contact.name);
  if (contact.lastName) formData.append('lastName', contact.lastName);
  if (contact.secondName) formData.append('secondName', contact.secondName);
  if (contact.phone) formData.append('phone', contact.phone);
  if (contact.role) formData.append('role', contact.role);
  if (contact.email) formData.append('email', contact.email);
  if (contact.secondPhone) formData.append('secondPhone', contact.secondPhone);
  if (contact.latitude) formData.append('latitude', contact.latitude);
  if (contact.longitude) formData.append('longitude', contact.longitude);

  // Agregar la imagen solo si existe
  if (contact.img) {
    const imageFile = {
      uri: contact.img,
      name: 'contact_photo.jpg',
      type: 'image/jpeg',
    };
    formData.append('img', imageFile);
  }

  // Verificar el contenido de FormData
  console.log('FormData content:', formData);
   
  try {
    const res = await axios.post(`${BASE_URL}/contacts`, formData, {headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },}) 
      
      return res
  } catch (err: any) {
    console.error('Error get contacts:', err.message);
    if (err.response) {
      console.error('Error response:', err.response.data.message);
    }
    throw err;
  }
}

export const updateContactService = async (
  id: string,
  userId: string,
  contact: ContactInterface,
  token: string,
) => {
  const formData = new FormData();
  
  // Agregar todos los campos de contacto a formData
  formData.append('userId', userId);
  if (contact.name) formData.append('name', contact.name);
  if (contact.lastName) formData.append('lastName', contact.lastName);
  if (contact.secondName) formData.append('secondName', contact.secondName);
  if (contact.phone) formData.append('phone', contact.phone);
  if (contact.role) formData.append('role', contact.role);
  if (contact.email) formData.append('email', contact.email);
  if (contact.secondPhone) formData.append('secondPhone', contact.secondPhone);
  if (contact.latitude) formData.append('latitude', contact.latitude);
  if (contact.longitude) formData.append('longitude', contact.longitude);

  // Agregar la imagen solo si existe
  if (contact.img) {
    const imageFile = {
      uri: contact.img,
      name: 'contact_photo.jpg',
      type: 'image/jpeg',
    };
    formData.append('img', imageFile);
  }

  // Verificar el contenido de FormData
  console.log('FormData content:', formData);

  try {
    const res = await axios.patch(`${BASE_URL}/contacts/${id}`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    });
    return res;
  } catch (err: any) {
    console.error('Error updating contact:', err.message);
    if (err.response) {
      console.error('Error response:', err.response.data);
    }
    throw err;
  }
};

export const deleteContactService = async (id: string | null, token: string) => {
  try {
    const res = await axios.delete(`${BASE_URL}/contacts/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res;
  } catch (err: any) {
    console.error('Error updating contact:', err.message);
    if (err.response) {
      console.error('Error response:', err.response.data);
    }
    throw err;
  }
}
