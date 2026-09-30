const R=[
["Rhythm 1","Q · EE · EE · Q"],["Rhythm 2","Q · EE · E · Q · E"],["Rhythm 3","Q · EE · E · E · E · E"],["Rhythm 4","EE · Q · E · Q · E"],["Rhythm 5","EE · Q · E · E · E · E"],["Rhythm 6","EE · Q · Q · EE"],["Rhythm 7","E · Q · E · E · E · E · E"],["Rhythm 8","E · Q · E · Q · EE"],["Rhythm 9","E · Q · E · EE · Q"],["Rhythm 10","EEEE · Q · EE"],["Rhythm 11","EEEE · EE · Q"],["Rhythm 12","EEEE · E · Q · E"],["Rhythm 13","E · Q · E · EEEE"],["Rhythm 14","Q · EE · EEEE"],["Rhythm 15","EE · Q · EEEE"],["Rhythm 16","Q · Q · EEEE"],["Rhythm 17","EEEE · Q. · E"],["Rhythm 18","Q. · E · EEEE"],["Rhythm 19","EEEE · Q · Q"],["Rhythm 20","E · Q. · EEEE"],["Rhythm 21","EEEE · E · Q."],["Rhythm 22","EEEE · E · Q · EE"],["Rhythm 23","EEEE · E · Q · EE · E"],["Rhythm 24","EEEE · E · Q · E"]
];
const B=[
["AbM7",["Ab,Bb,C,Eb,F","Eb,F,G,Bb,C","Bb,C,D,F,G","F,G,Ab,C,D"]],
["AbmM7",["Ab,Bb,C,Eb,F","Eb,F,G,Bb,C","Bb,C,D,F,G","F,G,Ab,C,D"]],
["D7/F#",["D,E,F#,A,B","A,B,C,E,F#","D,F,F#,A,C","F,Ab,A,C,Eb","Ab,B,C,Eb,Gb","B,D,D#,F#,A"]],
["Gm7",["G,A,Bb,D,E","Bb,C,D,F,G","C,D,E,G,A","F,G,A,C,D"]],
["Bb7",["Bb,C,D,F,G","F,G,Ab,C,D","Bb,Db,D,F,Ab","Db,E,F,Ab,B","E,G,G#,B,D","G,Bb,B,D,F"]],
["Eb/G D7/F#",[]],
["Gm7/F",["G,A,Bb,D,E","Bb,C,D,F,G","C,D,E,G,A","F,G,A,C,D"]],
["C/E",["C,D,E,G,A","D,E,F#,A,B","G,A,B,D,E","A,B,C,E,F#"]],
["FM7",["F,G,A,C,D","G,A,B,D,E","C,D,E,G,A","D,E,F,A,B"]],
["F#m7b5",["G,A,B,D,E","C,D,E,G,A","D,E,F#,A,B","A,B,C,E,F#"]],
["B7",["B,C#,D#,F#,G#","F#,G#,A,C#,D#","B,D,D#,F#,A","D,F,F#,A,C","E,G,G#,B,D","G#,B,C,D#,F#"]],
["Em7",["E,F#,G,B,C#","G,A,B,D,E","A,B,C#,E,F#","D,E,F#,A,B"]],
["D7",["D,E,F#,A,B","A,B,C,E,F#","D,F,F#,A,C","F,Ab,A,C,Eb","Ab,B,C,Eb,Gb","B,D,D#,F#,A"]],
["GM7",["G,A,Bb,D,E","Bb,C,D,F,G","C,D,E,G,A","F,G,A,C,D"]],
["Cm7",["C,D,Eb,G,A","Eb,F,G,Bb,C","F,G,A,C,D","Bb,C,D,F,G"]],
["C#dim7",["Eb,Gb,G,Bb,Db","F#,A,Bb,C#,E","D,F,F#,A,C"]],
["BbM7",["Bb,C,D,F,G","C,D,E,G,A","F,G,A,C,D","G,A,Bb,D,E"]],
["EbM7",["Eb,F,G,Bb,C","F,G,A,C,D","Bb,C,D,F,G","C,D,Eb,G,A"]],
["Em7",["E,F#,G,B,C#","G,A,B,D,E","A,B,C#,E,F#","D,E,F#,A,B"]],
["A7",["A,B,C#,E,F#","E,F#,G,B,C#","A,C#,C,E,G","C,Eb,E,G,D","Eb,Gb,G,Bb,Db","F#,A,Bb,C#,E"]],
["Dm7 Db7",[]],
["F7",["F,G,A,C,D","C,D,Eb,F,G","F,Ab,A,C,Eb","Ab,B,C,Eb,Gb","B,D,D#,F#,A","D,F,F#,A,C"]],
["BbM7",["Bb,C,D,F,G","C,D,E,G,A","F,G,A,C,D","G,A,Bb,D,E"]],
["EbM7",["Eb,F,G,Bb,C","F,G,A,C,D","Bb,C,D,F,G","C,D,Eb,G,A"]]
];
const PC={C:0,"C#":1,Db:1,D:2,"D#":3,Eb:3,E:4,F:5,"F#":6,Gb:6,G:7,"G#":8,Ab:8,A:9,Bb:10,B:11};
let ro=[],sel=[],notes=[];
const pick=a=>a[Math.floor(Math.random()*a.length)];
function shuffle(a){a=[...a];for(let i=a.length-1;i;i--){let j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
function candidates(n){let a=[];for(let o=3;o<=6;o++){let m=12*(o+1)+PC[n];if(m>=55&&m<=84)a.push({s:n+o,m})}return a}
function melody(scale,previous=null){let scaleNotes=scale.split(",");let seq=shuffle([...scaleNotes,pick(scaleNotes)]);let out=[];for(const n of seq){let c=candidates(n).filter(x=>previous==null||Math.abs(x.m-previous)<=12);if(!c.length)throw Error("No legal octave placement");let p=pick(c);out.push(p);previous=p.m}return out}
function makeNotes(){notes=[];let prev=null;B.forEach((b,i)=>{if(i===5||i===20){notes.push(null);prev=null}else{let n=melody(sel[i],prev);notes.push(n);prev=n[n.length-1].m}})}
function rhythmTokens(text){return text.split("·").map(x=>x.trim()).filter(Boolean)}
function attackCount(text){let n=0;for(const t of rhythmTokens(text)){if(t==="Q"||t==="Q.")n+=1;else if(t==="E")n+=1;else if(t==="EE")n+=2;else if(t==="EEEE")n+=4;else throw Error("Unknown rhythm token: "+t)}return n}
function abcPitch(note){const m=note.match(/^([A-G](?:b|#)?)(\d)$/);if(!m)throw Error("Invalid pitch: "+note);let letter=m[1][0],acc=m[1].slice(1),oct=+m[2];let accidental=acc==="#"?"^":acc==="b"?"_":"";if(oct===4)return accidental+letter.toLowerCase();if(oct>4)return accidental+letter.toLowerCase()+"'".repeat(oct-4);if(oct<4)return accidental+letter.toUpperCase()+",".repeat(4-oct);return accidental+letter.toLowerCase()}
function abcDurToken(tok){if(tok==="Q")return "2";if(tok==="Q.")return "3";if(tok==="E")return "1";if(tok==="EE")return "1 1";if(tok==="EEEE")return "1 1 1 1";throw Error("Unknown rhythm: "+tok)}
function abcMeasure(i){if(i===5||i===20)return 'z4';let rhythm=ro[i][1],tokens=rhythmTokens(rhythm),pitches=notes[i].map(x=>abcPitch(x.s));let expected=attackCount(rhythm),actual=pitches.length;if(expected!==actual)throw Error(`Measure ${i+1}: ${expected} attacks vs ${actual} pitches`);let out=[];let pi=0;for(const tok of tokens){let parts=abcDurToken(tok).split(" ");for(const d of parts){out.push(pitches[pi++]+d)}}return out.join(" ")}
function buildABC(){let lines=["X:1","T:Factorial Melody","T:24-Bar Generated Exercise","M:4/4","L:1/8","K:C clef=treble","Q:1/4="+getTempo()];for(let start=0;start<24;start+=4){let line="";for(let i=start;i<start+4;i++){line+='["'+B[i][0].replaceAll('"','\\"')+'"] '+abcMeasure(i)+" | "}lines.push(line);if(start<20)lines.push("") }return lines.join("\n")}
function renderNotation(){const el=document.querySelector("#notation"),err=document.querySelector("#notationError");err.hidden=true;el.innerHTML="";try{if(!window.ABCJS)throw Error("Notation library could not be loaded.");let abc=buildABC();ABCJS.renderAbc(el,abc,{responsive:"resize",add_classes:true,staffwidth:1400,scale:1.05,format:{titlefont:"Times New Roman 28 bold",subtitlefont:"Arial 16",composerfont:"Arial 12",gchordfont:"Arial 15 bold"}})}catch(e){err.textContent="Notation data error: "+e.message;err.hidden=false;console.error(e)}}
function renderTable(){let t=document.querySelector("#output");t.innerHTML="";B.forEach((b,i)=>{let imp=i===5||i===20,r=ro[i]||R[i];let tr=document.createElement("tr");if(imp)tr.className="improv";[i+1,b[0],r[0],r[1],imp?"Player chooses":sel[i],imp?"Pitches free":notes[i].map(x=>x.s).join(" · ")].forEach(v=>{let d=document.createElement("td");d.textContent=v;tr.appendChild(d)});t.appendChild(tr)})}
function generateAll(){stopPlayback();ro=shuffle(R);sel=B.map(b=>b[1].length?pick(b[1]):null);makeNotes();renderTable();renderNotation()}
document.querySelector("#generate").onclick=generateAll;
document.querySelector("#rhythms").onclick=()=>{stopPlayback();ro=shuffle(R);makeNotes();renderTable();renderNotation()};
document.querySelector("#pentas").onclick=()=>{stopPlayback();sel=B.map(b=>b[1].length?pick(b[1]):null);makeNotes();renderTable();renderNotation()};

let audioCtx=null,master=null,playTimer=null,playing=false,playIndex=0,playTimeouts=[];
function getTempo(){let n=Number(document.querySelector("#tempo").value)||150;return Math.round(Math.max(40,Math.min(240,n)))}
function setTransportState(s){document.querySelector("#transportStatus").textContent=s;document.querySelector("#playPause").textContent=s==="Playing"?"Ⅱ Pause":s==="Paused"?"▶ Resume":"▶ Play"}
function ensureAudio(){if(!audioCtx){audioCtx=new(window.AudioContext||window.webkitAudioContext)();master=audioCtx.createGain();master.gain.value=.16;master.connect(audioCtx.destination)}if(audioCtx.state==="suspended")return audioCtx.resume()}
function freqForMidi(m){return 440*Math.pow(2,(m-69)/12)}
function clickSound(time){let o=audioCtx.createOscillator(),g=audioCtx.createGain();o.type="sine";o.frequency.value=1000;g.gain.setValueAtTime(.12,time);g.gain.exponentialRampToValueAtTime(.001,time+.045);o.connect(g).connect(master);o.start(time);o.stop(time+.05)}
function noteSound(midi,time,dur){let o=audioCtx.createOscillator(),g=audioCtx.createGain();o.type="triangle";o.frequency.value=freqForMidi(midi);g.gain.setValueAtTime(.001,time);g.gain.linearRampToValueAtTime(.18,time+.008);g.gain.setValueAtTime(.18,Math.max(time+.01,time+dur-.03));g.gain.exponentialRampToValueAtTime(.001,time+dur);o.connect(g).connect(master);o.start(time);o.stop(time+dur+.02)}
function scheduleCurrent(){if(!playing)return;let bpm=getTempo(),beat=60/bpm,now=audioCtx.currentTime+.05;let t=now;playTimeouts=[];for(let i=playIndex;i<24;i++){clickSound(t);let imp=i===5||i===20;if(!imp){let tokens=rhythmTokens(ro[i][1]),pi=0;for(const tok of tokens){let dur=tok==="Q"?beat:tok==="Q."?beat*1.5:tok==="E"?beat/2:tok==="EE"?beat:beat*2;let count=tok==="EE"?2:tok==="EEEE"?4:1;for(let k=0;k<count;k++){let p=notes[i][pi++];noteSound(p.m,t, tok==="EEEE"?beat/2:tok==="EE"?beat/2:dur);t+=tok==="EEEE"?beat/2:tok==="EE"?beat/2:dur}}}else t+=beat*4}let totalMs=(t-now)*1000;playTimer=setTimeout(()=>{playing=false;playIndex=0;setTransportState("Ready")},Math.max(0,totalMs+80))}
async function playPlayback(){if(playing)return;if(playIndex>=24)playIndex=0;try{await ensureAudio();playing=true;setTransportState("Playing");scheduleCurrent()}catch(e){setTransportState("Audio error")}}
function stopPlayback(){if(playTimer){clearTimeout(playTimer);playTimer=null}playTimeouts.forEach(clearTimeout);playTimeouts=[];playing=false;playIndex=0;if(audioCtx&&audioCtx.state!=="closed"){}setTransportState("Ready")}
document.querySelector("#playPause").onclick=()=>{if(playing){playing=false;if(playTimer)clearTimeout(playTimer);playTimer=null;setTransportState("Paused")}else playPlayback()};
document.querySelector("#stopPlayback").onclick=stopPlayback;
document.querySelector("#tempo").addEventListener("change",()=>{let v=getTempo();document.querySelector("#tempo").value=v;renderNotation();if(playing){stopPlayback();playPlayback()}});
generateAll();
