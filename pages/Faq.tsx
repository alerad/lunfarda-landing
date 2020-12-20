import * as React from "react";
import loadable from "@loadable/component";
const Grid = loadable(() => import("@material-ui/core/Grid"))
const Covid = loadable(() => import("../src/components/faq/Covid"))
const Cancellations = loadable(() => import("../src/components/faq/Cancellations"))
const SatisfactionGuarantee = loadable(() => import("../src/components/faq/SatisfactionGuarantee"))
const Footer = loadable(() => import("../src/components/landing/Footer"))

interface FaqProps {

}

export const Faq: React.FC<FaqProps> =
    () => (
        <Grid item container xs={12}>
            <Grid item container xs={12}>
                <Covid/>
            </Grid>
            <Grid item container xs={12}>
                <Cancellations/>
            </Grid>
            <Grid item container xs={12}>
                <SatisfactionGuarantee/>
            </Grid>
            <Grid item container xs={12}>
                <Footer/>
            </Grid>
        </Grid>
    )

export default Faq