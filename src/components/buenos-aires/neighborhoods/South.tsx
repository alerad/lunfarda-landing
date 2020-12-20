import React from "react"
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {LeftImagePanel, RightImagePanel} from "./CityCenter";

const useStyles = makeStyles(theme => (
    {
        root: {}
    }
));


interface SouthProps {

}

export const South: React.FC<SouthProps> = (props) => {
    const classes = useStyles();

    return (
        <Grid item container xs={12} className={classes.root}>
            <Grid item container xs={12}>
                <LeftImagePanel
                    image={"https://i.imgur.com/kZQktMZ.jpg"}
                    title={"San Telmo"}
                    location={"South of the City"}
                >
                    The oldest and arguably coolest area of Buenos Aires is lined with antiquity and designer shops, eclectic architecture encompassing colonial through contemporary and is home to the oldest market of the city, the San Telmo Market.

                    <br/><br/>
                    <div style={{fontWeight:500}}>
                        Discover a neighborhood of rebel spirit and a soul of its own.
                    </div>

                </LeftImagePanel>
            </Grid>
            <Grid item container xs={12}>
                <RightImagePanel
                    image={"https://i.imgur.com/RhxoTl2.jpeg"}
                    title={"La Boca"}
                    location={"South of the City"}
                >

                    Colorful, artsy and nostalgic in equal parts, La Boca is the old port area where most of the ancestry of BA entered Argentina from. Discover the history of the Big Immigration and how it shaped modern locals: slang, to gesturing to crazy quirks.

                    <br/><br/>
                    <div style={{fontWeight:500}}>
                        Meet Caminito, where art, history and heritage merge.
                    </div>
                </RightImagePanel>
            </Grid>
        </Grid>
    )

}