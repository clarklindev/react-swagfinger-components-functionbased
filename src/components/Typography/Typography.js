import styled from 'styled-components';

const HeadingBase = styled.div`
  margin: ${(props) => props.theme.typography.header.margin};
  line-height: ${(props) => props.theme.typography.header.lineheight};
  font-weight: ${(props) => props.theme.typography.header.fontweight};
  font-family: ${(props) => props.theme.typography.header.fontfamily};
`;

export const Heading1 = styled(HeadingBase)`
  font-size: ${(props) => props.theme.typography.h1};
`;
export const Heading2 = styled(HeadingBase)`
  font-size: ${(props) => props.theme.typography.h2};
`;
export const Heading3 = styled(HeadingBase)`
  font-size: ${(props) => props.theme.typography.h3};
`;
export const Heading4 = styled(HeadingBase)`
  font-size: ${(props) => props.theme.typography.h4};
`;
export const Heading5 = styled(HeadingBase)`
  font-size: ${(props) => props.theme.typography.h5};
`;
export const Heading6 = styled(HeadingBase)`
  font-size: ${(props) => props.theme.typography.h6};
`;
