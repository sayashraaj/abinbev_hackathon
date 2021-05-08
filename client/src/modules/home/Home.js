import React, {useState, useEffect} from 'react'
import axios from 'axios'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

import './home.css'

function Home() {
    const [finalanswer, setFinalanswer] = useState('')
    const { transcript, resetTranscript } = useSpeechRecognition()
    useEffect(() => {
        axios.post('http://localhost:5000/', {
    textquery: transcript
    // textquery: "hello john 500"
  })
  .then(function (response) {
    console.log(response.data);
    // setFinalanswer(response.data.answer)
    setFinalanswer(response.data)
  })
  .catch(function (error) {
    console.log(error);
  });
    }, [transcript])

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null
  }

  return (
    <div className="speech">
    <center>
      <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>You:</p>
      <p className="transcript">{transcript}</p>
      <p>Server:</p>
      <p className="finalanswer">{finalanswer}</p>
    </center>
    </div>
  )
}

export default Home;