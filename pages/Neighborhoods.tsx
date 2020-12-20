import * as React from "react"
import {Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {NeighborhoodSelector} from "../src/components/buenos-aires/neighborhoods/NeighborhoodSelector";
import {FirstTimeBA} from "../src/components/buenos-aires/FirstTimeBA";
import {Footer} from "../src/components/landing/Footer";

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


interface NeighborhoodsProps {

}

export const Neighborhoods: React.FC<NeighborhoodsProps> = (props) => {
    const classes = useStyles();

    return (
        <Grid item container xs={12} className={classes.root}>
            <Grid item xs={12} className={classes.title}>
                <Typography variant={"h1"} color={"secondary"}>
                    The Neighborhoods of Buenos Aires
                </Typography>
            </Grid>
            <Grid item container xs={12}>
                <NeighborhoodSelector/>
            </Grid>
            <Grid item container xs={12} >
                <FirstTimeBA/>
            </Grid>
            <Grid item container xs={12}>
                <Footer/>
            </Grid>
        </Grid>
    )

}

export default Neighborhoods

