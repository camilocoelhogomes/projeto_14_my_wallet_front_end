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

const RoutesConfig = () => {
	const history = useHistory();
	const { user, setUser } = useContext(UserContext);
	useEffect(() => {
		if (localStorage.getItem('myWallet')) {
			setUser(JSON.parse(localStorage.getItem('myWallet')));
			history.push('/contabil-data');
		}
	}, [])
	return (

		<Switch>
			<Route path='/' exact>
				<SignIn />
			</Route>
			<Route path='/sign-up' exact>
				<SignUp />
			</Route>
			<Route path='/contabil-data' exact>
				<Extrato />
			</Route>
		</Switch>
	)
}

export default RoutesConfig;