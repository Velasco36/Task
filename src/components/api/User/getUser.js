import clientAxios from '../../../config/axios';
import "sweetalert2/src/sweetalert2.scss";

import { user_name } from '../../../redux/actions';


export const GetUser = async (dispatch) => {
  const token = localStorage.getItem('token');
  const response = await clientAxios.get(`user`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  // Utiliza dispatch aquí
  dispatch(user_name(response.data.data.user.nick_name));

  return response.data;
}
