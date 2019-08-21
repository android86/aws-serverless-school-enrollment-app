import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';

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
    },
    group: {
        margin: theme.spacing(1, 0)
    }
}));

export default function StepTwo() {
    const classes = useStyles();

    const [value, setValue] = React.useState('female');

    function handleChange(event) {
        setValue(event.target.value);
    }

    return (
        <React.Fragment>
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
            >
                <Grid item xs={12}>
                    <Typography
                        variant="h5"
                        gutterBottom
                        className={classes.typography}
                    >
                        Select a schedule
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <FormControl
                        component="fieldset"
                        className={classes.formControl}
                    >
                        <RadioGroup
                            aria-label="gender"
                            name="gender1"
                            className={classes.group}
                            value={value}
                            onChange={handleChange}
                        >
                            <FormControlLabel
                                value="female"
                                control={<Radio color="primary" />}
                                label="8 AM - 10 AM"
                            />
                            <FormControlLabel
                                value="male"
                                control={<Radio color="primary" />}
                                label="1 PM - 3 PM"
                            />
                        </RadioGroup>
                    </FormControl>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
