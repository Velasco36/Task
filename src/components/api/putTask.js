import clientAxios from '../../config/axios';
import "sweetalert2/src/sweetalert2.scss";
import Swal from "sweetalert2/dist/sweetalert2.js";

export const putTask = async (id, data) => {
    const token = localStorage.getItem('token');
    const response = await clientAxios.put(`tasks/${id}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      });
      Swal.fire({
        title: "Alert!",
        text: "se ha editado correctamente",
        icon: "success",
        confirmButtonText: "success",
      });
      console.log(response);
      setTimeout(() => {
        window.location.replace("/");
      }, 1000);
  return response.data
}

