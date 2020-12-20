import * as React from "react";
import loadable from "@loadable/component";
const Grid = loadable(() => import("@material-ui/core/Grid"))
const HeaderJewish = loadable(() => import("../src/components/jewish/HeaderJewish"))
const BsAsJewishHeritage = loadable(() => import("../src/components/jewish/BsAsJewishHeritage"))
const JewishTours = loadable(() => import("../src/components/jewish/JewishTours"))
const KosherFriendly = loadable(() => import("../src/components/jewish/KosherFriendly"))
const Footer = loadable(() => import("../src/components/landing/Footer"))

interface JewishHeritageProps {

}

export const JewishHeritage: React.FC<JewishHeritageProps> = () => (
        <Grid item container xs={12}>
            <Grid item xs={12}>
                <HeaderJewish/>
            </Grid>
            <Grid item xs={12}>
                <BsAsJewishHeritage/>
            </Grid>
            <Grid item xs={12}>
                <JewishTours/>
            </Grid>
            <Grid item xs={12}>
                <KosherFriendly/>
            </Grid>
            <Grid item container xs={12}>
                <Footer/>
            </Grid>
        </Grid>
    )
export default JewishHeritage