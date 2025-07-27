import styled from "styled-components";

export const AppContainer = styled.div`
  align-items: flex-start;
  background-color: #3179ba;
  display: flex;
  flex-direction: row;
  height: 100vh; /* Changed from 100% to 100vh for full viewport height */
  padding: 20px;
  width: 100%;
  overflow-x: auto; /* Allow horizontal scrolling for many columns */
`;

export const ColumnContainer = styled.div`
  background-color: #ebecf0;
  width: 300px;
  min-height: 40px;
  margin-right: 20px;
  border-radius: 3px;
  padding: 8px;
  flex-grow: 0;
  flex-shrink: 0; /* Prevent columns from shrinking */
  max-height: calc(100vh - 40px); /* Limit height to viewport */
  display: flex;
  flex-direction: column;
`;

export const ColumnTitle = styled.div`
  padding: 6px 16px 12px;
  font-weight: bold;
  font-size: 14px;
  color: #172b4d;
`;

export const CardContainer = styled.div`
  background-color: #fff;
  cursor: pointer;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  max-width: 300px;
  border-radius: 3px;
  box-shadow: 0px 1px 0px 0px #091e4240; /* Fixed: removed quotes around hex color */
  transition: box-shadow 0.15s ease;

  &:hover {
    box-shadow: 0px 2px 4px 0px #091e4240;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

interface AddItemButtonProps {
  dark?: boolean;
}

export const AddItemButton = styled.button<AddItemButtonProps>`
  background-color: ${(props) =>
    props.dark
      ? "#091e42"
      : "transparent"}; /* Fixed: removed quotes and corrected color */
  border-radius: 3px;
  border: none;
  color: ${(props) => (props.dark ? "#fff" : "#5e6c84")};
  cursor: pointer;
  max-width: 300px;
  padding: 10px 12px;
  text-align: left;
  transition: background 85ms ease-in;
  width: 100%;
  font-size: 14px;
  margin-top: 8px;

  &:hover {
    background-color: ${(props) =>
      props.dark
        ? "#0b1f35"
        : "#e4e6f0"}; /* Fixed: corrected color and logic */
    color: ${(props) => (props.dark ? "#fff" : "#172b4d")};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #0079bf;
  }
`;

export const NewItemFormContainer = styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  margin-top: 8px;
`;

export const NewItemButton = styled.button<{
  variant?: "primary" | "secondary";
}>`
  background-color: ${(props) =>
    props.variant === "secondary" ? "transparent" : "#5aac44"};
  border-radius: 3px;
  border: none;
  box-shadow: none;
  color: ${(props) => (props.variant === "secondary" ? "#6b778c" : "#fff")};
  padding: 6px 12px;
  text-align: center;
  cursor: pointer;
  font-size: 14px;
  margin-right: 8px;
  margin-top: 8px;
  transition: background-color 85ms ease;

  &:hover {
    background-color: ${(props) =>
      props.variant === "secondary" ? "#e4e6f0" : "#519839"};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #0079bf;
  }

  &:disabled {
    background-color: #e4e6f0;
    color: #a5adba;
    cursor: not-allowed;
  }
`;

export const NewItemInput = styled.input`
  border-radius: 3px;
  border: none;
  box-shadow: 0px 1px 0px 0px #091e4240;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  width: 100%;
  font-size: 14px;
  font-family: inherit;
  resize: none;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #0079bf;
  }

  &::placeholder {
    color: #a5adba;
  }
`;

/* Additional useful components */

export const CardList = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 0 8px;
  min-height: 0; /* Important for flex child to be scrollable */
`;

export const ColumnHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
  margin-bottom: 8px;
`;

export const ColumnActions = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const IconButton = styled.button`
  background: transparent;
  border: none;
  border-radius: 3px;
  color: #6b778c;
  cursor: pointer;
  padding: 6px;
  transition: background-color 85ms ease;

  &:hover {
    background-color: #e4e6f0;
    color: #172b4d;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #0079bf;
  }
`;

export const CardLabel = styled.span<{ color?: string }>`
  background-color: ${(props) => props.color || "#61bd4f"};
  border-radius: 3px;
  color: #fff;
  display: inline-block;
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  margin: 0 4px 4px 0;
  padding: 2px 6px;
`;

export const CardMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 4px;
  font-size: 12px;
  color: #6b778c;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;
`;

/* Responsive design */
export const ResponsiveContainer = styled.div`
  @media (max-width: 768px) {
    ${AppContainer} {
      padding: 10px;
      flex-direction: column;
      height: auto;
    }

    ${ColumnContainer} {
      width: 100%;
      margin-right: 0;
      margin-bottom: 16px;
    }
  }
`;

/* Dark theme support */
export const DarkTheme = styled.div`
  ${AppContainer} {
    background-color: #1e1e1e;
  }

  ${ColumnContainer} {
    background-color: #2c2c2c;
  }

  ${CardContainer} {
    background-color: #3c3c3c;
    color: #fff;
  }

  ${ColumnTitle} {
    color: #fff;
  }
`;
