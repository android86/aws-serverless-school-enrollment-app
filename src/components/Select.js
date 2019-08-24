import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles(theme => ({
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1)
    }
}));

const months = [
    {
        value: 1,
        label: 'January'
    },
    {
        value: 2,
        label: 'Febuary'
    },
    {
        value: 3,
        label: 'March'
    },
    {
        value: 4,
        label: 'April'
    },
    {
        value: 5,
        label: 'May'
    },
    {
        value: 6,
        label: 'June'
    },
    {
        value: 7,
        label: 'July'
    },
    {
        value: 8,
        label: 'August'
    },
    {
        value: 9,
        label: 'September'
    },
    {
        value: 10,
        label: 'October'
    },
    {
        value: 11,
        label: 'November'
    },
    {
        value: 12,
        label: 'December'
    }
];

export const Select = props => {
    const classes = useStyles();

    return (
        <FormControl fullWidth>
            <TextField
                id="outlined-select-month"
                select
                label="Month"
                className={classes.textField}
                value={props.month}
                onChange={props.onChange}
                SelectProps={{
                    MenuProps: {
                        className: classes.menu
                    }
                }}
                margin="normal"
                variant="outlined"
                autoFocus
            >
                {months.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
        </FormControl>
    );
};
