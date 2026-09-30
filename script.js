const R=[
["Rhythm 1","Q · EE · EE · Q"],
["Rhythm 2","Q · EE · E · Q · E"],
["Rhythm 3","Q · EE · E · E · E · E"],
["Rhythm 4","EE · Q · E · Q · E"],
["Rhythm 5","EE · Q · E · E · E · E"],
["Rhythm 6","EE · Q · Q · EE"],
["Rhythm 7","E · Q · E · E · E · E · E"],
["Rhythm 8","E · Q · E · Q · EE"],
["Rhythm 9","E · Q · E · EE · Q"],
["Rhythm 10","EEEE · Q · EE"],
["Rhythm 11","EEEE · EE · Q"],
["Rhythm 12","EEEE · E · Q · E"],
["Rhythm 13","E · Q · E · EEEE"],
["Rhythm 14","Q · EE · EEEE"],
["Rhythm 15","EE · Q · EEEE"],
["Rhythm 16","Q · Q · EEEE"],
["Rhythm 17","EEEE · Q. · E"],
["Rhythm 18","Q. · E · EEEE"],
["Rhythm 19","EEEE · Q · Q"],
["Rhythm 20","E · Q. · EEEE"],
["Rhythm 21","EEEE · E · Q."],
["Rhythm 22","EE · E · E · EE · Q"],
["Rhythm 23","EE · E · Q · EE · E"],
["Rhythm 24","EEEE · E · Q · E"]
];

const B=[
["AbM7",[
"Ab,Bb,C,Eb,F",
"Eb,F,G,Bb,C",
"Bb,C,D,F,G",
"F,G,Ab,C,D"
]],

["AbmM7",[
"Ab,Bb,C,Eb,F",
"Eb,F,G,Bb,C",
"Bb,C,D,F,G",
"F,G,Ab,C,D"
]],

["D7/F#",[
"D,E,F#,A,B",
"A,B,C,E,F#",
"D,F,F#,A,C",
"F,Ab,A,C,Eb",
"Ab,B,C,Eb,Gb",
"B,D,D#,F#,A"
]],

["Gm7",[
"G,A,Bb,D,E",
"Bb,C,D,F,G",
"C,D,E,G,A",
"F,G,A,C,D"
]],

["Bb7",[
"Bb,C,D,F,G",
"F,G,Ab,C,D",
"Bb,Db,D,F,Ab",
"Db,E,F,Ab,B",
"E,G,G#,B,D",
"G,Bb,B,D,F"
]],

// MEASURE 6 — PLAYER IMPROVISES
["Eb/G  D7/F#",[]],

["Gm7/F",[
"G,A,Bb,D,E",
"Bb,C,D,F,G",
"C,D,E,G,A",
"F,G,A,C,D"
]],

["C/E",[
"C,D,E,G,A",
"D,E,F#,A,B",
"G,A,B,D,E",
"A,B,C,E,F#"
]],

["FM7",[
"F,G,A,C,D",
"G,A,B,D,E",
"C,D,E,G,A",
"D,E,F,A,B"
]],

["F#m7b5",[
"G,A,B,D,E",
"C,D,E,G,A",
"D,E,F#,A,B",
"A,B,C,E,F#"
]],

["B7",[
"B,C#,D#,F#,G#",
"F#,G#,A,C#,D#",
"B,D,D#,F#,A",
"D,F,F#,A,C",
"E,G,G#,B,D",
"G#,B,C,D#,F#"
]],

["Em7",[
"E,F#,G,B,C#",
"G,A,B,D,E",
"A,B,C#,E,F#",
"D,E,F#,A,B"
]],

["D7",[
"D,E,F#,A,B",
"A,B,C,E,F#",
"D,F,F#,A,C",
"F,Ab,A,C,Eb",
"Ab,B,C,Eb,Gb",
"B,D,D#,F#,A"
]],

["GM7",[
"G,A,Bb,D,E",
"Bb,C,D,F,G",
"C,D,E,G,A",
"F,G,A,C,D"
]],

["Cm7",[
"C,D,Eb,G,A",
"Eb,F,G,Bb,C",
"F,G,A,C,D",
"Bb,C,D,F,G"
]],

["C#dim7",[
"Eb,Gb,G,Bb,Db",
"F#,A,Bb,C#,E",
"D,F,F#,A,C"
]],

["BbM7",[
"Bb,C,D,F,G",
"C,D,E,G,A",
"F,G,A,C,D",
"G,A,Bb,D,E"
]],

["EbM7",[
"Eb,F,G,Bb,C",
"F,G,A,C,D",
"Bb,C,D,F,G",
"C,D,Eb,G,A"
]],

["Em7",[
"E,F#,G,B,C#",
"G,A,B,D,E",
"A,B,C#,E,F#",
"D,E,F#,A,B"
]],

["A7",[
"A,B,C#,E,F#",
"E,F#,G,B,C#",
"A,C#,C,E,G",
"C,Eb,E,G,D",
"Eb,Gb,G,Bb,Db",
"F#,A,Bb,C#,E"
]],

// MEASURE 21 — PLAYER IMPROVISES
["Dm7  Db7",[]],

["F7",[
"F,G,A,C,D",
"C,D,Eb,F,G",
"F,Ab,A,C,Eb",
"Ab,B,C,Eb,Gb",
"B,D,D#,F#,A",
"D,F,F#,A,C"
]],

["BbM7",[
"Bb,C,D,F,G",
"C,D,E,G,A",
"F,G,A,C,D",
"G,A,Bb,D,E"
]],

["EbM7",[
"Eb,F,G,Bb,C",
"F,G,A,C,D",
"Bb,C,D,F,G",
"C,D,Eb,G,A"
]]
];

