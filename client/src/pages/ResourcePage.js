import Navbar from "../components/Navbar";
import styled from "styled-components";
import BackIcon from "../images/Icon.png";
import { useNavigate, useParams } from "react-router-dom";
import useColumns from "../components/useColumns";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTable } from "react-table";
import { getResourceDetails } from "../redux/UserSlice";

const Container = styled.div`
  font-family: "Space Grotesk";
`;

const BackButton = styled.div`
  position: absolute;
  top: 10%;
  left: 15%;
  cursor: pointer;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #7e858e;
`;

const IconImg = styled.img`
  position: absolute;
  top: 10.2%;
  left: 14%;
  cursor: pointer;
`;

const Main = styled.div`
  position: absolute;
  top: 15%;
  left: 15%;
`;

const MainHeader = styled.div`
  display: flex;
`;

const Image = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 30px;
  border-radius: 100%;
`;

const Title = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
`;

const Link = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  text-decoration: none;
  margin-left: 92px;
  color: #0b69ff;
`;

const Description = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #7e858e;
`;

const Table = styled.table`
  position: absolute;
  top: 20%;
  left: 15%;
`;

const TableHead = styled.thead``;

const TableBody = styled.tbody``;

const TableRow = styled.tr``;

const TableHeader = styled.th``;

const TableData = styled.td``;

const ResourcePage = () => {
  const params = useParams();
  const id = params.id;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleBackNavigate = () => {
    navigate("/");
  };
  const resourceDetails = useSelector(
    (state) => state.resource.resourceDetails
  );

  useEffect(() => {
    dispatch(getResourceDetails(id));
  }, []);

  const data = useMemo(() => resourceDetails.resource_items, []);
  const columns = useColumns();
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });
  return (
    <Container>
      <Navbar />
      <BackButton onClick={handleBackNavigate}>Resources</BackButton>
      <IconImg src={BackIcon} alt="" onClick={handleBackNavigate} />
      <Main>
        <MainHeader>
          <Image src={resourceDetails.icon_url} alt="" />
          <Title>{resourceDetails.title}</Title>
        </MainHeader>
        <Link href={resourceDetails.link} target="_blank">
          {resourceDetails.link}
        </Link>
        <Description>{resourceDetails.description}</Description>
      </Main>
      {/* <Table {...getTableProps()}>
        <TableHead>
          {headerGroups.map((headerGroup) => (
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <TableHeader {...column.getHeaderProps()}>
                  {column.render("Header")}
                </TableHeader>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <TableRow {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <TableData {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </TableData>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table> */}
    </Container>
  );
};

export default ResourcePage;
