import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

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

    const [birthday, setBirthday] = React.useState({
        month: '-',
        day: '',
        year: ''
    });

    const handleChange = date => event => {
        setBirthday({
            ...birthday,
            [date]: event.target.value
        });
    };

    return (
        <React.Fragment>
            <Typography
                variant="h5"
                gutterBottom
                className={classes.typography}
            >
                Enter your child's birthday
            </Typography>
            <Grid container className={classes.container}>
                <Grid item xs={5}>
                    <FormControl fullWidth>
                        <TextField
                            id="outlined-select-month"
                            select
                            label="Month"
                            className={classes.textField}
                            value={birthday.month}
                            onChange={handleChange('month')}
                            SelectProps={{
                                MenuProps: {
                                    className: classes.menu
                                }
                            }}
                            margin="normal"
                            variant="outlined"
                        >
                            {months.map(option => (
                                <MenuItem
                                    key={option.value}
                                    value={option.value}
                                >
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </FormControl>
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        id="outlined-number"
                        label="Day"
                        value={birthday.day}
                        onChange={handleChange('day')}
                        type="number"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true
                        }}
                        margin="normal"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        id="outlined-number"
                        label="Year"
                        value={birthday.year}
                        onChange={handleChange('year')}
                        type="number"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true
                        }}
                        margin="normal"
                        variant="outlined"
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
