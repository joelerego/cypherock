import React from 'react';
import Grid from '@material-ui/core/Grid';
import MainTable from './MainTable';

export default function BasicTable() {
	return (
		<Grid container>
			<Grid item xs={12}>
				<MainTable />
			</Grid>
		</Grid>
	);
}
