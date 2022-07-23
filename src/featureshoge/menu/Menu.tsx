import { useMediaQuery } from "@mui/material";
import { MicroCMSMenu } from "src/types/microCMSMenu";
import { Pc } from "./Pc";
import { Sp } from "./Sp";

export const Menu = (props: MicroCMSMenu) => {
    const isPc = useMediaQuery("(min-width:920px)");
    return <>{isPc ? <Pc {...props} /> : <Sp {...props} />}</>;
};
