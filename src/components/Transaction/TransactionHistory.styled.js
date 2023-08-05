import { styled } from 'styled-components';

export const TransactionTable = styled.table`
  width: 300px;
  margin: 10px auto;
  text-align: center;
  border: 1px solid gray;
  border-radius: 10px;
  padding: 5px;
`;

export const Th = styled.th`
  padding: 5px;
  height: 25px;
  border: 1px solid gray;
  background-color: lightgrey;
`;

export const Tr = styled.tr`
  &:nth-child(n + 1) {
    background-color: lightcyan;
  }
  &:nth-child(2n) {
    background-color: lightyellow;
  }
`;

export const Td = styled.td`
  padding: 5px;
  height: 25px;
  border: 1px solid gray;
`;
