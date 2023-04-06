import React, { useEffect, useState } from 'react';

import classes from './Etudiant.module.scss';

import formClasses from '../Login/Form.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
const Justification = () => {
	let { id } = useParams();
	const navigate = useNavigate();

	const [abscences, setAbscences] = useState({
		date_Seance: '',
		heure_debut: '',
		heure_fin: '',
		id: NaN,
		module: '',
		status: '',
	});

	useEffect(() => {
		async function getAbscences() {
			try {
				const res = await fetch('../../../json/abscences.json', {
					headers: {
						'Content-Type': 'application/json',
						Accept: 'application/json',
					},
				});

				const data = await res.json();

				setAbscences(data.find((a) => a.id === +id));
			} catch (error) {
				setAbscences(null);
			}
		}
		getAbscences();
	}, []);

	if (abscences === null) {
		navigate('/etudiant');
	}
	return (
		<div className={classes.justification}>
			<h2>Ajouter Justification</h2>
			{/* <div className={classes.justification_container}>
				<div>
					<ul>
						<li>Module :</li>
						<li>Developement</li>
					</ul>
				</div>
				<div>
					<ul>
						<li>Prof de Module :</li>
						<li>Hajar Lazar</li>
					</ul>
				</div>

				<div>
					<ul>
						<li>Date Seance :</li>
						<li>Developement</li>
					</ul>
				</div>
				<div>
					<ul>
						<li>Heure Debut :</li>
						<li>16:00</li>
					</ul>
				</div>
				<div>
					<ul>
						<li>Heure Fin :</li>
						<li>16:00</li>
					</ul>
				</div>
			</div> */}
			<form
				id='checkoutForm'
				className={`${classes.justificationForm} ${formClasses.blueForm}`}
			>
				{/* <form id='checkoutForm' onSubmit={formHandler}> */}
				<div className={formClasses.splitForm}>
					<div>
						<label htmlFor='firstName'>Nom de Module </label>
						<input
							type='text'
							// onChange={handleChange}
							value={abscences.module}
							name='module'
							disabled
						/>
					</div>
					<div>
						<label htmlFor='lastName'>Prof de Module</label>
						<input
							type='text'
							// onChange={handleChange}
							value='Hazar Lazar'
							name='prof'
							disabled
						/>
					</div>
				</div>
				<div className={formClasses.splitFormBy3}>
					<div>
						<label htmlFor='email'>Date de Seance</label>
						<input
							type='text'
							// onChange={handleChange}
							value={abscences.date_Seance}
							name='email'
							disabled
						/>
					</div>
					<div>
						<label htmlFor='email'>Heure de Debut</label>
						<input
							type='text'
							// onChange={handleChange}
							value={abscences.heure_debut}
							name='email'
							disabled
						/>
					</div>
					<div>
						<label htmlFor='email'>Heure de Fin</label>
						<input
							type='text'
							// onChange={handleChange}
							value={abscences.heure_fin}
							name='email'
							disabled
						/>
					</div>
				</div>

				<div>
					<label htmlFor='email'>Justification</label>
					<textarea className={formClasses.textarea} name='justification' />
				</div>

				<div>
					<input type='Submit' defaultValue='Add' />
				</div>
			</form>
		</div>
	);
};

export default Justification;
