"use client";

import { useAppSelector, useAppDispatch } from "../lib/redux/hooks";
import {
  increment,
  decrement,
  selectCount,
} from "../lib/redux/slices/counterSlice";
import styled from "styled-components";

const CounterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.space.md};
  padding: ${({ theme }) => theme.space.lg};
  background-color: ${({ theme }) => theme.colors.muted};
  border-radius: ${({ theme }) => theme.radii.lg};
  max-width: 400px;
  margin: 0 auto;
`;

const CounterValue = styled.div`
  font-size: ${({ theme }) => theme.fontSizes["3xl"]};
  font-weight: bold;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.md};
`;

export function Counter() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  return (
    <CounterContainer>
      <h2>Redux Counter Example</h2>
      <CounterValue>{count}</CounterValue>
      <ButtonGroup>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(increment())}>Increment</button>
      </ButtonGroup>
    </CounterContainer>
  );
}
