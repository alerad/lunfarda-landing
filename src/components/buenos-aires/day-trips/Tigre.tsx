import React from "react"
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {LeftImagePanel, RightImagePanel} from "../neighborhoods/CityCenter";

const useStyles = makeStyles(theme => (
    {
        root: {

        }
    }
));


interface TigreProps {

}

export const Tigre: React.FC<TigreProps> = (props) => {
    const classes = useStyles();

    return (
        <Grid item container xs={12} className={classes.root}>
            <LeftImagePanel image={"https://i.imgur.com/HpdcfPq.png"} title={"Tigre & San Isidro"}>
                Relax at the Tigre Delta: an area of thousands of lush, green islands surrounded by canals where locals escape to for the weekends. Have lunch by the river, birdwatch, kayak or swim with our year-round tours.<br/> Visit the quaint neighboring town of San Isidro with its scenic viewpoints and neo gothic Cathedral.
                <br/><br/>
                <div style={{fontWeight:500}}>
                    Unwind at the laidback outskirts of Buenos Aires
                </div>
            </LeftImagePanel>
        </Grid>
    )

}

export default Tigre