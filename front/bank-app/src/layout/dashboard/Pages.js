import {Route, Routes} from "react-router-dom";
import Home from "../../pages/Home";
import About from "../../pages/About";
import {Balance} from "../../pages/balance/Balance"
import {Send} from "../../pages/send/send";
import {Request} from "../../pages/request/request";
import Settings from "../../pages/Settings";
import SignUp from "../../pages/auth/SignUp"
import {Translation} from "react-i18next";

const Pages = () => (
    <Translation>
        {(t,{i18n}) => (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/balance" element={<Balance/>}/>
        <Route path="/send" element={<Send/>}/>
        <Route path="/request" element={<Request/>}/>
        <Route path="/settings" element={<Settings/>}/>
            <Route path="/signup" element={<SignUp/>}/>
    </Routes>
)}
</Translation>
)

export default Pages;