import { useMediaQuery } from "@mui/material";
import { Pc } from "./Pc";
import { Sp } from "./Sp";

export const Access = () => {
    const isPc = useMediaQuery("(min-width:920px)");
    return <>{isPc ? <Pc /> : <Sp />}</>;
};
