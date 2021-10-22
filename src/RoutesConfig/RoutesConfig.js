import React from "react";

import {
	BrowserRouter,
	Switch,
	Route,
} from "react-router-dom";

import Login from "../pages/login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Extrato from "../pages/extrato/Extrato";

const RoutesConfig = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/' exact>
					<Login />
				</Route>
				<Route path='/sign-up' exact>
					<SignUp />
				</Route>
				<Route path='/contabil-data' exact>
					<Extrato />
				</Route>
			</Switch>
		</BrowserRouter>
	)
}

export default RoutesConfig;