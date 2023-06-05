import { useState } from "react";
import { useValidedInitialData } from "./useValidatedInitialData";
const config = {
  title: 'Error',
  content: 'Debes agregar mínimo un usuario para acceder a la lista de usuarios'
};
export const useVisibility = () => {
    const [visibilidad, setvisibilidad] = useState(false);

    const onUserView = async (modal) => {
        const isDataExist = await useValidedInitialData();
       if (isDataExist) {
        setvisibilidad(true);
        
       }else{
        modal.error(config)
       }
        
    }

    const onAddUserView = () => {
        setvisibilidad(false)
    }

   

    return{
        onUserView,
        onAddUserView,
        visibilidad
    }


}