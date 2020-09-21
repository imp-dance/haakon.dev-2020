import React from "react";
import styled from "styled-components";
import landingPageData from "../../../data/landingPage";
import constants from "../../../styles/constants";

const { colors, whitespace, typography } = constants;

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
      <InnerItemContainer>
        {items.map((item) => (
          <span>{item}</span>
        ))}
      </InnerItemContainer>
    </StyledItem>
  );
};

const StyledItem = styled.div`
  border-bottom: 1px solid ${colors.lightPink};
  padding: ${whitespace.m} 0;
  h3 {
    margin: 0 0 ${whitespace.s};
    padding: 0 ${whitespace.m};
    &:before {
      content: "# ";
    }
    white-space: nowrap;
  }
  > div {
    display: flex;
    margin-left: ${whitespace.m};
    > span {
      border-radius: 2px;
      background: ${colors.beige};
      padding: ${whitespace.s} ${whitespace.m};
      display: inline-block;
      margin-right: ${whitespace.s};
      font-size: ${typography.s};
      color: #000;
      white-space: nowrap;
    }
  }
`;

const ToolsContainer = styled.div`
  user-select: none;
  pointer-events: none;
  > p {
    margin: 0 0 ${whitespace.m};
  }
`;

const ItemContainer = styled.div`
  background: ${colors.bg}99;
  color: ${colors.lightPink};
`;

const InnerItemContainer = styled.div`
  overflow: auto;
  user-select: all;
  pointer-events: all;
  padding-bottom: ${whitespace.s};
`;

export default ToolsShowcase;
