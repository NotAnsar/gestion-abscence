import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './Admin.module.scss';

const Module = () => {
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
					<tr>
						<td>1</td>
						<td>Programmation Web 2.0</td>
						<td>5</td>
						<td>H.Lazar</td>
						<td>
							<Link to={`update/`}>
								<input
									type='Submit'
									placeholder='Update'
									defaultValue='Update'
								/>
							</Link>
						</td>
						<td>
							<Link to={`delete/`}>
								<input
									className={classes.btn__red}
									type='Submit'
									placeholder='Delete'
									defaultValue='Delete'
								/>
							</Link>
						</td>
					</tr>
					<tr>
						<td>2</td>
						<td>Programmation Web JEE</td>
						<td>4</td>
						<td>Z.Jarir</td>
						<td>
							<Link to={`update/`}>
								<input
									type='Submit'
									placeholder='Update'
									defaultValue='Update'
								/>
							</Link>
						</td>
						<td>
							<Link to={`delete/`}>
								<input
									className={classes.btn__red}
									type='Submit'
									placeholder='Delete'
									defaultValue='Delete'
								/>
							</Link>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default Module;
