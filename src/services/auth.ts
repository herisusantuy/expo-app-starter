import axios from '../utils/http/axios';
import { HttpResponse } from 'src/types/HttpResponse';

export const authenticate = async (
  email: string,
  password: string
): Promise<{ token: string }> => {
  try {
    const request = await axios.post<HttpResponse<{ token: string }>>(
      'auth/login',
      { email, password }
    );
    const { data } = request.data;
    return data;
  } catch (error) {
    throw error;
  }
};

export const logout = async (): Promise<number> => {
  try {
    const request = await axios.post<HttpResponse<any>>('auth/logout');
    const { data } = request.data;
    return data;
  } catch (error) {
    throw error;
  }
};
