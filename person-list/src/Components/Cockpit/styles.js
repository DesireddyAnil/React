import styled from "styled-components"; // basically styled component are fxnal react components

// note that in styled components we write actual css. for dynamic part we use ${} to inject js
const StyledButton = styled.button`
  background-color: ${(props) => (props.alt === "DONT_SHOW" ? "red" : "green")};
  color: white;
  border: 1px solid blue;
  padding: 8px;
  font: inherit;
  cursor: pointer;
  &:hover {
    background-color: ${(props) =>
      props.alt === "DONT_SHOW" ? "salmon" : "lightgreen"};
    color: black;
  }
`;

const StyledParagraph = styled.p`
  color: ${(props) => props.items < 3 && "red"};
  font-weight: ${(props) => props.items < 2 && "bold"};
`;

export { StyledButton, StyledParagraph };
