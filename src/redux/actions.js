import {
    UPDATE_TITLE_ACTION,
    UPDATE_DESCRIPTION_ACTION,
    ADD_NOTIFICATION_ACTION,
    ADD_COLOR_ACTION,
    IS_OPEN_ACTION,
    SET_DATE_ACTION,
    SET_VALUE_ACTION,
    SET_IS_DISABLE_ACTION,
    SET_IS_VISIBLE_ACTION,
    SET_CARDS_ACTION,
    ADD_TASK_ACTION,
    ID_TASK_ACTION,
    ANCHOR_TASK_ACTION
 } from "./actionTypes";

 export const anchor_task = (state) => {
    return {
        type: ANCHOR_TASK_ACTION,
        payload: state
    }
}

 export const Id_task = (id) => {
    return {
        type: ID_TASK_ACTION,
        payload: id
    }
}
export const addTask = (task) => {
    return {
        type: ADD_TASK_ACTION,
        payload: task
    }
}

export const updateTitle = (title) => {
    return {
        type: UPDATE_TITLE_ACTION,
        payload: title
    }
}

export const updateDescription = (description) => {
    return {
        type: UPDATE_DESCRIPTION_ACTION,
        payload: description
    }
}

export const addNotification = (notification) => {
    return {
        type: ADD_NOTIFICATION_ACTION,
        payload: notification
    }
}

export const addColor = (color) => {
    return {
        type: ADD_COLOR_ACTION,
        payload: color
    }
}

export const isClosed = (boolean) => {
    return {
        type: IS_OPEN_ACTION,
        payload: boolean
    }
}

export const setDate = (date) => {
    return {
        type: SET_DATE_ACTION,
        payload: date
    }
}

export const setValue = (value) => {
    return {
        type: SET_VALUE_ACTION,
        payload: value
    }
}

export const setIsDisable = (value) => {
    return {
        type: SET_IS_DISABLE_ACTION,
        payload: value
    }
}

export const setIsVisible = (value) => {
    return {
        type: SET_IS_VISIBLE_ACTION,
        payload: value
    }
}

export const setCards = (prevCards) => {
    return {
        type: SET_CARDS_ACTION,
        payload: prevCards
    }
}
