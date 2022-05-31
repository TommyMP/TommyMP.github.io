var display = document.getElementById("display");
var cl = document.getElementById("cl");

function writeCommand(cmd) {
    var p = document.createElement("p");
    p.innerHTML = "<b>root@tmp:~#</b> " + cmd;
    display.appendChild(p);
}

function writeMessage(msg) {
    var p = document.createElement("p");
    p.innerHTML = msg;
    display.appendChild(p);
}

function ping() {
    writeMessage("pong");
}

function clear() {
    display.innerHTML = "";
}

function studi() {
    writeMessage("Attualmente sono al quarto anno dell'Istituto Tecnico \"Blaise Pascal\" di Cesena.");
}

function esperienze() {
    writeMessage("Nel 2021 ho partecipato alla Brackeys Game Jam e alla Blackthornprod Game Jam sviluppando Terminus e Murphy's Paddypub, entrambi reperibili su itch.io<br>"+
                 "Nel 2022 invece, ho partecipato con alcuni amici alle Olimpiadi Italiane di Informatica a Squadre classificandoci 65esimi su 472.")
}

function whoami() {
    writeMessage("Sono un ragazzo di 18 anni appassionato sin dalla prima media all'informatica, in modo particolare alla programmazione.<br>" +
                 "Nel tempo libero mi diletto nello sviluppo a tempo perso di videogiochi o siti web.<br>"+
                 "Mi reputo una persona molto creativa e ciò che amo dell'informatica è proprio poter esprimere creatività dando forma alla mia immaginazione.<br>"+
                 "Al fine di poter essere sempre più in grado di esprimere la mia creatività sono spesso spinto dal desiderio e della curiosità di apprendere nuove tecnologie.")
}

function skills() {
    writeMessage("Ho conoscenze approfondite di C# e Applicazioni WPF e buone conoscenze nello sviluppo web Front-End (HTML5, CSS, Javascript, Bootstrap).");
}

function help() {
    writeMessage("studi&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;il mio percorso di studi<br>" + 
                 "esperienze&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;le mie esperienze lavorative e non<br>" + 
                 "whoami&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;alcune informazioni su di me<br>" +
                 "skills&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;le mie abilità e conoscenze<br>" +
                 "ping&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pong<br>"+
                 "clear&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pulisci la console");
}

function handleCommand(cmd) {
    switch(cmd) {
        case 'ping':
            ping();
            break;
        case 'help':
            help();
            break;
        case 'clear':
            clear();
            break;
        case 'studi':
            studi();
            break;
        case 'esperienze':
            esperienze();
            break;
        case 'whoami':
            whoami();
            break;
        case 'skills':
            skills();
        default:
            writeMessage("Comando non valido, scrivi help per una lista di comandi.");
    }
}

cl.addEventListener('keypress', e => {
    if(e.code === "Enter")
    {
        var cmd = cl.value;
        cl.value = "";
        writeCommand(cmd);
        handleCommand(cmd);
    }
})

cl.focus();