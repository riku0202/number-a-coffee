import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import { ReactElement } from "react";
import styled from "styled-components";

export const TransitionsModal = ({
  isOpen,
  close,
  children,
}: {
  isOpen: boolean;
  close: VoidFunction;
  children: ReactElement;
}) => {
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={isOpen}
      onClose={close}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={isOpen}>
        <Contents>{children}</Contents>
      </Fade>
    </Modal>
  );
};

const Contents = styled.div`
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #ffffffa9;
  padding: 10vh 0 20vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  font-size: 30px;

  a {
    display: block;
    transition: all 0.5s;
  }

  .svg {
    display: flex;
    position: fixed;
    bottom: 6%;
    right: 5%;

    svg {
      margin: 0 5px;
      height: 45px;
      fill: black;
    }
  }
`;
