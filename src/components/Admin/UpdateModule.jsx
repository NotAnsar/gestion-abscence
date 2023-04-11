import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import classes from './Admin.module.scss';
import formClasses from '../Login/Form.module.scss';

const UpdateModule = () => {
	let { id } = useParams();
	const [module, setModule] = useState({
		id: NaN,
		module: '',
		idProf: NaN,
		nomPro: '',
	});

	const [formModule, setFormModule] = useState({
		id,
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
				setModule(data.find((m) => m.id === +id) || null);
			} catch (error) {
				setModules(null);
			}
		}
		getModule();
	}, []);

	const handleChange = (e) => {
		let value = e.target.value;
		let name = e.target.name;

		setFormModule((prev) => ({ ...prev, [name]: value }));
	};

	const formHandler = (e) => {
		e.preventDefault();

		console.log(formModule);
	};

	return (
		<div className={classes.justification}>
			<h2>Modifier Module</h2>

			<form
				id='checkoutForm'
				className={`${classes.justificationForm} ${formClasses.blueForm}`}
				onSubmit={formHandler}
			>
				{!isNaN(module.id) && modules.length > 0 && (
					<div className={formClasses.splitForm}>
						<div>
							<label htmlFor='nom'>Nom Module </label>
							<input
								type='text'
								onChange={handleChange}
								defaultValue={module.module}
								name='module'
							/>
						</div>

						<div>
							<label htmlFor='categorie_id'>Prof</label>
							<select
								name='idProf'
								onChange={handleChange}
								className={formClasses.select}
								defaultValue={module.idProf}
							>
								{modules.map((a, y) => (
									<option key={y} value={a.idProf}>
										{a.nomPro}
									</option>
								))}
							</select>
						</div>
					</div>
				)}

				<div>
					<input type='Submit' defaultValue='Modifier Module' />
				</div>
			</form>
		</div>
	);
};

export default UpdateModule;
