import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 60%;
`;

export const InstallmentsList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding-left: 0;
  list-style: none;
  width: 100%;
`;