const PC={
C:0,
"C#":1,
Db:1,
D:2,
"D#":3,
Eb:3,
E:4,
F:5,
"F#":6,
Gb:6,
G:7,
"G#":8,
Ab:8,
A:9,
Bb:10,
B:11
};

let ro=[];
let sel=[];
let notes=[];

const pick=a=>a[Math.floor(Math.random()*a.length)];

function shuffle(a){
    a=[...a];

    for(let i=a.length-1;i;i--){
        let j=Math.floor(Math.random()*(i+1));
        [a[i],a[j]]=[a[j],a[i]];
    }

    return a;
}

function candidates(n){

    let a=[];

    for(let o=3;o<=6;o++){

        let m=12*(o+1)+PC[n];

        if(m>=55 && m<=84){
            a.push({
                s:n+o,
                m:m
            });
        }
    }

    return a;
}


function rhythmTokens(text){
    return text.split("·").map(x=>x.trim()).filter(Boolean);
}

function attackCount(rhythmText){
    return rhythmTokens(rhythmText).reduce((count,token)=>{
        if(token==="Q" || token==="Q." || token==="E") return count+1;
        if(token==="EE") return count+2;
        if(token==="EEEE") return count+4;
        return count;
    },0);
}

function melody(scale,previous=null,rhythmText="Q · E · E · E · E · E"){

    const scaleNotes=scale.split(",");
    const count=attackCount(rhythmText);
    const seq=[];

    while(seq.length<count){
        for(const n of shuffle(scaleNotes)){
            if(seq.length>=count) break;
            seq.push(n);
        }
    }

    const out=[];

    for(const n of seq){

        const c=candidates(n).filter(x=>
            previous==null || Math.abs(x.m-previous)<=12
        );

        if(!c.length) throw Error("No legal octave placement");

        const p=pick(c);
        out.push(p);
        previous=p.m;
    }

    return out;
}

function makeNotes(){

    notes=[];

    let prev=null;

    B.forEach((b,i)=>{

        // Measures 6 and 21:
        // pitches are completely free for the player.
        if(i===5 || i===20){

            notes.push(null);

            // Break melodic continuity at the improvisation measure.
            prev=null;

        } else {

            let n=melody(sel[i],prev,ro[i][1]);

            notes.push(n);

            prev=n[5].m;
        }
    });
}


