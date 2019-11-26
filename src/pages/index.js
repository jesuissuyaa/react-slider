import React, { useState } from "react"
import styles from "../styles/styles.module.css"
import Banner1 from "../assets/sample01.jpg"
import Banner2 from "../assets/sample02.jpg"
import Banner3 from "../assets/sample03.jpg"
// TODO: auto generate banner src url, use gatsby-source-file blahblah
// TODO: create const for size
const slideWidth = 40 // in vw
const arrowSize = 5 // in vw
const bubbleSize = 5 // in vw
const rhythm = 1 // in rem
const LeftArrow = props => {
  return (
    <div
      style={{
        width: 0,
        height: 0,
        borderStyle: `solid`,
        borderWidth: `${arrowSize / 1.6}vw ${arrowSize}vw ${arrowSize /
          1.6}vw  0`,
        borderColor: `transparent salmon transparent transparent`,
      }}
      onClick={props.onClick}
    ></div>
  )
}
const RightArrow = props => {
  return (
    <div
      style={{
        width: 0,
        height: 0,
        borderStyle: `solid`,
        borderWidth: `${arrowSize / 1.6}vw 0  ${arrowSize /
          1.6}vw ${arrowSize}vw`,
        borderColor: `transparent transparent transparent salmon`,
      }}
      onClick={props.onClick}
    ></div>
  )
}
export default () => {
  // array of source URLs to images in slider
  const sources = [Banner1, Banner2, Banner3]
  // set index for array
  const [index, setIndex] = useState(0)
  // # of images in slider
  const num = sources.length
  return (
    <div style={{ display: `flex`, flexFlow: `column`, alignItems: `center` }}>
      <div style={{ display: `flex`, flexFlow: `row`, alignItems: `center` }}>
        <LeftArrow
          onClick={() => {
            setIndex(Math.max(0, index - 1))
          }}
        />
        <div
          style={{
            overflow: `hidden`,
            width: ` ${slideWidth}vw`,
            display: `flex`,
            margin: `${rhythm}rem`,
          }}
        >
          {sources.map((item, i) => (
            <img
              src={item}
              style={{
                width: ` ${slideWidth}vw`,
                transform: `translateX(${slideWidth * index * -1}vw)`,
                transition: `transform 1s`,
              }}
              key={item}
              alt={`${i}番目の画像`}
            />
          ))}
        </div>
        <RightArrow onClick={() => setIndex(Math.min(num - 1, index + 1))} />
      </div>
      <div style={{ display: `flex`, justifyContent: `center` }}>
        {sources.map((_, i) => (
          <div
            style={{
              borderRadius: `50%`,
              width: `${bubbleSize}vw`,
              height: `${bubbleSize}vw`,
              background: `salmon`,
              opacity: index === i ? 1 : 0.3,
              transition: `opacity 1s`,
              margin: `${rhythm / 4}rem`,
            }}
            key={i}
          ></div>
        ))}
      </div>
    </div>
  )
}
