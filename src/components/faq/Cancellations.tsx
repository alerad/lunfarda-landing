import React from "react"
import {Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => (
    {
        root: {
            backgroundColor: theme.palette.text.primary,
            padding: '4rem 0'
        }
    }
));


interface CancellationsProps {

}

export const Cancellations: React.FC<CancellationsProps> = (props) => {
    const classes = useStyles();

    return (
        <Grid item container xs={12} className={classes.root} justify={"center"}>
            <Grid item container xs={10}>
                <Grid item container xs={12}>
                    <Grid item xs={12}>
                        <Typography variant={"h1"} style={{color:"black"}}>
                            Cancellation for tours and experiences
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant={"subtitle1"} style={{color:"black"}}>
                            <ul>
                                <li>Tours cancelled up to 1 week previous to the tour will be refunded 100% refund.</li>
                                <li>Cancellations 7-5 days before the tour: 80% refund.</li>
                                <li>Cancellations 4-3 days before the tour: 50% refund.</li>
                                <li>Cancellations 48 hours or less before the tour: 0% refund.</li>
                            </ul>
                        </Typography>
                    </Grid>
                </Grid>

                <Grid item container xs={12}>
                    <Grid item xs={12}>
                        <Typography variant={"h1"} style={{color:"black"}}>
                            Cancellation for itineraries
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant={"subtitle1"} style={{color:"black"}}>
                            <ul>
                                <li>If you booked an itinerary across multiple places in the country, our cancellation policy is as follows.</li>
                                <li>Cancellations up to 1 month before the first day: 100% refund.</li>
                                <li>Cancellations 14-30 days before the first day: 75% refund.</li>
                                <li>Cancellations 8-13 days before the first day: 25% refund.</li>
                                <li>Cancellations made 1 week or less before the first day: 0% refund.</li>
                            </ul>
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )

}

export default Cancellations