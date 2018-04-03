import React from 'react'
import styled from 'styled-components'

const TableRow = styled.tr`
  /* none so far */
`

const TR =({ children }) => {
  return (
    <TableRow>{children}</TableRow>
  )
}
export default TR