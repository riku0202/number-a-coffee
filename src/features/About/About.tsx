import { useMediaQuery } from "@mui/material";
import { Sp } from "./Sp";
import { Pc } from "./Pc";

export type Props = { text: string };

export const About = (props: Props) => {
    const isPc = useMediaQuery("(min-width:920px)");
    return <>{isPc ? <Pc {...props} /> : <Sp {...props} />}</>;
};
