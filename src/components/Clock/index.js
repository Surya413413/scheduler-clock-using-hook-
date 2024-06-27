import {useState,useEffect} from "react"

import {ClockContainer, Heading, ClockImage, Time} from './styledComponents'

const Clock = () => {
  const [currentDate, setNewDate] = useState(new Date())

useEffect(()=> {
  const timeId = setInterval(()=> {
setNewDate(new Date())
  },1000)
  console.log("start")
  return () => {
    clearInterval(timeId);
    console.log("clean")
  }
},[])


  return (
  <ClockContainer>
    <Heading>Clock</Heading>
    <ClockImage
      src="https://assets.ccbp.in/frontend/hooks/clock-img.png"
      alt="clock"
    />
    <Time> {currentDate.toLocaleTimeString()} </Time>
  </ClockContainer>
)
}
export default Clock
