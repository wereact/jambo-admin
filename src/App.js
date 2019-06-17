import React, { Component } from 'react';
import { PostList, PostShow, PostCreate, PostEdit } from './components/posts';
import { Admin, Resource } from 'react-admin';
import {
	FirebaseRealTimeSaga,
	FirebaseDataProvider,
	FirebaseAuthProvider
} from 'react-admin-firebase';

import { firebaseConfig as config } from './config/FIREBASE_CONFIG';

const authProvider = FirebaseAuthProvider(config);
const dataProvider = FirebaseDataProvider(config);
const options = {
	observe: ['posts']
};
const firebaseRealtime = FirebaseRealTimeSaga(dataProvider, options);

class App extends Component {
	render() {
		return (
			<Admin
				customSagas={[firebaseRealtime]}
				dataProvider={dataProvider}
				authProvider={authProvider}
			>
				<Resource
					name="posts"
					list={PostList}
					show={PostShow}
					create={PostCreate}
					edit={PostEdit}
				/>
			</Admin>
		);
	}
}

export default App;
