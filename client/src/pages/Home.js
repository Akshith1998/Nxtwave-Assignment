import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import ResourceList from "../components/ResourceList";
import { getResources } from "../redux/UserSlice";
import { GlobalStyles } from "../components/GlobalStyles";

const Container = styled.div`
  display: block;
  background: #f5f5f5;
  height: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  position: absolute;
  left: 29.17%;
  right: 29.17%;
  top: 11.52%;
  bottom: 84.57%;
`;

const Tab1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  background: rgba(215, 223, 233, 0.24);
  border: 1px solid #d7dfe9;
  cursor: pointer;
`;

const Tab2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  background: rgba(215, 223, 233, 0.24);
  border: 1px solid #d7dfe9;
  cursor: pointer;
`;

const Tab3 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  background: rgba(215, 223, 233, 0.24);
  border: 1px solid #d7dfe9;
  cursor: pointer;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  top: 30%;
  margin: 0 270px;
`;

const Home = () => {
  const dispatch = useDispatch();
  const resources = useSelector((state) => state.resource.resources);
  const [isClicked, setIsClicked] = useState(false);
  const [switchresources, setSwitchresources] = useState([]);
  useEffect(() => {
    dispatch(getResources());
  }, []);
  const handlerequests = () => {
    setIsClicked(true);
    const filteredData = resources.filter(
      (resource) => resource.tag === "request"
    );
    setSwitchresources(filteredData);
  };
  const handleusers = () => {
    setIsClicked(true);
    const filteredData = resources.filter(
      (resource) => resource.tag === "user"
    );
    setSwitchresources(filteredData);
  };
  return (
    <Container>
      <GlobalStyles />
      <Navbar />
      <Wrapper>
        <Tab1 onClick={() => setIsClicked(false)}>Resources</Tab1>
        <Tab2 onClick={handlerequests}>Requests</Tab2>
        <Tab3 onClick={handleusers}>Users</Tab3>
      </Wrapper>
      {!isClicked && (
        <CardContainer>
          {resources.map((resource) => {
            return <ResourceList key={resource.id} resource={resource} />;
          })}
        </CardContainer>
      )}
      {isClicked && (
        <CardContainer>
          {switchresources.map((resource) => {
            return <ResourceList key={resource.id} resource={resource} />;
          })}
        </CardContainer>
      )}
    </Container>
  );
};

export default Home;
