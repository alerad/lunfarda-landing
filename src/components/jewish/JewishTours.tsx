import React from "react"
import {Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {TourList} from "../tours/TourList";

const useStyles = makeStyles(theme => (
    {
        root: {
            marginTop: '5rem',
            marginBottom: '5rem'
        },
        subTitle: {
            marginTop: '0.5rem'
        },
        sectionMargin: {
            marginTop: '2rem'
        }
    }
));


interface JewishToursProps {

}

export const JewishTours: React.FC<JewishToursProps> = (props) => {
    const classes = useStyles();

    return (
        <Grid item container xs={12} className={classes.root} justify={"center"}>
            <Grid item container xs={10}>
                <Grid item xs={12}>
                    <Typography variant={"h1"} style={{color:'black'}}>
                        Jewish tours
                    </Typography>
                </Grid>
                <Grid item xs={12} className={classes.subTitle}>
                    <Typography variant={"subtitle1"} style={{color:'black'}}>
                        IMPORTANT NOTE: To comply with our institutions’ security protocols, all passengers must present their original passports on the day of the tour.
                    </Typography>
                </Grid>

                <Grid item container xs={12} className={classes.sectionMargin}>
                    <TourList filters={["jewish heritage"]}/>
                </Grid>
            </Grid>
        </Grid>
    )

}

export default JewishTours