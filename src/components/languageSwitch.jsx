import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <select
      value={language}
      onChange={(e) => setLanguage(e.target.value)}
      className="bg-white text-black px-2 py-1 rounded"
    >
      <option value="en">English</option>
      <option value="hi">हिन्दी</option>
    </select>
  );
}