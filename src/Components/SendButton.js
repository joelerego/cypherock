import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import ReceiveSteps from './ReceiveSteps';
import SendIcon from '@material-ui/icons/CallMade';
import { Typography } from '@material-ui/core';

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

export default function SendButton() {
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
				<SendIcon style={{ color: '#CAA276' }} />
				<Typography
					style={{
						color: '#CAA276',
						fontSize: '15px',
						fontWeight: 600,
						margin: '8px',
					}}
				>
					Send
				</Typography>
			</Button>
			<Dialog
				open={open}
				TransitionComponent={Transition}
				keepMounted
				onClose={handleClose}
				PaperProps={{
					style: {
						backgroundColor: '#000',
						color: '#FFF',
						boxShadow: 'none',
					},
				}}
			>
				<DialogTitle id="alert-dialog-slide-title">{'Receive'}</DialogTitle>
				<DialogContent>
					<ReceiveSteps />
				</DialogContent>
			</Dialog>
		</div>
	);
}
