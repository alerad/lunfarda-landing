import React from "react"
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {LeftImagePanel} from "../neighborhoods/CityCenter";

const useStyles = makeStyles(theme => (
    {
        root: {}
    }
));


interface FoodAndWineProps {

}

export const FoodAndWine: React.FC<FoodAndWineProps> = (props) => {
    const classes = useStyles();

    return (
        <Grid item container xs={12} className={classes.root}>
            <Grid item container xs={12}>
                <LeftImagePanel
                    image={"https://i.imgur.com/Idks2g0.jpeg"}
                    title={"Food & Wine"}
                >
                    Taste traditional charcuterie platters, explore the flavors of Argentine beef in all its glory in the traditional asado, indulge in scrumptious dulce de leche caramel tastings and beyond.
                    <br/><br/>
                    <div style={{fontWeight:500}}>
                        Discover some of the best restaurants in Latin America, and sample the creative and forward pushing cuisine of our young chefs in outings with food critics and gastronomy specialists.
                    </div>

                </LeftImagePanel>
            </Grid>
        </Grid>
    )

}

export default FoodAndWine