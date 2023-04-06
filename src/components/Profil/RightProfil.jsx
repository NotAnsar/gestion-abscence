import React, { Fragment } from 'react';

import { AiOutlineUser } from 'react-icons/ai';
import { HiOutlineDocumentText } from 'react-icons/hi';

import classes from './Profil.module.scss';

const RightProfil = ({ user }) => {
	return (
		<div>
			<div className={classes.right}>
				<div className={classes.title_container}>
					<AiOutlineUser /> <span>About</span>
				</div>
				<div className={classes.right_container}>
					<div>
						<span>Nom</span>
						<span>{user.nom}</span>
					</div>
					<div>
						<span>Prenom</span>
						<span>{user.prenom}</span>
					</div>
					<div>
						<span>Age</span>
						<span>{user.age}</span>
					</div>
					<div>
						<span>Email</span>
						<span>{user.email}</span>
					</div>
					<div>
						<span>Adresse</span>
						<span>{user.adresse}</span>
					</div>
					<div>
						<span>tel</span>
						<span>{user.tel}</span>
					</div>
				</div>
			</div>
			{
				<div className={`${classes.right} ${classes.right_bottom}`}>
					<div className={classes.title_container}>
						<HiOutlineDocumentText /> <span>Cours</span>
					</div>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
					optio error quos mollitia maiores autem rem numquam nam, debitis amet
					voluptatem fugiat iure molestiae, suscipit iste voluptates. Earum
					fugiat, perferendis quos ea libero quae inventore soluta! Maiores
					culpa nobis aliquam tempora vitae beatae repudiandae molestiae,
					accusantium optio ex, sed doloremque eaque itaque asperiores debitis
					aliquid. Nemo reprehenderit unde doloremque, porro maiores, alias
					rerum tempore corporis aliquid voluptatem voluptatum iure! Modi sunt
					nobis qui commodi dolorum nam dignissimos, quod error eveniet
					temporibus officia nisi libero suscipit voluptatem quia esse vitae
					laudantium consequuntur magnam excepturi in enim est aut! Accusantium,
					culpa a!
				</div>
			}
		</div>
	);
};

export default RightProfil;
