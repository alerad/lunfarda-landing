import React from "react"
import {Box, Grid, Tab, Tabs, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {CityCenter} from "./CityCenter";
import {North} from "./North";
import {South} from "./South";
import loadable from "@loadable/component";

const TabPanel = loadable(() => import("../../TabPanel"))

const useStyles = makeStyles(theme => (
    {
        root: {
            backgroundColor: "#006778"
        },
        selected:  {
            backgroundColor: "#004C5C"
        }
    }
));


interface NeighborhoodSelectorProps {

}

export const NeighborhoodSelector: React.FC<NeighborhoodSelectorProps> = (props) => {
    const classes = useStyles();

    const [value, setValue] = React.useState(neighborhoods[0].name);

    const handleChange = (event: any, newValue: any) => {
        setValue(newValue);
    };

    return (
        <React.Fragment>

            <Grid item container xs={12} className={classes.root} justify={"center"}>
                <Grid item>
                    <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                        {neighborhoods.map(n => {
                            return (
                                    <Tab label={n.name} value={n.name}/>
                                )
                        })}
                    </Tabs>

                </Grid>
            </Grid>
            <Grid item container xs={12}>
                <Grid item xs={12}>
                    {neighborhoods.map(n => {
                        return (
                            <TabPanel value={value} index={n.name}>
                                {n.component}
                            </TabPanel>
                        )
                    })}
                </Grid>
            </Grid>
        </React.Fragment>
    )

}

const NeighborhoodButton = () => {

}

const neighborhoods = [
    {
        name: "North",
        component: <North/>
    },
    {
        name: "City Center",
        component: <CityCenter/>
    },
    {
        name: "South",
        component: <South/>
    }
]