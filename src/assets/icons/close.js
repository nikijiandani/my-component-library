import React from "react";
import styled from "styled-components";

const CloseIconWrapper = styled.svg`
  width: 100%;
  height: 100%;
`;

export const CloseIcon = () => (
  <CloseIconWrapper aria-hidden="true">
    <path
      d="M18.3825 16.288L11.15 9.11302L17.7912 2.51202L15.8525 0.57135L9.21124 7.17235L2.56999 0.57135L0.617493 2.51202L7.25874 9.11302L0.617493 15.714L2.56999 17.641L9.21124 11.04L16.43 18.2287L18.3825 16.288Z"
      fill="black"
    />
  </CloseIconWrapper>
);
