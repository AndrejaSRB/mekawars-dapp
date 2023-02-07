import type { ThemeOverride } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        bg: 'black.100',
        color: 'white.100',
      },
    },
  },
  fonts: {
    heading: `'Camera', sans-serif`,
    body: `'Inter', sans-serif`,
  },
  colors: {
    primary: {
      50: '#EBEDFC',
      100: '#C1C7F5',
      200: '#A3ABF1',
      300: '#7A85EA',
      400: '#606DE6',
      500: '#0B24FB',
      600: '#3342CC',
      700: '#28349F',
      800: '#1F287B',
    },
    primaryBlack: {
      100: '#121212',
    },
    white: {
      100: '#FFFFFF',
    },
    accent: {
      50: '#e9eafc',
      500: '#3849E0',
      600: '#3340D5',
      900: '#010cab',
    },
    gray: {
      1: '#23262B',
      5: '#414249',
      6: '#747B84',
      25: '#FCFCFD',
      50: '#F9FAFB',
      100: '#F3F3F0',
      200: '#D9D9D9',
      300: '#C4C4C4',
      400: '#9D9D9D',
      500: '#7B7B7B',
      600: '#555555',
      700: '#434343',
      800: '#262626',
      900: '#101828',
    },
    grayTrue: {
      100: 'F5F5F5',
      400: '#A3A3A3',
      500: '#737373',
      800: '#292929',
      900: '#141414',
    },
    grayIron: {
      800: '#26272B',
    },
    baseBlack: {
      100: '#000000',
    },
    black: {
      100: '#09101D',
    },
    pooky: {
      100: '#3849E0',
    },
    error: {
      50: '#ffeaed',
      400: '#F44242',
      500: '#F04438',
    },
    success: {
      50: '#e5f9ec',
      100: '#D1FADF',
      200: '#A6F4C5',
      400: '#2ED177',
      500: '#12B76A',
      600: '#039855',
    },
    selected: {
      500: '#EBEDFC',
    },
    warning: {
      50: '#f9e9e7',
      300: '#FEC84B',
      400: '#F77245',
      500: '#F79009',
    },
    green: {
      50: '#EDFCF2',
      400: '#3CCB7F',
    },
    orange: {
      300: '#E17B53',
    },

    /**
     * `twitter` is already provided by Chakra
     * @see import('@chakra-ui/react').Theme['colors']['twitter']
     * TODO: fill the other style variants, at least 600 (focus/hover state)
     */

    google: {
      500: '#ffffff',
    },

    apple: {
      500: '#ffffff',
    },
  },

  breakpoints: {
    xs: '320px',
    sm: '375px',
    md: '768px',
    lg: '1024px',
    xl: '1200px',
    '2xl': '1420px',
    '3xl': '2560px',
  },

  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },

  components: {
    Button: {
      baseStyle: {
        fontWeight: 600,
        borderRadius: '8px',
        cursor: 'pointer',
      },
      sizes: {
        md: { height: 12 },
      },
      variants: {
        pookyBlue: {
          bg: 'accent.500',
          borderRadius: '8px',
          height: '48px',
          fontSize: '16px',
          lineHeight: '24px',
          color: 'white.100',
          _hover: {
            bg: 'accent.600',
            _disabled: {
              bg: 'accent.500',
            },
          },
          _disabled: {
            bg: 'accent.500',
          },
        },
        outline: {
          bg: 'transparent',
          borderWidth: '1px',
          borderColor: 'white.100',
          color: 'white.100',
          _hover: {
            bg: 'transparent',
          },
        },
      },
    },

    Input: {
      baseStyle: {
        border: 0,
      },
      variants: {
        normal: {
          bg: 'gray.700',
          borderRadius: '8px',
          boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
          h: '48px',
          fontSize: 16,
          fontWeight: 400,
          color: 'gray.300',
        },
      },
    },

    Checkbox: {
      baseStyle: {
        label: {
          marginStart: 0,
        },
        control: {
          borderColor: 'gray.100',
          borderRadius: '2px',
        },
      },
    },
    Modal: {
      baseStyle: {
        dialogContainer: {
          // Temporary hack for iPhone (Safari). Modals are not taking a full available height without the bellow fix.
          '@supports(height: -webkit-fill-available)': {},
        },
      },
    },
  },
} as ThemeOverride);

export default theme;
