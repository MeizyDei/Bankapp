import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const translationEn =
    { language: "en",mHome: "Home", mImportant: "Important", mPlanned: "Planned", mSend: "Send", mRequest: "Request", pSignUp: "SignUp", pLogin: "Login", bToDoApp: "To Do app", rEmail: "Email", rPassword: "Password", rRepeatedPassword: "Repeated Password", rfirstName: "Firstname", rlastName: "Lastname"};
const translationLt =
    { language: "lt", mHome: "Pradžia", mImportant: "Svarbiausi", mPlanned: "Suplanuoti", mSend: "Siųsti", mRequest: "Gauti", pSignUp: "Registruotis", pLogin: "Prisijungti", bToDoApp: "To Do programa", rEmail: "elektroninis paštas", rPassword: "Slaptažodis", rRepeatedPassword: "Pakartokite slaptažodį", rfirstName: "Vardas", rlastName: "Pavardė"};

i18n.use(initReactI18next).init({
    resources: {
        en: { translation: translationEn },
        lt: { translation: translationLt },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
});

export { i18n };
