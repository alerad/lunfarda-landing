import React from "react"
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {LeftImagePanel, RightImagePanel} from "../neighborhoods/CityCenter";

const useStyles = makeStyles(theme => (
    {
        root: {}
    }
));


interface GauchosProps {

}

export const Gauchos: React.FC<GauchosProps> = (props) => {
    const classes = useStyles();

    return (
        <Grid item container xs={12} className={classes.root}>
            <LeftImagePanel image={"https://i.imgur.com/HpdcfPq.png"} title={"Gauchos & Polo"}>
                Explore the gaucho lifestyle in San Antonio de Areco or learn what Argentine horsemanship is all about with our Polo days, where you’ll be able to learn to play with local riders.
                <br/><br/>
                <div style={{fontWeight:500}}>
                    Enjoy the vastness, beauty and hospitality of The Pampas.
                </div>
            </LeftImagePanel>

        </Grid>
    )

}

export default Gauchos