import api from "@/config/api";
import * as actionTypes from "./ActionTypes";

export const sendMessage = (messageData: any) => {
    return async (dispatch: any) => {
        dispatch({ type: actionTypes.SEND_MESSAGES_REQUEST});
        try {
            const response = await api.post(
                "api/messages/send",
                messageData
            );
            dispatch({ type: actionTypes.SEND_MESSAGES_SUCCESS,
                message: response.data,
            });
        } catch (error:any) {
            console.error(error);
            dispatch({
                type: actionTypes.SEND_MESSAGES_FAILURE,
                error: error.message,
            })
        }
    }
}

export const fetchChatByProject = (projectId:any) => {
    return async (dispatch: any) => {
        dispatch({ type: actionTypes.FETCH_CHAT_BY_PROJECT_REQUEST});
        try {
            const response = await api.get(
                `/api/projects/${projectId}/chat`
            );
            console.log("fetch chat", response.data);
            dispatch({ type: actionTypes.FETCH_CHAT_BY_PROJECT_SUCCESS,
                chat: response.data,
            });    
        } catch (error:any) {
            console.log("error -- ", error)
            dispatch({
                type: actionTypes.FETCH_CHAT_BY_PROJECT_FAILURE,
                error: error.message,
            });
        }
    };
};

export const fecthChatMessages = (chatId:any) => {
    return async (dispatch:any) => {
        dispatch({ type: actionTypes.FETCH_CHAT_MESSAGES_REQUEST });
        try {
            const response = await api.get(
                `/api/messages/chat/${chatId}`
            );
            console.log("fetch messages", response.data)
            dispatch({
                type: actionTypes.FETCH_CHAT_MESSAGES_SUCCESS,
                chatId,
                messages: response.data,
            });
        } catch (error:any) {
            console.log("error -- ", error)
            dispatch({
                type: actionTypes.FETCH_CHAT_MESSAGES_FAILURE,
                error: error.message,
            });
        }
    }
};