import { API_BASE_URL } from "@/config/api"
import { GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType"
import axios from "axios";

export const register = (userData:any) => async (dispatch:any) => {
    dispatch({type: REGISTER_REQUEST})
    try {
        const {data} = await axios.post(`${API_BASE_URL}/auth/signUp `, userData)
        if (data.jwt)  {
            localStorage.setItem('jwt', data.jwt)
            dispatch({type: REGISTER_SUCCESS, payload:data})
        }

        console.log('Register successful', data);
    } catch (error) {
        console.log(error);
    }
}

export const login = (userData:any) => async (dispatch:any) => {
    dispatch({type: LOGIN_REQUEST})
    try {
        const {data} = await axios.post(`${API_BASE_URL}/auth/signIn `, userData)
        if (data.jwt)  {
            localStorage.setItem('jwt', data.jwt)
            dispatch({type: LOGIN_SUCCESS, payload:data})
        }
        
        console.log('lOGIN successful', data);
    } catch (error) {
        console.log(error);
    }
}

export const getUser = () => async (dispatch:any) => {
    dispatch({type: GET_USER_REQUEST})
    try {
        const {data} = await axios.post(`${API_BASE_URL}/api/users/profile `,{
            headers:{
                "Authorization": `${localStorage.getItem('jwt')}`
            }
        });
        if (data.jwt)  {
            localStorage.setItem('jwt', data.jwt)
            dispatch({type: GET_USER_SUCCESS, payload:data})
        }
        
        console.log('Login successful', data);
    } catch (error) {
        console.log(error);
    }
}

export const logout = () => async(dispatch:any) => {
    dispatch({type:LOGOUT})
    localStorage.clear();
}