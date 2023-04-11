import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './Admin.module.scss';

const Module = () => {
	const [modules, setModules] = useState([]);

	function deleteModule(id) {
		console.log(id);
		console.log('deleted');
	}

	useEffect(() => {
		async function getmodules() {
			try {
				const res = await fetch('../../json/modules.json', {
					headers: {
						'Content-Type': 'application/json',
						Accept: 'application/json',
					},
				});

				const data = await res.json();

				setModules(data);
			} catch (error) {
				setModules(null);
			}
		}
		getmodules();
	}, []);
	return (
		<div className={classes.abscences}>
			<h1>Gestion des Modules </h1>

			<div className={classes.title_container}>
				<div className={classes.pagination}>
					<span className={classes.disabeled}>Previous</span>
					<span>Next</span>
				</div>

				<div className={classes.add}>
					<Link to='add'>
						<input
							className={classes.btn__green}
							type='Submit'
							placeholder='Add new Module'
							defaultValue='Add new Module'
						/>
					</Link>
				</div>
			</div>

			<table className={classes.styled_table}>
				<thead>
					<tr>
						<th>Id</th>
						<th>Nom du Module</th>
						<th>IdProf</th>
						<th>Nom de prof</th>
						<th>Update</th>
						<th>Delete</th>
					</tr>
				</thead>
				<tbody>
					{modules.map((m) => (
						<tr key={m.id}>
							<td>{m.id}</td>
							<td>{m.module}</td>
							<td>{m.idProf}</td>
							<td>{m.nomPro}</td>
							<td>
								<Link to={`update/${m.id}`}>
									<input
										type='Submit'
										placeholder='Update'
										defaultValue='Update'
									/>
								</Link>
							</td>
							<td onClick={() => deleteModule(m.id)}>
								<Link>
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

export default Module;
