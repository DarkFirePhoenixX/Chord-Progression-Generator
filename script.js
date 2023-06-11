const scales = {
    c: {
        major: ["C", "Dm", "Em", "F", "G", "Am", "Bdim"],
        minor: ["Cm", "Ddim", "Eb", "Fm", "Gm", "Ab", "Bb"]
    },

    'c#': {
        major: ['C#', 'D#m', 'E#m', 'F#', 'G#', 'Bbm', 'Cdim'],
        minor: ['C#', 'D#dim', 'E', 'F#m', 'G#m', 'A', 'B']
    },

    d: {
        major: ['D', 'E', 'F#m', 'G', 'A', 'Bm', 'Cdim'],
        minor: ['Dm', 'Edim', 'F', 'Gm', 'Am', 'Bb', 'C']
    },

    'd#': {
        major: ['D#', 'Fm', 'Gm', 'G#', 'A#', 'Cm', 'Ddim'],
        minor: ['D#m', 'Fdim', 'F#', 'G#m', 'Bbm', 'B', 'C#']
    },

    e: {
        major: ['E', 'F#', 'G#m', 'A', 'B', 'C#m', 'D#dim'],
        minor: ['Em', 'F#dim', 'G', 'Am', 'Bm', 'C', 'D']
    },

    f: {
        major: ['F', 'Gm', 'Am', 'A#', 'C', 'Dm', 'Edim'],
        minor: ['Fm', 'Gdim', 'G#', 'Bbm', 'Cm', 'C#', 'D#']
    },

    'f#': {
        major: ['F#', 'G#m', 'Bbm', 'B', 'C#', 'D#m', 'Fdim'],
        minor: ['F#m', 'G#dim', 'A', 'Bm', 'C#m', 'D', 'E']
    },

    g: {
        major: ['G', 'A', 'Bm', 'C', 'D', 'Em', 'F#dim'],
        minor: ['Gm', 'Adim', 'A#', 'Cm', 'Dm', 'D#', 'F']
    },

    'g#': {
        major: ['G#', 'A#', 'Cm', 'C#', 'D#', 'Fm', 'Gdim'],
        minor: ['G#m', 'A#dim', 'B', 'C#m', 'D#m', 'E', 'F#']
    },

    a: {
        major: ['A', 'Bm', 'C#m', 'D', 'E', 'F#m', 'G#dim'],
        minor: ['Am', 'Bdim', 'C', 'Dm', 'Em', 'F', 'G']
    },

    'a#': {
        major: ['A#', 'Cm', 'Dm', 'D#', 'F', 'Gm', 'Adim'],
        minor: ['Bbm', 'Cdim', 'C#', 'D#m', 'Fm', 'F#', 'G#']
    },

    b: {
        major: ['B', 'C#', 'D#m', 'E', 'F#', 'G#m', 'A#dim'],
        minor: ['Bm', 'C#dim', 'D', 'Em', 'F#m', 'G', 'A']
    }
}

const progressions = [
    [1, 1, 4, 5],
    [1, 4, 6, 5],
    [1, 5, 6, 4],
    [1, 6, 2, 5],
    [1, 6, 4, 5],
    [1, 2, 5, 5],
    [1, 4, 5, 5],
    [2, 5, 1, 1],
    [1, 6, 3, 7],
    [1, 4, 5, 1],
    [6, 7, 1, 1],
    [1, 7, 6, 7],
    [1, 6, 2, 5],
    [1, 3, 4, 5],
    [1, 4, 1, 5],
    [1, 4, 2, 5],
    [6, 4, 1, 5],
    [4, 5, 6, 1],
    [4, 5, 3, 6]
]


function generator(array) {
    let newProgression = [];
    let lastNumber = 0;
    let randomNumber = Math.random() * progressions.length;
    let progressionArray = [];

    function randomArray() {

        if (randomNumber != lastNumber) {
            progressionArray = progressions[Math.floor(randomNumber)];
            lastNumber = randomNumber;
        } else {
            randomArray();
        }
    }

    randomArray();

    for (let i = 0; i < progressionArray.length; i++) {
        newProgression.push(array[progressionArray[i] - 1]);
    }

    return newProgression;

}

