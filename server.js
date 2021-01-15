const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const GetReviews = () => {
    return fetch("https://www.tripadvisor.com/OwnerResponseApi/1.0/location/18543609/reviews?offset=0&rating=5&safetyAlerts=false&safetyRelated=false", {
        "headers": {
            "accept": "*/*",
            "accept-language": "en-US,en;q=0.9,es-AR;q=0.8,es;q=0.7,cs-CZ;q=0.6,cs;q=0.5",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "User-Agent": "PostmanRuntime/7.26.8",
            "sec-fetch-site": "same-origin",
            "cookie": "TAUnique=%1%enc%3Au%2FKH8yQEGOSk2EFIuF9c2v3mYPHGAqJxJ7TF%2B4xxfQ7mhWnEwXwJZw%3D%3D; TASSK=enc%3AAF1SjNlFEEwwAzC3%2BKZIf3vX2rKJqHwbUjcFbwmksFhHDwzPiQxwemxHRIbbsQ8JeBHqFQm%2Bh3Oi5ns1NK9GPLOd3tY1fI2VJU50AXSP3Gy93QTc%2BYJAHDz8sLQqQkVR6g%3D%3D; ServerPool=B; fbm_162729813767876=base_domain=.tripadvisor.com; TATrkConsent=eyJvdXQiOiIiLCJpbiI6IkFMTCJ9; G_ENABLED_IDPS=google; G_AUTHUSER_H=3; TATravelInfo=V2*A.2*MG.-1*HP.2*FL.3*RS.1; TART=%1%enc%3ApNhBSLhfXNrwUCL7v11MbRiw1XCugXxZAgtlufo67JFyhAPtcfgguYJXuX%2FbzQ6hFPqjcibwkQ0%3D; TADCID=HyWAWduaWt087MQqABQCjnFE8vTET66GHuEzPi7KfWJOrx6WMlD4ifbEPKvkS15XJEZ3ahmrpwASVdwqUTlPhasBMgSxZIT1aOI; TAAUTHEAT=ZVWO_1NxnZJu-1tJABQC5pMD6MhQQX22iUWVeLafiSIlr-BfIA3SPWjnl6D_nMa4DiC4nmFfR3NbFzElQ6DpdeAWCbl4dcmcxdkmZ7-3eKBmhJySpm0CWVyAZiOUaPaQ4nd1uWnQi_ef6igpRB2vbLA6FYxJc_Dg6gL3IyugpRDvbHPPwx91zY_uCF4SyIUJ-6pRjFqHxoKkprABAR6BDZine0UB69zwm4Bn; PMC=V2*MS.72*MD.20201207*LD.20201221; ak_bmsc=7815053D77DD4D7EB704B69D559A8B5BC82A3224600C000021E5E05FB4E49109~plyxxUFiMONuHIR/bCDncVLpIWCrPaj6fZv2k5x6oLb1ZLFbekfixFqFpkHWYff6IdHLvc8ZNNKE2mRDvJj3jJkaBiyl4Y/4mSpBFvU7uyYYqBjE7j8oK6S4HFYR/WbSi1JAf73JoBNtLi9hZdvWsQO+bQD58dMLb1pivGYiacbDP36OSf5Mgw7igaoII9HY2RZxUyptklevPDMQTWtSqLlfrPLkpMe875a8CM3elEUNI=; health_notice_dismissed=1; TACds=B.4.18034.2.2020-12-19; VRMCID=%1%V1*id.10568*llp.%2FShowTopic-g1-i12105-k6017988-Reviews_API-Tripadvisor_Support%5C.html*e.1609179585805; PAC=AHlvunXUKQESZBwDC43lCOf1kL7P54wz3E_1W7UM89sHtVYeHoeZEsPFaaK3niJr002TlVzBHvKNMwZaWQTcX7BmMKGEIwEADUPNzSbgkCvEPSVROYn2Gza8poko4ATfGAR7k2OfiG-yIg7ggUQPxRVVi-FKyIvsFMwN3v2uAvge-haj3Eh3gmyJrmUKOeKvg-aFTOTaCd40l5nJIFWL-d9FI2-HhVJOqvLN4ydDP_DH; TASID=A39AD7029602451DAC3DDE1F2F1A6E27; __vt=LU9rP-RUfLmkdl3IABQCq4R_VSrMTACwWFvfTfL3vxIsWzZooWW2lbcpxC-CcEl_LdVUWk3SUtKHH0IuoxH1WiQOg8Wm-tWYbHVgQZI-Q3pU9IV1OdVThoYbFUiq9CI81D_hLcLx3urAtsW2KMJlxtLDsZ_PMsXqCY68KX-tXrCmNUvXJtvQHdbbnYW7JZdWKuCmJgr6WlpnvQ; TAReturnTo=%1%%2FOwners; CM=%1%RCPers%2C%2C-1%7CRestAds%2FRPers%2C%2C-1%7Csesstch15%2C%2C-1%7CCYLPUSess%2C%2C-1%7Ctvsess%2C%2C-1%7CPremiumMCSess%2C%2C-1%7CUVOwnersSess%2C%2C-1%7CRestPremRSess%2C%2C-1%7CRepTarMCSess%2C%2C-1%7CPremRetPers%2C%2C-1%7CViatorMCPers%2C%2C-1%7C%24%2C%2C-1%7Csesssticker%2C%2C-1%7Ct4b-sc%2C%2C-1%7CMC_IB_UPSELL_IB_LOGOS2%2C%2C-1%7CTSMCPers%2C%2C-1%7CPremMCBtmSess%2C%2C-1%7CLaFourchette+Banners%2C%2C-1%7Csesshours%2C%2C-1%7CCOVIDMCSess%2C%2C-1%7CTARSWBPers%2C%2C-1%7CTheForkORSess%2C%2C-1%7CTheForkRRSess%2C%2C-1%7CSPACMCSess%2C%2C-1%7CRestAds%2FRSess%2C%2C-1%7CPremiumMobPers%2C%2C-1%7CLaFourchette+MC+Banners%2C%2C-1%7Csesslaf%2C%2C-1%7CCYLPUPers%2C%2C-1%7CRevHubRMPers%2C%2C-1%7Cperslaf%2C%2C-1%7CUVOwnersPers%2C%2C-1%7Csh%2C%2C-1%7CTheForkMCCSess%2C%2C-1%7CCrisisPers%2C%2C-1%7CCCPers%2C%2C-1%7CRepTarMCPers%2C%2C-1%7Cb2bmcsess%2C%2C-1%7Cperswifi%2C%2C-1%7CSPMCPers%2C%2C-1%7CPremRetSess%2C%2C-1%7CRevHubRMSess%2C%2C-1%7CViatorMCSess%2C4%2C-1%7CPremiumMCPers%2C%2C-1%7CPremiumRRPers%2C%2C-1%7CRestAdsCCPers%2C%2C-1%7CSPACMCPers%2C%2C-1%7CTrayssess%2C%2C-1%7CPremiumORPers%2C%2C-1%7Cperssticker%2C%2C-1%7CSPORPers%2C%2C-1%7Cbooksticks%2C%2C-1%7Cbookstickp%2C%2C-1%7CListMCPers%2C%2C-1%7CPremiumMobSess%2C%2C-1%7Csesswifi%2C%2C-1%7Ct4b-pc%2C%2C-1%7CWShadeSeen%2C%2C-1%7CTheForkMCCPers%2C%2C-1%7CHomeASess%2C%2C-1%7CCrisisSess%2C%2C-1%7CTBPers%2C%2C-1%7Cperstch15%2C%2C-1%7CCCSess%2C%2C-1%7CCYLSess%2C%2C-1%7Cpershours%2C%2C-1%7CPremiumORSess%2C%2C-1%7CRestAdsPers%2C%2C-1%7Cb2bmcpers%2C%2C-1%7CTrayspers%2C%2C-1%7CMC_IB_UPSELL_IB_LOGOS%2C%2C-1%7Csess_rev%2C%2C-1%7Csessamex%2C%2C-1%7CPremiumRRSess%2C%2C-1%7CTADORSess%2C%2C-1%7CAdsRetPers%2C%2C-1%7CMCPPers%2C%2C-1%7CListMCSess%2C%2C-1%7CSPMCSess%2C%2C-1%7Cpers_rev%2C%2C-1%7Cmdpers%2C%2C-1%7CRBAPers%2C%2C-1%7CHomeAPers%2C%2C-1%7CRCSess%2C%2C-1%7CRestAdsCCSess%2C%2C-1%7CRestPremRPers%2C%2C-1%7Cpssamex%2C%2C-1%7CCYLPers%2C%2C-1%7Ctvpers%2C%2C-1%7CTBSess%2C%2C-1%7CTSMCSess%2C%2C-1%7CAdsRetSess%2C%2C-1%7CCOVIDMCPers%2C%2C-1%7CMCPSess%2C%2C-1%7CTADORPers%2C%2C-1%7CTheForkORPers%2C%2C-1%7CPremMCBtmPers%2C%2C-1%7CTheForkRRPers%2C%2C-1%7CTARSWBSess%2C%2C-1%7CRestAdsSess%2C%2C-1%7CRBASess%2C%2C-1%7Cmdsess%2C%2C-1%7C; TASession=%1%V2ID.A39AD7029602451DAC3DDE1F2F1A6E27*SQ.208*LS.DemandLoadAjax*GR.42*TCPAR.47*TBR.96*EXEX.26*ABTR.39*PHTB.71*FS.14*CPU.30*HS.recommended*ES.popularity*DS.5*SAS.popularity*FPS.oldFirst*TS.AB7FC6ED4650D5B6B01060CCD7DEA930*NS.RESTAURANTS%5C.A1343BA6776C83D7B81B0920452C6DBF*FV.T*LF.en*FA.1*DF.0*TRA.false*LD.18543609*EAU.E; TAUD=LA-1606591830370-1*RDD-1-2020_11_28*LG-1983154778-2.1.F.*LD-1983154779-.....; roybatty=TNI1625!AHPKORbUF9rZxnDD8loXbJnLLJhG33KDpun0y6PqdLh%2ByMRhMaE5kofl7rh6Ucs%2BxeDD%2FBSKrhUiN%2BlMmJSXMIc5as5Z8SVSPlesod54VZZ9dllbxoJhJCocENjDHGR5Oj%2BRCioiHX%2ByjV1GW2Bdqw1NVatoX2WkzdmJ5j995PRa%2C1; bm_sv=865589F3AB4E34621C322F8E743A74BB~4vS0sm0Uu0/2j7PJruNGe6fTqdxJGxBtmaOcLGEBrceFCKrnjvi7MtYVIak8H75FDkK8m+KJ0sc7n0aTZoKoL74RtFWxucBZxmdyrX/0PL9KnZ9YILlZO0aWi7WhOxKDI5czjBZ1Tg3MWqnKZzYKm8n6Y3ZwettxA9PrzvErmSE="
        },
        "referrer": "https://www.tripadvisor.com/OwnerResponse-d18543609",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": null,
        "method": "GET",
        "mode": "cors"
    });
}

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
    createServer((req, res) => {
        // Be sure to pass `true` as the second argument to `url.parse`.
        // This tells it to parse the query portion of the URL.
        const parsedUrl = parse(req.url, true)
        const { pathname, query } = parsedUrl

        let handles = true;

        hButtons.forEach(x => {
            if (pathname === "/"+x.As) {
                app.render(req, res, "/"+x.Url, query)
            }
        })

        if (pathname === "/reviews") {
            handles=false;
            GetReviews()
                .then(x => x.json())
                .then(x => {
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(x));
            })
                .catch(x => console.log(x))
        }

        if (handles)
            handle(req, res, parsedUrl)

    }).listen(process.env.PORT || 3000, (err) => {
        if (err) throw err
        console.log('> Ready on http://localhost:3000')
    })
})


/**
 * Urls and routing are handled in App.js
 */
const hButtons = [
    {
        Text : "Buenos Aires",
        Url: "BuenosAires",
        As: "buenos-aires",
        subItems: [
            {
                Text: "Neighborhoods",
                Url: "Neighborhoods",
                As: "neighborhoods"
            },
            {
                Text: "Culture",
                Url: "Culture",
                As: "culture"
            },
            {
                Text: "Day trips",
                Url:"DayTrips",
                As: "day-trips"
            }
        ]

    },
    {
        Text : "Kids",
        Url: "Kids",
        As: "kids"
    },
    {
        Text : "Jewish Heritage",
        Url: "JewishHeritage",
        As:"jewish-heritage"
    },
    {
        Text : "Argentina",
        Url: "Argentina",
        As:"argentina"
    },
    {
        Text : "Book",
        Url: "Book",
        As:"book"
    },
    {
        Text : "About Us",
        Url: "AboutUs",
        As: "about-us"
    },
    {
        Text : "FAQ",
        Url: "Faq",
        As:"faq"
    }
]
