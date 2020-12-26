import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
  
const StyledTabs = withStyles({
    indicator: {
        display: 'flex',
        left: '0px',
        '& > span': {
            width: '100px',
            backgroundColor: '#daa107',
        },
    },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);
  
const StyledTab = withStyles((theme) => ({
    root: {
        textTransform: 'none',
        color: '#fff',
        '&:focus': {
            opacity: 1,
        },      
    },
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "80vh",
    width: "20vw",
    borderRadius: "0px 24px 24px 0px",
    background: "#111",
    marginRight: "80px",
  },
  button: {
      margin: "16px",
  }
}));

export default function MainPanel() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
        <Paper className={classes.paper}>
            <StyledTabs centered={false} variant="fullWidth" orientation="vertical" value={value} onChange={handleChange}>
                <StyledTab label="Portfolio" />
                <StyledTab label="Wallets" />
                <StyledTab label="Last Transactions" />
                <StyledTab label="Tutorials" />
                <StyledTab label="Settings" />
            </StyledTabs>
            <Button className={classes.button} variant="outlined" color="secondary">Make Beneficiary</Button>
        </Paper>
        </div>
  );
}