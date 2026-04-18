import styled from "styled-components";


const Caption = styled.h1`
color:red;
background-color:black;
font-size:100px;
font-style:italic;

`

const Heading = styled(Caption)`
color:green;


`

export default {Caption, Heading}