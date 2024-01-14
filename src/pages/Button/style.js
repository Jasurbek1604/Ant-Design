import download from "../../assets/icons/download.svg?react";
import power from "../../assets/icons/power.svg?react";
import search from "../../assets/icons/search.svg?react";
import searchLight from "../../assets/icons/search-light.svg?react";
import spin from "../../assets/animation/spin.svg?react";
import styled from "styled-components";

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

Content.Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  .flex {
    display: flex;
  }
`;

export const Icons = styled.div``;
Icons.Download = styled(download)`
  width: 20px;
  height: 20px;
`;

Icons.Spin = styled(spin)`
  width: 20px;
  height: 20px;
`;

Icons.Power = styled(power)`
  width: 20px;
  height: 20px;
`;

Icons.Search = styled(search)`
  width: 20px;
  height: 20px;
`;

Icons.SearchLight = styled(searchLight)`
  width: 20px;
  height: 20px;
`;

Content.Top = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  flex-wrap: wrap;
  button {
    justify-content: ${({ $center }) => $center && "center"};
    width: ${({ $center }) => $center && "100%"};
  }
`;
