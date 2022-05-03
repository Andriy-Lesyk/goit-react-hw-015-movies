import styled from '@emotion/styled'

export const SearchForm= styled.form`
display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`
export const SearchFormButton = styled.button`
  display: inline-block;
  width: 70px;
  height: 34px;
  border: 0;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  border: 1px solid grey;
  &:hover {
    opacity: 1;
  }
`;

export const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 26px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  border: 1px solid grey;
  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;