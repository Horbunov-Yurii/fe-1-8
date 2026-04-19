import styled from "styled-components";

export const Item = styled.li`
  padding: 10px;
  background-color: grey;
  border-radius: 30px;
`

export const Caption = styled.h2`
color: aqua;
`

export const Text = styled.p`
color: gold;
`

export const List = styled.ul`
background-color: aliceblue;
border-radius: 30px;
`

export const Status = styled.p`
color: ${(props) => (props.$classic ? "lime" : "red")};
`

