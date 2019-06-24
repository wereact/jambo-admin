import React from 'react';
import { Card, CardHeader } from '@material-ui/core/';
import { Title } from 'react-admin';

const Dashboard = () => (
	<Card>
		<Title title="Jambo Admin" />
		<CardHeader title="Bem vindo ao Jambo Admin" />
	</Card>
);

export default Dashboard;
