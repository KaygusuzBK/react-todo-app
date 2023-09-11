import i18next from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  tr: {
    translation: {
      "Task Başlığı:": "Task Başlığı:",
      "Taskın İçeriği:": "Taskın İçeriği:",
      "Son Tarihi:": "Son Tarihi:",
      Tamamlananlar: "Tamamlananlar",
      "Task Ekle": "Task Ekle",
      "Task Güncelle": "Task Güncelle",
      "Task Sil": "Task Sil",
      "Task Tamamla": "Task Tamamla",
      Sil: "Sil",
      Güncelle: "Güncelle",
    },
  },

  en: {
    translation: {
      "Task Başlığı:": "Task Title:",
      "Taskın İçeriği:": "Task Content:",
      "Son Tarihi:": "Due Date:",
      Tamamlananlar: "Completed",
      "Task Ekle": "Add Task",
      "Task Güncelle": "Update Task",
      "Task Sil": "Delete Task",
      "Task Tamamla": "Complete Task",
      Sil: "Delete",
      Güncelle: "Update",
    },
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: "tr",
});

export default i18next;
