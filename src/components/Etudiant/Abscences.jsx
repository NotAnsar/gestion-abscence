import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './Etudiant.module.scss';
import url from '../../store/url';
import { useSelector } from 'react-redux';

const Abscences = () => {
	const [abscences, setAbscences] = useState([]);
	const { user } = useSelector((state) => state.auth);

	useEffect(() => {
		async function getAbscences() {
			try {
				// const res = await fetch('../../../json/abscences.json', {
				const res = await fetch(`${url}/absencesEtudiants`, {
					headers: {
						'Content-Type': 'application/json',
						Accept: 'application/json',
					},
				});

				const data = await res.json();

				setAbscences(data.filter((a) => a.etudiant.id === user.id));
			} catch (error) {
				console.log(error);
				setAbscences(null);
			}
		}

		getAbscences();
	}, []);
	return (
		<div className={classes.abscences}>
			<div className={classes.title_container}>
				<h1>Mes Abscences</h1>
				<div className={classes.pagination}>
					<p>sorted By Latest</p>
					<span className={classes.disabeled}>Previous</span>
					<span>Next</span>
				</div>
			</div>

			<table className={classes.styled_table}>
				<thead>
					<tr>
						<th>Module</th>
						<th>Date De Seance</th>
						<th>Heure debut</th>
						<th>Heure fin</th>
						<th>Status</th>

						<th>Justification</th>
					</tr>
				</thead>
				<tbody>
					{abscences.map((a) => (
						<tr key={a.id}>
							<td>{a.sceance.cours.name}</td>
							<td>{a.sceance.dateSceance}</td>
							<td>{a.sceance.dateDebut.split(' ')[1]}</td>
							<td>{a.sceance.dateFin.split(' ')[1]}</td>
							<td>{a.status}</td>
							<td>
								<Link to={`justification/${a.id}`}>
									<input
										type='Submit'
										placeholder='Ajouter Justification'
										defaultValue='Ajouter Justification'
									/>
								</Link>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			{/* <div className={classes.pagination}>
				<span>Previous</span>
				<span>Next</span>
			</div> */}
		</div>
	);
};

export default Abscences;
