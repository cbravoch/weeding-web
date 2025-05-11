export const ADMIN_SECTIONS = {
    GUESTS: 'guests',
    GLOBAL_SETTINGS: 'global_settings',
    PHOTOS: 'photos',
    USERS: 'users',
} as const;

export const ADMIN_SECTION_LABELS = {
    [ADMIN_SECTIONS.GUESTS]: 'Invitados',
    [ADMIN_SECTIONS.GLOBAL_SETTINGS]: 'Configuraciones globales',
    [ADMIN_SECTIONS.PHOTOS]: 'Fotos',
    [ADMIN_SECTIONS.USERS]: 'Usuarios',
} as const; 

export const GUEST_STATE = {
    PENDING: 1,
    APPROVED: 2,
    REJECTED: 3,
} as const;

