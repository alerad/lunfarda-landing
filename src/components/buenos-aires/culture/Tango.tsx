import React from "react"
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {LeftImagePanel} from "../neighborhoods/CityCenter";

const useStyles = makeStyles(theme => (
    {
        root: {}
    }
));


interface TangoProps {

}

export const Tango: React.FC<TangoProps> = (props) => {
    const classes = useStyles();

    return (
        <Grid item container xs={12}>
            <LeftImagePanel
                image={"https://i.imgur.com/xiPtRaj.jpg"}
                title={"Tango"}
            >
                Buenos Aires is the cradle of tango, the sensual and melancholic music and dance of the 19th century immigrants and african-americans of the Rio de la Plata.
                <br/><br/>
                <div style={{fontWeight:500}}>
                    Take tango lessons, discover the local tango scene or see one of our carefully curated tango shows with guides who live and breathe for tango.
                </div>

            </LeftImagePanel>
        </Grid>
    )

}

export default Tango