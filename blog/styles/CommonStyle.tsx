import styled from 'styled-components';

export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: auto;
`;

export const TitleInput = styled.input`
  padding-left: 0.5rem;
  border: 0.08rem solid #c2bbbb;
  border-radius: 0.5rem;
  font-size: 1.5rem;
  font-weight: lighter;
  margin: 0.5rem;
  height: 2.5rem;
`;

export const TextInput = styled.textarea`
  border: 0.08rem solid #c2bbbb;
  border-radius: 0.6rem;
  height: 21.2rem;
  padding: 0.5rem;
  margin: 0.5rem;
  font-weight: lighter;
  font-size: 1rem;
  overflow: auto;
`;

export const StyledButton = styled.button`
  font-size: 0.9rem;
  margin: auto 0 0 auto;
`;
