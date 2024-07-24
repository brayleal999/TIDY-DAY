import api from "@/config/api"
import { ACCEPT_INVITATION_REQUEST, ACCEPT_INVITATION_SUCCESS, CREATE_PROJECT_REQUEST, CREATE_PROJECT_SUCCESS, DELETE_PROJECT_REQUEST, DELETE_PROJECT_SUCCESS, FETCH_PROJECT_BY_ID_REQUEST, FETCH_PROJECTS_BY_ID_SUCCESS, FETCH_PROJECTS_REQUEST, FETCH_PROJECTS_SUCCESS, INVITE_TO_PROJECT_REQUEST, INVITE_TO_PROJECT_SUCCESS, SEARCH_PROJECT_REQUEST, SEARCH_PROJECT_SUCCESS } from "./ActionTypes"


export const fecthProjects = ({category, tag}) => async(dispatch:any) => {
    dispatch({type: FETCH_PROJECTS_REQUEST})
    try {
        const {data} = await api.get("api/projects", {params:{category,tag}})
        console.log("all projects", data)
        dispatch({type: FETCH_PROJECTS_SUCCESS,projects: data})
    } catch (error) {
        console.log(error)
    }
}

export const searchProjects = (keyword:any) => async(dispatch:any) => {
    dispatch({type: SEARCH_PROJECT_REQUEST})
    try {
        const {data} = await api.get("api/projects/search?keyword=" + keyword)
        console.log("Search projects", data)
        dispatch({type: SEARCH_PROJECT_SUCCESS,projects: data})
    } catch (error) {
        console.log(error)
    }
}

export const createProject = (id:any) => async(dispatch:any) => {
    dispatch({type: FETCH_PROJECT_BY_ID_REQUEST})
    try {
        const {data} = await api.post("api/projects"+id)
        console.log(" project", data)
        dispatch({type: FETCH_PROJECTS_BY_ID_SUCCESS,projects: data})
    } catch (error) {
        console.log(error)
    }
}

export const fetchProjectById = (projectData:any) => async(dispatch:any) => {
    dispatch({type: CREATE_PROJECT_REQUEST})
    try {
        const {data} = await api.get("api/projects", projectData)
        console.log("projects", data)
        dispatch({type: CREATE_PROJECT_SUCCESS,projects: data})
    } catch (error) {
        console.log(error)
    }
}

export const deleteProject = (projectId:any) => async(dispatch:any) => {
    dispatch({type: DELETE_PROJECT_REQUEST})
    try {
        const {data} = await api.delete("api/projects" + projectId)
        console.log("delete projects", data)
        dispatch({type: DELETE_PROJECT_SUCCESS, projectId})
    } catch (error) {
        console.log(error)
    }
}

export const inviteToProject = ({email, projectId}) => async(dispatch:any) => {
    dispatch({type: INVITE_TO_PROJECT_REQUEST})
    try {
        const {data} = await api.post("api/projects/invite", {email: email, projectId: projectId})
        console.log("delete projects", data)
        dispatch({type: INVITE_TO_PROJECT_SUCCESS, payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const acceptInvitation = ({invitationToken, navigate}) => async(dispatch:any) => {
    dispatch({type: ACCEPT_INVITATION_REQUEST})
    try {
        const {data} = await api.get("api/projects/accept_invitation", {
            params: {
                token: invitationToken
            }    
        })
        navigate("/project" + data.projectId)

        console.log("Accept Invitation", data)
        dispatch({type: ACCEPT_INVITATION_SUCCESS, payload: data})
    } catch (error) {
        console.log(error)
    }
}