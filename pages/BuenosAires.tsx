import * as React from "react";
import { Grid } from "@material-ui/core";
import loadable from "@loadable/component";
const DiscoverBuenosAires = loadable(() => import("../src/components/buenos-aires/DiscoverBuenosAires"))
const FirstTimeBA = loadable(() => import("../src/components/buenos-aires/FirstTimeBA"))
const BANeighborhoods = loadable(() => import("../src/components/buenos-aires/BANeighborhoods"))
const Footer = loadable(() => import("../src/components/landing/Footer"))

interface BuenosAiresProps {}

export const BuenosAires: React.FC<BuenosAiresProps> = () => (
        <React.Fragment>
            <Grid item container xs={12}>
                <DiscoverBuenosAires/>
            </Grid>
            <Grid item container xs={12}>
                <FirstTimeBA/>
            </Grid>
            <Grid item container xs={12}>
                <BANeighborhoods/>
            </Grid>
            <Grid item container xs={12}>
                <Footer/>
            </Grid>
        </React.Fragment>
    )

export default BuenosAires