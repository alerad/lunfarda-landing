const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
    createServer((req, res) => {
        // Be sure to pass `true` as the second argument to `url.parse`.
        // This tells it to parse the query portion of the URL.
        const parsedUrl = parse(req.url, true)
        const { pathname, query } = parsedUrl


        hButtons.forEach(x => {
            if (pathname === x.As) {
                app.render(req, res, x.Url, query)
            }
        })

        handle(req, res, parsedUrl)

    }).listen(3000, (err) => {
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
