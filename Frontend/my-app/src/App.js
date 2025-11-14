import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import "./App.css";
// import fetch from 'node-fetch';

function App() {
	const [user, setUser] = useState(null);

  

// async function run() {
//   const resp = await fetch(
//     `https://api.intercom.io/tickets`,
//     {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Intercom-Version': '2.10',
//         Authorization: 'Bearer <YOUR_TOKEN_HERE>'
//       },
//       body: JSON.stringify({
//         ticket_type_id: 135,
//         contacts: [
//           {
//             id: '654b84736abd01feb7c111a1'
//           }
//         ],
//         ticket_attributes: {
//           title: 'example',
//           description: 'there is a problem'
//         }
//       })
//     }
//   );

//   const data = await resp.json();
//   console.log(data);
// }






	const getUser = async () => {
		try {
			const url = 'https://google-o-auth-tau.vercel.app/auth/login/success';
			const { data } = await axios.get(url, { withCredentials: true });
			setUser(data.user._json);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getUser();
	}, []);

	return (
		<div className="container">
      
			<Routes>
				<Route
					exact
					path="/"
					element={user ? <Home user={user} /> : <Navigate to="/login" />}
				/>
				<Route
					exact
					path="/login"
					element={user ? <Navigate to="/" /> : <Login />}
				/>
				<Route
					path="/signup"
					element={user ? <Navigate to="/" /> : <Signup />}
				/>
			</Routes>
		</div>
	);
}

export default App;
