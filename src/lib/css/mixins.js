// NPM Imports 
import Color from 'color';

// Local Imports 
import {
    fontColor,
    background
} from 'vars';

export const makeButton = ( userDefinedStyles = {}, color = fontColor ) => {

    color = Color( fontColor );

    return {
        border : '1px solid ' + color.darken(0.2).rgb().string(),
        background : color.lighten(0.5).rgb().string(),
        color : background,
        padding : '10px',
        fontSize : '1em',
        margin : '10px',
        outline : 'none',
        cursor : 'pointer',
        ':hover' : {
            background : color.rgb().string(),
        },
        ...userDefinedStyles
    }

}