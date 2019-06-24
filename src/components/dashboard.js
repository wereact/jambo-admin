import React, { Fragment } from 'react';
import { Card, CardHeader } from '@material-ui/core/';
import { Title } from 'react-admin';

const Dashboard = () => (
	<Fragment>
		<Card>
			<Title title="Jambo Admin" />
			<CardHeader title="Bem vindo ao Jambo Admin" />
			<div>
				<img
					src="https://firebasestorage.googleapis.com/v0/b/jambo-tech-4fd1e.appspot.com/o/jambo-assets%2Fjambo-tech.jpg?alt=media&token=6b9250af-2b98-45a2-9b4f-c8ba7a206587"
					alt="Jambo Logo"
					height="300"
					width="300"
				/>
			</div>
		</Card>
		<br />
		<Card>
			<CardHeader title="Jambo Stats" />
		</Card>
	</Fragment>
);

export default Dashboard;
