import React from "react"
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {LeftImagePanel} from "../neighborhoods/CityCenter";

const useStyles = makeStyles(theme => (
    {
        root: {}
    }
));


interface FashionProps {

}

export const Fashion: React.FC<FashionProps> = (props) => {
    const classes = useStyles();

    return (
        <Grid item container xs={12}>
            <LeftImagePanel
                image={"https://i.imgur.com/okY9kXp.jpg"}
                title={"Fashion & Design"}
            >
                Discover Buenos Aires’ creative edge through its fashion and design scene. Indulge in specialty curated shopping sprees through hard to find showrooms and boutique shops.
                <br/><br/>
                <div style={{fontWeight:500}}>
                    Pamper yourself to the best of BA’s design scene.
                </div>

            </LeftImagePanel>
        </Grid>
    )

}

export default Fashion