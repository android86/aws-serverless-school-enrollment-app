import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { Header } from './components/Header';

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

const StepTwo = props => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Header text="Select a schedule" />

            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
            >
                <Grid item xs={12}>
                    <FormControl
                        component="fieldset"
                        className={classes.formControl}
                    >
                        <RadioGroup
                            aria-label="gender"
                            name="gender1"
                            className={classes.group}
                            value={props.in.reservation.schedule.time}
                            onChange={props.in.onChange({
                                type: 'schedule',
                                label: 'time'
                            })}
                        >
                            <FormControlLabel
                                value="8 AM - 10 AM"
                                control={<Radio color="primary" />}
                                label="8 AM - 10 AM"
                            />
                            <FormControlLabel
                                value="1 PM - 3 PM"
                                control={<Radio color="primary" />}
                                label="1 PM - 3 PM"
                            />
                        </RadioGroup>
                    </FormControl>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default StepTwo;
