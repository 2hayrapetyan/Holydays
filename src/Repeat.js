import styled from "styled-components";

export const NavBarItem = styled.li`
  list-style: none;
  font-size: 1.25vw;
  cursor: pointer;
  transition: 0.7s;
  &:hover {
    color: #f7941e;
    transition: 0.3s;
  }
`;
export const Button = styled.button`
  border: 1px solid #f7941e;
  border-radius: 5px;
  cursor:pointer;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  color: #f7941e;
  padding: 13px 24px;
  font-size: 1.25vw;
  background: transparent;
  transition: 0.7s;
  &:hover {
    background-color: #f7941e;
    color: white;
    transition: 0.5s;
  }
`;
export const Img = styled.img`
  width: 50%;
`;
export const Parent = styled.section`
  display: flex;
  width: 100%;
  align-items: center;
  background: #f1f1f2;
`;
export const TextBlockParent = styled.div`
  width: 50%;
`;
export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-around;
  margin: 0 auto;
  width: 58%;
  heigth: 57%;
`;
export const TextBlockP = styled.p`
  font-size: 1.389vw;
  line-height: 1.953vw;
`;
export const Button2 = styled(Button)`
  color: white;
  background: #f7941e;
  margin-top: 52px;
  transition: 0.7s;
  &:hover {
    background-color: white;
    color: #f7941e;
    transition: 0.5s;
  }
`;
export const Parent2 = styled(Parent)`
  background: white;
  flex-direction: column;
  text-align: center;
  margin: 79px 0 107px;
`;
export const Parent3 = styled(Parent)`
background: #f7941e;
`;
export const Parent4 = styled(Parent3)`
margin:0 auto;
justify-content:space-between;
width:67%;
padding:81px 0 69px;
`;
export const Button3 = styled(Button)`
  color: white;
  background: black;
  border:1px solid black;
  &:hover {
    background-color: white;
    color: black;
    border:1px solid white;
    transition: 0.5s;
  }
`;
export const Button4 = styled(Button)`
  color: black;
  background: #f7941e;
  border:1px solid black;
  &:hover {
    background-color: black;
    color:#f7941e;
    transition: 0.5s;
  }
`;
export const ButtonParent = styled.div`
gap:16px;
display:flex;
`;
export const TextParent = styled.div`
display:flex;
flex-direction:column;
justyfi-content:center;
`;
export const Parent5 = styled(Parent)`
display: flex;
flex-direction:column;
width: 80%;
align-items: center;
text-align:center;
padding:80px;
background:white;
margin: 0 auto;
`;

export const FooterAll = styled.footer`
  background-color: #fafafa;
  padding:115px 0 35px;
  @media (max-width: 768px) {
    background-color: #fafafa;
  }
`;
export const FooterParent = styled.ul`
  display: flex;
  justify-content: center;
  gap: 80px;
  padding: 50px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const FooterParent1 = styled.div`
  display: flex;
  justify-content: center;
  gap: 26px;
  padding: 50px 0;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const FooterParent2 = styled.p`
  display: flex;
  justify-content: center;
  gap: 26px;
  padding: 25px 0;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;


