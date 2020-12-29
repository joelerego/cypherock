import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import StepConnector from '@material-ui/core/StepConnector';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Arrow from '@material-ui/icons/ArrowForward';

const Connector = withStyles({
	alternativeLabel: {
		top: 12,
	},
	line: {
		height: 1,
		border: 0,
		backgroundColor: '#eaeaf0',
		borderRadius: 1,
	},
})(StepConnector);

const styles = (theme) => ({
	root: {
		width: '500px',
		background: '#161c23',
		padding: '24px',
		justifyContent: 'center',
		color: 'white',
	},
	button: {
		marginRight: theme.spacing.unit,
	},
	completed: {
		display: 'inline-block',
	},
	instructions: {
		marginTop: theme.spacing.unit,
		marginBottom: theme.spacing.unit,
	},
	icon: {
		color: '#C0996F !important',
	},
});

function getSteps() {
	return ['Device', 'Verification', 'Receive'];
}

const useStyles = makeStyles((theme) => ({
	paper: {
		display: 'flex',
		flexDirection: 'row',
		width: '100%',
		borderRadius: '24px',
		background: '#222',
		color: '#aaa',
		marginTop: '16px',
		marginBottom: '16px',
		positoin: 'relative',
	},
	text: {
		padding: '16px',
		paddingLeft: '0px',
		fontSize: '16px',
	},
	coinAddress: {
		padding: '16px',
		fontSize: '24px',
		color: '#E19A4C',
	},
	arrow: {
		color: '#C0996F',
		padding: '16px',
	},
	copy: {
		color: '#FFF',
		position: 'absolute',
		right: 48,
	},
}));

const Step1 = () => {
	const classes = useStyles();

	return (
		<div>
			<Typography> Follow the instructions on the device... </Typography>
			<Paper className={classes.paper}>
				<Arrow className={classes.arrow} />
				<Typography className={classes.text}>
					Select the Wallet on Device{' '}
				</Typography>
			</Paper>
			<Paper className={classes.paper}>
				<Arrow className={classes.arrow} />
				<Typography className={classes.text}>
					Select the Coin on Device{' '}
				</Typography>
			</Paper>
			<Paper className={classes.paper}>
				<Arrow className={classes.arrow} />
				<Typography className={classes.text}>
					Tap 1 card of any 4 cards{' '}
				</Typography>
			</Paper>
		</div>
	);
};

const Step2 = () => {
	const classes = useStyles();

	return (
		<div>
			<Paper className={classes.paper}>
				<Typography className={classes.coinAddress} align="center">
					25BKJNKNLJL58asdfdsafa123
				</Typography>
			</Paper>
			<Typography> Verify address on device... </Typography>
			<Paper className={classes.paper}>
				<Arrow className={classes.arrow} />
				<Typography className={classes.text}>
					Please match the address to be shown in X1 wallet{' '}
				</Typography>
			</Paper>
		</div>
	);
};

const Step3 = () => {
	const classes = useStyles();

	return (
		<div>
			<Paper className={classes.paper}>
				<Typography className={classes.coinAddress} align="center">
					25BKJNKNLJL58asdfdsafa123
				</Typography>
				<Button className={classes.copy}>
					<Typography className={classes.text}>Copy</Typography>
				</Button>
			</Paper>
		</div>
	);
};

function getStepContent(step) {
	switch (step) {
		case 0:
			return <Step1 />;
		case 1:
			return <Step2 />;
		case 2:
			return <Step3 />;
		default:
			return 'Unknown step';
	}
}

class HorizontalNonLinearStepper extends React.Component {
	state = {
		activeStep: 0,
		completed: {},
	};

	totalSteps = () => {
		return getSteps().length;
	};

	handleNext = () => {
		let activeStep;

		if (this.isLastStep() && !this.allStepsCompleted()) {
			// It's the last step, but not all steps have been completed,
			// find the first step that has been completed
			const steps = getSteps();
			activeStep = steps.findIndex((step, i) => !(i in this.state.completed));
		} else {
			activeStep = this.state.activeStep + 1;
		}
		this.setState({
			activeStep,
		});
	};

	handleBack = () => {
		const { activeStep } = this.state;
		this.setState({
			activeStep: activeStep - 1,
		});
	};

	handleStep = (step) => () => {
		this.setState({
			activeStep: step,
		});
	};

	handleComplete = () => {
		const { completed } = this.state;
		completed[this.state.activeStep] = true;
		this.setState({
			completed,
		});
		this.handleNext();
	};

	handleReset = () => {
		this.setState({
			activeStep: 0,
			completed: {},
		});
	};

	completedSteps() {
		return Object.keys(this.state.completed).length;
	}

	isLastStep() {
		return this.state.activeStep === this.totalSteps() - 1;
	}

	allStepsCompleted() {
		return this.completedSteps() === this.totalSteps();
	}

	render() {
		const { classes } = this.props;
		const steps = getSteps();
		const { activeStep } = this.state;

		return (
			<div className={classes.root}>
				<Typography variant="h5" align="center">
					Receive
				</Typography>
				<Stepper
					alternativeLabel
					activeStep={activeStep}
					style={{ background: '#161c23' }}
					connector={<Connector />}
				>
					{steps.map((label, index) => {
						return (
							<Step key={label}>
								<StepButton
									onClick={this.handleStep(index)}
									completed={this.state.completed[index]}
								>
									<StepLabel
										StepIconProps={{ classes: { root: classes.icon } }}
									>
										<Typography style={{ color: '#fff' }}>{label}</Typography>
									</StepLabel>
								</StepButton>
							</Step>
						);
					})}
				</Stepper>
				<div>
					{this.allStepsCompleted() ? (
						<div>
							<Typography className={classes.instructions}>
								All steps completed - you&quot;re finished
							</Typography>
							<Button onClick={this.handleReset}>Reset</Button>
						</div>
					) : (
						<div>
							<Typography className={classes.instructions}>
								{getStepContent(activeStep)}
							</Typography>
							<div>
								{activeStep !== steps.length &&
									(this.state.completed[this.state.activeStep] ? (
										<Typography variant="caption" className={classes.completed}>
											Step {activeStep + 1} already completed
										</Typography>
									) : (
										<Button
											style={{ color: '#161c23' }}
											onClick={this.handleComplete}
										>
											{this.completedSteps() === this.totalSteps() - 1
												? 'Finish'
												: 'Complete Step'}
										</Button>
									))}
							</div>
						</div>
					)}
				</div>
			</div>
		);
	}
}

HorizontalNonLinearStepper.propTypes = {
	classes: PropTypes.object,
};

export default withStyles(styles)(HorizontalNonLinearStepper);
