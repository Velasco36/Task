import dayjs from "dayjs";

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

const initialState = {
    title: "",
    description: "",
    color: "#ffff",
    cards: [],
    notification: null,
    isOpen: false,
    date: null,
    value: dayjs("2022-04-17T15:30"),
    isDisable: true,
    isVisible: true,
    tasks: [],
    Id_task: "",
    anchor: "pending"
}

export const reducer = (state = initialState, { type, payload }) => {
    switch (type){

        case ANCHOR_TASK_ACTION:
            return {
                ...state,
                state: payload
            }

        case ID_TASK_ACTION:
            return {
                ...state,
                id: payload
            }

        case ADD_TASK_ACTION:
            return {
                ...state,
                tasks: [...state.tasks, payload]
            }

        case UPDATE_TITLE_ACTION:
            return {
                ...state,
                title: payload
            }

        case UPDATE_DESCRIPTION_ACTION:
            return {
                ...state,
                description: payload
            }

        case ADD_NOTIFICATION_ACTION:
            return {
                ...state,
                notification: payload
            }

        case ADD_COLOR_ACTION:
            return {
                ...state,
                color: payload

            }

        case IS_OPEN_ACTION:
            return {
                ...state,
                isOpen: payload
            }

        case SET_DATE_ACTION:
            return {
                ...state,
                date: payload
            }

        case SET_VALUE_ACTION:
            return {
                ...state,
                value: payload
            }

        case SET_IS_DISABLE_ACTION:
            return {
                ...state,
                isDisable: payload
            }

        case SET_IS_VISIBLE_ACTION:
            return {
                ...state,
                isVisible: payload
            }

        case SET_CARDS_ACTION:
            return {
                ...state,
                cards: payload
            }

        default:
            return {
              ...state
            };
    }
}
