// Callout
import React from 'react'
import styled from 'styled-components'

// background-color: rgb(100, 100, 100);
const Base = styled.div`

  border: 1px solid rgb(75, 75, 75);
  border-left-width: 5px;
  border-radius: 3px;
  margin: 20px 0;
  padding: 20px;
  text-shadow: 0 0 0 black;


`
// &p:last-child {
//   margin-bottom: 0px;
// }
const Danger = Base.extend`
  background-color: rgb(242, 222, 222);
  border-left-color: #ce4844;
  color: black;
`

const Warning = Base.extend`
  background-color: #fff9cc;
  border-left-color: #ffe202;
  color: black;
`

const Goal = Base.extend`
  border-left-color: #008000;
  color: white;
  margin: 20px 0;
  padding: 20px;
`
// background-color: #3a84e0;
const Info = Base.extend`

  border-left-color: #127fe1;
  margin: 20px 0;
  padding: 20px;
`

const CiteWrapper = styled.div`
  text-align: right;
`
const Cite = styled.cite`

`

const Callout = ({ danger, warning, goal, info, title, children, cite }) => {
  console.log('cite', cite)
  const renderCite = cite ? <CiteWrapper><Cite>{cite}</Cite></CiteWrapper> : null
  console.log('renderCite', renderCite)
  const renderCallout = () => {
    switch (true) {
      case danger:
        return <Danger>{children} {renderCite}</Danger>
      case warning:
        return <Warning>{children} {renderCite}</Warning>
      case goal:
        return <Goal>{children} {renderCite}</Goal>
      case info:
        return <Info>{children} {renderCite}</Info>
      default:
        return <Base>{children} {renderCite}</Base>
    }
  }

  return (
    <div>
      <h4>{title}</h4>
      {renderCallout()}
    </div>
  )

}

export default Callout;
