import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';

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

export default function StepThree() {
    const classes = useStyles();

    const [info, setInfo] = React.useState({
        childName: '',
        guardianName: '',
        phoneNumber: ''
    });

    const handleChange = details => event => {
        setInfo({
            ...info,
            [details]: event.target.value
        });
    };

    return (
        <React.Fragment>
            <Typography
                variant="h5"
                gutterBottom
                className={classes.typography}
            >
                Additional Information
            </Typography>
            <Grid container className={classes.container}>
                <Grid item xs={6}>
                    <TextField
                        id="outlined-number"
                        label="First Name"
                        value={info.day}
                        onChange={handleChange('day')}
                        type="text"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true
                        }}
                        margin="normal"
                        // variant="outlined"
                        helperText="Child's name"
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        id="outlined-number"
                        label="Last Name"
                        value={info.year}
                        onChange={handleChange('year')}
                        type="text"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true
                        }}
                        margin="normal"
                        // variant="outlined"
                    />
                </Grid>
            </Grid>
            <Grid container className={classes.container}>
                <Grid item xs={6}>
                    <TextField
                        id="outlined-number"
                        label="First Name"
                        value={info.day}
                        onChange={handleChange('day')}
                        type="text"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true
                        }}
                        margin="normal"
                        // variant="outlined"
                        helperText="Guardian's name"
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        id="outlined-number"
                        label="Last Name"
                        value={info.year}
                        onChange={handleChange('year')}
                        type="text"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true
                        }}
                        margin="normal"
                        // variant="outlined"
                    />
                </Grid>
            </Grid>

            <Grid container className={classes.container}>
                <Grid item xs={6}>
                    <TextField
                        id="outlined-number"
                        label="Phone Number"
                        // fullWidth={true}
                        value={info.year}
                        onChange={handleChange('year')}
                        type="text"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true
                        }}
                        margin="normal"
                        // variant="outlined"
                        helperText="Contact Info"
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        id="outlined-number"
                        label="Email"
                        value={info.year}
                        onChange={handleChange('year')}
                        type="text"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true
                        }}
                        margin="normal"
                        // variant="outlined"
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
