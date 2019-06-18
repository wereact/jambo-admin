import React, { Component } from 'react';
import { PostList, PostShow, PostCreate, PostEdit } from './components/posts';
import {
	CourseList,
	CourseShow,
	CourseCreate,
	CourseEdit
} from './components/courses';
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
	observe: ['posts', 'courses']
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
					create={PostCreate}
					show={PostShow}
					list={PostList}
					edit={PostEdit}
				/>

				<Resource
					name="courses"
					create={CourseCreate}
					show={CourseShow}
					list={CourseList}
					edit={CourseEdit}
				/>
			</Admin>
		);
	}
}

export default App;
