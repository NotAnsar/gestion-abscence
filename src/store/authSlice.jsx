import { createSlice } from '@reduxjs/toolkit';

export const Login = (email, password) => {
	return async (dispatch) => {
		async function Login() {
			try {
				// const res = await fetch(`${url}/login`, {
				// 	method: 'POST',
				// 	headers: {
				// 		Accept: 'application/json',
				// 		'Content-Type': 'application/json',
				// 	},
				// 	body: JSON.stringify({ password, email }),
				// });

				const res = await fetch('./../../json/users.json', {
					headers: {
						'Content-Type': 'application/json',
						Accept: 'application/json',
					},
				});

				const data = await res.json();

				console.log(data);
				const found = data.find(
					(a) => a.email === email && a.password === password
				);
				console.log(found);

				if (found === undefined) throw Error('Wrong username or password.');

				// const login = await res.json();
				// if (login.error) throw new Error(login.error);
				return { ...found, error: false, loggedIn: true };
			} catch (error) {
				return { error: true, loggedIn: false };
			}
		}
		dispatch(authSlice.actions.getLogin(await Login()));
	};
};

function getItem(item) {
	try {
		JSON.parse(localStorage.getItem(item));
	} catch (error) {
		localStorage.setItem(item, JSON.stringify(initialState));
	}
	if (localStorage.getItem(item)) return JSON.parse(localStorage.getItem(item));
	else {
		localStorage.setItem(item, JSON.stringify(null));
		return null;
	}
}

const initialState = getItem('user')
	? getItem('user')
	: {
			loggedIn: false,
			user: {
				id: null,
				nom: '',
				prenom: '',
				email: '',
				age: null,
				role: '',
				tel: '',
				description: '',
				adresse: '',
				filiere: '',
			},
			error: null,
	  };

export const authSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		getLogin: (state, action) => {
			// console.log(action.payload);
			if (!action.payload.error) {
				state.loggedIn = action.payload.loggedIn;
				state.error = action.payload.error;
				state.user.id = action.payload.id;
				state.user.nom = action.payload.nom;
				state.user.prenom = action.payload.prenom;
				state.user.email = action.payload.email;
				state.user.age = action.payload.age;
				state.user.role = action.payload.role;
				state.user.tel = action.payload.tel;
				state.user.adresse = action.payload.adresse;
				state.user.filiere = action.payload.filiere;
				state.user.description = action.payload.description;
				localStorage.setItem('user', JSON.stringify({ ...state }));
			} else {
				state.loggedIn = action.payload.loggedIn;
				state.error = action.payload.error;
			}
		},
		logout: (state) => {
			state.loggedIn = false;
			state.user = {
				id: null,
				nom: '',
				prenom: '',
				email: '',
				age: null,
				role: '',
				tel: '',
				description: '',
				adresse: '',
				filiere: '',
			};
			state.error = null;
			localStorage.clear();
		},
	},
});

// Action creators are generated for each case reducer function
export const { logout, getLogin } = authSlice.actions;

export default authSlice.reducer;
