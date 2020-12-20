import React from "react"
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {LeftImagePanel, RightImagePanel} from "./CityCenter";

const useStyles = makeStyles(theme => (
    {
        root: {}
    }
));


interface NorthProps {

}

export const North: React.FC<NorthProps> = (props) => {
    const classes = useStyles();

    return (
        <Grid item container xs={12} className={classes.root}>
            <Grid item container xs={12}>
                <LeftImagePanel
                    image={"https://i.imgur.com/55Qe9f6.jpeg"}
                    title={"Retiro & Recoleta"}
                    location={"North of the City"}
                >
                    These upscale and elegant neighborhoods earned BA the nickname of “The Paris of South America”.
                    In this area chosen by the French-obsessed elites of the late 19th century, you’ll find the Recoleta Cemetery, last resting place of Evita Perón.
                    <br/><br/>
                    <div style={{fontWeight:500}}>
                        Take a little trip into the experiment of turning BA into the European Capital of the Americas.
                    </div>

                </LeftImagePanel>
            </Grid>
            <Grid item container xs={12}>
                <RightImagePanel
                    image={"https://lun-us.icons8.com/api/assets/b1883611-219f-4cde-9338-9d82bac02de3/puerto-madero.png"}
                    title={"Palermo"}
                    location={"North of the City"}
                >

                    Upbeat and eclectic, Palermo is the largest neighborhood of BA. Discover the laid back Rose Garden and Palermo Parks, and later walk trendy Palermo Soho and Hollywood to find speakeasies, amazing restaurants and colorful street art.
                    <br/><br/>
                    <div style={{fontWeight:500}}>
                        Indulge in great food, art and design at BA’s hippest district.
                    </div>
                </RightImagePanel>
            </Grid>
        </Grid>
    )

}