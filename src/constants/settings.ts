export enum DISPLAY_TYPES {
  EVERYONE = "everyone",
  SELECTED = "selected",
  NOBODY = "nobody",
}

export enum SETTINGS_COLLAPSES {
  PROFILE = "profile",
  THEME = "theme",
  PRIVACY = "privacy",
  SECURITY = "security",
  HELP = "help",
}
export interface DisplayOpt {
  label: string;
  value: DISPLAY_TYPES;
}

export const DisplayTypes: Array<DisplayOpt> = [
  { label: "Tout le monde", value: DISPLAY_TYPES.EVERYONE },
  { label: "Personne", value: DISPLAY_TYPES.NOBODY },
  { label: "Selectionné", value: DISPLAY_TYPES.SELECTED },
];

export enum STATUS_TYPES {
  ACTIVE = "Actif",
  AWAY = "Non actif",
  DO_NOT_DISTURB = "Ne pas déranger",
}
