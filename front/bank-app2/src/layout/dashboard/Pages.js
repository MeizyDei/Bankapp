import {Route, Routes} from "react-router-dom";
import Home from "../../pages/Home";
import Important from "../../pages/important/Important";
import Planned from "../../pages/planned/Planned"
import Settings from "../../pages/Settings";
import SignUp from "../../pages/auth/SignUp"
import {Translation} from "react-i18next";
import Login from "../../pages/auth/Login";

const Pages = () => (
    <Translation>
        {(t, {i18n}) => (
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/important" element={<Important/>}/>
                <Route path="/planned" element={<Planned/>}/>
                <Route path="/settings" element={<Settings/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        )}
    </Translation>
)

export default Pages;