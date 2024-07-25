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