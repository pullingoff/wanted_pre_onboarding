import React from "react"
import styled from "styled-components"
// import check from "public/assets/check.svg"

const Label = ({name}) => {
    return (    
        <StyledLabel>
            {name}
        </StyledLabel>
    )
}
const Input = () => {

    return (
        <form>
            <InputContainer>
                <Label for="email" name="E-mail" />
                <StyledInput id="email" 
                             type="email" 
                             name="email" 
                             placeholder="E-mail"
                            //  style={{backgroundImage : `url(/assets/check.svg)`}}
                />
                {/* <ImgContainer>
                    <CheckImg src={process.env.PUBLIC_URL + "/assets/check.svg"} alt=""/>
                </ImgContainer> */}
            </InputContainer>
            <InputContainer>
                <Label for="pw" name="Password" />
                <StyledInput id="pw" type='password' name="password"
                       placeholder="Password" />
            </InputContainer>
        </form>
    )
}

const InputContainer = styled.section`
margin: 20px 10px;
`

const ImgContainer = styled.div`
display: inline-block;
width: 30px;
height: 30px;
`
const CheckImg = styled.img`
width: fit-content;
`
const StyledLabel = styled.label`
display: block;
`

const StyledInput = styled.input`
border-radius: 5px;
padding: 10px;
background-position: right top;
background-repeat: no-repeat;
&:invalid {
    border-color: red;
}
`

export default Input