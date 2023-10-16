import styled from "styled-components"

function App() {
  return (
    <>
      <StyledHeader>Header</StyledHeader>
      <StyledNav>Nav</StyledNav>
      <StyledFlex>
        <StyledContainer>Container
        <StyledArticle>Article</StyledArticle>
        <StyledArticle>Article</StyledArticle>
        </StyledContainer>
        <StyledAside>Aside</StyledAside>
      </StyledFlex>
      <StyledFooter>Footer</StyledFooter>
    </>
  );
}

const indexcss = styled.body`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;

const StyledHeader = styled.div`
  width: 90%;
  height: 200px;
  background: red;
  text-align: center;
  line-height: 200px;
  font-size: 36px;
  font-weight: bold;
  margin: 0 auto;
  color: white;
`;

const StyledNav = styled.div`
width: 90%;
height: 150px;
background: blue;
text-align: center;
line-height: 150px;
font-size: 36px;
font-weight: bold;
margin: 0 auto;
color: white;
`;

const StyledFlex = styled.div`
width: 90%;
height: 400px;
text-align: center;
font-size: 36px;
font-weight: bold;
margin: 0 auto;
display: flex;
justify-content: space-between;
`;

const StyledContainer = styled.div`
  width: 55%;
  height: 100%;
  background: yellow;
  text-align: center;
  font-size: 36px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const StyledArticle = styled.div`
  width: 70%;
  height: 100px;
  background: yellowgreen;
  color: #fff;
  text-align: center;
  line-height: 100px;
  font-size: 36px;
  font-weight: bold;
  margin: 0 auto;
`;

const StyledAside = styled.div`
  width: 35%;
  height: 100%;
  background: gray;
  color: #fff;
  text-align: center;
  line-height: 100px;
  font-size: 36px;
  font-weight: bold;
`;

const StyledFooter = styled.div`
  width: 90%;
  height: 120px;
  background: green;
  color: #fff;
  text-align: center;
  line-height: 100px;
  font-size: 36px;
  margin: 0 auto;
  font-weight: bold;
`;

export default App;
