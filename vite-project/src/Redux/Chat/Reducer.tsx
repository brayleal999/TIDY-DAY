import * as actionTypes from "./ActionTypes";

interface initialState {
    messages: [] | any; // Define el tipo de usuario según tu aplicación
    loading: boolean;
    error: null | any; // Opcionalmente define el tipo de error
    chat: null | any; // Opcionalmente define el tipo de jwt
    
  }
  
export const initialState: initialState = {
   messages:[],
   loading:false,
   error:null,
   chat:null,
  };

const chatReducer = (state=initialState,action:any) => {
    switch(action.type) {
        case actionTypes.FETCH_CHAT_MESSAGES_REQUEST:
        case actionTypes.SEND_MESSAGES_REQUEST:
        case actionTypes.FETCH_CHAT_MESSAGES_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case actionTypes.FETCH_MESSAGES_SUCCESS:
        case actionTypes.FETCH_CHAT_MESSAGES_SUCCESS:   
            return{
                ...state,
                loading: false,
                messages: action.messages
            };
        case actionTypes.SEND_MESSAGES_SUCCESS:
            return {
                ...state,
                loading: false,
                messages: [...state.messages, action.messages]
            }
        case actionTypes.FETCH_CHAT_BY_PROJECT_SUCCESS:
            return {
                ...state,
                loading: false,
                chat: action.chat
            }
        case actionTypes.FETCH_MESSAGES_FAILURE:
        case actionTypes.SEND_MESSAGES_FAILURE:
        case actionTypes.FETCH_CHAT_MESSAGES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default: 
            return state;               
    }
};

export default chatReducer;