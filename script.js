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
["Rhythm 22","EEEE · E · E · Q"],
["Rhythm 23","EEEE · E · Q · E"],
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

        if(!c.length) throw Error("No legal octave placement");

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
   FACTORIAL MELODY — SELF-CONTAINED SVG LEAD SHEET
   ============================================================ */

const SVG_NS="http://www.w3.org/2000/svg";

function svgEl(name,attrs={},text=""){
    const el=document.createElementNS(SVG_NS,name);
    Object.entries(attrs).forEach(([k,v])=>el.setAttribute(k,v));
    if(text) el.textContent=text;
    return el;
}

function pitchInfo(s){
    const m=s.match(/^([A-G])([#b]?)(\d)$/);
    if(!m) throw Error("Invalid pitch: "+s);

    const letter=m[1];
    const accidental=m[2];
    const octave=Number(m[3]);

    // MIDI-like staff ordering. Treble staff: F5 is line 5.
    const diatonic={
        C:0,D:1,E:2,F:3,G:4,A:5,B:6
    };

    return {
        letter,
        accidental,
        octave,
        step:octave*7+diatonic[letter]
    };
}

function staffY(s,top){

    const p=pitchInfo(s);

    // F5 = top staff line. Each diatonic step is 7 px.
    const f5=5*7+3;
    return top+(f5-p.step)*7;
}

function durationSpecs(text){

    const out=[];

    rhythmTokens(text).forEach(token=>{

        if(token==="Q"){
            out.push({dur:"q",beats:1,beam:false});
        }

        else if(token==="Q."){
            out.push({dur:"qd",beats:1.5,beam:false});
        }

        else if(token==="E"){
            out.push({dur:"e",beats:.5,beam:true});
        }

        else if(token==="EE"){
            out.push(
                {dur:"e",beats:.5,beam:true},
                {dur:"e",beats:.5,beam:true}
            );
        }

        else if(token==="EEEE"){
            // Four eighth-note attacks = two beats.
            out.push(
                {dur:"e",beats:.5,beam:true},
                {dur:"e",beats:.5,beam:true},
                {dur:"e",beats:.5,beam:true},
                {dur:"e",beats:.5,beam:true}
            );
        }
    });

    return out;
}

function drawText(svg,x,y,text,size=14,weight="normal",anchor="middle"){
    svg.appendChild(svgEl("text",{
        x,y,
        "font-family":"Arial, Helvetica, sans-serif",
        "font-size":size,
        "font-weight":weight,
        "text-anchor":anchor,
        fill:"#111"
    },text));
}

function drawStaff(svg,x,y,w,showClef=false,showTime=false,measureNumber=null){

    for(let i=0;i<5;i++){
        svg.appendChild(svgEl("line",{
            x1:x,y1:y+i*7,x2:x+w,y2:y+i*7,
            stroke:"#111","stroke-width":1
        }));
    }

    if(showClef){
        drawText(svg,x+9,y+27,"𝄞",40,"normal","middle");
    }

    if(showTime){
        drawText(svg,x+34,y+16,"4",18,"normal","middle");
        drawText(svg,x+34,y+35,"4",18,"normal","middle");
    }

    if(measureNumber!==null){
        drawText(svg,x-12,y+35,String(measureNumber),11,"normal","end");
    }
}

function drawAccidental(svg,x,y,a){
    if(!a) return;
    const symbol=a==="#" ? "♯" : "♭";
    drawText(svg,x-12,y+5,symbol,19,"normal","middle");
}

function drawNote(svg,x,y,note,stemUp=true){

    const r=4.7;

    svg.appendChild(svgEl("ellipse",{
        cx:x,cy:y,rx:r,ry:r*0.78,
        fill:"#111",
        transform:`rotate(-18 ${x} ${y})`
    }));

    const stemX=stemUp ? x+4.2 : x-4.2;
    const stemY2=stemUp ? y-31 : y+31;

    svg.appendChild(svgEl("line",{
        x1:stemX,y1:y,x2:stemX,y2:stemY2,
        stroke:"#111","stroke-width":1.7
    }));

    drawAccidental(svg,x,y,note.accidental);
}

function drawBeam(svg,x1,y1,x2,y2,thickness=4){
    const pts=[
        `${x1},${y1}`,
        `${x2},${y2}`,
        `${x2},${y2+thickness}`,
        `${x1},${y1+thickness}`
    ].join(" ");

    svg.appendChild(svgEl("polygon",{points:pts,fill:"#111"}));
}

function renderMeasureNotes(svg,x,y,w,index){

    const specs=durationSpecs(ro[index][1]);
    const generated=notes[index];

    if(specs.length!==generated.length){
        throw Error("Measure "+(index+1)+" attack mismatch");
    }

    // Start after clef/time-signature zone only where present.
    const start=x+(index%4===0 ? 52 : 13);
    const end=x+w-9;
    const available=end-start;

    let cursor=start;
    const items=[];

    specs.forEach((spec,i)=>{

        const px=available*(spec.beats/4);
        const cx=cursor+px/2;
        const n=pitchInfo(generated[i]);
        const yy=staffY(generated[i],y);

        // Stem direction follows note position.
        const stemUp=yy>=y+14;

        items.push({
            x:cx,y:yy,
            stemUp,
            dur:spec.dur,
            end:cursor+px
        });

        cursor+=px;
    });

    items.forEach(item=>{
        drawNote(svg,item.x,item.y,
            pitchInfo(generated[items.indexOf(item)]),
            item.stemUp
        );
    });

    // Beam consecutive eighth/sixteenth attacks when they belong to the same
    // rhythmic group. Groups are reset by quarter/dotted-quarter attacks.
    let group=[];

    const flush=()=>{
        if(group.length<2){
            group=[];
            return;
        }

        const up=group[0].stemUp;
        const beamY=up
            ? Math.min(...group.map(n=>n.y))-31
            : Math.max(...group.map(n=>n.y))+31;

        const x1=group[0].x+(up?4:-4);
        const x2=group[group.length-1].x+(up?4:-4);

        drawBeam(svg,x1,beamY,x2,beamY,4);

        if(group.some(n=>n.dur==="s")){
            drawBeam(svg,x1,beamY+5,x2,beamY+5,3);
        }

        group=[];
    };

    items.forEach(item=>{
        if(item.dur==="e" || item.dur==="s"){
            group.push(item);
        } else {
            flush();
        }
    });

    flush();
}

function renderScore(){

    const container=document.querySelector("#score");
    if(!container) return;

    container.innerHTML="";

    const width=1180;
    const height=760;

    const svg=document.createElementNS(SVG_NS,"svg");
    svg.setAttribute("viewBox",`0 0 ${width} ${height}`);
    svg.setAttribute("width","100%");
    svg.setAttribute("height",height);
    svg.setAttribute("role","img");
    svg.setAttribute("aria-label","24-bar Factorial Melody generated exercise");

    // Header, modeled on a clean lead-sheet page.
    drawText(svg,width/2,42,"Factorial Melody",32,"bold");
    drawText(svg,width/2,63,"24-BAR GENERATED EXERCISE",12,"normal");

    const left=42;
    const right=24;
    const measureW=(width-left-right)/4;
    const systemGap=112;
    const firstY=92;

    for(let system=0;system<6;system++){

        const y=firstY+system*systemGap;

        for(let col=0;col<4;col++){

            const index=system*4+col;
            const x=left+col*measureW;

            drawStaff(
                svg,
                x,
                y,
                measureW,
                col===0,
                index===0,
                col===0 ? index+1 : null
            );

            // Chord symbol.
            drawText(
                svg,
                x+measureW/2,
                y-16,
                B[index][0],
                15,
                "bold"
            );

            if(index===5 || index===20){
                drawText(
                    svg,
                    x+measureW/2,
                    y+25,
                    "IMPROVISE",
                    13,
                    "bold"
                );
            } else {
                renderMeasureNotes(svg,x,y,measureW,index);
            }

            // Final barline.
            if(col===3){
                svg.appendChild(svgEl("line",{
                    x1:x+measureW-1,y1:y-1,
                    x2:x+measureW-1,y2:y+29,
                    stroke:"#111","stroke-width":2
                }));
            }
        }
    }

    container.appendChild(svg);
}
