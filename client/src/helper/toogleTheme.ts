type Mode = "LIGHT" | "DARK";

export const toogleTheme = (theme: Mode): void => {
    if (theme === "DARK") {
        if (document.documentElement.classList.contains("dark")) return;
        document.documentElement.classList.add("dark");
    } else if (theme === "LIGHT") {
        if (!document.documentElement.classList.contains("dark")) return;
        document.documentElement.classList.remove("dark");
    }
};
