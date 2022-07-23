import MenuIcon from "@mui/icons-material/Menu";
import * as MUI from "@mui/material";
import styled from "styled-components";

export const MenuBar = () => {
    return (
        <MUI.AppBar
            color="default"
            position="static"
            sx={{
                ".MuiAppBar-root": {
                    backgroundColor: "red",
                },
            }}
        >
            <MUI.Toolbar>
                <MUI.IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 3 }}
                >
                    <MenuIcon />
                </MUI.IconButton>
                <Title>News</Title>
                <MUI.Button color="inherit">Login</MUI.Button>
            </MUI.Toolbar>
        </MUI.AppBar>
    );
};

const Title = styled.h6``;
