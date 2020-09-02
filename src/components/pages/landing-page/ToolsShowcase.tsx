import React from "react";
import styled from "styled-components";
import landingPageData from "../../../data/landingPage";
import constants from "../../../styles/constants";

interface ItemInterface {
  title: string;
  items: string[];
}

const ToolsShowcase: React.FC = () => {
  return (
    <ToolsContainer>
      <ItemContainer>
        {landingPageData.toolsAndTechnologies.map((item) => (
          <Item title={item.title} items={item.items} />
        ))}
      </ItemContainer>
    </ToolsContainer>
  );
};

const Item: React.FC<ItemInterface> = ({ title, items }) => {
  return (
    <StyledItem>
      <h3>{title}</h3>
      <div>
        {items.map((item) => (
          <span>{item}</span>
        ))}
      </div>
    </StyledItem>
  );
};

const StyledItem = styled.div`
  border-bottom: 1px solid ${constants.colors.lightPink};
  padding: ${constants.whitespace.m} 0;
  h3 {
    margin: 0 0 ${constants.whitespace.s};
    padding: 0 ${constants.whitespace.m};
    &:before {
      content: "# ";
    }
    white-space: nowrap;
  }
  > div {
    display: flex;
    margin-left: ${constants.whitespace.m};
    > span {
      border-radius: 2px;
      background: ${constants.colors.beige};
      padding: ${constants.whitespace.s} ${constants.whitespace.m};
      display: inline-block;
      margin-right: ${constants.whitespace.s};
      font-size: ${constants.typography.s};
      color: #000;
      white-space: nowrap;
    }
  }
`;

const ToolsContainer = styled.div`
  > p {
    margin: 0 0 ${constants.whitespace.m};
  }
`;

const ItemContainer = styled.div`
  background: ${constants.colors.bg};
  color: ${constants.colors.lightPink};
  overflow: auto;
`;

export default ToolsShowcase;
