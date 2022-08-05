import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getResourceDetails } from "../redux/UserSlice";

const Container = styled.div`
  width: 250px;
  background-color: #ffffff;
  border: 1px solid #d7dfe9;
  border-radius: 4px;
  margin: 10px 20px;
  padding: 20px;
  font-family: "Space Grotesk";
  cursor: pointer;
`;

const Header = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const Img = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 20px;
`;

const HeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  color: rgba(23, 31, 70, 1);
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;

const Category = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #7e858e;
`;

const Section = styled.div``;

const Link = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #0b69ff;
  text-decoration: none;
  margin-top: 50px;
`;

const Description = styled.p``;

const ResourceList = ({ resource }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleNavigate = (id) => {
    navigate(`/resource/${id}`);
  };
  return (
    <Container onClick={() => handleNavigate(resource.id)}>
      <Header>
        <Img src={resource.icon_url} alt="" />
        <HeaderInfo>
          <Title>{resource.title}</Title>
          <Category>{resource.category}</Category>
        </HeaderInfo>
      </Header>
      <Section>
        <Link href={resource.link} target="_blank">
          {resource.link}
        </Link>
        <Description>{resource.description}</Description>
      </Section>
    </Container>
  );
};

export default ResourceList;
