import React, { useEffect, useState } from 'react';

import classes from './Admin.module.scss';
import formClasses from '../Login/Form.module.scss';

const AddModule = () => {
	const [formData, setFormData] = useState({
		module: '',
		idProf: NaN,
	});

	const [modules, setModules] = useState([]);

	useEffect(() => {
		async function getModule() {
			try {
				const res = await fetch('../../../json/modules.json', {
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
		getModule();
	}, []);

	const formHandler = (e) => {
		e.preventDefault();

		console.log(formData);
	};
	const handleChange = (e) => {
		let value = e.target.value;
		let name = e.target.name;

		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	return (
		<div className={classes.justification}>
			<h2>Modifier Module</h2>

			<form
				id='checkoutForm'
				className={`${classes.justificationForm} ${formClasses.greenForm}`}
				onSubmit={formHandler}
			>
				<div className={formClasses.splitForm}>
					<div>
						<label htmlFor='module'>Nom Module </label>
						<input onChange={handleChange} type='text' name='module' />
					</div>

					<div>
						<label htmlFor='categorie_id'>Prof</label>
						<select
							name='idProf'
							onChange={handleChange}
							className={formClasses.select}
						>
							{modules.map((a, y) => (
								<option key={y} value={a.idProf}>
									{a.nomPro}
								</option>
							))}
						</select>
					</div>
				</div>

				<div>
					<input type='Submit' defaultValue='Modifier Module' />
				</div>
			</form>
		</div>
	);
};

export default AddModule;
