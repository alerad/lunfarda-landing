import React from "react"
import {Grid, Tab, Tabs} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import loadable from "@loadable/component";

const Tigre = loadable(() => import("./Tigre"))
const Gauchos = loadable(() => import("./Gauchos"))
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


interface DayTripSelectorProps {

}

export const DayTripSelector: React.FC<DayTripSelectorProps> = (props) => {
    const classes = useStyles();

    const [value, setValue] = React.useState(dayTrips[0].name);

    const handleChange = (event: any, newValue: any) => {
        setValue(newValue);
    };

    return (
        <React.Fragment>

            <Grid item container xs={12} className={classes.root} justify={"center"}>
                <Grid item>
                    <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                        {dayTrips.map(n => {
                            return (
                                <Tab label={n.name} value={n.name}/>
                            )
                        })}
                    </Tabs>

                </Grid>
            </Grid>
            <Grid item container xs={12}>
                <Grid item xs={12}>
                    {dayTrips.map(n => {
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

const dayTrips = [
    {
        name: "Tigre & San Isidro",
        component: <Tigre/>
    },
    {
        name: "Gauchos & Polo",
        component: <Gauchos/>
    }
]