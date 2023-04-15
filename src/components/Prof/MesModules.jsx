import React, { Fragment, useState } from 'react';

import classes from './Prof.module.scss';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { Link } from 'react-router-dom';
const MesModules = () => {
	const data = [
		{ module: 'Développement applications OO' },
		{ module: 'Web 2' },
		{ module: 'Java' },
		{ module: 'Réseaux' },
		{ module: 'Développement applications OO' },
		{ module: 'Web 2' },
		{ module: 'Java' },
		{ module: 'Réseaux' },
		{ module: 'Développement applications OO' },
		{ module: 'Web 2' },
		{ module: 'Java' },
		{ module: 'Réseaux' },
		{ module: 'Développement applications OO' },
		{ module: 'Web 2' },
		{ module: 'Java' },
		{ module: 'Réseaux' },
	];

	const [n, setN] = useState(false);

	function showAll() {
		setN((d) => !d);
	}

	return (
		<Fragment>
			<h1>Mes Cours</h1>
			<div>
				<div className={classes.cours_container}>
					{data.slice(0, !n ? 6 : data.length).map((d, i) => (
						<div key={i}>
							<HiOutlineDocumentText />
							<h3>{d.module}</h3>
							<div className={classes.buttonContainer}>
								<Link to={`seances/${i}`}>
									<input
										type='button'
										defaultValue='Liste Seances'
										className={classes.btn__black}
									/>
								</Link>
								<Link to={`etudiants/${i}`}>
									<input
										type='button'
										defaultValue='Liste Etudiants'
										className={classes.btn__primary}
									/>
								</Link>
							</div>
						</div>
					))}
				</div>
				<div className={classes.btn_container}>
					<input
						type='button'
						defaultValue={`${n ? 'Show less' : 'Tout les cours'}`}
						onClick={showAll}
					/>
				</div>
			</div>
		</Fragment>
	);
};

export default MesModules;
