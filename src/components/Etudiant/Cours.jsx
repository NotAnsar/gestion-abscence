import React, { Fragment, useState } from 'react';

import classes from './Etudiant.module.scss';
import { HiOutlineDocumentText } from 'react-icons/hi';
const Cours = () => {
	const data = [
		{ prof: 'Hajar LAZAR', module: 'Développement applications OO' },
		{ prof: 'Z.Jarir', module: 'S6 -Programmation Web JEE' },
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
							<div>enseigné par</div>
							<p>{d.prof}</p>
						</div>
					))}
				</div>
				{data.length >= 5 && (
					<div className={classes.btn_container}>
						<input
							type='button'
							defaultValue={`${n ? 'Show less' : 'Tout les cours'}`}
							onClick={showAll}
						/>
					</div>
				)}
			</div>
		</Fragment>
	);
};

export default Cours;
