import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'row',
		padding: '16px',
	},
	text: {
		textTransform: 'uppercase',
		fontWeight: 900,
		color: '#aaa',
		fontSize: '16px',
		marginTop: '8px',
		marginLeft: '8px',
	},
}));

export default function Ethereum() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<svg
				width="36"
				height="37"
				viewBox="0 0 36 37"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<circle
					cx="17.8309"
					cy="18.4917"
					r="15"
					transform="rotate(-12.199 17.8309 18.4917)"
					fill="#403D3A"
				/>
				<path
					d="M18.5 9.99951L18.5 16.5055L23.9989 18.9626L18.5 9.99951Z"
					fill="white"
					fill-opacity="0.602"
				/>
				<path
					d="M18.4996 9.99951L13 18.9626L18.4996 16.5055L18.4996 9.99951Z"
					fill="white"
				/>
				<path
					d="M18.5 23.1789L18.5 27.5996L24.0025 19.9868L18.5 23.1789Z"
					fill="white"
					fill-opacity="0.602"
				/>
				<path
					d="M18.4996 27.5996L18.4996 23.1782L13 19.9868L18.4996 27.5996Z"
					fill="white"
				/>
				<path
					d="M18.5 22.1553L23.9989 18.9625L18.5 16.5068L18.5 22.1553Z"
					fill="white"
					fill-opacity="0.2"
				/>
				<path
					d="M13 18.9625L18.4996 22.1553L18.4996 16.5068L13 18.9625Z"
					fill="white"
					fill-opacity="0.602"
				/>
			</svg>

			<Typography className={classes.text}>Ethereum</Typography>
		</div>
	);
}
