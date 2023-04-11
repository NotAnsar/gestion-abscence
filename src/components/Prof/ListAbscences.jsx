import React from 'react';
import classes from './Prof.module.scss';

const ListAbscences = () => {
	return (
		<div className={classes.abscences}>
			<h1>List des Abscences</h1>
			<div className={classes.title_container}>
				<div className={classes.sortBy}>
					Choisir Module
					<select
						defaultValue={''}
						// onChange={handleChange}
						className={classes.sort}
					>
						<option value=''>Module</option>
						<option value='name asc'>Developement Web</option>
						<option value='name desc'>Réseaux</option>
						<option value='price asc'>Uml</option>
					</select>
				</div>
				<div className={classes.pagination}>
					<span className={classes.disabeled}>Previous</span>
					<span>Next</span>
				</div>
			</div>

			<table className={classes.styled_table}>
				<thead>
					<tr>
						<th>Module</th>
						<th>Id Etudiant</th>
						<th>Nom Etudiant</th>

						<th>Date De Seance</th>
						<th>Heure debut</th>
						<th>Heure fin</th>
						<th>Status</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Developement Web</td>
						<td>4545</td>
						<td>Karrouach Ansar</td>
						<td>12 septembre</td>
						<td>10h:00</td>
						<td>12h:00</td>
						<td>Justifier</td>
					</tr>
					{/* {abscences.map((a) => (
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
					))} */}
				</tbody>
			</table>
			{/* <div className={classes.pagination}>
				<span>Previous</span>
				<span>Next</span>
			</div> */}
		</div>
	);
};

export default ListAbscences;
