import React, { useRef, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import PropTypes from 'prop-types';

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

    const [day, setDay] = useState(props.day);
    const [month, setMonth] = useState(props.month);
    const [year, setYear] = useState(props.year);

    const [currentField, setCurrentField] = useState('month');

    const onDayChange = () => event => {
        const { value } = event.target;
        setDay(value);
        props.addDay(value);
    };
    const onMonthChange = () => event => {
        const { value } = event.target;
        setMonth(value);
        props.addMonth(value);
    };
    const onYearChange = () => event => {
        const { value } = event.target;
        setYear(value);
        props.addYear(value);
    };

    let dayProps = {
        value: day,
        label: 'Day',
        onChange: onDayChange(),
        inputRef: dayTextField
    };

    let yearProps = {
        value: year,
        label: 'Year',
        onChange: onYearChange(),
        inputRef: null
    };

    return (
        <React.Fragment>
            <Header text="Enter your child's birthday" />

            <Grid container className={classes.container}>
                <Grid item xs={5}>
                    <Select month={month} onChange={onMonthChange()} />
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

// StepOne.propTypes = {
//     birthday: PropTypes.object.isRequired
// };

let ms2p = state => {
    let ret = {
        day: state.birthday.hasOwnProperty('day') ? state.birthday.day : '',
        month: state.birthday.hasOwnProperty('month') ? state.birthday.month : '',
        year: state.birthday.hasOwnProperty('year') ? state.birthday.year : ''
    }

    return ret;
};

let md2p = dispatch => {
    return {
        addDay: day => dispatch(birthdayActions.addBirthDay(day)),
        addMonth: month => dispatch(birthdayActions.addBirthMonth(month)),
        addYear: year => dispatch(birthdayActions.addBirthYear(year))
    };
};

export default connect(
    ms2p,
    md2p
)(StepOne);
