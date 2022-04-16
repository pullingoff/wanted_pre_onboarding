import React, { useState } from "react";
import styled from "styled-components"


const Tab = () => {
    const [selectedVal, setSelectedVal] = useState<number>(0)
    const items : string[] = ['감자', '고구마', '카레라이스말고더긴글자여도괜찮게만들기']

    return (
        <Container>
            {items.map((item, idx) => (
                <StyledItem
                 key={idx.toString()} 
                 onClick={e => setSelectedVal(idx)}
                 className={selectedVal===idx
                    ? 'selected'
                    : ''}
                 >
               {item}
               </StyledItem>
               
            ))}
        </Container>
    )
}

const Container = styled.ul`
display: flex;
list-style: none;
flex-flow: row unwrap;
justify-content: space-around;
padding: 10px;
`

const StyledItem = styled.li`
font-size: 1.1rem;
font-weight: bold;
text-align: center;
flex-grow: 1;
flex-basis:0;
flex: 1 1 0px;
cursor: pointer;
color: grey;
padding-bottom: 15px;
border-bottom: 3px solid lightgrey;
transition: border-color .2s ease;
&.selected {
    background: white;
    border-bottom: 3px solid darkcyan;
    color: black;
}
`

export default Tab