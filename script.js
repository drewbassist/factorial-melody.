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

function rhythmBeats(rhythmText){
    return rhythmTokens(rhythmText).reduce((beats,token)=>{
        if(token==="Q") return beats+1;
        if(token==="Q.") return beats+1.5;
        if(token==="E") return beats+0.5;
        if(token==="EE") return beats+1;
        if(token==="EEEE") return beats+2;
        return beats;
    },0);
}

function melody(scale,previous=null,rhythmText="Q · E · E · E · E · E"){

    let scaleNotes=scale.split(",");
    const count=attackCount(rhythmText);
    let seq=[];

    while(seq.length<count){
        for(const n of shuffle(scaleNotes)){
            if(seq.length>=count) break;
            seq.push(n);
        }
    }

    let out=[];

    for(const n of seq){

        let c=candidates(n).filter(x=>
            previous==null || Math.abs(x.m-previous)<=12
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

        if(imp) tr.className="improv";

        [
            i+1,
            b[0],
            r[0],
            r[1],
            imp ? "Player chooses" : sel[i],
            imp ? "Pitches free" : notes[i].map(x=>x.s).join(" · ")
        ].forEach(v=>{
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
   LEAD-SHEET SCORE
   ============================================================ */

function vexRhythm(text){

    const out=[];

    rhythmTokens(text).forEach(token=>{
        if(token==="Q") out.push({duration:"q"});
        else if(token==="Q.") out.push({duration:"qd"});
        else if(token==="E") out.push({duration:"8"});
        else if(token==="EE") out.push({duration:"8"},{duration:"8"});
        else if(token==="EEEE") out.push(
            {duration:"8"},{duration:"8"},{duration:"8"},{duration:"8"}
        );
    });

    return out;
}

function vexKey(note){

    const m=note.s.match(/^([A-G])([#b]?)(\d)$/);
    if(!m) throw Error("Invalid generated pitch: "+note.s);

    return m[1].toLowerCase()+(m[2]||"")+"/"+m[3];
}

function drawChord(ctx,stave,text){

    const VF=Vex.Flow;
    const chord=new VF.StaveText({
        text:text,
        position:VF.StaveText.Position.ABOVE
    });

    chord.setFont("Arial",14,"bold");
    chord.setStave(stave);
    chord.setContext(ctx).draw();
}

function drawImprov(ctx,stave){

    const VF=Vex.Flow;

    const label=new VF.StaveText({
        text:"IMPROVISE",
        position:VF.StaveText.Position.ABOVE
    });

    label.setFont("Arial",12,"bold");
    label.setStave(stave);
    label.setContext(ctx).draw();

    // Leave the staff empty. This is deliberately open space for the player.
}

function drawGeneratedMeasure(ctx,stave,index){

    const VF=Vex.Flow;
    const rhythm=ro[index] || R[index];
    const specs=vexRhythm(rhythm[1]);
    const generated=notes[index] || [];

    if(rhythmBeats(rhythm[1]) !== 4){
        throw Error("Rhythm "+(index+1)+" is not 4/4");
    }

    if(specs.length !== generated.length){
        throw Error(
            "Measure "+(index+1)+": rhythm has "+
            specs.length+" attacks, pitch set has "+
            generated.length
        );
    }

    const tickables=specs.map((spec,i)=>{

        const pitch=generated[i];

        const note=new VF.StaveNote({
            clef:"treble",
            keys:[vexKey(pitch)],
            duration:spec.duration
        });

        const accidental=pitch.s.match(/^([A-G])([#b]?)/)[2];

        if(accidental){
            note.addAccidental(0,new VF.Accidental(accidental));
        }

        return note;
    });

    const voice=new VF.Voice({
        num_beats:4,
        beat_value:4
    });

    voice.addTickables(tickables);

    new VF.Formatter()
        .joinVoices([voice])
        .format([voice],stave.getNoteEndX()-stave.getNoteStartX()-12);

    voice.draw(ctx,stave);

    VF.Beam.generateBeams(tickables,{
        beam_rests:false
    }).forEach(beam=>{
        beam.setContext(ctx).draw();
    });
}

function drawScoreMeasure(ctx,x,y,w,index){

    const VF=Vex.Flow;
    const stave=new VF.Stave(x,y,w);

    if(index%4===0){
        stave.addClef("treble");
        if(index===0) stave.addTimeSignature("4/4");
    }

    stave.setContext(ctx).draw();
    drawChord(ctx,stave,B[index][0]);

    if(index===5 || index===20){
        drawImprov(ctx,stave);
    } else {
        drawGeneratedMeasure(ctx,stave,index);
    }

    if(index%4===0){
        const number=new VF.StaveText({
            text:String(index+1),
            position:VF.StaveText.Position.LEFT
        });

        number.setFont("Arial",10,"normal");
        number.setStave(stave);
        number.setContext(ctx).draw();
    }
}

function renderScore(){

    const container=document.querySelector("#score");
    if(!container) return;

    container.innerHTML="";

    if(typeof Vex==="undefined"){
        container.textContent="Notation library could not be loaded.";
        return;
    }

    const VF=Vex.Flow;
    const width=Math.max(1180,container.clientWidth||1180);
    const left=48;
    const right=18;
    const measureWidth=(width-left-right)/4;
    const systemHeight=126;
    const top=24;
    const height=top+(systemHeight*6)+20;

    const renderer=new VF.Renderer(
        container,
        VF.Renderer.Backends.SVG
    );

    renderer.resize(width,height);

    const ctx=renderer.getContext();
    ctx.setFont("Arial",10);

    for(let system=0;system<6;system++){

        const y=top+system*systemHeight;

        for(let col=0;col<4;col++){

            const index=system*4+col;
            const x=left+col*measureWidth;

            try{
                drawScoreMeasure(ctx,x,y,measureWidth,index);
            } catch(error){

                console.error("Notation error in measure "+(index+1),error);

                // A malformed future rhythm cannot blank the entire score.
                const fallback=new VF.Stave(x,y,measureWidth);
                fallback.setContext(ctx).draw();

                const msg=new VF.StaveText({
                    text:"CHECK RHYTHM",
                    position:VF.StaveText.Position.ABOVE
                });

                msg.setFont("Arial",9,"bold");
                msg.setStave(fallback);
                msg.setContext(ctx).draw();
            }
        }
    }
}
