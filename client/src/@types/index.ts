export type Mode = "LIGHT" | "DARK" | "SYSTEM"

export interface UserState {
    fullName: null | string
    email: null | string
    isLoggedIn: boolean
}

export interface PreferanceState {
    mode: Mode
}

export interface ToggleModalState {
    toggle: boolean
}