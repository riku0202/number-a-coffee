import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import * as React from "react";
import { Tab } from "./Tab";

export default { component: Tab } as ComponentMeta<typeof Tab>;

export const Primary: ComponentStoryObj<typeof Tab> = {
    render: () => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [state, setState] = React.useState(0);

        const handleChange = (
            event: React.SyntheticEvent,
            newValue: number,
        ) => {
            setState(newValue);
        };

        return <Tab onChange={handleChange} value={state} />;
    },
};
