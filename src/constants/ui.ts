export const COLORS = {
    DORADO: 'bg-dorado',
    CREMA: 'text-crema',
} as const;

export const FONTS = {
    ELEGANT: 'font-elegant',
} as const;

export const BUTTON_STYLES = {
    PRIMARY: `${COLORS.DORADO} ${COLORS.CREMA} px-4 py-2 rounded-md ${FONTS.ELEGANT} hover:bg-dorado/80 transition-colors`,
} as const; 