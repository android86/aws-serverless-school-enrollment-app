import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import { Header } from './components/Header';
import { Select } from './components/Select';
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
    },
    typography: {
        margin: theme.spacing(1),
        marginBottom: theme.spacing(4),
        textAlign: 'center'
    },
    container: {
        marginBottom: theme.spacing(4)
    }
}));

const StepOne = props => {
    const classes = useStyles();

    let dayProps = {
        value: props.in.reservation.birthday.day,
        label: 'Day',
        variant: 'outlined',
        type: 'number',
        onChange: props.in.onChange({
            type: 'birthday',
            label: 'day'
        })
    };

    let yearProps = {
        value: props.in.reservation.birthday.year,
        label: 'Year',
        variant: 'outlined',
        type: 'number',
        onChange: props.in.onChange({
            type: 'birthday',
            label: 'year'
        })
    };

    return (
        <React.Fragment>
            <Header text="Enter your child's birthday" />

            <Grid container className={classes.container}>
                <Grid item xs={5}>
                    <Select
                        month={props.in.reservation.birthday.month}
                        onChange={props.in.onChange({
                            type: 'birthday',
                            label: 'month'
                        })}
                    />
                </Grid>
                <Grid item xs={3}>
                    <Text in={dayProps} />
                </Grid>
                <Grid item xs={4}>
                    <Text in={yearProps} />
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default StepOne;