function render(){

    const t=document.querySelector("#output");
    t.innerHTML="";

    B.forEach((b,i)=>{

        const imp=(i===5 || i===20);
        const r=ro[i] || R[i];
        const tr=document.createElement("tr");

        if(imp) tr.className="improv";

        [
            i+1,
            b[0],
            r[0],
            r[1],
            imp ? "Player chooses" : sel[i],
            imp ? "Pitches free" : notes[i].map(x=>x.s).join(" · ")
        ].forEach(v=>{
            const d=document.createElement("td");
            d.textContent=v;
            tr.appendChild(d);
        });

        t.appendChild(tr);
    });

    renderScore();
}

function generateAll(){

    ro=shuffle(R);

    sel=B.map(b=>
        b[1].length
            ? pick(b[1])
            : null
    );

    makeNotes();

    render();
}

document.querySelector("#generate").onclick=generateAll;

document.querySelector("#rhythms").onclick=()=>{

    ro=shuffle(R);

    // Rhythm randomization can change the number of attacks.
    // Regenerate pitches so every attack has a corresponding pitch.
    makeNotes();

    render();
};

document.querySelector("#pentas").onclick=()=>{

    sel=B.map(b=>
        b[1].length
            ? pick(b[1])
            : null
    );

    makeNotes();

    render();
};

generateAll();

/* ============================================================
   FACTORIAL MELODY — ABCJS CHART RENDERER
   ============================================================ */

