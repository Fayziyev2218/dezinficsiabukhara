// import { useState } from "react";
// import { ChevronDown } from "lucide-react";

// const LanguageDropdown = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedLanguage, setSelectedLanguage] = useState("Uzbek");
//   const languages = ["Uzbek", "English", "Russian", "Turkish"];

//   return (
//     <div className="relative inline-block text-left hover:border-yellow-500 border border-gray-600 rounded-2xl">
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="flex items-center px-4 py-2 max-[920px]:py-[5px] max-[420px]:py-[3px] max-[420px]:px-2 max-[420px]:text-[14px] w-full text-gray-800 font-medium bg-white shadow-sm rounded-2xl"
//       >
//         {selectedLanguage} <ChevronDown className="ml-2 w-4 h-4" />
//       </button>
//       {isOpen && (
//         <div className="absolute left-0 mt-2 w-32 bg-white border border-gray-200 rounded-lg shadow-lg">
//           {languages.map((lang) => (
//             <button
//               key={lang}
//               onClick={() => {
//                 setSelectedLanguage(lang);
//                 setIsOpen(false);
//               }}
//               className="block w-full font-medium text-left px-4 py-2 hover:bg-green-800 hover:text-white"
//             >
//               {lang}
//             </button>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default LanguageDropdown;


// import { useLanguage } from "../context/LanguageContext";
// import { ChevronDown } from "lucide-react";

// const LanguageDropdown = () => {
//   const { language, changeLanguage } = useLanguage();
//   const languages = { uz: "O'zbek", en: "English", ru: "Русский" };

//   return (
//     <div className="relative inline-block text-left border border-gray-600 rounded-2xl">
//       <button className="flex items-center px-4 py-2 w-full text-gray-800 font-medium bg-white shadow-sm rounded-2xl">
//         {languages[language]} <ChevronDown className="ml-2 w-4 h-4" />
//       </button>
//       <div className="absolute left-0 mt-2 w-32 bg-white border border-gray-200 rounded-lg shadow-lg">
//         {Object.keys(languages).map((lang) => (
//           <button
//             key={lang}
//             onClick={() => changeLanguage(lang)}
//             className="block w-full font-medium text-left px-4 py-2 hover:bg-green-800 hover:text-white"
//           >
//             {languages[lang]}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default LanguageDropdown;

import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { ChevronDown } from "lucide-react";

const LanguageDropdown = () => {
  const { language, changeLanguage } = useLanguage();
  const languages = { uz: "O'zbek", en: "English", ru: "Русский" };
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      {/* 🔥 Tanlanganda ochilib-yopiladigan tugma */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center px-4 py-2 w-full text-gray-800 font-medium bg-white shadow-sm rounded-2xl 
                   border border-gray-600 hover:border-yellow-500 focus:border-yellow-500 transition-all"
      >
        {languages[language]} <ChevronDown className="ml-2 w-4 h-4" />
      </button>

      {/* 🔥 Dropdown menyusi */}
      {isOpen && (
        <div className="absolute left-0 mt-2 w-32 bg-white border border-gray-200 rounded-lg shadow-lg">
          {Object.keys(languages).map((lang) => (
            <button
              key={lang}
              onClick={() => {
                changeLanguage(lang);
                setIsOpen(false); // ✅ Til o‘zgarganda menyuni yopish
              }}
              className="block w-full font-medium text-left px-4 py-2 
                         hover:bg-green-800 hover:text-white focus:bg-green-700 focus:text-white"
            >
              {languages[lang]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;

