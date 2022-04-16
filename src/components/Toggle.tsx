import * as React from "react";
import { useState } from "react";
import styled from "styled-components"

interface ItemProp {
    name: string;
    isOn: boolean;
}
const Item = ({name, isOn}: ItemProp) => {
    // 클릭시 on, off 바꾸는 함수
    

    return (
        <StyledItem 
            className={isOn
                        ? 'selected'
                        : ''    }>
            {name}
        </StyledItem>
    )
}

const Toggle = () => {
    const [isOn, setOn] = useState(false)
    
    const onClickHandler = () => {
        isOn ? setOn(false) : setOn(true)
    }
    

    return (
        <Container onClick={onClickHandler}>
            <Item name="On" isOn={isOn} />
            <Item name="Off" isOn={!isOn} />
        </Container>
    )
}

const Container = styled.ul`
display: flex;
background: lightgrey;
list-style: none;
flex-flow: row unwrap;
justify-content: space-around;
// border-radius: 50px;
// padding: 10px 5vw;
`

const StyledItem = styled.li`
font-size: 2rem;
font-weight: bold;
text-align: center;
flex-grow: 1;
&.selected {
    background: white;
    // margin: auto 30px;
    // border-radius: 50px;
}
`

export default Toggle