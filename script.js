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
["Rhythm 22","EEEE · E · EE · Q"],
["Rhythm 23","EEEE · E · Q · EE"],
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

function attackCount(rhythmText){

    return rhythmText
        .split("·")
        .map(x=>x.trim())
        .reduce((count,token)=>{

            if(token==="Q" || token==="Q."){
                return count+1;
            }

            if(token==="E"){
                return count+1;
            }

            if(token==="EE"){
                return count+2;
            }

            if(token==="EEEE"){
                return count+4;
            }

            return count;
        },0);
}

function melody(scale,previous=null,rhythmText="Q · E · E · E · E · E"){

    let scaleNotes=scale.split(",");

    const count=attackCount(rhythmText);

    // Use every pentatonic pitch class before repeating, then shuffle.
    // If a rhythm contains more than five attacks, additional pitch
    // classes are selected at random.
    let seq=[];

    while(seq.length<count){

        let cycle=shuffle(scaleNotes);

        for(const n of cycle){

            if(seq.length>=count){
                break;
            }

            seq.push(n);
        }
    }

    let out=[];

    for(const n of seq){

        let c=candidates(n).filter(x=>
            previous==null ||
            Math.abs(x.m-previous)<=12
        );

        if(!c.length){
            throw Error("No legal octave placement");
        }

        let p=pick(c);

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

    let t=document.querySelector("#output");

    t.innerHTML="";

    B.forEach((b,i)=>{

        let imp=(i===5 || i===20);

        let r=ro[i] || R[i];

        let tr=document.createElement("tr");

        if(imp){
            tr.className="improv";
        }

        let row=[
            i+1,
            b[0],
            r[0],
            r[1],
            imp ? "Player chooses" : sel[i],
            imp ? "Pitches free" : notes[i].map(x=>x.s).join(" · ")
        ];

        row.forEach(v=>{

            let d=document.createElement("td");

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
   LEAD-SHEET STYLE SCORE
   ============================================================ */

function rhythmTokens(text){
    return text.split("·").map(x=>x.trim()).filter(Boolean);
}

function rhythmToVex(text){
    const out=[];

    rhythmTokens(text).forEach(token=>{

        if(token==="Q"){
            out.push({duration:"q"});
        }

        else if(token==="Q."){
            out.push({duration:"qd"});
        }

        else if(token==="E"){
            out.push({duration:"8"});
        }

        else if(token==="EE"){
            out.push({duration:"8"},{duration:"8"});
        }

        else if(token==="EEEE"){
            out.push(
                {duration:"8"},
                {duration:"8"},
                {duration:"8"},
                {duration:"8"}
            );
        }
    });

    return out;
}

function noteKey(note){
    const m=note.s.match(/^([A-G])([#b]?)(\d)$/);

    if(!m){
        throw Error("Invalid pitch: "+note.s);
    }

    return m[1].toLowerCase()+(m[2]||"")+"/"+m[3];
}

function drawScoreMeasure(ctx,x,y,w,index){

    const VF=Vex.Flow;
    const stave=new VF.Stave(x,y,w);

    if(index%4===0){
        stave.addClef("treble");

        if(index===0){
            stave.addTimeSignature("4/4");
        }
    }

    // Measure numbers: 1, 5, 9, 13, 17, 21.
    if(index%4===0){
        stave.setText(String(index+1),VF.StaveModifier.Position.LEFT,{
            shift_x:-18,
            shift_y:18
        });
    }

    const improv=index===5 || index===20;

    stave.setContext(ctx).draw();

    if(improv){

        const text=new VF.TextNote({
            text:"IMPROVISE",
            font:{
                family:"Arial",
                size:14,
                weight:"bold"
            },
            duration:"4"
        });

        const voice=new VF.Voice({
            num_beats:4,
            beat_value:4
        });

        voice.addTickables([text]);

        new VF.Formatter()
            .joinVoices([voice])
            .format([voice],w-20);

        voice.draw(ctx,stave);
        return;
    }

    const rhythm=ro[index]||R[index];
    const specs=rhythmToVex(rhythm[1]);
    const generated=notes[index]||[];

    const tickables=[];

    specs.forEach((spec,i)=>{

        const pitch=generated[i];

        if(!pitch){
            return;
        }

        const sn=new VF.StaveNote({
            clef:"treble",
            keys:[noteKey(pitch)],
            duration:spec.duration
        });

        const accidental=pitch.s.match(/^([A-G])([#b]?)/)[2];

        if(accidental){
            sn.addAccidental(0,new VF.Accidental(accidental));
        }

        tickables.push(sn);
    });

    const voice=new VF.Voice({
        num_beats:4,
        beat_value:4
    });

    voice.addTickables(tickables);

    new VF.Formatter()
        .joinVoices([voice])
        .format([voice],w-20);

    voice.draw(ctx,stave);

    // Beam eighth-note figures.
    const beams=VF.Beam.generateBeams(tickables,{
        beam_rests:false
    });

    beams.forEach(beam=>beam.setContext(ctx).draw());
}

function renderScore(){

    const container=document.querySelector("#score");

    if(!container || typeof Vex==="undefined"){
        return;
    }

    container.innerHTML="";

    const VF=Vex.Flow;

    // Four measures per system, six systems total.
    const scoreWidth=Math.max(
        1120,
        Math.min(1500,container.clientWidth||1200)
    );

    const left=45;
    const right=18;
    const usable=scoreWidth-left-right;
    const measureWidth=usable/4;

    const systemHeight=128;
    const top=20;
    const height=top+(systemHeight*6)+12;

    const renderer=new VF.Renderer(
        container,
        VF.Renderer.Backends.SVG
    );

    renderer.resize(scoreWidth,height);

    const ctx=renderer.getContext();

    ctx.setFont("Arial",10);

    for(let system=0;system<6;system++){

        const y=top+(system*systemHeight);

        for(let col=0;col<4;col++){

            const index=(system*4)+col;

            drawScoreMeasure(
                ctx,
                left+(col*measureWidth),
                y,
                measureWidth,
                index
            );
        }
    }
}
