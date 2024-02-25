var monElement = document.getElementById("errop_p");
monElement.textContent = "Nouveau contenu textuel";
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
        "vortex": "/vortex.html"
    };
    

    

    if (redirections[a]) {
        window.location.href = redirections[a];
    } else if(!redirections[a]){
        window.location.href = "/ereur.html";
    }
}        