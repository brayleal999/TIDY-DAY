import { GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_REQUEST } from "./ActionType";

interface AuthState {
    user: null | any; // Define el tipo de usuario según tu aplicación
    loading: boolean;
    error: null | any; // Opcionalmente define el tipo de error
    jwt: null | any; // Opcionalmente define el tipo de jwt
    projectSize: number;
  }
  
export const initialState: AuthState = {
    user: null,
    loading: false,
    error: null,
    jwt: null,
    projectSize: 0,
  };

export const authReducer = (state=initialState,action:any) => {
    switch (action.type) {
        case REGISTER_REQUEST:
        case LOGIN_REQUEST:
        case GET_USER_REQUEST:    
            return {...state,loading:true,error:null};
        
        case REGISTER_REQUEST:
        case LOGIN_SUCCESS:
            return {...state,loading:false,error:null,jwt:action.payload.jwt};
        
        case GET_USER_SUCCESS:
            return {...state,loading:false,error:null,jwt:action.payload}

        case LOGOUT:
            return initialState;
                
        default:
            state;
    }
}