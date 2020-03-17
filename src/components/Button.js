
import styled from 'styled-components'

const Button = styled.button`
    padding: 8px 0.8rem;
    height: 40px;
    background-color: ${props => props.theme === 'secondary' ? '#36AD69' : '#fff'};
    border-radius: 5px;
    font-size: 0.9rem;
    font-weight: normal;
    align-self: center;

    &:hover{
    background-color: ${props => props.theme === 'secondary' ? 'black' : '#F5F6F8'};;
    box-shadow: 0px 4px px #F5F6F8;
    cursor: pointer;
    }
  `

  export default Button