import { useState } from "react";
import { useValidedInitialData } from "./useValidatedInitialData";

export const useVisibility = () => {
  
    const [visibilidad, setvisibilidad] = useState(false);

    const onSetViewTrue = async () => {
        const isDataExist = await useValidedInitialData();
       if (isDataExist) {
        setvisibilidad(true);
        
       }else{

       }
        
    }

    const onSetViewFalse = () => {
        setvisibilidad(false)
    }

   

    return{
        onSetViewFalse,
        onSetViewTrue,
        visibilidad
    }


}