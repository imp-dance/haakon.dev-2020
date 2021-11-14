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
      <header>
        <p>
          These are some of the technologies and subjects that I
          have worked with on previous projects, and consider
          myself experienced with. In no particular order.
        </p>
      </header>
      <ItemContainer>
        {landingPageData.toolsAndTechnologies.map(
          (item, index) => (
            <Item
              title={item.title}
              items={item.items}
              key={`toolItem${index}`}
            />
          )
        )}
      </ItemContainer>
    </ToolsContainer>
  );
};

const Item: React.FC<ItemInterface> = ({ title, items }) => {
  return (
    <StyledItem>
      <h3>{title}</h3>
      <InnerItemContainer>
        {items.map((item, index) => (
          <li key={`${title}-item-${index}`}>{item}</li>
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
  > div,
  > ul {
    display: flex;
    margin-left: ${whitespace.m};
    list-style: none;
    padding: 0;
    > li {
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
  > header {
    h3 {
      font-size: ${typography.xl};
    }
    p {
      font-size: ${typography.s};
    }
  }
`;

const ItemContainer = styled.div`
  background: ${colors.bg}99;
  color: ${colors.lightPink};
`;

const InnerItemContainer = styled.ul`
  -ms-overflow-style: none;
  scrollbar-width: none;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  user-select: text;
  pointer-events: all;
  padding-bottom: ${whitespace.s};
`;

export default ToolsShowcase;
