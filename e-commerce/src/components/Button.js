import styled from 'styled-components';


//styled components lets us have this components in different file and reuse
export const ButtonContainer = styled.button`
text-transform: capitalize;
font-size:1.4rem;
background:transparent;
border: 0.05rem solid var(--lightblue);
color:var(--lightblue);
border-radius:0.5rem;
padding:0.2rem 0.5rem;
cursor:pointer;
margin:0.2rem 0.5rem 0.2rem 0;
transition: all 0.5s ease-in-out;
&:hover{
  background:var(--lightblue);
  color:var(--mainblue);
}
&:focus{
  outline:none;
}
`
