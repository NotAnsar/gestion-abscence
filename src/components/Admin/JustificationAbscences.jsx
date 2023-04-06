import React from 'react';
import classes from './Admin.module.scss';
import { Link } from 'react-router-dom';

const JustificationAbscences = () => {
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
					<tr>
						<td>Réseaux</td>
						<td>Ansar karrouach</td>
						<td>27 octobre 2022</td>
						<td>14:00</td>
						<td>16:00</td>

						<td>
							<Link to='justification'>
								<input
									type='Submit'
									placeholder='Voir Justification'
									defaultValue='Voir Justification'
								/>
							</Link>
						</td>
					</tr>
					<tr>
						<td>Developement Web</td>
						<td>Ahmed Amine</td>
						<td>15 Janvier 2023</td>
						<td>10:00</td>
						<td>12:00</td>

						<td>
							<Link to='justification'>
								<input
									type='Submit'
									placeholder='Voir Justification'
									defaultValue='Voir Justification'
								/>
							</Link>
						</td>
					</tr>
					<tr>
						<td>Réseaux</td>
						<td>Mohameed Aldls</td>
						<td>27 octobre 2022</td>
						<td>14:00</td>
						<td>16:00</td>

						<td>
							<Link to='justification'>
								<input
									type='Submit'
									placeholder='Voir Justification'
									defaultValue='Voir Justification'
								/>
							</Link>
						</td>
					</tr>
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
