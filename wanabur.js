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
const
permutations=permute(word);

const word2= 'japen'
const word3= ''

function chercher() {
    var a = document.getElementById("search-bar").value.toLowerCase();

    if (["jeb", "japne", "japan", "japen", "japen 19", "japen 19th"].includes(a)) {
        window.open("japen.html");
    }

    if (permutations.includes(a)) {
        window.open("vortex.html");
    }
}