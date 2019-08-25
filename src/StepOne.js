import React, { useRef, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import { connect } from 'react-redux';
import * as birthdayActions from './redux/actions/birth';

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

    const dayTextField = useRef(null);

    const [editing, setEditing] = useState(false);

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

        setEditing(true);
    };

    useEffect(() => {
        if (editing) {
            props.enterBirthDay(birth);

            if (currentField === 'day') {
                dayTextField.current.focus();
            }
        }
    }, [birth, currentField, editing, props]);

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
};

// tells redux what state is gonna be passed to this component via props;
let ms2p = state => {
    return {
        birthday: state.birthDay ? state.birthDay.birth : null
    };
};

let md2p = dispatch => {
    return {
        enterBirthDay: birthday =>
            dispatch(birthdayActions.enterBirthDay(birthday))
    };
};

export default connect(
    ms2p,
    md2p
)(StepOne);
