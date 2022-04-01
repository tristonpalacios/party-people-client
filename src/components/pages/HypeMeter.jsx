import React, { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import lowHype from "../low.png"
import semiHype from "../semihype.png"
import ultraHype from "../ultrahype.png"
import middleHype from "../middleHype.png"
import highHype from "../highHype.png"

export default function HypeMeter({ details }) {
  const eventId = details._id
  // setHype(details.hype)
  const [refresh, setRefresh] = useState()
  const [HypeCount, setHypeCount] = useState(details.hype)
  const [displayCount, setDisplayCount] = useState()
  const [numCount, setNumCount] = useState(details.hype)
  //   let numCount = details.hype

  function hypeThis() {
    axios.put(
      `${process.env.REACT_APP_SERVER_URL}/api-v1/events/${eventId}/hype`
    )
    setNumCount(numCount + 1)
  }

  const [count, setCount] = useState()

  let meter

  const displayHype = () => {
    if (numCount < 25) {
      meter = <img src={lowHype} alt="" style={{ width: 250, height: 250 }} />
    } else if (numCount < 50) {
      meter = (
        <h1>
          {" "}
          <img src={semiHype} alt="" style={{ width: 250, height: 250 }} />
        </h1>
      )
    } else if (numCount < 75) {
      meter = (
        <h1>
          {" "}
          <img src={middleHype} alt="" style={{ width: 250, height: 250 }} />
        </h1>
      )
    } else if (numCount < 100) {
      meter = (
        <h1>
          {" "}
          <img src={highHype} alt="" style={{ width: 250, height: 250 }} />
        </h1>
      )
    } else if (numCount > 99) {
      meter = (
        <h1>
          {" "}
          <img src={ultraHype} alt="" style={{ width: 250, height: 250 }} />
        </h1>
      )
    }
  }
  displayHype()

  return (
    <div id="hype">
      {numCount}
      {meter}
      <button onClick={hypeThis}>HYPE THIS EVENT</button>
    </div>
  )
}
