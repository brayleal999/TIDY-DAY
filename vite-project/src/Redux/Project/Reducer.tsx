
import { ACCEPT_INVITATION_REQUEST, CREATE_PROJECT_REQUEST, CREATE_PROJECT_SUCCESS, DELETE_PROJECT_REQUEST, DELETE_PROJECT_SUCCESS, FETCH_PROJECT_BY_ID_REQUEST, FETCH_PROJECTS_BY_ID_SUCCESS, FETCH_PROJECTS_REQUEST, FETCH_PROJECTS_SUCCESS, INVITE_TO_PROJECT_REQUEST, SEARCH_PROJECT_SUCCESS } from "./ActionTypes";

interface AuthState {
    projects: [] | any; // Define el tipo de usuario según tu aplicación
    loading: boolean;
    error: null | any; // Opcionalmente define el tipo de error
    projectDetails: null | any; // Opcionalmente define el tipo de jwt
    searchProjects: [] | any;
  }
  
export const initialState: AuthState = {
   projects:[],
   loading:false,
   error:null,
   projectDetails:null,
   searchProjects:[]
  };

export const projectReducer = (state=initialState,action:any) => {
    switch (action.type) {

        case FETCH_PROJECTS_REQUEST:
        case CREATE_PROJECT_REQUEST:
        case DELETE_PROJECT_REQUEST:
        case FETCH_PROJECT_BY_ID_REQUEST:
        case ACCEPT_INVITATION_REQUEST:
        case INVITE_TO_PROJECT_REQUEST:
            return {
                ...state,
                loading: true,
                error:null
            }
        case FETCH_PROJECTS_SUCCESS:
            return {
                ...state,
                loading: false, 
                projects:action.payload,
                error: null,
            };
        case SEARCH_PROJECT_SUCCESS:
            return {
                ...state,
                loading: false, 
                searchProjects:action.payload,
                error: null,
            };  
        case CREATE_PROJECT_SUCCESS:
            return {
                ...state,
                loading: false, 
                projects:[...state.projects, action.project],
                error: null,
            }; 
        case FETCH_PROJECTS_BY_ID_SUCCESS:
            return {
                ...state,
                loading: false, 
                projectDetails:action.project,
                error: null,
            };     
        case DELETE_PROJECT_SUCCESS:
            return {
                ...state,
                loading: false, 
                projects:state.projects.filter
                    ( (project:any) => project.id === action.projectId
                ),
                error: null,
            };
                
        default:
            state;
    }
}