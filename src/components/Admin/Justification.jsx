import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import classes from './Admin.module.scss';
import { Fragment } from 'react';

const Justification = () => {
	let { id } = useParams();
	const [abscence, setAbscence] = useState({
		id,
		module: '',
		date_Seance: '',
		heure_debut: '',
		nom_Etudiant: '',
		heure_fin: '',
		status: '',
		justification: '',
	});
	// console.log(abscence);

	function validerAbscence(a) {
		console.log(a);
	}

	useEffect(() => {
		async function getmodules() {
			try {
				const res = await fetch('../../../json/abscences.json', {
					headers: {
						'Content-Type': 'application/json',
						Accept: 'application/json',
					},
				});

				const data = await res.json();

				setAbscence(data.find((a) => a.id === +id));
			} catch (error) {
				setAbscence(null);
			}
		}
		getmodules();
	}, []);
	console.log(abscence);
	return (
		<Fragment>
			<h1>Validation D'abscence</h1>

			<div className={classes.validation_container}>
				<div className={classes.split2}>
					<div>
						<h3>Nom Etudiant </h3>
						<p>Ansar Karrouach</p>
					</div>
					<div>
						<h3>Nom De module </h3>
						<p>{abscence.module}</p>
					</div>
				</div>
				<div className={classes.split3}>
					<div>
						<h3>Date de Seance</h3>
						<p>{abscence.date_Seance}</p>
					</div>
					<div>
						<h3>Heure de Debut</h3>
						<p>{abscence.heure_debut}</p>
					</div>
					<div>
						<h3>Heure de Fin</h3>
						<p>{abscence.heure_fin}</p>
					</div>
				</div>
				<div>
					<h3>Justification</h3>
					<p>{abscence.justification}</p>
				</div>
				<div>
					<h3>Valider Abscences</h3>
					<div>
						<input
							className={classes.btn__green}
							type='button'
							onClick={() => validerAbscence(true)}
							placeholder='Update'
							// defaultValue='Valider'
							defaultValue='&#10003;'
						/>
						<input
							type='button'
							className={classes.btn__red}
							onClick={() => validerAbscence(false)}
							placeholder='Update'
							// defaultValue='Non Valider'
							defaultValue='&#10005;'
						/>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Justification;
