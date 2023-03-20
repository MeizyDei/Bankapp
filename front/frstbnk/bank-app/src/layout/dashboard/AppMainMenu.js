import * as React from 'react';
import {Balance, Home, Info} from "@mui/icons-material";
import MenuItem from "./MenuItem";
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import PaymentsIcon from '@mui/icons-material/Payments';
import {Translation} from "react-i18next";

export const AppMainMenu = (
    <Translation>
        {(t, {i18n}) => (
            <>
                <MenuItem label={t("mHome")} link="/" icon={<Home/>}/>
                <MenuItem label={t("mAbout")} link="/about" icon={<Info/>}/>
                <MenuItem label={t("mPlanned")} link="/planned" icon={<Balance/>}/>
                <MenuItem label={t("mSend")} link="/send" icon={<CompareArrowsIcon/>}/>
                <MenuItem label={t("mRequest")} link="/request" icon={<PaymentsIcon/>}/>
            </>
        )}
    </Translation>
);
