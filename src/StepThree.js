import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import { Header } from './components/Header';
import { Text } from './components/Text';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    formControl: {
        margin: theme.spacing(1)
    },
    selectEmpty: {
        marginTop: theme.spacing(2)
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1)
        // width: '100%'
    },
    typography: {
        margin: theme.spacing(1),
        marginBottom: theme.spacing(4),
        textAlign: 'center'
    },
    container: {
        // marginBottom: theme.spacing(4)
    }
}));

const StepThree = props => {
    const classes = useStyles();

    let firstNameProps = {
        value: props.in.reservation.child.firstName,
        label: 'First Name',
        helperText: "Child's name",
        onChange: props.in.onChange({
            type: 'child',
            label: 'firstName'
        })
    };

    let lastNameProps = {
        value: props.in.reservation.child.lastName,
        label: 'Last Name',
        onChange: props.in.onChange({
            type: 'child',
            label: 'lastName'
        })
    };

    let gFirstNameProps = {
        value: props.in.reservation.guardian.firstName,
        label: 'First Name',
        helperText: "Guardian's name",
        onChange: props.in.onChange({
            type: 'guardian',
            label: 'firstName'
        })
    };

    let gLastNameProps = {
        value: props.in.reservation.guardian.lastName,
        label: 'Last Name',
        onChange: props.in.onChange({
            type: 'guardian',
            label: 'lastName'
        })
    };

    let phoneProps = {
        value: props.in.reservation.contact.phone,
        label: 'Phone Number',
        helperText: 'Contact Info',
        onChange: props.in.onChange({
            type: 'contact',
            label: 'phone'
        })
    };

    let emailProps = {
        value: props.in.reservation.contact.email,
        label: 'Email',
        onChange: props.in.onChange({
            type: 'contact',
            label: 'email'
        })
    };

    return (
        <React.Fragment>
            <Header text="Additional Information" />

            <Grid container className={classes.container}>
                <Grid item xs={6}>
                    <Text in={firstNameProps} />
                </Grid>
                <Grid item xs={6}>
                    <Text in={lastNameProps} />
                </Grid>
            </Grid>
            <Grid container className={classes.container}>
                <Grid item xs={6}>
                    <Text in={gFirstNameProps} />
                </Grid>
                <Grid item xs={6}>
                    <Text in={gLastNameProps} />
                </Grid>
            </Grid>
            <Grid container className={classes.container}>
                <Grid item xs={6}>
                    <Text in={phoneProps} />
                </Grid>
                <Grid item xs={6}>
                    <Text in={emailProps} />
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default StepThree;
