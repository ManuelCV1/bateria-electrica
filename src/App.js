import React , {useState,useRef,useEffect}  from 'react';
import './App.css';

function App () {

  //Nombre de cada Sonido:
  const [estado,setEstado] = useState("Sound Name");

  // className Dinamico:
  const [estiloQ,setEstiloQ] = useState(undefined);
  const [estiloW,setEstiloW] = useState(undefined);
  const [estiloE,setEstiloE] = useState(undefined);
  const [estiloA,setEstiloA] = useState(undefined);
  const [estiloS,setEstiloS] = useState(undefined);
  const [estiloD,setEstiloD] = useState(undefined);
  const [estiloZ,setEstiloZ] = useState(undefined);
  const [estiloX,setEstiloX] = useState(undefined);
  const [estiloC,setEstiloC] = useState(undefined);
  
  //Referencia de cada button
  const objAudioQ = useRef(null);
  const objAudioW = useRef(null);
  const objAudioE = useRef(null);
  const objAudioA = useRef(null);
  const objAudioS = useRef(null);
  const objAudioD = useRef(null);
  const objAudioZ = useRef(null);
  const objAudioX = useRef(null);
  const objAudioC = useRef(null);

  //Referencia input Range:
  const objRange = useRef(null);

  //Escuchadores Keydown y Keyup:
  useEffect(()=>{
    document.addEventListener("keydown",manejadorTeclado);
    document.addEventListener("keyup",manejadorTecladoUp);
  })

  //Activacion de cada button:
  const activityQ = () =>{
      objAudioQ.current.play();
      setEstado("Heater 1");
  }

  const activityW = () =>{
    objAudioW.current.play();
    setEstado("Heater 2");
  }

  const activityE = () =>{
    objAudioE.current.play();
    setEstado("Heater 3");
  }

  const activityA = () =>{
    objAudioA.current.play();
    setEstado("Heater 4");
  }

  const activityS = () =>{
    objAudioS.current.play();
    setEstado("Clap");
  }

  const activityD = () =>{
    objAudioD.current.play();
    setEstado("Open-HH");
  }

  const activityZ = () =>{
    objAudioZ.current.play();
    setEstado("Kick-n'-Hat");
  }

  const activityX = () =>{
    objAudioX.current.play();
    setEstado("Kick");
  }

  const activityC = () =>{
    objAudioC.current.play();
    setEstado("Closed-HH");
  }

  //Manejador del Keydown
  const manejadorTeclado = evento => {
    const tecla = evento.key.toLowerCase();
    if(tecla==="q"){
      activityQ();
      setEstiloQ("activo");
    }
    else if(tecla==="w"){
      activityW();
      setEstiloW("activo");
    }
    else if(tecla==="e"){
      activityE();
      setEstiloE("activo");
    }
    else if(tecla==="a"){
      activityA();
      setEstiloA("activo");
    }
    else if(tecla==="s"){
      activityS();
      setEstiloS("activo");
    }
    else if(tecla==="d"){
      activityD();
      setEstiloD("activo");
    }
    else if(tecla==="z"){
      activityZ();
      setEstiloZ("activo");
    }
    else if(tecla==="x"){
      activityX();
      setEstiloX("activo");
    }
    else if(tecla==="c"){
      activityC();
      setEstiloC("activo");
    }
  }

  //Manejador del Keyup:
  const manejadorTecladoUp = evento =>{
    const tecla = evento.key.toLowerCase();
    if(tecla==="q"){
      setEstiloQ(undefined);
    }
    else if(tecla==="w"){
      setEstiloW(undefined);
    }
    else if(tecla==="e"){
      setEstiloE(undefined);
    }
    else if(tecla==="a"){
      setEstiloA(undefined);
    }
    else if(tecla==="s"){
      setEstiloS(undefined);
    }
    else if(tecla==="d"){
      setEstiloD(undefined);
    }
    else if(tecla==="z"){
      setEstiloZ(undefined);
    }
    else if(tecla==="x"){
      setEstiloX(undefined);
    }
    else if(tecla==="c"){
      setEstiloC(undefined);
    }
  }

  //Manejador del volumen (input range):
  const manejadorVolumen = () => {
    const valorRange = objRange.current.value;
    objAudioQ.current.volume = valorRange;
    objAudioW.current.volume = valorRange;
    objAudioE.current.volume = valorRange;
    objAudioA.current.volume = valorRange;
    objAudioS.current.volume = valorRange;
    objAudioD.current.volume = valorRange;
    objAudioZ.current.volume = valorRange;
    objAudioX.current.volume = valorRange;
    objAudioC.current.volume = valorRange;
  }

  return(
    <div id="div-main">

    <h1 id='title'>Drum Machine FCC</h1>

    <div id="drum-machine">
      
      <div id='pad-panel'>
      <div className='drum-pad' id='q-pad'>
      <audio ref={objAudioQ} src='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' className='clip' id='Q'/>
      <button className={estiloQ} onClick={activityQ}>Q</button>
      </div>

      <div className='drum-pad' id='w-pad'>
      <audio ref={objAudioW} src='https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' className='clip' id='W'/>
      <button className={estiloW} onClick={activityW}>W</button>
      </div>

      <div className='drum-pad' id='e-pad'>
      <audio ref={objAudioE} src='https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' className='clip' id='E'/>
      <button className={estiloE} onClick={activityE}>E</button>
      </div>

      <div className='drum-pad' id='a-pad'>
      <audio ref={objAudioA} src='https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' className='clip' id='A'/>
      <button className={estiloA} onClick={activityA}>A</button>
      </div>

      <div className='drum-pad' id='s-pad'>
      <audio ref={objAudioS} src='https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' className='clip' id='S'/>
      <button className={estiloS} onClick={activityS}>S</button>  
      </div>

      <div className='drum-pad' id='d-pad'>
      <audio ref={objAudioD} src='https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' className='clip' id='D'/>
      <button className={estiloD} onClick={activityD}>D</button>  
      </div>

      <div tabIndex="0" className='drum-pad' id='z-pad'>
      <audio ref={objAudioZ} src='https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' className='clip' id='Z'/>
      <button className={estiloZ} onClick={activityZ}>Z</button>  
      </div>

      <div className='drum-pad' id='x-pad'>
      <audio ref={objAudioX} src='https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' className='clip' id='X'/>
      <button className={estiloX} onClick={activityX}>X</button>  
      </div>

      <div className='drum-pad' id='c-pad'>
      <audio ref={objAudioC} src='https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' className='clip' id='C'/>
      <button className={estiloC} onClick={activityC}>C</button>
      </div>
      </div>

      <div id='panel'>
      <div id="display">{estado}</div>
      <input ref={objRange} type="range" min="0" max="1" defaultValue="0.8" step="0.01" onChange={manejadorVolumen}/>
      </div>


    </div>

    </div> 
  );

}

export default App;
