import React from 'react';
import classes from './Admin.module.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

const JustificationAbscences = () => {
	const [abscences, setAbscences] = useState([]);

	console.log(abscences);

	useEffect(() => {
		async function getmodules() {
			try {
				const res = await fetch('../../json/abscences.json', {
					headers: {
						'Content-Type': 'application/json',
						Accept: 'application/json',
					},
				});

				const data = await res.json();

				setAbscences(data);
			} catch (error) {
				setAbscences(null);
			}
		}
		getmodules();
	}, []);
	return (
		<div className={classes.abscences}>
			<div className={classes.title_container}>
				<h1>Liste des Abscences</h1>
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
						<th>Nom Etudiant</th>
						<th>Date De Seance</th>
						<th>Heure debut</th>
						<th>Heure fin</th>

						<th>Justification</th>
					</tr>
				</thead>
				<tbody>
					{abscences.map((a) => (
						<tr key={a.id}>
							<td>{a.module}</td>
							<td>{a.module}</td>
							<td>{a.date_Seance}</td>
							<td>{a.heure_debut}</td>
							<td>{a.heure_fin}</td>

							<td>
								<Link to={`justification/${a.id}`}>
									<input
										type='Submit'
										placeholder='Voir Justification'
										defaultValue='Voir Justification'
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

export default JustificationAbscences;
