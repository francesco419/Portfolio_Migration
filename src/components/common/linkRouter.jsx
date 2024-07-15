import styled from "styled-components"
import { Link } from "react-router-dom"

const LinkRouter = styled(Link)`
position: relative;
  background: none;
  font-weight: bold;
  border: 0;
  font-size: 0.8rem;
  margin: 0 10px;
  cursor: pointer;
  font-family: 'IBMPlexSansKR-Regular';
`

export default LinkRouter;