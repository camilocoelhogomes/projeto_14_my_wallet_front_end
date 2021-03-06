import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import UserContext from './store/UserContext';
import GlobalStyle from "./assets/style/GlobalStyle";
import RoutesConfig from "./RoutesConfig/RoutesConfig";


function App() {
	const [user, setUser] = useState({
		name: '',
		email: '',
		password: '',
		passwordConfirm: '',
		token: '',
	});
	const [transactionType, setTransactionType] = useState(false);

	useEffect(() => {
		if (localStorage.getItem('myWallet')) {
			const localUser = JSON.parse(localStorage.getItem('myWallet'));
			setUser({
				...user,
				name: localUser.name,
				token: localUser.token
			});
		}
	}, [])

	return (
		<div className="App">
			<GlobalStyle />
			<UserContext.Provider value={{ user, setUser, transactionType, setTransactionType }} >
				<BrowserRouter>
					<RoutesConfig />
				</BrowserRouter>
			</UserContext.Provider>
		</div>
	);
}

export default App;
