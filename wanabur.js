function chercher() {
    var a = document.getElementById("search-bar").value.toLowerCase();

    if (["jeb", "japne", "japan", "japen", "japen 19", "japen 19th"].includes(a)) {
        window.open("japen.html");
    }

    if (["vortex", "vt", "Vortex", "VT", "VORTEX", "VORETEX", "vT", "Vt", "voretex", "modder", "VOrtex", "VORtex", "VORTex", "VORTEx"].includes(a)) {
        window.open("vortex.html");
    }
}