import * as React from "react";
import loadable from "@loadable/component";
const Grid = loadable(() => import("@material-ui/core/Grid"))
const LandOfStories = loadable(() => import("../src/components/argentina/LandOfStories"))
const ThisIsArgentina = loadable(() => import("../src/components/argentina/ThisIsArgentina"))
const OurDestinations = loadable(() => import("../src/components/argentina/OurDestinations"))
const DreamVacation = loadable(() => import("../src/components/landing/DreamVacation"))
const Footer = loadable(() => import("../src/components/landing/Footer"))

interface ArgentinaProps {

}

export const Argentina: React.FC<ArgentinaProps> = () => (
        <React.Fragment>
            <Grid item container xs={12}>
                <LandOfStories/>
            </Grid>
            <Grid item container xs={12}>
                <ThisIsArgentina/>
            </Grid>
            <Grid item container xs={12}>
                <OurDestinations/>
            </Grid>
            <Grid item container xs={12}>
                <DreamVacation/>
            </Grid>
            <Grid item container xs={12}>
                <Footer/>
            </Grid>
        </React.Fragment>
    )

export default Argentina