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
				<Route path='/1' exact>
					<Login />
				</Route>
				<Route path='/SignUp' exact>
					<SignUp />
				</Route>
				<Route path='/' exact>
					<Extrato />
				</Route>
			</Switch>
		</BrowserRouter>
	)
}

export default RoutesConfig;