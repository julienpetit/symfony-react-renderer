import { handleApiErrors } from '../../lib/api-errors';

const api = {

  getAll(action) {
    return fetch('/api/users', {
      method: 'GET',
      headers: {
        accept: 'application/json',
      },
      mode: 'cors',
    })
      .then(handleApiErrors)
      .then(response => response.json())
      .then(data => data);
  },

  get(action) {
    return fetch(`/api/users/${action.payload}`, {
      method: 'GET',
      headers: {
        accept: 'application/json',
      },
      mode: 'cors',
    })
      .then(handleApiErrors)
      .then(response => response.json())
      .then(data => data);
  },

  update(action) {
    return fetch(`/api/users/${action.payload.id}`, {
      method: 'PUT',
      headers: {
        accept: 'application/json',
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
