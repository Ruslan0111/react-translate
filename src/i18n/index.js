import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ru from './ru.json';
import en from './en.json';
import uz from './uz.json'

i18n.use(initReactI18next).init({
  lng: 'uz',
  resources: {
    en: {
      translation: en,
    },
    ru: {
      translation: ru,
    },
    uz: {
      translation: uz
    }
  }
})

export default i18n;
