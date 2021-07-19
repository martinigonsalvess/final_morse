
import React, { useContext } from 'react'
import MorseContext from './context/MorseContext'
import useSound from 'use-sound'
import audioa from './Audio/a.mp3'
import audiob from './Audio/b.mp3'
import audioc from './Audio/c.mp3'
import audiod from './Audio/d.mp3'
import audioe from './Audio/e.mp3'
import audiof from './Audio/f.mp3'
import audiog from './Audio/g.mp3'
import audioh from './Audio/h.mp3'
import audioi from './Audio/i.mp3'
import audioj from './Audio/j.mp3'
import audiok from './Audio/k.mp3'
import audiol from './Audio/l.mp3'
import audiom from './Audio/m.mp3'
import audion from './Audio/n.mp3'
import audioo from './Audio/o.mp3'
import audiop from './Audio/p.mp3'
import audioq from './Audio/q.mp3'
import audior from './Audio/r.mp3'
import audios from './Audio/s.mp3'
import audiot from './Audio/t.mp3'
import audiou from './Audio/u.mp3'
import audiov from './Audio/v.mp3'
import audiow from './Audio/w.mp3'
import audiox from './Audio/x.mp3'
import audioy from './Audio/y.mp3'
import audioz from './Audio/z.mp3'
import audio0 from './Audio/0.mp3'
import audio1 from './Audio/1.mp3'
import audio2 from './Audio/2.mp3'
import audio3 from './Audio/3.mp3'
import audio4 from './Audio/4.mp3'
import audio5 from './Audio/5.mp3'
import audio6 from './Audio/6.mp3'
import audio7 from './Audio/7.mp3'
import audio8 from './Audio/8.mp3'
import audio9 from './Audio/9.mp3'
import './StyleContent.css';
import './StyleBtn.css';

const ButtonLogic = () => {

  const { letters, textCode, setTextCode } = useContext(MorseContext);

  const [sounda] = useSound(audioa, { interrupt: true })
  const [soundb] = useSound(audiob, { interrupt: true })
  const [soundc] = useSound(audioc, { interrupt: true })
  const [soundd] = useSound(audiod, { interrupt: true })
  const [sounde] = useSound(audioe, { interrupt: true })
  const [soundf] = useSound(audiof, { interrupt: true })
  const [soundg] = useSound(audiog, { interrupt: true })
  const [soundh] = useSound(audioh, { interrupt: true })
  const [soundi] = useSound(audioi, { interrupt: true })
  const [soundj] = useSound(audioj, { interrupt: true })
  const [soundk] = useSound(audiok, { interrupt: true })
  const [soundl] = useSound(audiol, { interrupt: true })
  const [soundm] = useSound(audiom, { interrupt: true })
  const [soundn] = useSound(audion, { interrupt: true })
  const [soundo] = useSound(audioo, { interrupt: true })
  const [soundp] = useSound(audiop, { interrupt: true })
  const [soundq] = useSound(audioq, { interrupt: true })
  const [soundr] = useSound(audior, { interrupt: true })
  const [sounds] = useSound(audios, { interrupt: true })
  const [soundt] = useSound(audiot, { interrupt: true })
  const [soundu] = useSound(audiou, { interrupt: true })
  const [soundv] = useSound(audiov, { interrupt: true })
  const [soundw] = useSound(audiow, { interrupt: true })
  const [soundx] = useSound(audiox, { interrupt: true })
  const [soundy] = useSound(audioy, { interrupt: true })
  const [soundz] = useSound(audioz, { interrupt: true })
  const [sound0] = useSound(audio0, { interrupt: true })
  const [sound1] = useSound(audio1, { interrupt: true })
  const [sound2] = useSound(audio2, { interrupt: true })
  const [sound3] = useSound(audio3, { interrupt: true })
  const [sound4] = useSound(audio4, { interrupt: true })
  const [sound5] = useSound(audio5, { interrupt: true })
  const [sound6] = useSound(audio6, { interrupt: true })
  const [sound7] = useSound(audio7, { interrupt: true })
  const [sound8] = useSound(audio8, { interrupt: true })
  const [sound9] = useSound(audio9, { interrupt: true })

  let soundOn = [sounda, soundb, soundc, soundd, sounde, soundf,
    soundg, soundh, soundi, soundj, soundk, soundl,
    soundm, soundn, soundo, soundp, soundq, soundr,
    sounds, soundt, soundu, soundv, soundw, soundx,
    soundy, soundz, sound0, sound1, sound2, sound3,
    sound4, sound5, sound6, sound7, sound8, sound9]

  const logBtns = (clickedButtonValue) => {
    if (clickedButtonValue[0] === "Space") {
      setTextCode(textCode.concat(" "))
    } else if (clickedButtonValue[0] === "Separate letters") {
      setTextCode(textCode.concat(" ")) }
    else {
      setTextCode(textCode.concat(clickedButtonValue[0]))
    }
  }

  const twoFunc = (e) => {
    switch (letters[e[2]][0].toLowerCase()) {
      case 'a':
        return soundOn[e[2]]()
      case 'b':
        return soundOn[e[2]]()
      case 'c':
        return soundOn[e[2]]()
      case 'd':
        return soundOn[e[2]]()
      case 'e':
        return soundOn[e[2]]()
      case 'f':
        return soundOn[e[2]]()
      case 'g':
        return soundOn[e[2]]()
      case 'h':
        return soundOn[e[2]]()
      case 'i':
        return soundOn[e[2]]()
      case 'j':
        return soundOn[e[2]]()
      case 'k':
        return soundOn[e[2]]()
      case 'l':
        return soundOn[e[2]]()
      case 'm':
        return soundOn[e[2]]()
      case 'n':
        return soundOn[e[2]]()
      case 'o':
        return soundOn[e[2]]()
      case 'p':
        return soundOn[e[2]]()
      case 'q':
        return soundOn[e[2]]()
      case 'r':
        return soundOn[e[2]]()
      case 's':
        return soundOn[e[2]]()
      case 't':
        return soundOn[e[2]]()
      case 'u':
        return soundOn[e[2]]()
      case 'v':
        return soundOn[e[2]]()
      case 'w':
        return soundOn[e[2]]()
      case 'x':
        return soundOn[e[2]]()
      case 'y':
        return soundOn[e[2]]()
      case 'z':
        return soundOn[e[2]]()
      case '1':
        return soundOn[e[2]]()
      case '2':
        return soundOn[e[2]]()
      case '3':
        return soundOn[e[2]]()
      case '4':
        return soundOn[e[2]]()
      case '5':
        return soundOn[e[2]]()
      case '6':
        return soundOn[e[2]]()
      case '7':
        return soundOn[e[2]]()
      case '8':
        return soundOn[e[2]]()
      case '9':
        return soundOn[e[2]]()
        case '0':
        return soundOn[e[2]]()
      default : 
    }
  }

  return (
    <>
      <span>
        {letters.map((e) => (
          <button className="btn"key={e}
            onClick={() => {
              twoFunc(e)
              logBtns(e)
            }}
          >
            {e[0]}
          </button>
        ))}
      </span>
    </>
  )
}
export default ButtonLogic