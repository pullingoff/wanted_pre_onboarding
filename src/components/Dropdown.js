import React, {useState} from "react"
import styled from "styled-components";
// 드롭다운을 누르면 선택창이 펼쳐지고, 아무거나 골라 클릭하면 선택된 항목으로 변경됨

// form..? select로 하면 바로 아래 되는게 아니라 안 될 것 같음. -> div로?
// 아래 화살표 로고 추가하기 

const Dropdown = () => {
    const options = ['All Symbols', 'ETH', 'BTC', 'CTC']

    const [isOpen, setIsOpen] = useState(false);
    const openToggle = () => setIsOpen(!isOpen);

    const [selectedVal, setSelectedVal] = useState(options[0])

    function changeVal(val) {
        openToggle();
        setSelectedVal(val);
    }
    return (
        <>
            <Container>
                <SelectedHeader onClick={openToggle}
                                 style={{backgroundImage : `url(/assets/downtriangle.svg)`}}
                >
                    {selectedVal}
                </SelectedHeader>
                {isOpen && (
                <DropDownContainer>
                    <form>
                        <SearchBar type='text'
                                   placeholder="Search Symbol"
                                   style={{backgroundImage : `url(/assets/magnifier.svg)`}}
                        />
                    <DropDownList>
                        {options.map((opt) => (
                            <Item key={opt}
                                onClick={() => {changeVal(opt);}}
                            >
                                {opt}
                            </Item>
                        ))}
                    </DropDownList>
                    </form>
                </DropDownContainer>
                )}
            </Container>
        </>
    
    )
}

const SearchBar = styled.input`
border: none;
width: -webkit-fill-available;
padding: 20px 35px;
font-size: 1.1rem;
background-size: 4%;
background-position: 4% 52%;
background-repeat: no-repeat;
`

const Container = styled.div`
cursor: pointer;
width: 40%;
`;

const SelectedHeader = styled.div`
font-size: 1.2rem;
border: 1px solid lightgrey;
border-radius: 3px;
padding: 10px;
background-size: 4%;
background-position: 96% 45%;
background-repeat: no-repeat;
`;

const DropDownContainer = styled.div`
border: 2px solid lightgrey;
border-radius: 5px;
margin-top: 5px;
`;

const DropDownList = styled.ul`
padding-left: 0;
margin: 0;
`;

const Item = styled.li`
list-style: none;
padding: 20px 10px;
&:hover {
    background-color: whitesmoke;
}
`;

export default Dropdown