import React from "react"
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {LeftImagePanel} from "../neighborhoods/CityCenter";

const useStyles = makeStyles(theme => (
    {
        root: {}
    }
));


interface FootballProps {

}

export const Football: React.FC<FootballProps> = (props) => {
    const classes = useStyles();

    return (
        <Grid item container xs={12}>
            <LeftImagePanel
                image={"https://i.imgur.com/nyUn46Y.jpg"}
                title={"Football"}
            >
                Football, soccer, fútbol: it doesn’t matter what you call it, this sport evokes unleashed passion in the souls of the Argentine people. Discover why this sport borders on religion and see a game of Argentina’s most famous teams: Boca Juniors, River Plate or the Argentine National Team.
                <br/><br/>
                <div style={{fontWeight:500}}>
                    Let us know when you’re coming and we’ll help you find tickets to a game!
                </div>

            </LeftImagePanel>
        </Grid>
    )

}

export default Football