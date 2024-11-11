

import pgAdmin from '../pgadmin';
import gettext from '../gettext';
import axios from 'axios';

export const API_Base_URL = 'http://127.0.0.1:5050';
export const PGADMIN_INT_KEY = '59ae8a11-9648-4013-8488-ebff08e33ab7'

/* Get the axios instance to call back end APIs.
Do not import axios directly, instead use this */
export default function getApiInstance(headers={}) {
  return axios.create({
    
    headers: {
      'Content-type': 'application/json',
      [pgAdmin.csrf_token_header]: pgAdmin.csrf_token,
      ...headers,
    }
  });
}



export function parseApiError(error, withData=false) {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    if(error.response.headers['content-type'] == 'application/json') {
      let err_resp_data = error.response.data;
      if (err_resp_data.response != undefined && Array.isArray(err_resp_data.response.errors)) {
        return err_resp_data.response.errors[0];
      } else {
        let errormsg = err_resp_data.errormsg;
        let data = error.response.data.data;
        // If we want to use data which came with error set withData
        // flag to true.
        return withData ? {errormsg, data} : errormsg;
      }
    } else {
      return error.response.statusText;
    }
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    return gettext('Connection to pgAdmin server has been lost');
  } else if(error.message) {
    // Something happened in setting up the request that triggered an Error
    return error.message;
  } else if(error.errormsg) {
    // Received response JSON in socket handle
    return error.errormsg;
  } else {
    return error;
  }
}

export function callFetch(url, options, headers={}) {
  return fetch(url, {
    ...options,
    headers: {
      'Content-type': 'application/json',
      [pgAdmin.csrf_token_header]: pgAdmin.csrf_token,
      ...headers,
    }
  });
}
