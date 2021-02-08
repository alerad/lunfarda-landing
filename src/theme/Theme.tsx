import { createMuiTheme } from '@material-ui/core/styles';
import 'typeface-montserrat';
import LuloCleanOneBold from '../../public/LuloCleanOneBold.woff2'

const Lulo = {
    fontFamily: 'LuloCleanOneBold',
    fontStyle: 'bold' as 'bold',
    fontDisplay: 'swap' as 'swap',
    src: `
                                local('LuloCleanOneBold'),
                                local('LuloCleanOneBold-Regular'),
                                url(${LuloCleanOneBold}) format('woff2')
                              `,
    unicodeRange:
        'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
}

declare module "@material-ui/core/styles/createPalette" {
    interface Palette {
        neutralText: any;
    }
    interface PaletteOptions {
        neutralText: any;
    }
}

export const theme = createMuiTheme({
        palette: {
            type: 'light',
            primary: {
                main: '#f1ca12',
                dark: '#e2a700'
            },
            secondary: {
                main: '#F6E9E9',
            },
            text: {
                primary: '#f1ca12',
                secondary:'#00a0b2'
            },
            neutralText: {
                dark: '#2e2e2e',
                secondary:'#F6E9E9'
            }
        },
        typography: {
            h1: {
                fontSize: "3rem",
                fontWeight: 500
            },
            h2: {
                fontSize: "2rem"
            },
            h3: {
                fontSize: "1.2rem"
            },
            h4: {
                fontSize: "1rem"
            },
            h5: {
                fontSize: ".8rem"
            },
            body1: {
                fontSize: '.9rem'
            },
            body2: {
                fontSize: '.75rem'
            },
            fontFamily: [
                'Montserrat',
                'LuloCleanOneBold',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                'Roboto',
                '"Helvetica Neue"',
                'Arial',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
            ].join(','),
        },
        overrides: {
            MuiCssBaseline: {
                '@global': {
                    '@font-face': [
                        Lulo
                    ]
                },
            },
        },
});

export default theme
