import {purple, grey} from '@material-ui/core/colors';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import React from 'react';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: purple['500'],
            light: purple['100'],
        },
        secondary: {
            main: grey['900'],
            light: grey['200']
        }
    },
});


const ColorPalette = props => {
    const {children} = props;
    
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
}

export default ColorPalette;
