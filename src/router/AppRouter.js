import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginScreen } from "../components/auth/LoginScreen";
import { CalendarScreen } from "../components/calendar/CalendarScreen";

export const AppRouter = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<CalendarScreen />} />
					<Route path='/*' element={<CalendarScreen />} />
					<Route path='/login' element={<LoginScreen />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};