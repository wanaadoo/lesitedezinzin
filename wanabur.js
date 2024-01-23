function permute(str) {
    const result = [];

    function generatePermutations(current, remaining) {
        if (remaining.length === 0) {
            result.push(current);
            return;
        }

        for (let i = 0; i < remaining.length; i++) {
            const updatedCurrent = current + remaining[i];
            const updatedRemaining = remaining.slice(0, i) + remaining.slice(i + 1);
            generatePermutations(updatedCurrent, updatedRemaining);
        }
    }

    generatePermutations('', str);
    return result;
}

const word = 'vortex';
permutations=permute(word);



function chercher() {
    console.log('Fonction chercher() appelée');
    
    var a = document.getElementById("search-bar").value.toLowerCase();
    console.log('Valeur de a:', a);

    if (["jeb", "japne", "japan", "japen", "Japen"].includes(a)) {
        console.log('Redirection vers /japen.html');
        window.location.href = "/japen.html";
    }


    if (permutations.includes(a)) {
        console.log("Redirection vers /vortex.html");
        window.location.href = "/vortex.html";
        return;
    }

    if (["japen 1", "japne 1", "japan 1", "japEN 1", "JAPEN 1", "japen 1st"].includes(a)) {
        console.log("Redirection vers /japen/japen1.html");
        window.location.href = "/japen/japen1.html";
        return;
    }      

    if (["japen 2", "japne 2", "japan 2", "japEN 2", "JAPEN 2", "japen 2nd"].includes(a)) {
        console.log("Redirection vers /japen/japen2.html");
        window.location.href = "/japen/japen2.html";
        return;
    }

    if (["japen 3", "japne 3", "japan 3", "japEN 3", "JAPEN 3", "japen 3rd"].includes(a)) {
        console.log("Redirection vers /japen/japen3.html");
        window.location.href = "/japen/japen3.html";
        return;
    }

    if (["japen 4", "japne 4", "japan 4", "japEN 4", "JAPEN 4", "japen 4tH"].includes(a)) {
        console.log("Redirection vers /japen/japen4.html");
        window.location.href = "/japen/japen4.html";
        return;
    }

    if (["japen 5", "japne 5", "japan 5", "japEN 5", "JAPEN 5", "japen 5th"].includes(a)) {
        console.log("Redirection vers /japen/japen5.html");
        window.location.href = "/japen/japen5.html";
        return;
    }

    if (["japen 6", "japne 6", "japan 6", "japEN 6", "JAPEN 6", "japen 6th"].includes(a)) {
        console.log("Redirection vers /japen/japen6.html");
        window.location.href = "/japen/japen6.html";
        return;
    }

    if (["japen 7", "japne 7", "japan 7", "japEN 7", "JAPEN 7", "japen 7th"].includes(a)) {
        console.log("Redirection vers /japen/japen7.html");
        window.location.href = "/japen/japen7.html";
        return;
    }

    if (["japen 8", "japne 8", "japan 8", "japEN 8", "JAPEN 8", "japen 8th"].includes(a)) {
        console.log("Redirection vers /japen/japen8.html");
        window.location.href = "/japen/japen8.html";
        return;
    }

    if (["japen 9", "japne 9", "japan 1", "japEN 9", "JAPEN 9", "japen 9th"].includes(a)) {
        console.log("Redirection vers /japen/japen9.html");
        window.location.href = "/japen/japen9.html";
        return;
    }

    if (["japen 10", "japne 10", "japan 10", "japEN 10", "JAPEN 10", "japen 10th"].includes(a)) {
        console.log("Redirection vers /japen/japen10.html");
        window.location.href = "/japen/japen10.html";
        return;
    }

    if (["japen 11", "japne 11", "japan 11", "japEN 11", "JAPEN 11", "japen 11th"].includes(a)) {
        console.log("Redirection vers /japen/japen11.html");
        window.location.href = "/japen/japen11.html";
        return;
    }

    if (["japen 12", "japne 12", "japan 12", "japEN 12", "JAPEN 12", "japen 12th"].includes(a)) {
        console.log("Redirection vers /japen/japen12.html");
        window.location.href = "/japen/japen12.html";
        return;
    }

    if (["japen 13", "japne 13", "japan 13", "japEN 13", "JAPEN 13", "japen 13th"].includes(a)) {
        console.log("Redirection vers /japen/japen13.html");
        window.location.href = "/japen/japen13.html";
        return;
    }

    if (["japen 14", "japne 14", "japan 14", "japEN 14", "JAPEN 14", "japen 14th"].includes(a)) {
        console.log("Redirection vers /japen/japen14.html");
        window.location.href = "/japen/japen14.html";
        return;
    }

    if (["japen 15", "japne 15", "japan 15", "japEN 15", "JAPEN 15", "japen 15th"].includes(a)) {
        console.log("Redirection vers /japen/japen15.html");
        window.location.href = "/japen/japen15.html";
        return;
    }

    if (["japen 16", "japne 16", "japan 16", "japEN 16", "JAPEN 16", "japen 16th"].includes(a)) {
        console.log("Redirection vers /japen/japen16.html");
        window.location.href = "/japen/japen16.html";
        return;
    }

    if (["japen 17", "japne 17", "japan 17", "japEN 17", "JAPEN 17", "japen 17th"].includes(a)) {
        console.log("Redirection vers /japen/japen17.html");
        window.location.href = "/japen/japen17.html";
        return;
    }

    if (["japen 18", "japne 18", "japan 18", "japEN 18", "JAPEN 18", "japen 18th"].includes(a)) {
        console.log("Redirection vers /japen/japen18.html");
        window.location.href = "/japen/japen18.html";
        return;
    }

    if (["japen 19", "japne 19", "japan 19", "japEN 19", "JAPEN 19", "japen 19th"].includes(a)) {
        console.log("Redirection vers /japen/japen19.html");
        window.location.href = "/japen/japen19.html";
        return;
    }

    console.log("Aucun résultat trouvé. Redirection vers /ereur.html");
    window.location.href = "/ereur.html";
    console.log('Fin de la fonction chercher()');
}