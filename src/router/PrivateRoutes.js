import React from "react";
import { Navigate, Outlet } from "react-router";

export const PrivateRoutes = ({ isLoggedIn }) => {
	return !isLoggedIn ? <Navigate to='/login' /> : <Outlet />;
	
};
