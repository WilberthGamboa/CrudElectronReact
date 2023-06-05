export const useValidedInitialData = async () => {

    const data = await window.electronFront.obtenerInformacion(1);
    const dataExist = false;
    if (data != null) {
        dataExist = true;
    }

    return dataExist;

}