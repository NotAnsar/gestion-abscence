import React from 'react';
import classes from './Admin.module.scss';

import formClasses from '../Login/Form.module.scss';

const AddUser = () => {
	return (
		<div className={classes.justification}>
			<h2>Ajouter Utilisateur</h2>

			<form
				id='newUser'
				className={`${classes.justificationForm} ${formClasses.greenForm}`}
			>
				{/* <form id='checkoutForm' onSubmit={formHandler}> */}
				<div className={formClasses.splitForm}>
					<div>
						<label htmlFor='firstName'>Nom de Module </label>
						<input
							type='text'
							// onChange={handleChange}
							value='Developement Web'
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
							value='12 janvier 2023'
							name='email'
							disabled
						/>
					</div>
					<div>
						<label htmlFor='email'>Heure de Debut</label>
						<input
							type='text'
							// onChange={handleChange}
							value='9:00'
							name='email'
							disabled
						/>
					</div>
					<div>
						<label htmlFor='email'>Heure de Fin</label>
						<input
							type='text'
							// onChange={handleChange}
							value='11:00'
							name='email'
							disabled
						/>
					</div>
				</div>

				<div>
					<label htmlFor='email'>Justification</label>
					<textarea
						className={formClasses.textarea}
						// defaultValue={data.description}
						// onChange={handleChange}
						name='justification'
					/>
				</div>

				<div>
					<input type='Submit' defaultValue='Add' />
				</div>
			</form>
		</div>
	);
};

export default AddUser;
