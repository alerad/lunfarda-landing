import React from "react"
import {Grid, Tab, Tabs} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import loadable from "@loadable/component";

const TabPanel = loadable(() => import("../../TabPanel"))
const FoodAndWine = loadable(() => import("./FoodAndWine"))
const Tango = loadable(() => import("./Tango"))
const Football = loadable(() => import("./Football"))
const Architecture = loadable(() => import("./Architecture"))
const Art = loadable(() => import("./Art"))
const Fashion = loadable(() => import("./Fashion"))
const PoliticalHistory = loadable(() => import("./PoliticalHistory"))

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


interface CultureSelectorProps {

}

export const CultureSelector: React.FC<CultureSelectorProps> = (props) => {
    const classes = useStyles();

    const [value, setValue] = React.useState(cultures[0].name);

    const handleChange = (event: any, newValue: any) => {
        setValue(newValue);
    };

    return (
        <React.Fragment>

            <Grid item container xs={12} className={classes.root} justify={"center"}>
                <Grid item>
                    <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                        {cultures.map(n => {
                            return (
                                <Tab label={n.name} value={n.name}/>
                            )
                        })}
                    </Tabs>

                </Grid>
            </Grid>
            <Grid item container xs={12}>
                <Grid item xs={12}>
                    {cultures.map(n => {
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

export default CultureSelector

const cultures = [
    {
        name: "Food & Wine",
        component: <FoodAndWine/>
    },
    {
        name: "Tango",
        component: <Tango/>
    },
    {
        name: "Football",
        component: <Football/>
    },
    {
        name: "Architecture",
        component: <Architecture/>
    },
    {
        name: "Art",
        component: <Art/>
    },
    {
        name: "Fashion & Design",
        component: <Fashion/>
    },
    {
        name: "Politcal History",
        component: <PoliticalHistory/>
    }
]