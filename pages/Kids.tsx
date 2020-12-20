import * as React from "react"
import {makeStyles} from "@material-ui/core/styles";
import loadable from "@loadable/component";

const Grid = loadable(() => import("@material-ui/core/Grid"))
const FunTours = loadable(() => import("../src/components/kids/FunTours"))
const FamilyFriendly = loadable(() => import("../src/components/kids/FamilyFriendly"))
const BsAsForKids = loadable(() => import("../src/components/kids/BsAsForKids"))
const KidTours = loadable(() => import("../src/components/kids/KidTours"))
const KidItineraries = loadable(() => import("../src/components/kids/KidItineraries"))
const Footer = loadable(() => import("../src/components/landing/Footer"))

const useStyles = makeStyles(theme => (
    {
        root: {},
    }
));


interface KidsProps {

}

export const Kids: React.FC<KidsProps> = (props) => {
    const classes = useStyles();

    return (
        <Grid item container xs={12} className={classes.root}>
            <Grid item container xs={12}>
                <FunTours/>
            </Grid>
            <Grid item container xs={12}>
                <FamilyFriendly/>
            </Grid>
            <Grid item container xs={12}>
                <BsAsForKids/>
            </Grid>
            <Grid item container xs={12}>
                <KidTours/>
            </Grid>
            <Grid item container xs={12}>
                <KidItineraries/>
            </Grid>
            <Grid item container xs={12}>
                <Footer/>
            </Grid>
        </Grid>
    )

}

export default Kids