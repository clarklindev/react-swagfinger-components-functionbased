import styled from 'styled-components';

const HeadingBase = styled.div`
  margin: ${(props) => props.theme.typography.header.margin};
  line-height: ${(props) => props.theme.typography.header.lineHeight};
  font-weight: ${(props) => props.theme.typography.header.fontWeight};
  font-family: ${(props) => props.theme.typography.header.fontFamily};
`;

export const Heading1 = styled(HeadingBase)`
  font-size: ${(props) => props.theme.typography.h1.fontSize};
`;
export const Heading2 = styled(HeadingBase)`
  font-size: ${(props) => props.theme.typography.h2.fontSize};
`;
export const Heading3 = styled(HeadingBase)`
  font-size: ${(props) => props.theme.typography.h3.fontSize};
`;
export const Heading4 = styled(HeadingBase)`
  font-size: ${(props) => props.theme.typography.h4.fontSize};
`;
export const Heading5 = styled(HeadingBase)`
  font-size: ${(props) => props.theme.typography.h5.fontSize};
`;
export const Heading6 = styled(HeadingBase)`
  font-size: ${(props) => props.theme.typography.h6.fontSize};
`;
