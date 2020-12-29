import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MainTable from './MainTable';

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`vertical-tabpanel-${index}`}
			aria-labelledby={`vertical-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box p={3}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};

function a11yProps(index) {
	return {
		id: `vertical-tab-${index}`,
		'aria-controls': `vertical-tabpanel-${index}`,
	};
}

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		backgroundColor: '#0a1018',
		display: 'flex',
	},
	tabs: {
		height: '1000px',
		margin: '24px 0 24px 0',
		borderRadius: '0px 24px 24px 0px',
		background: '#161c23',
		paddingTop: '48px',
	},
	indicator: {
		backgroundColor: '#C0996F',
		left: '0px',
		width: '4px',
	},
	tab: {
		display: 'flex',
		flexDirection: 'row',
		width: '240px',
		height: '48px',
		padding: '8px',
		marginLeft: '24px',
	},
	textDisabled: {
		textTransform: 'none',
		align: 'left',
		color: 'white',
		padding: '8px',
	},
	textEnabled: {
		textTransform: 'none',
		align: 'left',
		color: '#C0996F',
		padding: '8px',
	},
}));

export default function VerticalTabs() {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	// I could have used map here to render the tabs, but SVGs were a problem. I did find a fix though instead of rendering individual tabs one by one. I haven't used it because it was too messy.
	return (
		<div className={classes.root}>
			<Tabs
				orientation="vertical"
				variant="scrollable"
				fullWidth={true}
				value={value}
				onChange={handleChange}
				classes={{
					root: classes.tabs,
					indicator: classes.indicator,
				}}
			>
				<Tab
					label={
						<div className={classes.tab}>
							<svg
								width="42"
								height="42"
								viewBox="0 0 24 21"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<rect width="23.8" height="21" rx="3" fill="#1E2328" />
								<path
									d="M17 15H8.68539C7.75606 15 7 14.2903 7 13.418V6"
									stroke={value == 0 ? '#C0996F' : '#FFFFFF'}
									stroke-width="1.1"
								/>
								<path
									d="M11.2764 11.9287L16.6771 4.59953"
									stroke={value == 0 ? '#C0996F' : '#FFFFFF'}
									stroke-width="1.1"
								/>
							</svg>
							<Typography
								className={
									value == 0 ? classes.textEnabled : classes.textDisabled
								}
							>
								Portfolio
							</Typography>
						</div>
					}
					{...a11yProps(0)}
				/>
				<Tab
					label={
						<div className={classes.tab}>
							<svg
								width="42"
								height="42"
								viewBox="0 0 24 21"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<rect width="23.8" height="21" rx="3" fill="#1E2328" />
								<path
									d="M17.4186 16.6001H7.09302C5.93892 16.6001 5 15.6612 5 14.5071V6.69312C5 5.53902 5.93892 4.6001 7.09302 4.6001H17.4186C18.5727 4.6001 19.5116 5.53902 19.5116 6.69312V14.5071C19.5116 15.6612 18.5727 16.6001 17.4186 16.6001ZM18.6744 9.34427H15.6047C14.9122 9.34427 14.3488 9.90762 14.3488 10.6001C14.3488 11.2926 14.9122 11.8559 15.6047 11.8559H18.6744V9.34427ZM18.6744 12.6931H15.6047C14.4506 12.6931 13.5116 11.7542 13.5116 10.6001C13.5116 9.446 14.4506 8.50707 15.6047 8.50707H18.6744V6.69312C18.6744 6.00067 18.1111 5.43729 17.4186 5.43729H7.09302C6.40057 5.43729 5.8372 6.00064 5.8372 6.69312V14.5071C5.8372 15.1995 6.40054 15.7629 7.09302 15.7629H17.4186C18.1111 15.7629 18.6744 15.1996 18.6744 14.5071V12.6931Z"
									stroke={value == 1 ? '#C0996F' : '#FFFFFF'}
									stroke-width="0.4"
								/>
								<path
									d="M16.5763 11H16.0182C15.787 11 15.5996 10.8126 15.5996 10.5814C15.5996 10.3502 15.787 10.1628 16.0182 10.1628H16.5763C16.8075 10.1628 16.9949 10.3502 16.9949 10.5814C16.9949 10.8126 16.8075 11 16.5763 11Z"
									stroke={value == 1 ? '#C0996F' : '#FFFFFF'}
									stroke-width="0.4"
								/>
							</svg>
							<Typography
								className={
									value == 1 ? classes.textEnabled : classes.textDisabled
								}
							>
								Wallets
							</Typography>
						</div>
					}
					{...a11yProps(1)}
				/>
				<Tab
					label={
						<div className={classes.tab}>
							<svg
								width="42"
								height="42"
								viewBox="0 0 24 21"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<rect width="23.8" height="21" rx="3" fill="#1E2328" />
								<path
									d="M17.3536 14.3536C17.5488 14.1583 17.5488 13.8417 17.3536 13.6464L14.1716 10.4645C13.9763 10.2692 13.6597 10.2692 13.4645 10.4645C13.2692 10.6597 13.2692 10.9763 13.4645 11.1716L16.2929 14L13.4645 16.8284C13.2692 17.0237 13.2692 17.3403 13.4645 17.5355C13.6597 17.7308 13.9763 17.7308 14.1716 17.5355L17.3536 14.3536ZM7 14.5L17 14.5V13.5L7 13.5L7 14.5Z"
									stroke={value == 2 ? '#C0996F' : '#FFFFFF'}
									stroke-width="0.4"
								/>
								<path
									d="M6.64645 5.64645C6.45118 5.84171 6.45118 6.15829 6.64645 6.35355L9.82843 9.53553C10.0237 9.7308 10.3403 9.7308 10.5355 9.53553C10.7308 9.34027 10.7308 9.02369 10.5355 8.82843L7.70711 6L10.5355 3.17157C10.7308 2.97631 10.7308 2.65973 10.5355 2.46447C10.3403 2.2692 10.0237 2.2692 9.82843 2.46447L6.64645 5.64645ZM17 5.5L7 5.5L7 6.5L17 6.5L17 5.5Z"
									stroke={value == 2 ? '#C0996F' : '#FFFFFF'}
									stroke-width="0.4"
								/>
							</svg>
							<Typography
								className={
									value == 2 ? classes.textEnabled : classes.textDisabled
								}
							>
								{' '}
								Last Transactions
							</Typography>
						</div>
					}
					{...a11yProps(2)}
				/>
				<Tab
					label={
						<div className={classes.tab}>
							<svg
								width="42"
								height="42"
								viewBox="0 0 24 21"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<rect width="23.8" height="21" rx="3" fill="#1E2328" />
								<path
									d="M7.09302 16.45H17.4186C18.269 16.45 18.9616 15.7573 18.9616 14.907V7.09302C18.9616 6.24268 18.269 5.55 17.4186 5.55H7.09302C6.24268 5.55 5.55 6.24268 5.55 7.09302V14.907C5.55 15.7573 6.24268 16.45 7.09302 16.45Z"
									stroke={value == 3 ? '#C0996F' : '#FFFFFF'}
									stroke-width="0.8"
								/>
								<path
									d="M14 11L11 12.7321L11 9.26795L14 11Z"
									stroke={value == 3 ? '#C0996F' : '#FFFFFF'}
									stroke-width="0.8"
								/>
							</svg>
							<Typography
								className={
									value == 3 ? classes.textEnabled : classes.textDisabled
								}
							>
								Tutorials
							</Typography>
						</div>
					}
					{...a11yProps(3)}
				/>
				<Tab
					label={
						<div className={classes.tab}>
							<svg
								width="42"
								height="42"
								viewBox="0 0 24 21"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<rect width="23.8" height="21" rx="3" fill="#1E2328" />
								<path
									d="M18.164 12.6525L18.1706 12.6584C18.6494 13.0904 18.9236 13.6861 18.9402 14.3307L18.9402 14.3308C18.9568 14.9754 18.7137 15.5844 18.2577 16.0404L18.2577 16.0404C17.8166 16.4814 17.2316 16.7237 16.6095 16.7237C16.5917 16.7237 16.5738 16.7236 16.556 16.7232H16.5559C15.9143 16.7088 15.3196 16.4388 14.8864 15.9652L14.8863 15.9651L11.2768 12.0153L11.2767 12.0152L10.3055 10.9532C9.04988 11.2632 7.70296 10.8994 6.77545 9.97192L6.77545 9.97191C6.31529 9.51174 5.81399 8.99134 5.49615 8.41405C5.16863 7.8192 5.02144 7.13667 5.30922 6.38629L5.30925 6.38623C5.38404 6.1913 5.55238 6.04748 5.75659 6.00403L5.75676 6.004C5.96088 5.96066 6.17308 6.02341 6.32079 6.17104L6.32086 6.17111L7.93325 7.7835L9.73364 6.2569L8.13684 4.66007C8.13684 4.66007 8.13684 4.66007 8.13684 4.66007C7.98909 4.51232 7.92639 4.29999 7.96973 4.09595C8.01315 3.89152 8.15712 3.72322 8.35196 3.64846L8.35203 3.64843C9.78693 3.09813 11.0608 3.72093 12.0436 4.70374L18.164 12.6525ZM18.164 12.6525L18.1571 12.6468M18.164 12.6525L18.1571 12.6468M18.1571 12.6468L14.284 9.45377L13.008 8.30287M18.1571 12.6468L13.008 8.30287M13.008 8.30287C13.3505 7.02707 12.9933 5.65341 12.0436 4.70375L13.008 8.30287ZM9.83691 6.36017C9.83686 6.36012 9.83681 6.36007 9.83676 6.36002L9.8369 6.36017L9.83691 6.36017Z"
									stroke={value == 4 ? '#C0996F' : '#FFFFFF'}
									stroke-width="0.8"
								/>
							</svg>

							<Typography
								className={
									value == 4 ? classes.textEnabled : classes.textDisabled
								}
							>
								Settings
							</Typography>
						</div>
					}
					{...a11yProps(4)}
				/>
			</Tabs>
			<TabPanel value={value} index={0}>
				<Typography className={classes.textEnabled}>Portfolio</Typography>
			</TabPanel>
			<TabPanel value={value} index={1}>
				<MainTable />
			</TabPanel>
			<TabPanel value={value} index={2}>
				<Typography className={classes.textEnabled}>
					Last Transactions
				</Typography>
			</TabPanel>
			<TabPanel value={value} index={3}>
				<Typography className={classes.textEnabled}>Tutorials</Typography>
			</TabPanel>
			<TabPanel value={value} index={4}>
				<Typography className={classes.textEnabled}>Settings</Typography>
			</TabPanel>
		</div>
	);
}
