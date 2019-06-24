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
	ChipField,
	TextInput,
	DateInput,
	SelectInput,
	ShowButton,
	EditButton,
	DeleteButton
} from 'react-admin';

import RichTextInput from 'ra-input-rich-text';

const NewsFilter = props => (
	<Filter {...props}>
		<TextInput label="Search" source="title" alwaysOn />
	</Filter>
);

export const NewsCreate = props => (
	<Create {...props}>
		<SimpleForm>
			<TextInput source="title" placeholder="Título da notícia" />
			<DateInput source="date" />
			<TextInput source="newsLink" type="url" placeholder="Link da notícia" />
			<TextInput source="source" placeholder="Fonte da notícia" />
			<SelectInput
				label="Categoria"
				source="category"
				choices={[
					{ id: 'bim', name: 'BIM' },
					{ id: 'innovation', name: 'Inovação' },
					{ id: 'engineering', name: 'Engenharia' },
					{ id: 'tech', name: 'Tecnologia' }
				]}
			/>
			<RichTextInput
				source="body"
				placeholder="Descrição sobre o contéudo da notícia"
			/>
		</SimpleForm>
	</Create>
);

export const NewsShow = props => (
	<Show {...props}>
		<SimpleShowLayout>
			<TextField source="title" />
			<DateField source="date" />
			<UrlField source="newsLink" />
			<TextField source="source" />
			<ChipField source="category" />
			<TextField source="body" />
			<TextField source="createdate" />
			<TextField source="lastupdate" />
		</SimpleShowLayout>
	</Show>
);

export const NewsList = props => (
	<List {...props} filters={<NewsFilter />}>
		<Datagrid>
			<TextField source="title" />
			<DateField source="date" />
			<TextField source="source" />
			<ChipField source="category" />
			<ShowButton label="" />
			<EditButton label="" />
			<DeleteButton label="" redirect={false} />
		</Datagrid>
	</List>
);

export const NewsEdit = props => (
	<Edit {...props}>
		<SimpleForm>
			<DisabledInput source="id" />
			<TextInput source="title" placeholder="Título da notícia" />
			<DateInput source="date" />
			<TextInput source="newsLink" type="url" placeholder="Link da notícia" />
			<TextInput source="source" placeholder="Fonte da notícia" />
			<SelectInput
				label="Categoria"
				source="category"
				choices={[
					{ id: 'bim', name: 'BIM' },
					{ id: 'innovation', name: 'Inovação' },
					{ id: 'engineering', name: 'Engenharia' },
					{ id: 'tech', name: 'Tecnologia' }
				]}
			/>
			<RichTextInput
				source="body"
				resettable
				placeholder="Descrição sobre o contéudo da notícia"
			/>
		</SimpleForm>
	</Edit>
);
