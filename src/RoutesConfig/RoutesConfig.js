import React from "react";

import {
	Switch,
	Route,
} from "react-router-dom";

import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import Extrato from "../pages/extrato/Extrato";

import AddTransaction from "../pages/addTransaction/AddTransaction";

const RoutesConfig = () => {

	return (

		<Switch>
			<Route path='/sign-in' exact>
				<SignIn />
			</Route>
			<Route path='/sign-up' exact>
				<SignUp />
			</Route>
			<Route path='/' exact>
				<Extrato />
			</Route>
			<Route path='/add-transaction' exact>
				<AddTransaction />
			</Route>
		</Switch>
	)
}

export default RoutesConfig;