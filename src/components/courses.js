import React from 'react';

import {
	Datagrid,
	List,
	Show,
	Create,
	Edit,
	Filter,
	DisabledInput,
	SimpleShowLayout,
	SimpleForm,
	TextField,
	DateField,
	UrlField,
	ImageField,
	TextInput,
	DateInput,
	LongTextInput,
	ShowButton,
	EditButton,
	DeleteButton
} from 'react-admin';

const CourseFilter = props => (
	<Filter {...props}>
		<TextInput label="Search" source="name" alwaysOn />
	</Filter>
);

export const CourseCreate = props => (
	<Create {...props}>
		<SimpleForm>
			<TextInput source="name" placeholder="Nome do curso" />
			<LongTextInput
				source="description"
				resettable
				placeholder="Descrição do curso"
			/>
			<DateInput source="date" />
			<TextInput source="authorName" placeholder="Responsável pelo curso" />
			<TextInput
				source="externalLink"
				type="url"
				placeholder="Link do Eadbox"
			/>
			<TextInput
				source="youtubeLink"
				type="url"
				placeholder="Link do Youtube"
			/>
			<TextInput source="imageLink" type="url" placeholder="Link da imagem" />
		</SimpleForm>
	</Create>
);

export const CourseShow = props => (
	<Show {...props}>
		<SimpleShowLayout>
			{/* <TextField source="id" /> */}
			<TextField source="name" />
			<ImageField source="imageLink" title="Image" alt="Image" label="Image" />
			<TextField source="description" />
			<TextField source="authorName" />
			<DateField source="date" />
			<UrlField source="externalLink" />
			<UrlField source="youtubeLink" />
			<TextField source="createdate" />
			<TextField source="lastupdate" />
		</SimpleShowLayout>
	</Show>
);

export const CourseList = props => (
	<List {...props} filters={<CourseFilter />}>
		<Datagrid>
			<TextField source="name" />
			<TextField source="description" />
			<TextField source="authorName" />
			<DateField source="date" />
			<ShowButton label="" />
			<EditButton label="" />
			<DeleteButton label="" redirect={false} />
		</Datagrid>
	</List>
);

export const CourseEdit = props => (
	<Edit {...props}>
		<SimpleForm>
			<DisabledInput source="id" />
			<TextInput source="name" placeholder="Nome do curso" />
			<LongTextInput
				source="description"
				resettable
				placeholder="Descrição do curso"
			/>
			<DateInput source="date" />
			<TextInput source="authorName" placeholder="Responsável pelo curso" />
			<TextInput
				source="externalLink"
				type="url"
				placeholder="Link do Eadbox"
			/>
			<TextInput
				source="youtubeLink"
				type="url"
				placeholder="Link do Youtube"
			/>
			<TextInput source="imageLink" type="url" placeholder="Link da imagem" />
		</SimpleForm>
	</Edit>
);
