import React, { Fragment } from 'react';

import classes from './Prof.module.scss';

import NavBar from '../NavBar/NavBar';

import PageNotFound from '../PageNotFound/PageNotFound';
import { Route, Routes } from 'react-router-dom';
import Profil from '../Profil/Profil';
import MesModules from './MesModules';
import ListAbscences from './ListAbscences';
import Seances from './Seances';
import ListEtudiants from './ListEtudiants';

const Prof = () => {
	return (
		<Fragment>
			<NavBar />

			<main className={`${classes.wrapper} ${classes.main}`}>
				<Routes>
					<Route path='profile' element={<Profil />} />
					<Route path='' element={<MesModules />} />

					<Route path='seances' element={<Seances />} />
					<Route path='seances/:id' element={<Seances />} />
					<Route path='etudiants/:id' element={<ListEtudiants />} />

					<Route path='list' element={<ListAbscences />} />

					{/* <Route path='modules' element={<Module />} /> */}
					{/* <Route path='abscences' element={<JustificationAbscences />} /> */}

					<Route path='*' element={<PageNotFound />} />
				</Routes>
			</main>
		</Fragment>
	);
};

export default Prof;
