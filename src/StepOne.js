import React, { useRef, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

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

export default function StepOne() {
    const classes = useStyles();

    const dayTextField = useRef(null);

    const [birth, setBirth] = useState({
        month: '-',
        day: '',
        year: ''
    });

    const [currentField, setCurrentField] = useState('month');

    const onChange = date => event => {
        setBirth({
            ...birth,
            [date]: event.target.value
        });

        setCurrentField(currentField === 'month' ? 'day' : null);
    };

    useEffect(() => {
        if (currentField === 'day') {
            dayTextField.current.focus();
        }
    });

    let dayProps = {
        value: birth.day,
        label: 'Day',
        onChange: onChange('day'),
        inputRef: dayTextField
    };

    let yearProps = {
        value: birth.year,
        label: 'Year',
        onChange: onChange('year'),
        inputRef: null
    };

    return (
        <React.Fragment>
            <Header text="Enter your child's birthday" />

            <Grid container className={classes.container}>
                <Grid item xs={5}>
                    <Select month={birth.month} onChange={onChange('month')} />
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
}
