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
        if(token==="Q" || token==="Q.") return count+1;
        if(token==="E") return count+1;
        if(token==="EE") return count+2;
        if(token==="EEEE") return count+4;
        return count;
    },0);
}

function melody(scale,previous=null,rhythmText="Q · E · E · E · E · E"){

    const scaleNotes=scale.split(",");
    const count=attackCount(rhythmText);

    // Cycle through the five pitch classes, then repeat as necessary.
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
            previous==null ||
            Math.abs(x.m-previous)<=12
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
   FACTORIAL MELODY — CHART / LEAD-SHEET ENGRAVER
   ============================================================ */

const SVG_NS="http://www.w3.org/2000/svg";

const LETTER_STEP={
    C:0,D:1,E:2,F:3,G:4,A:5,B:6
};

function rhythmSpecs(text){

    const specs=[];

    rhythmTokens(text).forEach(token=>{

        if(token==="Q"){
            specs.push({kind:"quarter",beats:1});
        } else if(token==="Q."){
            specs.push({kind:"dotted-quarter",beats:1.5});
        } else if(token==="E"){
            specs.push({kind:"eighth",beats:.5});
        } else if(token==="EE"){
            specs.push(
                {kind:"eighth",beats:.5,group:true},
                {kind:"eighth",beats:.5,group:true}
            );
        } else if(token==="EEEE"){
            specs.push(
                {kind:"sixteenth",beats:.25,group:true},
                {kind:"sixteenth",beats:.25,group:true},
                {kind:"sixteenth",beats:.25,group:true},
                {kind:"sixteenth",beats:.25,group:true}
            );
        }
    });

    return specs;
}

function pitchParts(s){

    const m=s.match(/^([A-G])([#b]?)(\d)$/);

    if(!m) throw Error("Bad pitch: "+s);

    return {
        letter:m[1],
        accidental:m[2],
        octave:Number(m[3]),
        step:Number(m[3])*7+LETTER_STEP[m[1]]
    };
}

function pitchY(s,staffTop){

    const p=pitchParts(s);

    // Treble staff: F5 is the top line, E4 the bottom line.
    const topStep=5*7+LETTER_STEP.F;

    return staffTop+(topStep-p.step)*5;
}

function svgNode(name,attrs,text){

    const e=document.createElementNS(SVG_NS,name);

    Object.entries(attrs||{}).forEach(([k,v])=>{
        e.setAttribute(k,v);
    });

    if(text!==undefined){
        e.textContent=text;
    }

    return e;
}

function addText(svg,x,y,text,size=14,weight="normal",anchor="middle",family="Arial"){

    svg.appendChild(svgNode("text",{
        x,y,
        "font-family":family,
        "font-size":size,
        "font-weight":weight,
        "text-anchor":anchor,
        fill:"#111"
    },text));
}

function drawLedgerLines(svg,x,y,staffTop){

    const p=pitchParts(y);

    // Ledger lines are every other diatonic step outside E4–F5.
    const bottomStep=4*7+LETTER_STEP.E;
    const topStep=5*7+LETTER_STEP.F;

    if(p.step<bottomStep){
        for(let step=bottomStep-2;step>=p.step;step-=2){
            const ly=staffTop+(topStep-step)*5;
            svg.appendChild(svgNode("line",{
                x1:x-9,y1:ly,x2:x+9,y2:ly,
                stroke:"#111","stroke-width":1
            }));
        }
    }

    if(p.step>topStep){
        for(let step=topStep+2;step<=p.step;step+=2){
            const ly=staffTop+(topStep-step)*5;
            svg.appendChild(svgNode("line",{
                x1:x-9,y1:ly,x2:x+9,y2:ly,
                stroke:"#111","stroke-width":1
            }));
        }
    }
}

function drawAccidental(svg,x,y,a){

    if(!a) return;

    const glyph=a==="#" ? "♯" : "♭";

    addText(svg,x-12,y+5,glyph,18,"normal","middle","Times New Roman");
}

function drawNoteHead(svg,x,y){

    svg.appendChild(svgNode("ellipse",{
        cx:x,cy:y,
        rx:5.4,ry:4.1,
        fill:"#111",
        transform:`rotate(-18 ${x} ${y})`
    }));
}

function drawStem(svg,x,y,up){

    const stemX=up ? x+5 : x-5;
    const endY=up ? y-30 : y+30;

    svg.appendChild(svgNode("line",{
        x1:stemX,y1:y,x2:stemX,y2:endY,
        stroke:"#111","stroke-width":1.7
    }));

    return {x:stemX,y:endY};
}

function drawFlag(svg,x,y,up,count=1){

    const dir=up ? 1 : -1;

    for(let i=0;i<count;i++){

        const yy=y+(i*5*dir);

        const path=up
            ? `M ${x} ${yy} Q ${x+11} ${yy+4} ${x+7} ${yy+11}`
            : `M ${x} ${yy} Q ${x-11} ${yy-4} ${x-7} ${yy-11}`;

        svg.appendChild(svgNode("path",{
            d:path,
            fill:"none",
            stroke:"#111",
            "stroke-width":2
        }));
    }
}

function drawRest(svg,x,y,kind){

    if(kind==="quarter"){
        // Stylized quarter rest.
        svg.appendChild(svgNode("path",{
            d:`M ${x-2} ${y-19} Q ${x+7} ${y-11} ${x-1} ${y-4}
               Q ${x-8} ${y+3} ${x+3} ${y+12}`,
            fill:"none",
            stroke:"#111",
            "stroke-width":2.4
        }));
    }
}

function drawBeam(svg,items,level){

    if(items.length<2) return;

    const up=items[0].up;
    const beamY=up
        ? Math.min(...items.map(n=>n.stemY))
        : Math.max(...items.map(n=>n.stemY));

    const offset=level===2 ? (up?5:-5) : 0;

    const x1=items[0].stemX;
    const x2=items[items.length-1].stemX;

    svg.appendChild(svgNode("polygon",{
        points:up
            ? `${x1},${beamY+offset} ${x2},${beamY+offset}
                    ${x2},${beamY+offset+4} ${x1},${beamY+offset+4}`
            : `${x1},${beamY+offset} ${x2},${beamY+offset}
                    ${x2},${beamY+offset-4} ${x1},${beamY+offset-4}`,
        fill:"#111"
    }));
}

function drawRhythmGroup(svg,items){

    let group=[];

    function flush(){

        if(group.length<2){
            group=[];
            return;
        }

        drawBeam(svg,group,1);

        if(group.some(n=>n.kind==="sixteenth")){
            drawBeam(svg,group,2);
        }

        group=[];
    }

    items.forEach(item=>{

        if(item.kind==="eighth" || item.kind==="sixteenth"){
            group.push(item);
        } else {
            flush();
        }
    });

    flush();
}

function drawMeasure(svg,x,staffTop,w,index){

    const chord=B[index][0];
    const imp=(index===5 || index===20);

    // Staff.
    for(let line=0;line<5;line++){
        const yy=staffTop+(line*10);

        svg.appendChild(svgNode("line",{
            x1:x,y1:yy,x2:x+w,y2:yy,
            stroke:"#111","stroke-width":1
        }));
    }

    // Clef and time signature at the beginning of each system.
    const firstInSystem=(index%4===0);

    if(firstInSystem){
        addText(svg,x+17,staffTop+31,"𝄞",42,"normal","middle","Noto Music, Bravura, serif");

        if(index===0){
            addText(svg,x+43,staffTop+15,"4",17,"normal","middle");
            addText(svg,x+43,staffTop+34,"4",17,"normal","middle");
        }

        addText(svg,x-11,staffTop+35,String(index+1),11,"normal","end");
    }

    // Chord symbol above the bar.
    addText(svg,x+w/2,staffTop-18,chord,15,"bold","middle","Arial");

    if(imp){

        // Open improvisation bar: slash-like visual cue and label.
        addText(svg,x+w/2,staffTop+5,"IMPROVISE",12,"bold");

        for(let k=0;k<4;k++){
            const sx=x+48+(k+0.5)*((w-65)/4);
            svg.appendChild(svgNode("line",{
                x1:sx-5,y1:staffTop+26,
                x2:sx+5,y2:staffTop+16,
                stroke:"#111","stroke-width":1.5
            }));
        }

        return;
    }

    const specs=rhythmSpecs(ro[index][1]);
    const generated=notes[index]||[];

    if(specs.length!==generated.length){
        throw Error(
            `Measure ${index+1}: ${specs.length} notated attacks, `+
            `${generated.length} generated pitches`
        );
    }

    const start=x+(firstInSystem?63:11);
    const end=x+w-8;
    const available=end-start;

    let cursor=start;
    const items=[];

    specs.forEach((spec,i)=>{

        const span=available*(spec.beats/4);
        const cx=cursor+(span/2);
        const pitch=generated[i];
        const py=pitchY(pitch,staffTop);
        const pp=pitchParts(pitch);

        const up=py>=staffTop+20;

        items.push({
            x:cx,
            y:py,
            kind:spec.kind,
            up,
            pitch
        });

        cursor+=span;
    });

    // Ledger lines and noteheads/stems.
    items.forEach(item=>{

        drawLedgerLines(svg,item.x,item.pitch,staffTop);
        drawAccidental(svg,item.x,item.y,pitchParts(item.pitch).accidental);

        drawNoteHead(svg,item.x,item.y);

        const stem=drawStem(svg,item.x,item.y,item.up);

        item.stemX=stem.x;
        item.stemY=stem.y;

        if(item.kind==="eighth"){
            // Individual eighth-note flag unless it will be beamed.
        }

        if(item.kind==="sixteenth"){
            // Individual flags are omitted when beamed.
        }
    });

    // Beam contiguous eighth/sixteenth groups.
    drawRhythmGroup(svg,items);

    // Flags on isolated eighths/sixteenths.
    items.forEach((item,i)=>{

        const previous=items[i-1];
        const next=items[i+1];

        const beamedPrev=previous &&
            (previous.kind==="eighth" || previous.kind==="sixteenth");

        const beamedNext=next &&
            (next.kind==="eighth" || next.kind==="sixteenth");

        if(item.kind==="eighth" && !(beamedPrev||beamedNext)){
            drawFlag(svg,item.stemX,item.stemY,item.up,1);
        }

        if(item.kind==="sixteenth" && !(beamedPrev||beamedNext)){
            drawFlag(svg,item.stemX,item.stemY,item.up,2);
        }
    });

    // Dotted quarter dot.
    items.forEach(item=>{
        if(item.kind==="dotted-quarter"){
            svg.appendChild(svgNode("circle",{
                cx:item.x+9,cy:item.y-1,r:2.1,fill:"#111"
            }));
        }
    });
}

function renderScore(){

    const container=document.querySelector("#score");
    if(!container) return;

    container.innerHTML="";

    const W=1240;
    const H=790;

    const svg=svgNode("svg",{
        viewBox:`0 0 ${W} ${H}`,
        width:"100%",
        height:H,
        "aria-label":"Factorial Melody 24-bar chart"
    });

    // Chart header.
    addText(svg,W/2,43,"Factorial Melody",32,"bold","middle","Georgia");
    addText(svg,W/2,65,"24-BAR GENERATED EXERCISE",11,"normal","middle","Arial");

    // Header rule.
    svg.appendChild(svgNode("line",{
        x1:22,y1:79,x2:W-22,y2:79,
        stroke:"#cfcfcf","stroke-width":1
    }));

    const left=52;
    const right=28;
    const gap=8;
    const measureW=(W-left-right-gap*3)/4;
    const staffTop0=111;
    const systemHeight=112;

    for(let system=0;system<6;system++){

        const y=staffTop0+system*systemHeight;

        for(let col=0;col<4;col++){

            const index=system*4+col;
            const x=left+col*(measureW+gap);

            drawMeasure(svg,x,y,measureW,index);

            // Barline between measures.
            if(col<3){
                svg.appendChild(svgNode("line",{
                    x1:x+measureW,y1:y,
                    x2:x+measureW,y2:y+40,
                    stroke:"#111","stroke-width":1.4
                }));
            }

            // Final barline.
            if(col===3){
                svg.appendChild(svgNode("line",{
                    x1:x+measureW-5,y1:y,
                    x2:x+measureW-5,y2:y+40,
                    stroke:"#111","stroke-width":1
                }));
                svg.appendChild(svgNode("line",{
                    x1:x+measureW-2,y1:y,
                    x2:x+measureW-2,y2:y+40,
                    stroke:"#111","stroke-width":2.5
                }));
            }
        }
    }

    container.appendChild(svg);
}

