export const useValidedInitialData = async () => {

    const data = await window.electronFront.obtenerInformacion(1);
    console.log("data desde valide inital data" +data)
    const dataExist = false;
    if (data != null) {
        dataExist = true;
    }

    return dataExist;

}