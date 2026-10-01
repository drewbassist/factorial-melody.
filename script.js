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

// Playback state.
let audioSynth=null;
let audioLoading=false;
let audioState="stopped";

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

        if(m>=52 && m<=75){
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

function melody(
    scale,
    previous=null,
    rhythmText="Q · E · E · E · E · E"
){

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

        if(!c.length){
            throw Error("No legal octave placement");
        }

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

        }else{

            let n=melody(sel[i],prev,ro[i][1]);

            notes.push(n);

            prev=n[n.length-1].m;
        }
    });
}

function render(){

    const t=document.querySelector("#output");

    if(!t) return;

    t.innerHTML="";

    B.forEach((b,i)=>{

        const imp=(i===5 || i===20);
        const r=ro[i] || R[i];
        const tr=document.createElement("tr");

        if(imp){
            tr.className="improv";
        }

        [
            i+1,
            b[0],
            r[0],
            r[1],
            imp ? "Player chooses" : sel[i],
            imp
                ? "Pitches free"
                : notes[i].map(x=>x.s).join(" · ")
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


/* ============================================================
   FACTORIAL MELODY — ABCJS CHART RENDERER
   ============================================================ */

function abcPitch(note){

    const m=note.s.match(/^([A-G])([#b]?)(\d)$/);

    if(!m){
        throw Error("Invalid pitch: "+note.s);
    }

    const letter=m[1];
    const accidental=m[2];
    const octave=Number(m[3]);

    let abcLetter;
    let marks="";

    if(octave===4){

        abcLetter=letter;

    }else if(octave===5){

        abcLetter=letter.toLowerCase();

    }else if(octave===6){

        abcLetter=letter.toLowerCase();
        marks="'";

    }else if(octave===3){

        abcLetter=letter;
        marks=",";

    }else if(octave===2){

        abcLetter=letter;
        marks=",,";

    }else{

        throw Error(
            "Unsupported octave for ABC: "+octave
        );
    }

    let acc="";

    if(accidental==="#"){
        acc="^";
    }

    if(accidental==="b"){
        acc="_";
    }

    return acc+abcLetter+marks;
}

function abcDurationToken(token){

    if(token==="Q") return "4";
    if(token==="Q.") return "3";
    if(token==="E") return "2";
    if(token==="EE") return "2 2";
    if(token==="EEEE") return "1 1 1 1";

    throw Error(
        "Unknown rhythm token: "+token
    );
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

        if(token==="Q"){
            specs.push("4");

        }else if(token==="Q."){

            specs.push("6");

        }else if(token==="E"){

            specs.push("2");

        }else if(token==="EE"){

            specs.push("2","2");

        }else if(token==="EEEE"){

            specs.push("2","2","2","2");
        }
    });

    const generated=notes[index];

    if(specs.length!==generated.length){

        throw Error(
            "Measure "+(index+1)+
            ": "+specs.length+
            " attacks vs "+
            generated.length+
            " pitches"
        );
    }

    return generated.map((note,i)=>
        abcPitch(note)+specs[i]
    ).join(" ");
}

function chordABC(chord){

    return `"${chord}"`;
}

function abcRhythm(token){

    if(token==="E") return "1";
    if(token==="Q") return "2";
    if(token==="Q.") return "3";
    if(token==="EE") return "1 1";
    if(token==="EEEE") return "1 1 1 1";

    throw Error(
        "Unknown rhythm token: "+token
    );
}

function abcMeasure(index){

    const rhythm=ro[index][1];
    const tokens=rhythmTokens(rhythm);

    // Full 4/4 improvisation bar.
    // With L:1/8, a whole 4/4 bar is 8 eighth-note units.
    if(index===5 || index===20){
        return "z8";
    }

    const pitches=notes[index] || [];
    const attacks=attackCount(rhythm);

    if(pitches.length!==attacks){
        throw Error(
            `Measure ${index+1}: ${attacks} attacks vs ${pitches.length} pitches`
        );
    }

    /*
     * Build atomic note events first, then apply beaming from their
     * metrical positions. In 4/4, eighth notes are beamed only with
     * the other eighth note in the same quarter-note beat. Spaces in
     * ABC break beams; adjacent eighth-note symbols form a beam.
     *
     * This changes engraving only. The generated rhythms and pitches
     * are untouched.
     */
    let p=0;
    let eighthPos=0;
    const events=[];

    const addEvent=(duration)=>{
        const note=pitches[p++];
        events.push({
            abc: abcPitch(note) + String(duration),
            duration: duration,
            start: eighthPos
        });
        eighthPos += duration;
    };

    for(const token of tokens){
        if(token==="E"){
            addEvent(1);
        }else if(token==="EE"){
            addEvent(1);
            addEvent(1);
        }else if(token==="EEEE"){
            addEvent(1);
            addEvent(1);
            addEvent(1);
            addEvent(1);
        }else if(token==="Q"){
            addEvent(2);
        }else if(token==="Q."){
            addEvent(3);
        }else{
            throw Error("Unknown rhythm token: "+token);
        }
    }

    if(eighthPos!==8){
        throw Error(
            `Measure ${index+1}: rhythm occupies ${eighthPos}/8 instead of 8/8`
        );
    }

    let out="";

    events.forEach((event,i)=>{
        if(i>0){
            const prev=events[i-1];
            const beamTogether=
                prev.duration===1 &&
                event.duration===1 &&
                prev.start+1===event.start &&
                Math.floor(prev.start/2)===Math.floor(event.start/2);

            // No space = beam the two eighth notes in ABC.
            // Space = start a new rhythmic/beam group.
            out += beamTogether ? "" : " ";
        }

        out += event.abc;
    });

    return out;
}


/* ============================================================
   PLAYBACK ABC
   ============================================================ */

function buildABC(){

    const header=[
        "X:1",
        "T:Factorial Melody",
        "T:24-Bar Generated Exercise",
        "M:4/4",
        "L:1/8",
        `Q:1/4=${getTempo()}`,
        "K:C",
        "%%barnumbers 1",
        "%%measurefirst 1",
        "%%barsperstaff 4",
        "%%staves (1)",
        "%%stretchlast 1"
    ];

    const bars=[];

    for(let i=0;i<B.length;i++){

        const chord=B[i][0]
            .replace(/♭/g,"b")
            .replace(/♯/g,"#");

        let bar;

        if(i===5 || i===20){

            bar=`"${chord}" z8 |`;

        }else{

            bar=`"${chord}" ${abcMeasure(i)} |`;
        }

        bars.push(bar);
    }

    /*
     * IMPORTANT:
     *
     * The header occupies separate ABC lines.
     * ALL 24 measures are placed on ONE continuous music line.
     *
     * This prevents ABCJS from interpreting each measure as
     * a separate staff line.
     */
    return [
        ...header,
        bars.join(" ")
    ].join("\n");
}


/* ============================================================
   SCORE RENDERING
   ============================================================ */

function renderScore(){

    const container=document.querySelector("#score");

    if(!container) return;

    container.innerHTML="";

    try{

        if(!window.ABCJS || typeof ABCJS.renderAbc!=="function"){
            return;
        }

        /*
         * Validate every generated measure before engraving.
         */
        B.forEach((b,i)=>{

            if(i===5 || i===20){
                return;
            }

            const expected=attackCount(ro[i][1]);
            const actual=notes[i]
                ? notes[i].length
                : 0;

            if(expected!==actual){

                throw Error(
                    `Measure ${i+1}: `+
                    `${expected} attacks vs `+
                    `${actual} pitches`
                );
            }
        });


        /*
         * SIX SYSTEMS.
         *
         * Exactly:
         *
         * 1  2  3  4
         * 5  6  7  8
         * 9 10 11 12
         * 13 14 15 16
         * 17 18 19 20
         * 21 22 23 24
         *
         * Each system is rendered independently.
         * Each ABC music body contains exactly FOUR measures
         * on ONE line.
         */

        const scoreWrap=document.createElement("div");

        scoreWrap.className="score-systems";

        scoreWrap.style.display="block";
        scoreWrap.style.width="100%";
        scoreWrap.style.maxWidth="100%";
        scoreWrap.style.clear="both";

        container.appendChild(scoreWrap);


        /*
         * Render each independent four-measure system at its real
         * display width.  Because each group contains only four bars
         * on one ABC music line, ABCJS keeps the intended 4-bar system
         * without requiring a gigantic SVG that must be scaled down.
         */
        const browserWidth=
            container.clientWidth || 1200;

        // Engrave each four-measure system at the width it will actually
        // occupy on screen.  The old code rendered at 4800+ px and then
        // shrank the finished SVG with CSS, which made the notation
        // effectively disappear.
        const staffWidth=
            Math.max(
                760,
                Math.round(browserWidth - 48)
            );


        for(let group=0;group<6;group++){

            const first=group*4;
            const last=first+4;


            const system=document.createElement("div");

            system.className="score-system";

            system.dataset.measures=
                `${first+1}-${last}`;

            system.style.display="block";
            system.style.width="100%";
            system.style.maxWidth="100%";
            system.style.minWidth="0";
            system.style.clear="both";
            system.style.margin="0 0 18px 0";
            system.style.overflow="hidden";

            scoreWrap.appendChild(system);


            const abc=[
                "X:1",
                group===0
                    ? "T:Factorial Melody"
                    : "T:",
                group===0
                    ? "T:24-Bar Generated Exercise"
                    : "T:",
                "M:4/4",
                "L:1/8",
                `Q:1/4=${getTempo()}`,
                "K:C",
                "%%barnumbers 1",
                "%%measurefirst 1",
                "%%barsperstaff 4",
                "%%stretchlast 1"
            ];


            const bars=[];


            for(let i=first;i<last;i++){

                const chord=B[i][0]
                    .replace(/♭/g,"b")
                    .replace(/♯/g,"#");


                const bar=(i===5 || i===20)

                    ? `"${chord}" z8 |`

                    : `"${chord}" ${abcMeasure(i)} |`;


                bars.push(bar);
            }


            /*
             * THIS IS THE IMPORTANT PART.
             *
             * Four measures are joined with SPACES.
             *
             * There is NO newline between them.
             */
            abc.push(
                bars.join(" ")
            );


            ABCJS.renderAbc(
                system,
                abc.join("\n"),
                {
                    staffwidth:staffWidth,
                    scale:1.0,
                    add_classes:true,
                    oneSvgPerLine:false,
                    paddingtop:
                        group===0 ? 8 : 2,
                    paddingbottom:14,
                    paddingleft:24,
                    paddingright:24
                }
            );


            /*
             * Force the generated SVG to stay inside its own
             * four-measure system.
             */
            system.querySelectorAll("svg").forEach(svg=>{

                svg.style.display="block";
                svg.style.width="100%";
                svg.style.height="auto";
                svg.style.maxWidth="100%";
                svg.style.minWidth="0";

            });


            /*
             * ABCJS starts numbering each independent render at 1.
             * Change those labels to the actual measure numbers.
             */
            const numbers=
                system.querySelectorAll(
                    ".abcjs-bar-number"
                );

            numbers.forEach((el,index)=>{

                el.textContent=
                    String(first+index+1);

            });
        }

    }catch(err){

        container.innerHTML="";

        const msg=document.createElement("div");

        msg.className="score-error";

        msg.textContent=
            "Notation data error: "+err.message;

        container.appendChild(msg);

        console.error(err);
    }
}


/* ============================================================
   TEMPO
   ============================================================ */

function getTempo(){

    const el=document.querySelector("#tempo");

    let bpm=el
        ? Number(el.value)
        : 150;

    if(!Number.isFinite(bpm)){
        bpm=150;
    }

    bpm=Math.round(
        Math.max(
            40,
            Math.min(240,bpm)
        )
    );

    if(el){
        el.value=bpm;
    }

    return bpm;
}


/* ============================================================
   TRANSPORT STATE
   ============================================================ */

function setTransportState(state){

    audioState=state;

    const play=
        document.querySelector("#playPause");

    const status=
        document.querySelector("#transport-status");

    if(!play || !status){
        return;
    }

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


/* ============================================================
   PLAYBACK
   ============================================================ */

function makePlaybackVisual(){

    const abc=buildABC();

    const rendered=
        ABCJS.renderAbc(
            "*",
            abc,
            {
                add_classes:false
            }
        );

    if(!rendered || !rendered[0]){

        throw Error(
            "Could not prepare the generated music for playback."
        );
    }

    return rendered[0];
}


function midiToFrequency(midi){
    return 440*Math.pow(2,(midi-69)/12);
}

function playWithWebAudio(){
    const Ctx=window.AudioContext || window.webkitAudioContext;
    if(!Ctx) throw Error("Web Audio is unavailable in this browser");

    const ctx=audioSynth && audioSynth.context ? audioSynth.context : new Ctx();
    audioSynth={
        context:ctx,
        stopped:false,
        oscillators:[],
        gains:[],
        timeoutIds:[],
        stop(){
            this.stopped=true;
            this.timeoutIds.forEach(clearTimeout);
            this.oscillators.forEach(o=>{try{o.stop();}catch(e){}});
            this.oscillators=[];
            this.gains=[];
        }
    };

    const bpm=getTempo();
    const beat=60/bpm;
    let t=ctx.currentTime+0.08;

    const durationForToken=token=>{
        if(token==="E") return beat/2;
        if(token==="Q") return beat;
        if(token==="Q.") return beat*1.5;
        return 0;
    };

    const playNote=(midi,start,dur)=>{
        if(audioSynth.stopped) return;
        const osc=ctx.createOscillator();
        const gain=ctx.createGain();
        osc.type="triangle";
        osc.frequency.value=midiToFrequency(midi);
        gain.gain.setValueAtTime(0.0001,start);
        gain.gain.exponentialRampToValueAtTime(0.16,start+0.008);
        gain.gain.exponentialRampToValueAtTime(0.0001,Math.max(start+0.02,start+dur-0.015));
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(start);
        osc.stop(start+dur);
        audioSynth.oscillators.push(osc);
        audioSynth.gains.push(gain);
    };

    for(let i=0;i<B.length;i++){
        const tokens=rhythmTokens(ro[i][1]);
        if(i===5 || i===20){
            t += beat*4;
            continue;
        }
        let p=0;
        for(const token of tokens){
            if(token==="EE"){
                for(let k=0;k<2;k++){
                    const n=notes[i][p++];
                    playNote(n.m,t,beat/2); t+=beat/2;
                }
            }else if(token==="EEEE"){
                for(let k=0;k<4;k++){
                    const n=notes[i][p++];
                    playNote(n.m,t,beat/2); t+=beat/2;
                }
            }else{
                const n=notes[i][p++];
                const d=durationForToken(token);
                playNote(n.m,t,d); t+=d;
            }
        }
    }

    const totalMs=Math.max(0,(t-ctx.currentTime)*1000+100);
    audioSynth.timeoutIds.push(setTimeout(()=>{
        if(audioSynth && !audioSynth.stopped){
            audioSynth=null;
            setTransportState("stopped");
        }
    },totalMs));
    return audioSynth;
}

async function playPause(){
    if(audioState==="playing"){
        if(audioSynth){
            if(typeof audioSynth.pause==="function") audioSynth.pause();
            else if(audioSynth.context && audioSynth.context.state==="running") await audioSynth.context.suspend();
            setTransportState("paused");
        }
        return;
    }

    if(audioState==="paused"){
        if(audioSynth){
            if(typeof audioSynth.resume==="function") audioSynth.resume();
            else if(audioSynth.context && audioSynth.context.state==="suspended") await audioSynth.context.resume();
            setTransportState("playing");
        }
        return;
    }

    if(audioLoading) return;

    try{
        audioLoading=true;
        setTransportState("loading");

        // Prefer ABCJS's synth when available, but always have a native browser fallback.
        if(window.ABCJS && ABCJS.synth && ABCJS.synth.CreateSynth){
            const visualObj=makePlaybackVisual();
            const bpm=getTempo();
            const millisecondsPerMeasure=(60000/bpm)*4;
            audioSynth=new ABCJS.synth.CreateSynth();
            await audioSynth.init({
                visualObj:visualObj,
                millisecondsPerMeasure:millisecondsPerMeasure,
                options:{program:0},
                onEnded:()=>{
                    audioSynth=null;
                    audioLoading=false;
                    setTransportState("stopped");
                }
            });
            await audioSynth.prime();
            audioSynth.start();
        }else{
            playWithWebAudio();
        }
        setTransportState("playing");
    }catch(error){
        console.error("Playback error:",error);
        if(audioSynth && typeof audioSynth.stop==="function"){
            try{audioSynth.stop();}catch(e){}
        }
        audioSynth=null;
        setTransportState("stopped");
        const status=document.querySelector("#transport-status");
        if(status) status.textContent="Audio error — click Play again";
    }finally{
        audioLoading=false;
    }
}


function stopPlayback(){

    if(audioSynth){

        try{

            audioSynth.stop();

        }catch(error){

            console.error(
                "Stop error:",
                error
            );
        }
    }

    audioSynth=null;
    audioLoading=false;

    setTransportState("stopped");
}


async function changeTempo(){

    const wasPlaying=
        audioState==="playing";

    stopPlayback();

    if(wasPlaying){

        await playPause();
    }
}


async function initApp(){

/* ============================================================
   EVENT HANDLERS
   ============================================================ */

const playButton=
    document.querySelector("#playPause");

const stopButton=
    document.querySelector("#stopPlayback");

if(playButton){

    playButton.addEventListener(
        "click",
        playPause
    );
}

if(stopButton){

    stopButton.addEventListener(
        "click",
        stopPlayback
    );
}


const tempoControl=
    document.querySelector("#tempo");

if(tempoControl){

    tempoControl.addEventListener(
        "change",
        changeTempo
    );

    tempoControl.addEventListener(
        "blur",
        getTempo
    );
}


/* ============================================================
   GENERATOR CONTROLS
   ============================================================ */

const generateButton=
    document.querySelector("#generate");

const rhythmsButton=
    document.querySelector("#rhythms");

const pentasButton=
    document.querySelector("#pentas");


if(generateButton){

    generateButton.addEventListener(
        "click",
        ()=>{

            try{

                stopPlayback();

                generateAll();

            }catch(error){

                console.error(
                    "Generate error:",
                    error
                );
            }
        }
    );
}


if(rhythmsButton){

    rhythmsButton.addEventListener(
        "click",
        ()=>{

            try{

                stopPlayback();

                ro=shuffle(R);

                makeNotes();

                render();

            }catch(error){

                console.error(
                    "Rhythm randomization error:",
                    error
                );
            }
        }
    );
}


if(pentasButton){

    pentasButton.addEventListener(
        "click",
        ()=>{

            try{

                stopPlayback();

                sel=B.map(
                    b=>
                        b[1].length
                            ? pick(b[1])
                            : null
                );

                makeNotes();

                render();

            }catch(error){

                console.error(
                    "Pentatonic shuffle error:",
                    error
                );
            }
        }
    );
}


/* ============================================================
   INITIAL GENERATION
   ============================================================ */


    generateAll();

}

/*
 * Boot only after BOTH the DOM and ABCJS are available.  The previous
 * version could initialize before ABCJS had loaded, leaving the score blank
 * and making the transport unusable.  We do not change the generator data.
 */
function boot(){
    if(document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", boot, { once:true });
        return;
    }

    initApp();

    // If ABCJS is loaded asynchronously, render again as soon as it appears.
    if(!window.ABCJS || typeof ABCJS.renderAbc !== "function") {
        let tries=0;
        const timer=setInterval(()=>{
            tries++;
            if(window.ABCJS && typeof ABCJS.renderAbc === "function") {
                clearInterval(timer);
                try { renderScore(); } catch(e) { console.error(e); }
            }
            if(tries>100) clearInterval(timer);
        },100);
    }
}

boot();
