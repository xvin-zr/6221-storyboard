import colors from 'tailwindcss/colors';
import { spacing as twSpacing } from 'tailwindcss/defaultTheme';

export function spacing(key: keyof typeof twSpacing, scale = 1) {
    const size = twSpacing[key].match(/^(\d+\.?\d*)(rem|px)$/)?.[1];
    if (!size) {
        throw new Error(`Error when converting spacing`);
    }

    return Number(size) * scale * 16;
}

export const {
    red,
    orange,
    yellow,
    green,
    sky,
    blue,
    purple,
    pink,
    gray,
    amber,
    cyan,
    indigo,
    teal,
} = colors;
export const twScheme = [
    blue[600],
    green[600],
    amber[600],
    red[600],
    purple[600],
    cyan[600],
    pink[600],
    indigo[600],
    orange[600],
    teal[600],
] as const;
