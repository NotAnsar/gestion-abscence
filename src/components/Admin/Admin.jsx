import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';

import classes from './Admin.module.scss';

import NavBar from '../NavBar/NavBar';
import PageNotFound from '../PageNotFound/PageNotFound';
import Profil from '../Profil/Profil';
import GestionCompte from './GestionCompte';
import Module from './Module';
import JustificationAbscences from './JustificationAbscences';
import UpdateUser from './UpdateUser';
import AddUser from './AddUser';
import UpdateModule from './UpdateModule';
import AddModule from './AddModule';
import Justification from './Justification';

const Admin = () => {
	return (
		<Fragment>
			<NavBar />

			<main className={`${classes.wrapper} ${classes.main}`}>
				<Routes>
					<Route path='' element={<GestionCompte />} />
					<Route path='update/:id' element={<UpdateUser />} />
					<Route path='add' element={<AddUser />} />

					<Route path='modules' element={<Module />} />
					<Route path='modules/update/:id' element={<UpdateModule />} />
					<Route path='modules/add' element={<AddModule />} />

					<Route path='abscences' element={<JustificationAbscences />} />
					<Route
						path='abscences/justification/:id'
						element={<Justification />}
					/>

					<Route path='profile' element={<Profil />} />

					<Route path='*' element={<PageNotFound />} />
				</Routes>
			</main>
		</Fragment>
	);
};

export default Admin;
