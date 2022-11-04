import moment from "moment";
import { types } from "../types/types";

const initialstate = {
	events: [
		{
			title: "Cumnpleanos mio",
			start: moment().toDate(),
			end: moment().add(2, "hours").toDate(),
			bgcolor: "#fafafa",
			notes: "Comprar cake",
			user: {
				_id: "123",
				name: "Daniel",
			},
		},
	],
	activeEvent: null,
};

export const calendarReducer = (state = initialstate, action) => {
	switch (action.type) {
		case types.eventSetActive:
			return {
				...state,
				activeEvent: action.payload,
			};
		case types.eventAddNew:
			return {
				...state,
				events: [...state.events, action.payload],
			};
		default:
			return state;
	}
};
