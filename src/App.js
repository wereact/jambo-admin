import React, { Component } from 'react';
import {
	CourseList,
	CourseShow,
	CourseCreate,
	CourseEdit
} from './components/Courses';
import { NewsList, NewsShow, NewsCreate, NewsEdit } from './components/News';
import Dashboard from './components/Dashboard';
import CoursesIcon from '@material-ui/icons/Share';
import NewsIcon from '@material-ui/icons/NotificationsActive';
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
	observe: ['courses', 'news']
};
const firebaseRealtime = FirebaseRealTimeSaga(dataProvider, options);

class App extends Component {
	render() {
		return (
			<Admin
				title="Jambo Admin"
				dashboard={Dashboard}
				customSagas={[firebaseRealtime]}
				dataProvider={dataProvider}
				authProvider={authProvider}
			>
				<Resource
					name="courses"
					create={CourseCreate}
					show={CourseShow}
					list={CourseList}
					edit={CourseEdit}
					options={{ label: 'Cursos' }}
					icon={CoursesIcon}
				/>

				<Resource
					name="news"
					create={NewsCreate}
					show={NewsShow}
					list={NewsList}
					edit={NewsEdit}
					options={{ label: 'Notícias' }}
					icon={NewsIcon}
				/>
			</Admin>
		);
	}
}

export default App;
