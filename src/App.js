import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';
import 'typeface-roboto';

import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';

function Copyright() {
    const classes = useStyles();

    return (
        <Typography
            className={classes.footer}
            variant="body2"
            color="textSecondary"
            align="center"
        >
            {'Copyright © '}
            <Link color="inherit" href="https://neftalipapelleras.com/">
                n3rfd
            </Link>{' '}
            {new Date().getFullYear()}
            {'. Built with '}
            <Link color="inherit" href="https://material-ui.com/">
                Material-UI.
            </Link>
        </Typography>
    );
}

const useStyles = makeStyles(theme => ({
    appBar: {
        position: 'relative'
    },
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 300,
            marginLeft: 'auto',
            marginRight: 'auto'
        },
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        paddingBottom: '60px'
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3)
        }
    },
    stepper: {
        padding: theme.spacing(3, 0, 5)
    },
    buttons: {
        display: 'flex',
        justifyContent: 'center'
    },
    button: {
        margin: theme.spacing(1),
        marginTop: theme.spacing(5)
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        textAlign: 'center',
        marginBottom: theme.spacing(3)
    }
}));

const steps = ['Step One', 'Step Two', 'Step Three'];

function getStepContent(step, handlers) {
    switch (step) {
        case 0:
            return <StepOne in={handlers} />;
        case 1:
            return <StepTwo />;
        case 2:
            return <StepThree />;
        default:
            throw new Error('Unknown step');
    }
}

export default function App() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    let rsvn = {
        birthday: {
            month: '',
            day: '',
            year: ''
        },
        schedule: {},
        child: {},
        guardian: {},
        contact: {}
    };

    const [reservation, setReservation] = useState(rsvn);

    const onChange = field => event => {
        // where:
        // field.type = 'birthday'
        // field.label = 'month'

        const { value } = event.target;

        let rsvn = {
            ...reservation,
            [field.type]: { ...reservation[field.type], [field.label]: value }
        };

        setReservation(rsvn);
    };

    const pl = {
        onChange,
        reservation
    };

    return (
        <React.Fragment>
            <CssBaseline />

            <AppBar
                position="static"
                color="primary"
                className={classes.appBar}
            >
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Enrollment App
                    </Typography>
                </Toolbar>
            </AppBar>

            <main className={classes.layout}>
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    <Grid item>
                        {activeStep === steps.length ? (
                            <React.Fragment>
                                <Typography variant="h5" gutterBottom>
                                    Thank you for your reservation.
                                </Typography>
                                <Typography variant="subtitle1">
                                    Your reservation number is #2001539. We have
                                    emailed your reservation confirmation that
                                    you can present to the office upon payment.
                                </Typography>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                {getStepContent(activeStep, pl)}
                                <div className={classes.buttons}>
                                    {activeStep !== 0 && (
                                        <Button
                                            onClick={handleBack}
                                            className={classes.button}
                                        >
                                            Back
                                        </Button>
                                    )}
                                    <Button
                                        size="large"
                                        variant="contained"
                                        color="primary"
                                        onClick={handleNext}
                                        className={classes.button}
                                    >
                                        {activeStep === steps.length - 1
                                            ? 'Confirm'
                                            : 'Next'}
                                    </Button>
                                </div>
                            </React.Fragment>
                        )}
                    </Grid>
                </Grid>
            </main>
            <Copyright />
        </React.Fragment>
    );
}
