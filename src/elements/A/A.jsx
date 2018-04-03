import React from 'react'
import styled from 'styled-components'

const A = styled.a.attrs({
  href: props => props.href
})`
  color: #31b0d5;
  font-weight: bold;
  &:hover {
    color: #5bc0de;
    text-decoration: underline;
  }
`

// const A = (props) => {
//   return (
//     <a className={styles.linkText} href={props.href}>{props.children}</a>
//   )
// }
export default A
