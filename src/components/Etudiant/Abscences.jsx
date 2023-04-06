import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './Etudiant.module.scss';

const Abscences = () => {
	const [abscences, setAbscences] = useState([]);

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
				console.log(data);

				setAbscences(data);
			} catch (error) {
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
							<td>{a.module}</td>
							<td>{a.date_Seance}</td>
							<td>{a.heure_debut}</td>
							<td>{a.heure_fin}</td>
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
