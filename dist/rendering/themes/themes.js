import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
export const mainTheme = createMuiTheme({
    palette: {
        primary: {
            main: "#50e3c2",
        },
        secondary: {
            main: "#ff7977",
        },
    },
    typography: {
        color: "",
        fontFamily: ['Josefin Sans', 'sans-serif']
    },
    overrides: {
        // Style sheet name ⚛️
        MuiListItem: {
            "root": {
                "&$selected": {
                    "backgroundColor": "#50e3c2",
                    "color": "white"
                }
            }
        }
    }
});
export const darkTheme = createMuiTheme({
    palette: {
        type: 'dark',
    }
});
const themeRegistry = {
    "light": mainTheme,
    "dark": darkTheme
};
export function getThemeByName(name) {
    return themeRegistry[name];
}
