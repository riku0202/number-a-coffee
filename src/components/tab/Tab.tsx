import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import * as MUI from "@mui/material";
import styled from "styled-components";

type Props = Pick<Parameters<typeof MUI.Tabs>["0"], "value" | "onChange">;

/**
 * TODO: Tabをmapで回すpropsにする
 */
export const Tab = (props: Props) => {
    return (
        <MUI.Tabs
            value={props.value}
            onChange={props.onChange}
            aria-label="tabs"
            variant="fullWidth"
        >
            <MUI.Tab
                icon={<LocalCafeIcon />}
                label={<Label>HotDrink</Label>}
                {...a11yProps(1)}
            />
            <MUI.Tab
                icon={<LocalCafeIcon />}
                label={<Label>ColdDrink</Label>}
                {...a11yProps(2)}
            />
            <MUI.Tab
                icon={<RestaurantIcon />}
                label={<Label>Food</Label>}
                {...a11yProps(3)}
            />
        </MUI.Tabs>
    );
};

const a11yProps = (index: number) => {
    return {
        id: `tab-${index}`,
        "aria-controls": `tabpanel-${index}`,
    };
};

const Label = styled.p`
    margin-top: -5px;
    font-size: 5px;
`;
