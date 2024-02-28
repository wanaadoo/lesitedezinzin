var monElement = document.getElementById("error_p");
const searchParams = new URLSearchParams(window.location.search);
if (searchParams.has("value")){
monElement.textContent = "Your search '" + searchParams.get("value") + "' was not found"
}
function chercher() {
    var a = document.getElementById("search-bar").value.trim().toLowerCase();
   
    var redirections = {
        "jeb": "/japen.html",
        "japen": "/japen.html",
        "japen 1": "/japen/japen1.html",
        "japen 2": "/japen/japen2.html",
        "japen 3": "/japen/japen3.html",
        "japen 4": "/japen/japen4.html",
        "japen 5": "/japen/japen5.html",
        "japen 6": "/japen/japen6.html",
        "japen 7": "/japen/japen7.html",
        "japen 8": "/japen/japen8.html",
        "japen 9": "/japen/japen9.html",
        "japen 10": "/japen/japen10.html",
        "japen 11": "/japen/japen11.html",
        "japen 12": "/japen/japen12.html",
        "japen 13": "/japen/japen13.html",
        "japen 14": "/japen/japen14.html",
        "japen 15": "/japen/japen15.html",
        "japen 16": "/japen/japen16.html",
        "japen 17": "/japen/japen17.html",
        "japen 18": "/japen/japen18.html",
        "japen 19": "/japen/japen19.html",
        "vortex": "/vortex.html",
        "contact": "/contact.html",
        "collab": "/collab.html",
        "part": "/part.html",
        "parts": "/part.html", 
        "mod": "/mod.html",
        "mods": "/mod.html",
        "fpsb": "/fpsb-x.html",
        "fpsb x": "/fpsb-x.html",
        "fpsbx": "/fpsb-x.html",
        "fpsb-x": "/fpsb-x.html",
        "fpsb 1": "/fpsb-x/fpsb1.html",
        "fpsb 2": "/fpsb-x/fpsb2.html",
        "fpsb 3": "/fpsb-x/fpsb3.html",
        "fpsb 4": "/fpsb-x/fpsb4.html",
        "fpsb 5": "/fpsb-x/fpsb5.html",
        "fpsb 6": "/fpsb-x/fpsb6.html",
        "fpsb 7": "/fpsb-x/fpsb7.html",
        "fpsb 8": "/fpsb-x/fpsb8.html",
        "fpsb 9": "/fpsb-x/fpsb9.html",
        "fpsb 10": "/fpsb-x/fpsb10.html",
        "fpsb 11": "/fpsb-x/fpsb11.html",
        "fpsb 12": "/fpsb-x/fpsb12.html",
    };
    

    

    if (redirections[a]) {
        window.location.href = redirections[a];
    } else if(!redirections[a]){
        window.location.href = "/ereur.html?value="+a;
    }
}        

function handleDiscordClick() {
    alert('You can contact me with my discord "walbur" or on a penspinning serveur like the FPSB !');
}

function home() {
    window.location.href = "/prsite.html";
}

function japen() {
    window.location.href = "/japen.html"
}

function fpsb_x() {
    window.location.href = "/fpsb-x.html"
}

function collab() {
    window.location.href = "/collab.html"
}

function contact() {
    window.location.href = "/contact.html"
}

function Part() {
    window.location.href = "/part.html";
}

function mod() {
    window.location.href = "/mod.html"
}