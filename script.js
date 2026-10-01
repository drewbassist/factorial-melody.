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
let melodySound="rhodes";
let accompanimentSound="piano";
let melodyVolume=1;
let accompanimentVolume=1;

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
        "T:Falling Grace Pentatonic Generator",
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
            system.style.position="relative";

            scoreWrap.appendChild(system);


            const abc=[
                "X:1",
                "M:4/4",
                "L:1/8",
                ...(group===0 ? [`Q:1/4=${getTempo()}`] : []),
                "K:C",
                "%%barnumbers 1",
                `%%measurefirst ${first+1}`,
                "%%barsperstaff 4",
                "%%stretchlast 1"
            ];


            const bars=[];


            for(let i=first;i<last;i++){

                const chord=B[i][0]
                    .replace(/♭/g,"b")
                    .replace(/♯/g,"#");


                let bar;

                if(i===20){
                    bar=`"Dm7" z4 "Db7" z4 |`;
                }else if(i===5){
                    bar=`"${chord}" z8 |`;
                }else{
                    bar=`"${chord}" ${abcMeasure(i)} |`;
                }


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

            // Normalize every bar number to the same low-left position and size.
            // ABCJS supplies bars 2-4 of each system; position those labels
            // consistently, then add the missing first number in the same style.
            const svg=system.querySelector("svg");
            const vb=svg && svg.viewBox && svg.viewBox.baseVal;
            const svgWidth=vb && vb.width ? vb.width : staffWidth;
            const svgHeight=vb && vb.height ? vb.height : 160;
            // Hide ABCJS's own bar-number labels and place one uniform number
            // at the lower-left of each actual measure. Positioning is derived
            // from the rendered barlines, so it does not drift across the system.
            system.querySelectorAll(".abcjs-bar-number").forEach(el=>{
                el.style.display="none";
            });

            const barlines=[...system.querySelectorAll(".abcjs-bar")].map(el=>{
                try{
                    const box=el.getBBox();
                    return {x:box.x,y:box.y,width:box.width,height:box.height};
                }catch(e){
                    return null;
                }
            }).filter(Boolean).sort((a,b)=>a.x-b.x);

            // Collapse duplicate barline elements at the same x coordinate.
            const uniqueBarlines=[];
            barlines.forEach(box=>{
                if(!uniqueBarlines.length || Math.abs(box.x-uniqueBarlines[uniqueBarlines.length-1].x)>2){
                    uniqueBarlines.push(box);
                }
            });

            const staffLines=[...system.querySelectorAll(".abcjs-staff")].map(el=>{
                try{return el.getBBox();}catch(e){return null;}
            }).filter(Boolean);
            const staffBottom=staffLines.length
                ? Math.max(...staffLines.map(box=>box.y+box.height))
                : svgHeight*0.72;
            const numberTop=staffBottom+5;

            for(let localBar=0;localBar<4;localBar++){
                const number=document.createElement("div");
                number.className="fg-uniform-bar-number";
                number.textContent=String(first+localBar+1);

                const leftBar=uniqueBarlines[localBar];
                const x=leftBar ? leftBar.x+7 : 92+localBar*((svgWidth-116)/4);
                number.style.left=`${x/svgWidth*100}%`;
                number.style.top=`${numberTop}px`;
                system.appendChild(number);
            }


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

function chordRootMidi(chord){
    const m=String(chord).match(/^([A-G])([#b]?)/);
    if(!m) return 60;
    const name=m[1]+(m[2]||"");
    const pc=PC[name];
    // Pad register is intentionally one octave higher than the previous accompaniment.
    // Put roots around C4-B4, then build compact voicings above them.
    return 60+pc;
}

function padIntervals(chord){
    const c=String(chord);
    if(/dim7/i.test(c)) return [0,3,6,9];
    if(/m7b5/i.test(c)) return [0,3,6,10];
    if(/mM7/i.test(c)) return [0,3,7,11];
    if(/M7/.test(c)) return [0,4,7,11];
    if(/m7/i.test(c)) return [0,3,7,10];
    if(/7/.test(c)) return [0,4,7,10];
    if(/m/i.test(c)) return [0,3,7];
    return [0,4,7];
}

// Fixed accompaniment voicings for smooth, deterministic voice leading.
// Each entry is a MIDI-note voicing for the corresponding bar (1-24).
const ACCOMP_VOICINGS=[
    [55,60,63,68], [55,59,63,68], [54,60,62,69], [53,58,62,67],
    [53,56,62,70], [55,58,63,67], [53,58,62,67], [52,55,60,64],
    [52,57,60,65], [52,54,57,60], [51,57,59,66], [52,55,59,62],
    [54,57,60,62], [54,59,62,66], [51,55,58,60], [52,55,58,61],
    [53,57,58,62], [55,58,62,63], [55,59,62,64], [55,57,61,64],
    [53,57,60,62], [53,56,58,62], [53,57,58,62], [55,58,62,63]
];

const SOUNDFONT_BASE="https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/";
const SOUNDFONT_PROGRAMS={
    "rhodes":"electric_piano_1",
    "vibraphone":"vibraphone",
    "warm-synth":"synth_strings_1",
    "piano":"acoustic_grand_piano",
    "pad":"synth_strings_1"
};
const soundFontCache=new Map();
const soundFontScriptCache=new Map();

function midiNoteName(midi){
    const names=["C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B"];
    return names[midi%12]+(Math.floor(midi/12)-1);
}

function loadSoundFontScript(program){
    if(window.MIDI && MIDI.Soundfont && MIDI.Soundfont[program]){
        return Promise.resolve(MIDI.Soundfont[program]);
    }
    if(soundFontScriptCache.has(program)) return soundFontScriptCache.get(program);

    const promise=new Promise((resolve,reject)=>{
        window.MIDI=window.MIDI || {};
        MIDI.Soundfont=MIDI.Soundfont || {};

        const script=document.createElement("script");
        script.src=SOUNDFONT_BASE+program+"-mp3.js";
        script.async=true;
        script.onload=()=>{
            const data=MIDI.Soundfont && MIDI.Soundfont[program];
            if(data) resolve(data);
            else reject(Error("SoundFont loaded without instrument data: "+program));
        };
        script.onerror=()=>reject(Error("Could not load SoundFont: "+program));
        document.head.appendChild(script);
    });

    soundFontScriptCache.set(program,promise);
    return promise;
}

function decodeSoundFontSample(ctx,dataUri){
    const comma=dataUri.indexOf(",");
    const raw=atob(dataUri.slice(comma+1));
    const bytes=new Uint8Array(raw.length);
    for(let i=0;i<raw.length;i++) bytes[i]=raw.charCodeAt(i);
    return ctx.decodeAudioData(bytes.buffer);
}

async function loadSoundFontInstrument(ctx,program){
    const key=program+"@"+ctx.sampleRate;
    if(soundFontCache.has(key)) return soundFontCache.get(key);

    const promise=(async()=>{
        const encoded=await loadSoundFontScript(program);
        const decoded={};
        await Promise.all(Object.entries(encoded).map(async([note,dataUri])=>{
            try{ decoded[note]=await decodeSoundFontSample(ctx,dataUri); }
            catch(e){ console.warn("SoundFont sample decode failed:",program,note,e); }
        }));
        return decoded;
    })();

    soundFontCache.set(key,promise);
    return promise;
}

function soundFontBufferForMidi(instrument,midi){
    const exact=midiNoteName(midi);
    if(instrument[exact]) return {buffer:instrument[exact],rate:1};

    let best=null;
    for(let distance=1;distance<=12 && !best;distance++){
        for(const candidate of [midi-distance,midi+distance]){
            const name=midiNoteName(candidate);
            if(instrument[name]){
                best={buffer:instrument[name],rate:Math.pow(2,(midi-candidate)/12)};
                break;
            }
        }
    }
    return best;
}

async function playWithSoundFonts(){
    const Ctx=window.AudioContext || window.webkitAudioContext;
    if(!Ctx) throw Error("Web Audio is unavailable in this browser");

    const ctx=new Ctx();
    const melodyProgram=SOUNDFONT_PROGRAMS[melodySound] || "electric_piano_1";
    const accompanimentProgram=SOUNDFONT_PROGRAMS[accompanimentSound] || "acoustic_grand_piano";

    const [melodyInstrument,accompanimentInstrument]=await Promise.all([
        loadSoundFontInstrument(ctx,melodyProgram),
        loadSoundFontInstrument(ctx,accompanimentProgram)
    ]);

    const melodyMaster=ctx.createGain();
    const accompanimentMaster=ctx.createGain();
    melodyMaster.gain.value=melodyVolume;
    accompanimentMaster.gain.value=accompanimentVolume;
    melodyMaster.connect(ctx.destination);
    accompanimentMaster.connect(ctx.destination);

    audioSynth={
        context:ctx,
        stopped:false,
        sources:[],
        gains:[],
        melodyMaster,
        accompanimentMaster,
        timeoutIds:[],
        async pause(){ if(ctx.state==="running") await ctx.suspend(); },
        async resume(){ if(ctx.state==="suspended") await ctx.resume(); },
        stop(){
            this.stopped=true;
            this.timeoutIds.forEach(clearTimeout);
            this.sources.forEach(source=>{try{source.stop();}catch(e){}});
            this.sources=[];
            this.gains=[];
            try{ctx.close();}catch(e){}
        }
    };

    const bpm=getTempo();
    const beat=60/bpm;
    const barDur=beat*4;
    const startTime=ctx.currentTime+0.08;

    const playSample=(instrument,midi,start,dur,level,destination)=>{
        if(audioSynth.stopped) return;
        const found=soundFontBufferForMidi(instrument,midi);
        if(!found) return;

        const source=ctx.createBufferSource();
        const gain=ctx.createGain();
        source.buffer=found.buffer;
        source.playbackRate.setValueAtTime(found.rate,start);

        gain.gain.setValueAtTime(0.0001,start);
        gain.gain.exponentialRampToValueAtTime(level,start+0.006);
        gain.gain.setValueAtTime(level,start+Math.max(0.01,dur-0.035));
        gain.gain.exponentialRampToValueAtTime(0.0001,start+dur);

        source.connect(gain);
        gain.connect(destination);
        source.start(start);
        source.stop(start+dur+0.02);
        audioSynth.sources.push(source);
        audioSynth.gains.push(gain);
    };

    const playMelodyVoice=(midi,start,dur)=>{
        playSample(melodyInstrument,midi,start,Math.max(0.08,dur),0.34,melodyMaster);
    };

    const playAccompanimentChord=(chord,start,dur)=>{
        const primary=String(chord).trim().split(/\s{2,}/)[0];
        const barIndex=Math.max(0,Math.min(B.length-1,Math.round((start-startTime)/barDur)));
        const fixedVoicing=ACCOMP_VOICINGS[barIndex];
        const chordNotes=fixedVoicing || padIntervals(primary).map(interval=>chordRootMidi(primary)+interval);
        chordNotes.forEach(midi=>playSample(accompanimentInstrument,midi,start,dur,0.105,accompanimentMaster));
    };

    let melodyTime=startTime;
    for(let i=0;i<B.length;i++){
        const barStart=startTime+i*barDur;

        if(i===20){
            // Measure 21: Dm7 on beats 1-2, Db7 on beats 3-4.
            const halfBar=barDur/2;
            const playFixedChord=(voicing,start,dur)=>{
                voicing.forEach(midi=>
                    playSample(accompanimentInstrument,midi,start,dur,0.105,accompanimentMaster)
                );
            };
            playFixedChord([53,57,60,62],barStart,halfBar);
            playFixedChord([53,56,59,61],barStart+halfBar,halfBar);
        }else{
            playAccompanimentChord(B[i][0],barStart,barDur);
        }

        const tokens=rhythmTokens(ro[i][1]);
        if(i===5 || i===20){
            melodyTime += barDur;
            continue;
        }
        let p=0;
        for(const token of tokens){
            if(token==="EE"){
                for(let k=0;k<2;k++){
                    const n=notes[i][p++];
                    playMelodyVoice(n.m,melodyTime,beat/2); melodyTime+=beat/2;
                }
            }else if(token==="EEEE"){
                for(let k=0;k<4;k++){
                    const n=notes[i][p++];
                    playMelodyVoice(n.m,melodyTime,beat/2); melodyTime+=beat/2;
                }
            }else{
                const n=notes[i][p++];
                const d=token==="E" ? beat/2 : token==="Q" ? beat : beat*1.5;
                playMelodyVoice(n.m,melodyTime,d); melodyTime+=d;
            }
        }
    }

    const totalMs=(B.length*barDur+0.2)*1000;
    audioSynth.timeoutIds.push(setTimeout(()=>{
        if(audioSynth && !audioSynth.stopped){
            try{ctx.close();}catch(e){}
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

        // Use sampled SoundFont instruments. Generation, notation, timing and voicings are unchanged.
        await playWithSoundFonts();
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


function updateDisplayLabels(){
    // Display text only. Generator, rhythm, pitch, playback, and layout logic stay unchanged.
    document.title="Falling Grace";

    const h1=document.querySelector("h1");
    if(h1) h1.textContent="Falling Grace";

    // Update/remove only the existing descriptive copy requested by the user.
    const all=[...document.querySelectorAll("body *")];

    all.forEach(el=>{
        // Only inspect leaf elements so parent containers are never removed accidentally.
        if(el.children.length) return;

        const text=(el.textContent || "").trim();

        if(text==="24 fixed harmonic positions · 24 rhythms · pentatonic pitch generation"){
            el.textContent="pentatonic and 24 rhythmic permutations";
            return;
        }

        if(/^E3\s*[–-]\s*Eb5\s*·\s*maximum leap one octave\s*·\s*all five pitch classes used\s*·\s*Measures 6 & 21 improvise$/i.test(text) ||
           /^G3\s*[–-]\s*G4\s*·\s*maximum leap one octave\s*·\s*all five pitch classes used\s*·\s*Measures 6 & 21 improvise$/i.test(text)){
            el.style.display="none";
        }
    });
}

function modernizeControls(){
    // UI only: move the five existing buttons into one row without recreating them.
    // Moving the original DOM nodes preserves their IDs and event handlers.
    const generate=document.querySelector("#generate");
    const rhythms=document.querySelector("#rhythms");
    const pentas=document.querySelector("#pentas");
    const play=document.querySelector("#playPause");
    const stop=document.querySelector("#stopPlayback");

    if(!generate || !rhythms || !pentas || !play || !stop) return;

    const playParent=play.parentElement;
    if(!playParent) return;

    // Keep the existing transport location, but use it as the single control row.
    playParent.classList.add("fg-control-row");
    playParent.insertBefore(generate,play);
    playParent.insertBefore(rhythms,play);
    playParent.insertBefore(pentas,play);

    [generate,rhythms,pentas,play,stop].forEach(button=>{
        button.classList.add("fg-modern-button");
    });
    generate.classList.add("fg-primary-button");
    play.classList.add("fg-play-button");

    // Sound selectors only: these change playback timbre, not generated music or notation.
    const makeSoundSelect=(id,label,options,value,onChange)=>{
        let wrap=document.querySelector("#"+id+"-wrap");
        if(wrap) return;
        wrap=document.createElement("label");
        wrap.id=id+"-wrap";
        wrap.className="fg-sound-control";
        wrap.append(document.createTextNode(label+" "));
        const select=document.createElement("select");
        select.id=id;
        options.forEach(([v,t])=>{
            const option=document.createElement("option");
            option.value=v; option.textContent=t;
            if(v===value) option.selected=true;
            select.appendChild(option);
        });
        select.addEventListener("change",()=>{ stopPlayback(); onChange(select.value); });
        wrap.appendChild(select);
        playParent.appendChild(wrap);
    };

    makeSoundSelect("melodySound","Melody",[
        ["rhodes","Rhodes"],["vibraphone","Vibraphone"],["warm-synth","Warm Synth"]
    ],melodySound,value=>{ melodySound=value; });

    makeSoundSelect("accompanimentSound","Accompaniment",[
        ["piano","Piano"],["rhodes","Rhodes"],["pad","Pad"]
    ],accompanimentSound,value=>{ accompanimentSound=value; });

    // Independent playback volume controls only.
    const makeVolumeControl=(id,label,value,onInput)=>{
        if(document.querySelector("#"+id+"-wrap")) return;
        const wrap=document.createElement("label");
        wrap.id=id+"-wrap";
        wrap.className="fg-volume-control";
        wrap.append(document.createTextNode(label+" "));
        const input=document.createElement("input");
        input.type="range";
        input.id=id;
        input.min="0";
        input.max="100";
        input.step="1";
        input.value=String(Math.round(value*100));
        input.setAttribute("aria-label",label+" volume");
        input.addEventListener("input",()=>onInput(Number(input.value)/100));
        wrap.appendChild(input);
        playParent.appendChild(wrap);
    };

    makeVolumeControl("melodyVolume","Melody Vol",melodyVolume,value=>{
        melodyVolume=value;
        if(audioSynth?.melodyMaster){
            audioSynth.melodyMaster.gain.setValueAtTime(value,audioSynth.context.currentTime);
        }
    });
    makeVolumeControl("accompanimentVolume","Accomp Vol",accompanimentVolume,value=>{
        accompanimentVolume=value;
        if(audioSynth?.accompanimentMaster){
            audioSynth.accompanimentMaster.gain.setValueAtTime(value,audioSynth.context.currentTime);
        }
    });

    // Layout only: place each volume slider directly beneath its sound selector.
    const melodySelectWrap=document.querySelector("#melodySound-wrap");
    const accompanimentSelectWrap=document.querySelector("#accompanimentSound-wrap");
    const melodyVolumeWrap=document.querySelector("#melodyVolume-wrap");
    const accompanimentVolumeWrap=document.querySelector("#accompanimentVolume-wrap");

    const stackControl=(selectWrap,volumeWrap,className)=>{
        if(!selectWrap || !volumeWrap || selectWrap.parentElement?.classList.contains(className)) return;
        const stack=document.createElement("div");
        stack.className="fg-sound-stack "+className;
        selectWrap.parentNode.insertBefore(stack,selectWrap);
        stack.appendChild(selectWrap);
        stack.appendChild(volumeWrap);
    };

    stackControl(melodySelectWrap,melodyVolumeWrap,"fg-melody-stack");
    stackControl(accompanimentSelectWrap,accompanimentVolumeWrap,"fg-accompaniment-stack");

    // Remove any now-empty wrapper that previously held the generator buttons.
    const candidates=[generate,rhythms,pentas].map(b=>b.parentElement);
    document.querySelectorAll("body *").forEach(el=>{
        if(el===playParent || el.children.length!==0) return;
    });

    if(!document.querySelector("#fg-modern-controls-style")){
        const style=document.createElement("style");
        style.id="fg-modern-controls-style";
        style.textContent=`
            .fg-control-row{
                display:flex !important;
                align-items:center !important;
                flex-wrap:wrap !important;
                column-gap:12px !important;
                row-gap:10px !important;
                width:100% !important;
            }
            .fg-uniform-bar-number{
                position:absolute;
                z-index:2;
                transform:translateX(2px);
                font:italic 13px/1 Georgia,"Times New Roman",serif;
                color:#171717;
                pointer-events:none;
            }
            .fg-control-row .fg-modern-button{
                appearance:none;
                -webkit-appearance:none;
                min-height:44px !important;
                padding:0 18px !important;
                margin:0 !important;
                border:1px solid #d0d0d0 !important;
                border-radius:8px !important;
                background:#fff !important;
                color:#171717 !important;
                font:600 14px/1 system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif !important;
                letter-spacing:.01em !important;
                box-shadow:0 1px 2px rgba(0,0,0,.04) !important;
                cursor:pointer !important;
                transition:background .15s ease,border-color .15s ease,box-shadow .15s ease,transform .05s ease !important;
                white-space:nowrap !important;
            }
            .fg-control-row .fg-modern-button:hover{
                background:#f7f7f7 !important;
                border-color:#a9a9a9 !important;
                box-shadow:0 2px 6px rgba(0,0,0,.07) !important;
            }
            .fg-control-row .fg-modern-button:active{
                transform:translateY(1px) !important;
                box-shadow:none !important;
            }
            .fg-control-row .fg-primary-button,
            .fg-control-row .fg-play-button{
                background:#171717 !important;
                border-color:#171717 !important;
                color:#fff !important;
            }
            .fg-control-row .fg-primary-button:hover,
            .fg-control-row .fg-play-button:hover{
                background:#303030 !important;
                border-color:#303030 !important;
            }
            .fg-sound-control{
                display:flex !important;
                align-items:center !important;
                gap:6px !important;
                font:600 13px/1 system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif !important;
                color:#555 !important;
                white-space:nowrap !important;
            }
            .fg-volume-control{
                display:flex !important;
                align-items:center !important;
                gap:6px !important;
                font:600 13px/1 system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif !important;
                color:#555 !important;
                white-space:nowrap !important;
            }
            .fg-volume-control input[type="range"]{
                width:90px !important;
                cursor:pointer !important;
            }
            .fg-sound-stack{
                display:flex !important;
                flex-direction:column !important;
                align-items:flex-start !important;
                gap:7px !important;
            }
            .fg-tempo-inline{
                display:flex !important;
                align-items:center !important;
                gap:6px !important;
                white-space:nowrap !important;
                margin:0 !important;
            }
            .fg-sound-control select{
                min-height:38px !important;
                padding:0 28px 0 10px !important;
                border:1px solid #d0d0d0 !important;
                border-radius:8px !important;
                background:#fff !important;
                color:#171717 !important;
                font:600 13px/1 system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif !important;
                cursor:pointer !important;
            }
            @media (max-width:900px){
                .fg-control-row{gap:8px !important;}
                .fg-control-row .fg-modern-button{padding:0 13px !important;font-size:13px !important;}
            }
        `;
        document.head.appendChild(style);
    }
}

async function initApp(){

    updateDisplayLabels();
    modernizeControls();

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

    // Tempo control only: present the existing 40–240 BPM control as a slider.
    tempoControl.type="range";
    tempoControl.min="40";
    tempoControl.max="240";
    tempoControl.step="1";
    tempoControl.setAttribute("aria-label","Tempo");

    // Display the current numeric BPM beside the existing tempo slider.
    let tempoValue=document.querySelector("#tempo-value");
    if(!tempoValue){
        tempoValue=document.createElement("span");
        tempoValue.id="tempo-value";
        tempoValue.style.marginLeft="8px";
        tempoValue.style.fontWeight="600";
        tempoControl.insertAdjacentElement("afterend",tempoValue);
    }
    const updateTempoValue=()=>{
        tempoValue.textContent=String(getTempo())+" BPM";
    };
    updateTempoValue();
    tempoControl.addEventListener("input",updateTempoValue);

    // Layout only: move Tempo beside the Accompaniment controls.
    const tempoLabel=tempoControl.closest("label") || tempoControl.parentElement;
    const accompanimentStack=document.querySelector(".fg-accompaniment-stack");
    if(tempoLabel && accompanimentStack && !tempoLabel.classList.contains("fg-tempo-inline")){
        tempoLabel.classList.add("fg-tempo-inline");
        accompanimentStack.insertAdjacentElement("afterend",tempoLabel);
        [...tempoLabel.childNodes].forEach(node=>{
            if(node.nodeType===Node.TEXT_NODE && node.textContent.trim()==="BPM"){
                node.textContent="";
            }
        });
    }

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