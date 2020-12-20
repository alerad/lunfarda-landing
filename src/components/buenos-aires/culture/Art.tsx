import React from "react"
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {LeftImagePanel} from "../neighborhoods/CityCenter";

const useStyles = makeStyles(theme => (
    {
        root: {}
    }
));


interface ArtProps {

}

export const Art: React.FC<ArtProps> = (props) => {
    const classes = useStyles();

    return (
        <Grid item container xs={12}>
            <LeftImagePanel
                image={"https://i.imgur.com/oqdSSYp.jpg"}
                title={"Art"}
            >
                Waltz through air galleries full of wonderful graffiti and street art, visit exclusive galleries and world class museums, like MALBA or MAMBA or indulge in a first row seat to the best sounding opera house of the world.
                <br/><br/>
                <div style={{fontWeight:500}}>
                    Feel the full expression of the city of Buenos Aires through its art.
                </div>

            </LeftImagePanel>
        </Grid>
    )

}

export default Art