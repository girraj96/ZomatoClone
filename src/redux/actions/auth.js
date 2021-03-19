import { apiDelete, apiGet, apiPost, apiPut, getItem, setItem, setUserData } from '../../utils/utils';
import { LOGIN, SIGNUP, } from '../../config/urls';
import types from '../types';
import store from '../store';

const {dispatch}=store;

export function login(data = {}) {

  // return apiGet(LOGIN, data);

  return new Promise((resolve, reject) => {
    apiPost(LOGIN, data).then(res => {
      setUserData(res.data).then(suc=>{
          dispatch({
              type:types.LOGIN,
              payload:res.data
          })
      })

      resolve(res);
    }).catch(error => {
      reject(error);
    })
  })


}

export function signup(data = {}) {
  return apiPost(SIGNUP, data);
}

