import * as MUI from "@mui/material";
import { ComponentProps } from "react";

type Props = Pick<
    ComponentProps<typeof MUI.Modal>,
    "open" | "children" | "onClose"
>;

const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    boxShadow: 24,
};

export const Modal = (props: Props) => {
    return (
        <MUI.Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={props.open}
            onClose={props.onClose}
            closeAfterTransition
            BackdropComponent={MUI.Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <MUI.Fade in={props.open}>
                <MUI.Box sx={style}>{props.children}</MUI.Box>
            </MUI.Fade>
        </MUI.Modal>
    );
};
