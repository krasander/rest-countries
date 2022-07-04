import * as React from 'react';
import { createTheme } from '@mui/material/styles';


export default function getThemes() {
    const darkTheme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode: 'dark',
                },
            }), [],
      );
    
    const lightTheme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode: 'light',
                },
            }), [],
    );

    return {darkTheme, lightTheme}
}