function generate() {
    document.getElementById('scale-name').innerText = '"' + document.getElementById('key').value.toUpperCase() + ' ' + document.getElementById('scale').value.charAt(0).toUpperCase() + document.getElementById('scale').value.slice(1) + '" scale' 
    document.querySelectorAll(".key").forEach(element => element.classList.remove("border-dark", "border-3", "bg-danger"))
    var key = document.getElementById("key").value;
    var scale = document.getElementById("scale").value;

    var generatedProgression = generator(scales[key][scale]);
    if (key == "c" && scale == "major" || key == "a" && scale == "minor") {
        document.querySelectorAll(".keys").forEach(element => element.classList.remove("border-dark", "border-3", "bg-warning"))
        document.querySelectorAll(".whiteKey").forEach(element => element.classList.add("border-dark", "border-3", "bg-warning"))
    }
    else if (key == "c" && scale == "minor" || key == "d#" && scale == "major") {
        document.querySelectorAll(".keys").forEach(element => element.classList.remove("border-dark", "border-3", "bg-warning"))
        document.getElementById("C2").classList.add("border-dark", "border-3", "bg-warning")
        document.getElementById("D2").classList.add("border-dark", "border-3", "bg-warning")
        document.getElementById("D#2").classList.add("border-dark", "border-3", "bg-warning")
        document.getElementById("F2").classList.add("border-dark", "border-3", "bg-warning")
        document.getElementById("G2").classList.add("border-dark", "border-3", "bg-warning")
        document.getElementById("G#2").classList.add("border-dark", "border-3", "bg-warning")
        document.getElementById("A#2").classList.add("border-dark", "border-3", "bg-warning")
    }
    else if (key == "d" && scale == "major" || key == "b" && scale == "minor") {
        document.querySelectorAll(".keys").forEach(element => element.classList.remove("border-dark", "border-3", "bg-warning"))
        document.getElementById("D2").classList.add("border-dark", "border-3", "bg-warning")
        document.getElementById("E2").classList.add("border-dark", "border-3", "bg-warning")
        document.getElementById("F#2").classList.add("border-dark", "border-3", "bg-warning")
        document.getElementById("G2").classList.add("border-dark", "border-3", "bg-warning")
        document.getElementById("A2").classList.add("border-dark", "border-3", "bg-warning")
        document.getElementById("B2").classList.add("border-dark", "border-3", "bg-warning")
        document.getElementById("C#2").classList.add("border-dark", "border-3", "bg-warning")
    }
    else if (key == "d" && scale == "minor" || key == "f" && scale == "major") {
        document.querySelectorAll(".keys").forEach(element => element.classList.remove("border-dark", "border-3", "bg-warning"))
        document.getElementById("D2").classList.add("border-dark", "border-3", "bg-warning")
        document.getElementById("E2").classList.add("border-dark", "border-3", "bg-warning")
        document.getElementById("F2").classList.add("border-dark", "border-3", "bg-warning")
        document.getElementById("G2").classList.add("border-dark", "border-3", "bg-warning")
        document.getElementById("A2").classList.add("border-dark", "border-3", "bg-warning")
        document.getElementById("A#2").classList.add("border-dark", "border-3", "bg-warning")
        document.getElementById("C2").classList.add("border-dark", "border-3", "bg-warning")
    }
    else if (key == "e" && scale == "major" || key == "c#" && scale == "minor") {
        document.querySelectorAll(".keys").forEach(element => element.classList.remove("border-dark", "border-3", "bg-warning"))
        document.getElementById("E2").classList.add("border-dark", "border-3", "bg-warning")
        document.getElementById("F#2").classList.add("border-dark", "border-3", "bg-warning")
        document.getElementById("G#2").classList.add("border-dark", "border-3", "bg-warning")
        document.getElementById("A2").classList.add("border-dark", "border-3", "bg-warning")
        document.getElementById("B2").classList.add("border-dark", "border-3", "bg-warning")
        document.getElementById("C#2").classList.add("border-dark", "border-3", "bg-warning")
        document.getElementById("D#2").classList.add("border-dark", "border-3", "bg-warning")
    }
    else if (key == "e" && scale == "minor" || key == "g" && scale == "major") {
        document.querySelectorAll(".keys").forEach(element => element.classList.remove("border-dark", "border-3", "bg-warning"))
        document.getElementById("E2").classList.add("border-dark", "border-3", "bg-warning")
        document.getElementById("F#2").classList.add("border-dark", "border-3", "bg-warning")
        document.getElementById("G2").classList.add("border-dark", "border-3", "bg-warning")
        document.getElementById("A2").classList.add("border-dark", "border-3", "bg-warning")
        document.getElementById("B2").classList.add("border-dark", "border-3", "bg-warning")
        document.getElementById("D2").classList.add("border-dark", "border-3", "bg-warning")
        document.getElementById("C2").classList.add("border-dark", "border-3", "bg-warning")
    }
    else if (key == "f" && scale == "minor" || key == "g#" && scale == "major") {
        document.querySelectorAll(".keys").forEach(element => element.classList.remove("border-dark", "border-3", "bg-warning"))
        document.getElementById("F2").classList.add("border-dark", "border-3", "bg-warning")
        document.getElementById("G2").classList.add("border-dark", "border-3", "bg-warning")
        document.getElementById("G#2").classList.add("border-dark", "border-3", "bg-warning")
        document.getElementById("A#2").classList.add("border-dark", "border-3", "bg-warning")
        document.getElementById("C2").classList.add("border-dark", "border-3", "bg-warning")
        document.getElementById("C#2").classList.add("border-dark", "border-3", "bg-warning")
        document.getElementById("D#2").classList.add("border-dark", "border-3", "bg-warning")
    }
    else if (key == "g" && scale == "minor" || key == "a#" && scale == "major") {
        document.querySelectorAll(".keys").forEach(element => element.classList.remove("border-dark", "border-3", "bg-warning"))
        document.getElementById("G2").classList.add("border-dark", "border-3", "bg-warning")
        document.getElementById("A2").classList.add("border-dark", "border-3", "bg-warning")
        document.getElementById("A#2").classList.add("border-dark", "border-3", "bg-warning")
        document.getElementById("C2").classList.add("border-dark", "border-3", "bg-warning")
        document.getElementById("D2").classList.add("border-dark", "border-3", "bg-warning")
        document.getElementById("D#2").classList.add("border-dark", "border-3", "bg-warning")
        document.getElementById("F2").classList.add("border-dark", "border-3", "bg-warning")
    }
    else if (key == "a" && scale == "major" || key == "f#" && scale == "minor") {
        document.querySelectorAll(".keys").forEach(element => element.classList.remove("border-dark", "border-3", "bg-warning"))
        document.getElementById("A2").classList.add("border-dark", "border-3", "bg-warning")
        document.getElementById("B2").classList.add("border-dark", "border-3", "bg-warning")
        document.getElementById("C#2").classList.add("border-dark", "border-3", "bg-warning")
        document.getElementById("D2").classList.add("border-dark", "border-3", "bg-warning")
        document.getElementById("E2").classList.add("border-dark", "border-3", "bg-warning")
        document.getElementById("F#2").classList.add("border-dark", "border-3", "bg-warning")
        document.getElementById("G#2").classList.add("border-dark", "border-3", "bg-warning")
    }
    else if (key == "b" && scale == "major" || key == "g#" && scale == "minor") {
        document.querySelectorAll(".keys").forEach(element => element.classList.remove("border-dark", "border-3", "bg-warning"))
        document.getElementById("B2").classList.add("border-dark", "border-3", "bg-warning")
        document.getElementById("C#2").classList.add("border-dark", "border-3", "bg-warning")
        document.getElementById("D#2").classList.add("border-dark", "border-3", "bg-warning")
        document.getElementById("E2").classList.add("border-dark", "border-3", "bg-warning")
        document.getElementById("F#2").classList.add("border-dark", "border-3", "bg-warning")
        document.getElementById("G#2").classList.add("border-dark", "border-3", "bg-warning")
        document.getElementById("A#2").classList.add("border-dark", "border-3", "bg-warning")
    }
    else if (key == "c#" && scale == "major" || key == "a#" && scale == "minor") {
        document.querySelectorAll(".keys").forEach(element => element.classList.remove("border-dark", "border-3", "bg-warning"))
        document.getElementById("C#2").classList.add("border-dark", "border-3", "bg-warning")
        document.getElementById("D#2").classList.add("border-dark", "border-3", "bg-warning")
        document.getElementById("F2").classList.add("border-dark", "border-3", "bg-warning")
        document.getElementById("F#2").classList.add("border-dark", "border-3", "bg-warning")
        document.getElementById("G#2").classList.add("border-dark", "border-3", "bg-warning")
        document.getElementById("A#2").classList.add("border-dark", "border-3", "bg-warning")
        document.getElementById("B2").classList.add("border-dark", "border-3", "bg-warning")
    }
    else if (key == "f#" && scale == "major" || key == "d#" && scale == "minor") {
        document.querySelectorAll(".keys").forEach(element => element.classList.remove("border-dark", "border-3", "bg-warning"))
        document.getElementById("F#2").classList.add("border-dark", "border-3", "bg-warning")
        document.getElementById("G#2").classList.add("border-dark", "border-3", "bg-warning")
        document.getElementById("A#2").classList.add("border-dark", "border-3", "bg-warning")
        document.getElementById("B2").classList.add("border-dark", "border-3", "bg-warning")
        document.getElementById("C#2").classList.add("border-dark", "border-3", "bg-warning")
        document.getElementById("D#2").classList.add("border-dark", "border-3", "bg-warning")
        document.getElementById("F2").classList.add("border-dark", "border-3", "bg-warning")
    }

    for (let i = 1; i < 5; i++) {
        document.getElementById("chord" + i).innerHTML = generatedProgression.shift();
        if (i % 2 == 0) {
            document.getElementById("chord" + i).classList.add("bg-dark", "text-light")
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.chord-tile').forEach(element => element.addEventListener('mouseenter', () => {
        // C Chords
        if (element.innerHTML == "C") {
            document.querySelectorAll(".key").forEach(element => element.classList.remove("border-dark", "border-3", "bg-danger"))
            document.getElementById("C").classList.add("border-dark", "border-3", "bg-danger")
            document.getElementById("E").classList.add("border-dark", "border-3", "bg-danger")
            document.getElementById("G").classList.add("border-dark", "border-3", "bg-danger")
        }
        if (element.innerHTML == "Cm") {
            document.querySelectorAll(".key").forEach(element => element.classList.remove("border-dark", "border-3", "bg-danger"))
            document.getElementById("C").classList.add("border-dark", "border-3", "bg-danger")
            document.getElementById("D#").classList.add("border-dark", "border-3", "bg-danger")
            document.getElementById("G").classList.add("border-dark", "border-3", "bg-danger")
        }
        if (element.innerHTML == "C#") {
            document.querySelectorAll(".key").forEach(element => element.classList.remove("border-dark", "border-3", "bg-danger"))
            document.getElementById("C#").classList.add("border-dark", "border-3", "bg-danger")
            document.getElementById("F").classList.add("border-dark", "border-3", "bg-danger")
            document.getElementById("G#").classList.add("border-dark", "border-3", "bg-danger")
        }
        if (element.innerHTML == "C#m") {
            document.querySelectorAll(".key").forEach(element => element.classList.remove("border-dark", "border-3", "bg-danger"))
            document.getElementById("C#").classList.add("border-dark", "border-3", "bg-danger")
            document.getElementById("E").classList.add("border-dark", "border-3", "bg-danger")
            document.getElementById("G#").classList.add("border-dark", "border-3", "bg-danger")
        }
        if (element.innerHTML == "Cdim") {
            document.querySelectorAll(".key").forEach(element => element.classList.remove("border-dark", "border-3", "bg-danger"))
            document.getElementById("C").classList.add("border-dark", "border-3", "bg-danger")
            document.getElementById("D#").classList.add("border-dark", "border-3", "bg-danger")
            document.getElementById("F#").classList.add("border-dark", "border-3", "bg-danger")
        }
        if (element.innerHTML == "C#dim") {
            document.querySelectorAll(".key").forEach(element => element.classList.remove("border-dark", "border-3", "bg-danger"))
            document.getElementById("C#").classList.add("border-dark", "border-3", "bg-danger")
            document.getElementById("E").classList.add("border-dark", "border-3", "bg-danger")
            document.getElementById("G").classList.add("border-dark", "border-3", "bg-danger")
        }
        // D Chords
        if (element.innerHTML == "D") {
            document.querySelectorAll(".key").forEach(element => element.classList.remove("border-dark", "border-3", "bg-danger"))
            document.getElementById("D").classList.add("border-dark", "border-3", "bg-danger")
            document.getElementById("F#").classList.add("border-dark", "border-3", "bg-danger")
            document.getElementById("A").classList.add("border-dark", "border-3", "bg-danger")
        }
        if (element.innerHTML == "Dm") {
            document.querySelectorAll(".key").forEach(element => element.classList.remove("border-dark", "border-3", "bg-danger"))
            document.getElementById("D").classList.add("border-dark", "border-3", "bg-danger")
            document.getElementById("F").classList.add("border-dark", "border-3", "bg-danger")
            document.getElementById("A").classList.add("border-dark", "border-3", "bg-danger")
        }
        if (element.innerHTML == "D#") {
            document.querySelectorAll(".key").forEach(element => element.classList.remove("border-dark", "border-3", "bg-danger"))
            document.getElementById("D#").classList.add("border-dark", "border-3", "bg-danger")
            document.getElementById("G").classList.add("border-dark", "border-3", "bg-danger")
            document.getElementById("A#").classList.add("border-dark", "border-3", "bg-danger")
        }
        if (element.innerHTML == "D#m") {
            document.querySelectorAll(".key").forEach(element => element.classList.remove("border-dark", "border-3", "bg-danger"))
            document.getElementById("D#").classList.add("border-dark", "border-3", "bg-danger")
            document.getElementById("F#").classList.add("border-dark", "border-3", "bg-danger")
            document.getElementById("A#").classList.add("border-dark", "border-3", "bg-danger")
        }
        if (element.innerHTML == "Ddim") {
            document.querySelectorAll(".key").forEach(element => element.classList.remove("border-dark", "border-3", "bg-danger"))
            document.getElementById("D").classList.add("border-dark", "border-3", "bg-danger")
            document.getElementById("F").classList.add("border-dark", "border-3", "bg-danger")
            document.getElementById("G#").classList.add("border-dark", "border-3", "bg-danger")
        }
        if (element.innerHTML == "D#dim") {
            document.querySelectorAll(".key").forEach(element => element.classList.remove("border-dark", "border-3", "bg-danger"))
            document.getElementById("D#").classList.add("border-dark", "border-3", "bg-danger")
            document.getElementById("F#").classList.add("border-dark", "border-3", "bg-danger")
            document.getElementById("A").classList.add("border-dark", "border-3", "bg-danger")
        }
        // E Chords
        if (element.innerHTML == "E") {
            document.querySelectorAll(".key").forEach(element => element.classList.remove("border-dark", "border-3", "bg-danger"))
            document.getElementById("E").classList.add("border-dark", "border-3", "bg-danger")
            document.getElementById("G#").classList.add("border-dark", "border-3", "bg-danger")
            document.getElementById("B").classList.add("border-dark", "border-3", "bg-danger")
        }
        if (element.innerHTML == "Em") {
            document.querySelectorAll(".key").forEach(element => element.classList.remove("border-dark", "border-3", "bg-danger"))
            document.getElementById("E").classList.add("border-dark", "border-3", "bg-danger")
            document.getElementById("G").classList.add("border-dark", "border-3", "bg-danger")
            document.getElementById("B").classList.add("border-dark", "border-3", "bg-danger")
        }
        if (element.innerHTML == "Edim") {
            document.querySelectorAll(".key").forEach(element => element.classList.remove("border-dark", "border-3", "bg-danger"))
            document.getElementById("E").classList.add("border-dark", "border-3", "bg-danger")
            document.getElementById("G").classList.add("border-dark", "border-3", "bg-danger")
            document.getElementById("A#").classList.add("border-dark", "border-3", "bg-danger")
        }
        if (element.innerHTML == "Ebdim") {
            document.querySelectorAll(".key").forEach(element => element.classList.remove("border-dark", "border-3", "bg-danger"))
            document.getElementById("D#").classList.add("border-dark", "border-3", "bg-danger")
            document.getElementById("F#").classList.add("border-dark", "border-3", "bg-danger")
            document.getElementById("A").classList.add("border-dark", "border-3", "bg-danger")
        }
        if (element.innerHTML == "Ebm") {
            document.querySelectorAll(".key").forEach(element => element.classList.remove("border-dark", "border-3", "bg-danger"))
            document.getElementById("D#").classList.add("border-dark", "border-3", "bg-danger")
            document.getElementById("F#").classList.add("border-dark", "border-3", "bg-danger")
            document.getElementById("A#").classList.add("border-dark", "border-3", "bg-danger")
        }
        if (element.innerHTML == "Eb") {
            document.querySelectorAll(".key").forEach(element => element.classList.remove("border-dark", "border-3", "bg-danger"))
            document.getElementById("D#").classList.add("border-dark", "border-3", "bg-danger")
            document.getElementById("G").classList.add("border-dark", "border-3", "bg-danger")
            document.getElementById("A#").classList.add("border-dark", "border-3", "bg-danger")
        }
        // F Chords
        if (element.innerHTML == "F") {
            document.querySelectorAll(".key").forEach(element => element.classList.remove("border-dark", "border-3", "bg-danger"))
            document.getElementById("F").classList.add("border-dark", "border-3", "bg-danger")
            document.getElementById("A").classList.add("border-dark", "border-3", "bg-danger")
            document.getElementById("C1").classList.add("border-dark", "border-3", "bg-danger")
        }
        if (element.innerHTML == "F#") {
            document.querySelectorAll(".key").forEach(element => element.classList.remove("border-dark", "border-3", "bg-danger"))
            document.getElementById("F#").classList.add("border-dark", "border-3", "bg-danger")
            document.getElementById("A#").classList.add("border-dark", "border-3", "bg-danger")
            document.getElementById("C#1").classList.add("border-dark", "border-3", "bg-danger")
        }
        if (element.innerHTML == "Fm") {
            document.querySelectorAll(".key").forEach(element => element.classList.remove("border-dark", "border-3", "bg-danger"))
            document.getElementById("F").classList.add("border-dark", "border-3", "bg-danger")
            document.getElementById("G#").classList.add("border-dark", "border-3", "bg-danger")
            document.getElementById("C1").classList.add("border-dark", "border-3", "bg-danger")
        }
        if (element.innerHTML == "Fdim") {
            document.querySelectorAll(".key").forEach(element => element.classList.remove("border-dark", "border-3", "bg-danger"))
            document.getElementById("F").classList.add("border-dark", "border-3", "bg-danger")
            document.getElementById("G#").classList.add("border-dark", "border-3", "bg-danger")
            document.getElementById("B").classList.add("border-dark", "border-3", "bg-danger")
        }
        if (element.innerHTML == "F#m") {
            document.querySelectorAll(".key").forEach(element => element.classList.remove("border-dark", "border-3", "bg-danger"))
            document.getElementById("F#").classList.add("border-dark", "border-3", "bg-danger")
            document.getElementById("A#").classList.add("border-dark", "border-3", "bg-danger")
            document.getElementById("C#1").classList.add("border-dark", "border-3", "bg-danger")
        }
        if (element.innerHTML == "F#dim") {
            document.querySelectorAll(".key").forEach(element => element.classList.remove("border-dark", "border-3", "bg-danger"))
            document.getElementById("F#").classList.add("border-dark", "border-3", "bg-danger")
            document.getElementById("A").classList.add("border-dark", "border-3", "bg-danger")
            document.getElementById("C1").classList.add("border-dark", "border-3", "bg-danger")
        }
        // G Chords
        if (element.innerHTML == "G") {
            document.querySelectorAll(".key").forEach(element => element.classList.remove("border-dark", "border-3", "bg-danger"))
            document.getElementById("G").classList.add("border-dark", "border-3", "bg-danger")
            document.getElementById("B").classList.add("border-dark", "border-3", "bg-danger")
            document.getElementById("D1").classList.add("border-dark", "border-3", "bg-danger")
        }
        if (element.innerHTML == "G#") {
            document.querySelectorAll(".key").forEach(element => element.classList.remove("border-dark", "border-3", "bg-danger"))
            document.getElementById("G#").classList.add("border-dark", "border-3", "bg-danger")
            document.getElementById("C1").classList.add("border-dark", "border-3", "bg-danger")
            document.getElementById("D#1").classList.add("border-dark", "border-3", "bg-danger")
        }
        if (element.innerHTML == "G#m") {
            document.querySelectorAll(".key").forEach(element => element.classList.remove("border-dark", "border-3", "bg-danger"))
            document.getElementById("G#").classList.add("border-dark", "border-3", "bg-danger")
            document.getElementById("B").classList.add("border-dark", "border-3", "bg-danger")
            document.getElementById("D#1").classList.add("border-dark", "border-3", "bg-danger")
        }
        if (element.innerHTML == "Gm") {
            document.querySelectorAll(".key").forEach(element => element.classList.remove("border-dark", "border-3", "bg-danger"))
            document.getElementById("G").classList.add("border-dark", "border-3", "bg-danger")
            document.getElementById("A#").classList.add("border-dark", "border-3", "bg-danger")
            document.getElementById("D1").classList.add("border-dark", "border-3", "bg-danger")
        }
        if (element.innerHTML == "Gdim") {
            document.querySelectorAll(".key").forEach(element => element.classList.remove("border-dark", "border-3", "bg-danger"))
            document.getElementById("G").classList.add("border-dark", "border-3", "bg-danger")
            document.getElementById("A#").classList.add("border-dark", "border-3", "bg-danger")
            document.getElementById("D#1").classList.add("border-dark", "border-3", "bg-danger")
        }
        if (element.innerHTML == "G#dim") {
            document.querySelectorAll(".key").forEach(element => element.classList.remove("border-dark", "border-3", "bg-danger"))
            document.getElementById("G#").classList.add("border-dark", "border-3", "bg-danger")
            document.getElementById("B").classList.add("border-dark", "border-3", "bg-danger")
            document.getElementById("D1").classList.add("border-dark", "border-3", "bg-danger")
        }
        // A Chords
        if (element.innerHTML == "Am") {
            document.querySelectorAll(".key").forEach(element => element.classList.remove("border-dark", "border-3", "bg-danger"))
            document.getElementById("A").classList.add("border-dark", "border-3", "bg-danger")
            document.getElementById("C1").classList.add("border-dark", "border-3", "bg-danger")
            document.getElementById("E1").classList.add("border-dark", "border-3", "bg-danger")
        }
        if (element.innerHTML == "A") {
            document.querySelectorAll(".key").forEach(element => element.classList.remove("border-dark", "border-3", "bg-danger"))
            document.getElementById("A").classList.add("border-dark", "border-3", "bg-danger")
            document.getElementById("C#1").classList.add("border-dark", "border-3", "bg-danger")
            document.getElementById("E1").classList.add("border-dark", "border-3", "bg-danger")
        }
        if (element.innerHTML == "A#") {
            document.querySelectorAll(".key").forEach(element => element.classList.remove("border-dark", "border-3", "bg-danger"))
            document.getElementById("A#").classList.add("border-dark", "border-3", "bg-danger")
            document.getElementById("D1").classList.add("border-dark", "border-3", "bg-danger")
            document.getElementById("F1").classList.add("border-dark", "border-3", "bg-danger")
        }
        if (element.innerHTML == "A#dim") {
            document.querySelectorAll(".key").forEach(element => element.classList.remove("border-dark", "border-3", "bg-danger"))
            document.getElementById("A#").classList.add("border-dark", "border-3", "bg-danger")
            document.getElementById("C#1").classList.add("border-dark", "border-3", "bg-danger")
            document.getElementById("E1").classList.add("border-dark", "border-3", "bg-danger")
        }
        if (element.innerHTML == "Adim") {
            document.querySelectorAll(".key").forEach(element => element.classList.remove("border-dark", "border-3", "bg-danger"))
            document.getElementById("A").classList.add("border-dark", "border-3", "bg-danger")
            document.getElementById("C1").classList.add("border-dark", "border-3", "bg-danger")
            document.getElementById("D#1").classList.add("border-dark", "border-3", "bg-danger")
        }
        // B Chords
        if (element.innerHTML == "Ab") {
            document.querySelectorAll(".key").forEach(element => element.classList.remove("border-dark", "border-3", "bg-danger"))
            document.getElementById("G#").classList.add("border-dark", "border-3", "bg-danger")
            document.getElementById("C1").classList.add("border-dark", "border-3", "bg-danger")
            document.getElementById("D#1").classList.add("border-dark", "border-3", "bg-danger")
        }
        if (element.innerHTML == "Abm") {
            document.querySelectorAll(".key").forEach(element => element.classList.remove("border-dark", "border-3", "bg-danger"))
            document.getElementById("G#").classList.add("border-dark", "border-3", "bg-danger")
            document.getElementById("B").classList.add("border-dark", "border-3", "bg-danger")
            document.getElementById("D#1").classList.add("border-dark", "border-3", "bg-danger")
        }
        if (element.innerHTML == "Bdim") {
            document.querySelectorAll(".key").forEach(element => element.classList.remove("border-dark", "border-3", "bg-danger"))
            document.getElementById("B").classList.add("border-dark", "border-3", "bg-danger")
            document.getElementById("D1").classList.add("border-dark", "border-3", "bg-danger")
            document.getElementById("F1").classList.add("border-dark", "border-3", "bg-danger")
        }
        if (element.innerHTML == "B") {
            document.querySelectorAll(".key").forEach(element => element.classList.remove("border-dark", "border-3", "bg-danger"))
            document.getElementById("B").classList.add("border-dark", "border-3", "bg-danger")
            document.getElementById("D#1").classList.add("border-dark", "border-3", "bg-danger")
            document.getElementById("F#1").classList.add("border-dark", "border-3", "bg-danger")
        }
        if (element.innerHTML == "Bb") {
            document.querySelectorAll(".key").forEach(element => element.classList.remove("border-dark", "border-3", "bg-danger"))
            document.getElementById("A#").classList.add("border-dark", "border-3", "bg-danger")
            document.getElementById("D1").classList.add("border-dark", "border-3", "bg-danger")
            document.getElementById("F1").classList.add("border-dark", "border-3", "bg-danger")
        }
        if (element.innerHTML == "Bbm") {
            document.querySelectorAll(".key").forEach(element => element.classList.remove("border-dark", "border-3", "bg-danger"))
            document.getElementById("A#").classList.add("border-dark", "border-3", "bg-danger")
            document.getElementById("C#1").classList.add("border-dark", "border-3", "bg-danger")
            document.getElementById("F1").classList.add("border-dark", "border-3", "bg-danger")
        }
        if (element.innerHTML == "Bm") {
            document.querySelectorAll(".key").forEach(element => element.classList.remove("border-dark", "border-3", "bg-danger"))
            document.getElementById("B").classList.add("border-dark", "border-3", "bg-danger")
            document.getElementById("D1").classList.add("border-dark", "border-3", "bg-danger")
            document.getElementById("F#1").classList.add("border-dark", "border-3", "bg-danger")
        }
        else { }
    }));
})