import * as React from 'react';
import {Home} from "@mui/icons-material";
import MenuItem from "./MenuItem";
import {Translation} from "react-i18next";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import TopicIcon from '@mui/icons-material/Topic';

export const AppMainMenu = (
    <Translation>
        {(t, {i18n}) => (
            <>
                <MenuItem label={t("mHome")} link="/" icon={<Home/>}/>
                <MenuItem label={t("mImportant")} link="/important" icon={<StarBorderIcon/>}/>
                <MenuItem label={t("mPlanned")} link="/planned" icon={<TopicIcon/>}/>
            </>
        )}
    </Translation>
);
