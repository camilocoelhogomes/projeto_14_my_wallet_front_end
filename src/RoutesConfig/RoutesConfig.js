import React, { useEffect, useContext } from "react";

import {
	Switch,
	Route,
	useHistory,
} from "react-router-dom";

import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import Extrato from "../pages/extrato/Extrato";
import UserContext from "../store/UserContext";
import AddTransaction from "../pages/addTransaction/AddTransaction";

const RoutesConfig = () => {
	const history = useHistory();

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