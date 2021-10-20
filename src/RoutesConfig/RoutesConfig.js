import React from "react";

import {
	BrowserRouter,
	Switch,
	Route,
} from "react-router-dom";

import Login from "../pages/login/Login";
import SignUp from "../pages/SignUp/SignUp";

const RoutesConfig = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/' exact>
					<Login />
				</Route>
				<Route path='/SignUp' exact>
					<SignUp />
				</Route>
			</Switch>
		</BrowserRouter>
	)
}

export default RoutesConfig;