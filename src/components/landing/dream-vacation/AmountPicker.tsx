import React, {useState} from "react"
import {Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
// import personSvg from '../../../assets/landing/person-icon.svg'

const useStyles = makeStyles(theme => (
    {
        root: {},
        changeButton: {
            cursor: 'pointer'
        }
    }
));


interface AmountPickerProps {
    onAmountChanged: any
}

export const AmountPicker: React.FC<AmountPickerProps> = (props) => {
    const classes = useStyles();
    const [amountPicked, setAmountPicked] = useState(1)

    const lowerAmount = () => {
        if (amountPicked > 1) {
            setAmountPicked(amountPicked-1)
            props.onAmountChanged(amountPicked-1)
        }
    }

    const increaseAmount = () => {
        setAmountPicked(amountPicked+1)
        props.onAmountChanged(amountPicked+1)
    }


    return (
        <Grid item container xs={12} className={classes.root} justify={"center"} alignItems={"center"}>
            <Grid item xs={1} className={classes.changeButton} onClick={lowerAmount}>
                <Typography variant={"h2"} color={"secondary"}>
                    -
                </Typography>
            </Grid>
            <Grid item xs={1}>
                {/*<img src={personSvg} alt={"Tourist"}/>*/}

            </Grid>
            <Grid item xs={1} style={{paddingLeft: '.3rem'}}>
                <Typography variant={"h3"} color={"secondary"} display={"inline"}>
                    {amountPicked}
                </Typography>
            </Grid>
            <Grid item xs={1} className={classes.changeButton}>
                <Typography variant={"h2"} color={"secondary"} onClick={increaseAmount}>
                    +
                </Typography>
            </Grid>
        </Grid>
    )

}