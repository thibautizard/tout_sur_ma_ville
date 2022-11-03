import React from "react";
import styled from "styled-components";

function Suggestions(props) {
  const cities = props.cities;
  return (
    <SuggestionsList>
      {cities?.map(({ city, region }) => (
        <SuggestionsItem>
          {city} ({region})
        </SuggestionsItem>
      ))}
    </SuggestionsList>
  );
}

//*! STYLED COMPONENTS */
const SuggestionsList = styled.div`
  @keyframes revealSuggestion {
    from {
      opacity: 0;
      transform: translate(0, -10px);
    }

    to {
      opacity: 1;
      transform: translate(0, 0px);
    }
  }

  position: absolute;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  margin-top: 10px;
  padding: 10px 0;
  width: 100%;
  animation: revealSuggestion 0.3s linear both;
  display: ${(props) => (props.children?.length > 0 ? "block" : "none")};
`;

const SuggestionsItem = styled.p`
  color: black;
  cursor: pointer;
  padding: 0.7rem 1.5rem;
  margin: 0;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
`;

export default Suggestions;
