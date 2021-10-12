import axios from 'axios';

export function fetchAllTariffs() {

    return (dispatch) => {

        return axios.get('http://localhost:8080/tariff/GetallTariffs')
            .then(resp => {
                dispatch(fetchAllTariffsSuccess(resp.data))
            })
            .catch(error => {
                throw (error);
            });
    }
}

export function fetchAllTariffsSuccess(data) {
    return {
        type: "FETCHALLSUCCESS",
        payload: data
    }
}