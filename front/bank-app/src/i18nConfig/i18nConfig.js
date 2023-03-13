import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const translationEn =
    { language: "en",mHome: "Home", mAbout: "About", mBalance: "Balance", mSend: "Send", mRequest: "Request", pSignUp: "SignUp", bBankApp: "Revobank app", rEmail: "Email", rPassword: "Password", rRepeatedPassword: "Repeated Password"};
const translationLt =
    { language: "lt", mHome: "Pradžia", mAbout: "Apie", mBalance: "Balansas", mSend: "Siųsti", mRequest: "Gauti", pSignUp: "Registruotis", bBankApp: "Revobank programa", rEmail: "elektroninis paštas", rPassword: "Slaptažodis", rRepeatedPassword: "Pakartokite slaptažodį"};

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
