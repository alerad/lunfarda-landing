import React from "react"
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {LeftImagePanel} from "../neighborhoods/CityCenter";

const useStyles = makeStyles(theme => (
    {
        root: {}
    }
));


interface PoliticalHistoryProps {

}

export const PoliticalHistory: React.FC<PoliticalHistoryProps> = (props) => {
    const classes = useStyles();

    return (
        <Grid item container xs={12}>
            <LeftImagePanel
                image={"https://i.imgur.com/LlcARxK_d.webp?maxwidth=760&fidelity=grand"}
                title={"Political History"}
            >
                Buenos Aires is one of the most political cities of the world.
                <br/>
                Explore the history of famed first lady Evita Perón, and the Peronist movement, the fight to restore Democracy and the Human Rights movement of Argentina, including the Mothers of May Square.


            </LeftImagePanel>
        </Grid>
    )

}

export default PoliticalHistory