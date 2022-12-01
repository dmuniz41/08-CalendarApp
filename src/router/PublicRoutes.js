import React from "react";
import { Navigate, Outlet } from "react-router";

export const PublicRoutes = ({ isLoggedIn }) => {
	return !isLoggedIn ? <Outlet /> : <Navigate to='' />;
};
