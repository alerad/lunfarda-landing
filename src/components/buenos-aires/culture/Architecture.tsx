import React from "react"
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {LeftImagePanel} from "../neighborhoods/CityCenter";

const useStyles = makeStyles(theme => (
    {
        root: {}
    }
));


interface ArchitectureProps {

}

export const Architecture: React.FC<ArchitectureProps> = (props) => {
    const classes = useStyles();

    return (
        <Grid item container xs={12}>
            <LeftImagePanel
                image={"https://i.imgur.com/yEn0suS.jpg"}
                title={"Architecture"}
            >
                400 year old Spanish Colonial buildings, Art Nouveau, Jungenstil, Catalan Modernism, Belle Epoque… Buenos Aires is an eclectic wonderland of architectural styles.
                <br/><br/>
                <div style={{fontWeight:500}}>
                    Explore the dreams and aspirations of BA through its architecture and urbanism.
                </div>

            </LeftImagePanel>
        </Grid>
    )

}

export default Architecture