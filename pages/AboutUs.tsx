import * as React from "react";
import loadable from "@loadable/component";
const Grid = loadable(() => import("@material-ui/core/Grid"))
const ThisIsLunfarda = loadable(() => import("../src/components/about-us/ThisIsLunfarda"))
const RunByLocals = loadable(() => import("../src/components/about-us/RunByLocals"))
const OurTeam = loadable(() => import("../src/components/about-us/OurTeam"))
const DreamVacation = loadable(() => import("../src/components/landing/DreamVacation"))
const Footer = loadable(() => import("../src/components/landing/Footer"))

interface AboutUsProps {

}

export const AboutUs: React.FC<AboutUsProps> = () => (
        <React.Fragment>
            <Grid item container xs={12}>
                <ThisIsLunfarda/>
            </Grid>
            <Grid item container xs={12}>
                <RunByLocals/>
            </Grid>
            <Grid item container xs={12}>
                <OurTeam/>
            </Grid>
            <Grid item container xs={12}>
                <DreamVacation/>
            </Grid>
            <Grid item container xs={12}>
                <Footer/>
            </Grid>
        </React.Fragment>

    )

export default AboutUs