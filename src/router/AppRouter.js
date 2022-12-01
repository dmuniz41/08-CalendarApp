import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { startChecking } from "../actions/auth";
import { LoginScreen } from "../components/auth/LoginScreen";
import { CalendarScreen } from "../components/calendar/CalendarScreen";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";

export const AppRouter = () => {

	const dispatch = useDispatch();
	const {checking, uid} = useSelector( state => state.auth );

	useEffect(() => {

		dispatch(startChecking())

	}, [dispatch])

	if(checking){
		return (<h5>Loading...</h5>)
	}
	

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route element={<PrivateRoutes isLoggedIn={!!uid}/>}>
						<Route path='/' element={<CalendarScreen />} />
					</Route>
					<Route element={< PublicRoutes isLoggedIn={!!uid}/>}>
						<Route path='/login' element={<LoginScreen />} />
					</Route>

					<Route path='/*' element={<CalendarScreen />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};
