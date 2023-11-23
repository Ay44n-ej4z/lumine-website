import styled from "styled-components";
import Header from "./components/Banner/Header";
import ProfComponent from "./components/Banner/ProfComponent";
import Footer from "./components/Footer/Footer";
import Services from "./components/Service/Services";
function App() {
  return (
    <Container>
      <Banner>
        <Header />
        <ProfComponent />
      </Banner>
      <Services />
      <LightColor>
        {/* <Projects /> */}
      </LightColor>
      {/* <Clients /> */}
      <LightColor>
        <Footer />
      </LightColor>
    </Container>
  );
}

export default App;

const Container = styled.div``;
// linear-gradient(159deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%);
// linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
const Banner = styled.div`
  background: white;
  height: 100vh;
  @media (max-width: 640px) {
    height: 100%;
    padding-bottom: 2rem;
  }
`;
// linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%)
const LightColor = styled.div`

  background:white ;
`;
