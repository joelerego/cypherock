import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {
	createMuiTheme,
	makeStyles,
	ThemeProvider,
} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
}));

function MainAppBar() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<svg
						width="1200"
						height="100"
						viewBox="0 0 1000 20"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						{' '}
						<path
							d="M36.3084 8.98715C35.6034 8.22215 34.6434 7.87715 33.6084 7.87715C31.4484 7.87715 29.9784 9.43715 29.9784 11.5671C29.9784 13.7271 31.4334 15.2571 33.6084 15.2571C34.6284 15.2571 35.5884 14.9121 36.2634 14.1321L35.3934 13.3071C34.9584 13.9071 34.3734 14.1771 33.6084 14.1771C32.1834 14.1771 31.2384 13.0071 31.2384 11.5671C31.2384 10.1271 32.0334 8.95715 33.6084 8.95715C34.3134 8.95715 34.8834 9.21215 35.3784 9.81215L36.3084 8.98715ZM43.5898 8.05715H42.3148L40.2298 13.5621H40.1998L38.0248 8.05715H36.6598L39.5698 15.1221L39.0898 16.4421C38.8348 17.1321 38.5498 17.5971 37.7848 17.5971C37.4548 17.5971 37.1998 17.5671 36.9598 17.4771L36.8098 18.4971C37.1248 18.6471 37.5298 18.6771 37.8598 18.6771C39.2698 18.6771 39.7348 17.8671 40.1998 16.6821L43.5898 8.05715ZM51.1411 5.43215C50.3611 4.51715 49.3561 4.18715 48.1711 4.18715C46.3111 4.18715 44.5561 5.20715 44.5561 7.24715C44.5561 9.01715 45.6961 9.67715 47.1961 10.1721C49.0861 10.8021 49.9711 11.0271 49.9711 12.3321C49.9711 13.5471 48.7411 14.1771 47.6611 14.1771C46.7461 14.1771 45.8461 13.7721 45.3961 12.9921L44.3161 13.8771C45.0361 14.9421 46.3561 15.3471 47.5861 15.3471C49.5061 15.3471 51.3211 14.3571 51.3211 12.2421C51.3211 10.1571 49.7911 9.61715 48.1411 9.09215C46.4461 8.55215 45.9061 8.11715 45.9061 7.14215C45.9061 5.88215 47.0611 5.35715 48.1711 5.35715C48.9361 5.35715 49.6861 5.65715 50.1061 6.33215L51.1411 5.43215ZM59.1611 8.05715H57.8861L55.8011 13.5621H55.7711L53.5961 8.05715H52.2311L55.1411 15.1221L54.6611 16.4421C54.4061 17.1321 54.1211 17.5971 53.3561 17.5971C53.0261 17.5971 52.7711 17.5671 52.5311 17.4771L52.3811 18.4971C52.6961 18.6471 53.1011 18.6771 53.4311 18.6771C54.8411 18.6771 55.3061 17.8671 55.7711 16.6821L59.1611 8.05715ZM60.4274 15.0771H61.5974V11.6571C61.5974 10.0521 62.2574 8.95715 63.7724 8.95715C64.8674 8.95715 65.3774 9.69215 65.3774 10.8621V15.0771H66.5474V10.7421C66.5474 9.04715 65.7224 7.87715 63.8774 7.87715C62.7224 7.87715 61.8524 8.52215 61.5374 9.21215H61.5074C61.5074 8.82215 61.4774 8.43215 61.4774 8.05715H60.3674C60.3674 8.52215 60.4274 9.07715 60.4274 9.72215V15.0771ZM74.6873 8.98715C73.9823 8.22215 73.0223 7.87715 71.9873 7.87715C69.8273 7.87715 68.3573 9.43715 68.3573 11.5671C68.3573 13.7271 69.8123 15.2571 71.9873 15.2571C73.0073 15.2571 73.9673 14.9121 74.6423 14.1321L73.7723 13.3071C73.3373 13.9071 72.7523 14.1771 71.9873 14.1771C70.5623 14.1771 69.6173 13.0071 69.6173 11.5671C69.6173 10.1271 70.4123 8.95715 71.9873 8.95715C72.6923 8.95715 73.2623 9.21215 73.7573 9.81215L74.6873 8.98715Z"
							fill="white"
						/>{' '}
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M10.5398 2.62379L12.2369 0L18.9695 9.95925H12.4267L7.5141 2.70195L2.88059 9.30051L5.81701 9.32284L8.28449 5.82817L9.1442 7.13449L6.65439 10.6738H0L7.48061 0.0334947L13.2753 8.60828H16.2005L12.1811 2.73544L11.4107 3.91894L10.5398 2.62379Z"
							fill="white"
						/>{' '}
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M7.5141 20.298L12.4267 13.0407H18.9695L12.2369 23L10.5398 20.3762L11.4107 19.081L12.1811 20.2645L16.2005 14.3917H13.2753L7.48061 22.9665L0 12.3262H6.65439L9.1442 15.8655L8.28449 17.1718L5.81701 13.6771L2.88059 13.6995L7.5141 20.298Z"
							fill="white"
						/>
					</svg>
				</Toolbar>
			</AppBar>
		</div>
	);
}

const theme = createMuiTheme({
	palette: {
		palette: {
			type: 'dark',
		},
		primary: {
			main: '#0a1018',
		},
		secondary: {
			main: '#000000',
		},
	},
});

export default function CustomStyles() {
	return (
		<ThemeProvider theme={theme}>
			<MainAppBar />
		</ThemeProvider>
	);
}
