import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import ReceiveSteps from './ReceiveSteps';
import ReceivedIcon from '@material-ui/icons/CallReceived';
import { Typography } from '@material-ui/core';

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

export default function Receive() {
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<Button onClick={handleClickOpen}>
				<ReceivedIcon style={{ color: '#8484F1' }} />
				<Typography
					style={{
						color: '#8484F1',
						fontSize: '15px',
						fontWeight: 600,
						margin: '8px',
					}}
				>
					Receive
				</Typography>
			</Button>
			<Dialog
				open={open}
				TransitionComponent={Transition}
				keepMounted
				onClose={handleClose}
				PaperProps={{
					style: {
						backgroundColor: '#161c23',
						boxShadow: 'none',
					},
				}}
			>
				<DialogContent>
					<ReceiveSteps />
				</DialogContent>
			</Dialog>
		</div>
	);
}
