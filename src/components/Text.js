import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles(theme => ({
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1)
    }
}));

export const Text = props => {
    const classes = useStyles();

    return (
        <FormControl>
            <TextField
                id="outlined-number"
                label={props.in.label}
                value={props.in.value}
                onChange={props.in.onChange}
                type={props.in.type || 'text'}
                className={classes.textField}
                InputLabelProps={{
                    shrink: true
                }}
                margin="normal"
                variant={props.in.variant || 'standard'}
                inputRef={props.in.inputRef}
                helperText={props.in.helperText}
            />
        </FormControl>
    );
};
