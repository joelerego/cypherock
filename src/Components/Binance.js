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

export default function Binance() {
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
					d="M15.1986 17.1434L18.5 13.842L21.8031 17.1451L23.7241 15.2241L18.5 10L13.2776 15.2224L15.1986 17.1434ZM10 18.5L11.921 16.579L13.842 18.5L11.921 20.421L10 18.5ZM15.1986 19.8566L18.5 23.158L21.8031 19.8549L23.7241 21.7751L18.5 27L13.2776 21.7776L13.275 21.7751L15.1986 19.8566ZM23.158 18.5L25.079 16.579L27 18.5L25.079 20.421L23.158 18.5ZM20.4482 18.4983L20.4499 18.4983L20.4499 18.5L18.5 20.4499L16.5526 18.5034L16.5493 18.5L16.5526 18.4974L16.8935 18.1558L17.0593 17.99L18.5 16.5501L20.449 18.4992L20.4482 18.4983Z"
					fill="#F3BA2F"
				/>
			</svg>
			<Typography className={classes.text}>Binance</Typography>
		</div>
	);
}
