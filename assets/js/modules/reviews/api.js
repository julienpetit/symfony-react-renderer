import { handleApiErrors } from '../../lib/api-errors';

const api = {

    getAll(action) {
        return fetch(`/api/reviews`, {
            method  : 'GET',
            headers : {
                'accept': 'application/json',
            },
            mode: 'cors',
        })
            .then(handleApiErrors)
            .then(response => response.json())
            .then(data => data);
    },

    create(action) {
        return fetch(`/api/reviews`, {
            method  : 'POST',
            headers : {
                'accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(action.payload),
            mode: 'cors',
        })
            .then(handleApiErrors)
            .then(response => response.json())
            .then(data => data);
    },
};

export default api;
