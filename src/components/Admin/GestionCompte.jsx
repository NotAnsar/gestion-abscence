import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import classes from './Admin.module.scss';

const GestionCompte = () => {
	const { user } = useSelector((state) => state.auth);

	const [users, setusers] = useState([]);

	useEffect(() => {
		async function getusers() {
			try {
				const res = await fetch('../../json/users.json', {
					headers: {
						'Content-Type': 'application/json',
						Accept: 'application/json',
					},
				});

				const data = await res.json();

				setusers(data.filter((u) => u.id !== user.id));
			} catch (error) {
				setusers(null);
			}
		}
		getusers();
	}, []);

	return (
		<div className={classes.abscences}>
			<h1>Gestion des Comptes </h1>

			<div className={classes.title_container}>
				<div className={classes.pagination}>
					<span className={classes.disabeled}>Previous</span>
					<span>Next</span>
				</div>
				<div className={classes.sortBy}>
					<select
						defaultValue={''}
						// onChange={handleChange}
						className={classes.sort}
					>
						<option value=''>Role</option>
						<option value='name asc'>etudiant</option>
						<option value='name desc'>Prof</option>
						<option value='price asc'>admin</option>
					</select>
				</div>

				<div className={classes.add}>
					<Link to='add'>
						<input
							className={classes.btn__green}
							type='Submit'
							placeholder='Add new User'
							defaultValue='Add new User'
						/>
					</Link>
				</div>
			</div>

			<table className={classes.styled_table}>
				<thead>
					<tr>
						<th>Id</th>
						<th>Nom</th>
						<th>Prenom</th>
						<th>Email</th>
						<th>Role</th>
						<th>Update</th>
						<th>Delete</th>
					</tr>
				</thead>
				<tbody>
					{users.map((u) => (
						<tr key={u.id}>
							<td>{u.id}</td>
							<td>{u.nom}</td>
							<td>{u.prenom}</td>
							<td>{u.email}</td>
							<td>{u.role}</td>
							<td>
								<Link to={`update/${u.id}`}>
									<input
										type='Submit'
										placeholder='Update'
										defaultValue='Update'
									/>
								</Link>
							</td>
							<td>
								<Link to={`delete/${u.id}`}>
									<input
										className={classes.btn__red}
										type='Submit'
										placeholder='Delete'
										defaultValue='Delete'
									/>
								</Link>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default GestionCompte;
