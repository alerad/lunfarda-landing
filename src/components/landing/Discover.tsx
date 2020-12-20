import React, {useState} from "react"
import {Typography, Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import { TourList } from "../tours/TourList";
import {TourFilters} from "../tours/TourFilters";

const useStyles = makeStyles(theme => (
    {
        grid: {
            marginTop: '1.5rem'
        },
        yourWay: {
            color: theme.palette.text.secondary,
            fontWeight: 500
        },
        discoverText: {
            color: theme.palette.neutralText.dark,
            fontWeight: 500
        },
        enjoyText: {
            color: theme.palette.neutralText.dark
        }
    }
));

export const Discover = () => {
    const classes = useStyles();

    const [filters, setFilters] = useState<string[]>(["highlights"]);


    return (
        <React.Fragment>
            <Grid item container xs={2}/>
            <Grid
                item
                container xs={8}
                className={classes.grid}
                justify="flex-start"
            >

                <Grid item xs={12}>
                    <Typography variant="h2" className={classes.discoverText} display="inline">
                        Discover BA, &nbsp;
                    </Typography>
                    <Typography variant="h2" className={classes.yourWay} display="inline">
                        your way.
                    </Typography>
                </Grid>

                <Grid item xs={12} style={{marginTop:"1rem"}}>
                    <Typography variant={"h3"} className={classes.enjoyText}>
                        Enjoy private tours and experiences with local guides and field experts.
                    </Typography>
                </Grid>

                <Grid item container xs={12} style={{marginTop:"1rem"}}>
                    <TourFilters filters={filtersList} onChange={setFilters} activeFilters={filters}/>
                    <TourList filters={filters}/>
                </Grid>

            </Grid>
        </React.Fragment>
    )
}

export default Discover

const filtersList = [
    "buenos aires",
    "jewish heritage",
    "day trips",
    "transfer",
    "walking tour"
]