function abcPitch(note){

    const m=note.s.match(/^([A-G])([#b]?)(\d)$/);
    if(!m) throw Error("Invalid pitch: "+note.s);

    const letter=m[1];
    const accidental=m[2];
    const octave=Number(m[3]);

    // ABC: uppercase = octave 4, lowercase = octave 5.
    // Commas lower; apostrophes raise.
    let abcLetter;
    let marks="";

    if(octave===4){
        abcLetter=letter;
    } else if(octave===5){
        abcLetter=letter.toLowerCase();
    } else if(octave===6){
        abcLetter=letter.toLowerCase();
        marks="'";
    } else if(octave===3){
        abcLetter=letter;
        marks=",";
    } else if(octave===2){
        abcLetter=letter;
        marks=",,";
    } else {
        throw Error("Unsupported octave for ABC: "+octave);
    }

    let acc="";
    if(accidental==="#") acc="^";
    if(accidental==="b") acc="_";

    return acc+abcLetter+marks;
}

function abcDurationToken(token){

    // L:1/8. Quarter = 2, eighth = 1.
    if(token==="Q") return "4";
    if(token==="Q.") return "3";
    if(token==="E") return "2";
    if(token==="EE") return "2 2";
    if(token==="EEEE") return "1 1 1 1";

    throw Error("Unknown rhythm token: "+token);
}

function rhythmToABC(rhythmText){

    const out=[];

    rhythmTokens(rhythmText).forEach(token=>{
        const value=abcDurationToken(token);
        out.push(value);
    });

    return out.join(" ");
}

function measureToABC(index){

    if(index===5 || index===20){
        return "z8";
    }

    const rhythm=ro[index][1];
    const specs=[];

    rhythmTokens(rhythm).forEach(token=>{

        if(token==="Q") specs.push("4");
        else if(token==="Q.") specs.push("6");
        else if(token==="E") specs.push("2");
        else if(token==="EE") specs.push("2","2");
        else if(token==="EEEE") specs.push("2","2","2","2");
    });

    const generated=notes[index];

    if(specs.length!==generated.length){
        throw Error(
            "Measure "+(index+1)+
            ": "+specs.length+" attacks vs "+
            generated.length+" pitches"
        );
    }

    return generated.map((note,i)=>
        abcPitch(note)+specs[i]
    ).join(" ");
}

function chordABC(chord){
    // ABC guitar-chord quotes accept slash chords and spaces.
    return `"${chord}"`;
}

function abcRhythm(token){

    // With L:1/8:
    // E = 1/8, Q = 1/4, Q. = 3/8,
    // EE = two eighth-note attacks,
    // EEEE = four eighth-note attacks.
    if(token==="E") return "1";
    if(token==="Q") return "2";
    if(token==="Q.") return "3";
    if(token==="EE") return "1 1";
    if(token==="EEEE") return "1 1 1 1";

    throw Error("Unknown rhythm token: "+token);
}

function abcMeasure(index){

    const rhythm = ro[index][1];
    const tokens = rhythmTokens(rhythm);

    // Full 4/4 improvisation bar.
    if(index === 5 || index === 20) return "z8";

    const pitches = notes[index] || [];
    const attacks = attackCount(rhythm);

    if(pitches.length !== attacks){
        throw Error(
            `Measure ${index + 1}: ${attacks} attacks vs ${pitches.length} pitches`
        );
    }

    let p = 0;
    const out = [];
    let beam = "";

    function flushBeam(){
        if(beam){
            out.push(beam);
            beam = "";
        }
    }

    for(const token of tokens){

        // L:1/8 means an undelimited pitch is an eighth note.
        // Adjacent eighth notes are therefore automatically beamed by abcjs.
        if(token === "E"){
            beam += abcPitch(pitches[p++]);
        }

        else if(token === "EE"){
            beam += abcPitch(pitches[p++]);
            beam += abcPitch(pitches[p++]);
        }

        else if(token === "EEEE"){
            for(let j=0;j<4;j++){
                beam += abcPitch(pitches[p++]);
            }
        }

        else{
            flushBeam();
            out.push(
                abcPitch(pitches[p++]) +
                abcRhythm(token)
            );
        }
    }

    flushBeam();

    return out.join(" ");
}

function buildABC(){

    let abc=[
        "X:1",
        "T:Factorial Melody",
        "T:24-Bar Generated Exercise",
        "M:4/4",
        "L:1/8",
        "K:C",
        "%%barnumbers 1",
        "%%measurefirst 1",
        "%%staves (1)",
        "%%stretchlast 1"
    ];

    for(let i=0;i<B.length;i++){

        const chord=B[i][0]
            .replace(/♭/g,"b")
            .replace(/♯/g,"#");

        let bar=abcMeasure(i);

        // Chord symbol above each measure.
        // Quotes are used so abcjs treats it as a chord annotation.
        bar=`"${chord}" ${bar} |`;

        // Keep the two improv measures visibly open.
        if(i===5 || i===20){
            bar=`"${chord}" z8 |`;
        }

        abc.push(bar);
    }

    return abc.join("\n");
}

function renderScore(){

    const container=document.querySelector("#score");
    if(!container) return;

    container.innerHTML="";

    try{

        // Verify data before asking abcjs to engrave it.
        B.forEach((b,i)=>{
            if(i===5 || i===20) return;

            const expected=attackCount(ro[i][1]);
            const actual=notes[i] ? notes[i].length : 0;

            if(expected!==actual){
                throw Error(
                    `Measure ${i+1}: ${expected} attacks vs ${actual} pitches`
                );
            }
        });

        const abc=buildABC();

        ABCJS.renderAbc(
            "score",
            abc,
            {
                responsive:"resize",
                staffwidth:1120,
                scale:1.15,
                add_classes:true,
                paddingtop:12,
                paddingbottom:8,
                paddingleft:12,
                paddingright:12,
                wrap:{
                    minSpacing:1.5,
                    maxSpacing:2.5,
                    preferredMeasuresPerLine:4
                }
            }
        );

        // abcjs uses CSS classes for the engraving. Keep the chart
        // restrained and close to the reference lead-sheet appearance.
        const svg=container.querySelector("svg");

        if(svg){
            svg.setAttribute(
                "aria-label",
                "Factorial Melody 24-bar generated exercise"
            );
        }

    }catch(err){

        container.innerHTML="";
        const msg=document.createElement("div");
        msg.className="score-error";
        msg.textContent="Notation data error: "+err.message;
        container.appendChild(msg);

        console.error(err);
    }
}


/* ============================================================
   AUDIO TRANSPORT
   ============================================================ */

let audioSynth=null;
let audioState="stopped";
let audioLoading=false;

function getTempo(){
    const el=document.querySelector("#tempo");
    let bpm=el ? Number(el.value) : 150;
    if(!Number.isFinite(bpm)) bpm=150;
    bpm=Math.round(Math.max(40,Math.min(240,bpm)));
    if(el) el.value=bpm;
    return bpm;
}

function setTransportState(state){
    audioState=state;

    const play=document.querySelector("#playPause");
    const status=document.querySelector("#transport-status");

    if(!play || !status) return;

    if(state==="playing"){
        play.textContent="Ⅱ Pause";
        status.textContent="Playing";
    }else if(state==="paused"){
        play.textContent="▶ Resume";
        status.textContent="Paused";
    }else if(state==="loading"){
        play.textContent="▶ Play";
        status.textContent="Loading audio…";
    }else{
        play.textContent="▶ Play";
        status.textContent="Ready";
    }
}

function makePlaybackVisual(){
    const abc=buildABC();
    const rendered=ABCJS.renderAbc("*",abc,{add_classes:false});

    if(!rendered || !rendered[0]){
        throw Error("Could not prepare the generated music for playback.");
    }

    return rendered[0];
}

async function playPause(){

    if(audioState==="playing"){
        if(audioSynth){
            audioSynth.pause();
            setTransportState("paused");
        }
        return;
    }

    if(audioState==="paused"){
        if(audioSynth){
            audioSynth.resume();
            setTransportState("playing");
        }
        return;
    }

    if(audioLoading) return;

    try{
        audioLoading=true;
        setTransportState("loading");

        // This occurs inside the user's Play click, satisfying the browser's
        // AudioContext user-gesture requirement.
        const visualObj=makePlaybackVisual();
        const bpm=getTempo();
        const millisecondsPerMeasure=(60000/bpm)*4;

        audioSynth=new ABCJS.synth.CreateSynth();

        await audioSynth.init({
            visualObj:visualObj,
            millisecondsPerMeasure:millisecondsPerMeasure,
            options:{
                program:0
            }
        });

        await audioSynth.prime();
        audioSynth.start();

        setTransportState("playing");

    }catch(error){

        console.error("Playback error:",error);
        audioSynth=null;
        setTransportState("stopped");

        const status=document.querySelector("#transport-status");
        if(status){
            status.textContent="Audio error — click Play again";
        }

    }finally{
        audioLoading=false;
    }
}

function stopPlayback(){

    if(audioSynth){
        try{
            audioSynth.stop();
        }catch(error){
            console.error("Stop error:",error);
        }
    }

    audioSynth=null;
    audioLoading=false;
    setTransportState("stopped");
}

async function changeTempo(){
    const wasPlaying=audioState==="playing";
    stopPlayback();

    if(wasPlaying){
        await playPause();
    }
}

document.querySelector("#playPause").onclick=playPause;
document.querySelector("#stopPlayback").onclick=stopPlayback;

const tempoControl=document.querySelector("#tempo");
if(tempoControl){
    tempoControl.addEventListener("change",changeTempo);
    tempoControl.addEventListener("blur",getTempo);
}


/* ============================================================
   GENERATOR CONTROLS
   ============================================================ */

document.querySelector("#generate").onclick=()=>{
    stopPlayback();
    generateAll();
};

document.querySelector("#rhythms").onclick=()=>{
    stopPlayback();
    ro=shuffle(R);
    makeNotes();
    render();
};

document.querySelector("#pentas").onclick=()=>{
    stopPlayback();
    sel=B.map(b=>b[1].length ? pick(b[1]) : null);
    makeNotes();
    render();
};

generateAll();
