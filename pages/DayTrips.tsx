import React from "react"
import {Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {NeighborhoodSelector} from "../src/components/buenos-aires/neighborhoods/NeighborhoodSelector";
import {DayTripSelector} from "../src/components/buenos-aires/day-trips/DayTripSelector";
import {Footer} from "../src/components/landing/Footer";
import {FirstTimeBA} from "../src/components/buenos-aires/FirstTimeBA";

const useStyles = makeStyles(theme => (
    {
        root: {

        },
        title: {
            padding: '3rem 0',
            backgroundColor: theme.palette.text.secondary,
            textAlign: "center"
        }
    }
));


interface DayTripsProps {

}

export const DayTrips: React.FC<DayTripsProps> = (props) => {
    const classes = useStyles();

    return (
        <Grid item container xs={12} className={classes.root}>
            <Grid item xs={12} className={classes.title}>
                <Typography variant={"h1"} color={"secondary"}>
                    Day Trips
                </Typography>
            </Grid>

            <Grid item container xs={12}>
                <DayTripSelector/>
            </Grid>

            <Grid item container xs={12}>
                <FirstTimeBA/>
            </Grid>

            <Grid item container xs={12}>
                <Footer/>
            </Grid>
        </Grid>
    )

}

export default DayTrips