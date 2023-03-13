import * as React from 'react';
import {Balance, Home, Info} from "@mui/icons-material";
import MenuItem from "./MenuItem";
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import PaymentsIcon from '@mui/icons-material/Payments';
export const AppMainMenu = (
    <>
        <MenuItem label="Home" link="/" icon={<Home/>}/>
        <MenuItem label="About" link="/about" icon={<Info/>}/>
        <MenuItem label="Balance" link="/balance" icon={<Balance/>}/>
        <MenuItem label="Send" link="/send" icon={<CompareArrowsIcon/>}/>
        <MenuItem label="Request" link="/request" icon={<PaymentsIcon/>}/>
    </>
);
