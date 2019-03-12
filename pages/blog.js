import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const blog = () => {
  const { t, i18n } = useTranslation();
  return <div>
    <button onClick={() => i18n.changeLanguage('en')}>En</button>
    <button onClick={() => i18n.changeLanguage('pt')}>Pt</button>
    <p>Blog</p>
    <Link href='/'>
      <a>To Home</a>
    </Link>
    <p>{t('welcome')}</p>
    <p>{t('other')}</p>
  </div>
};

export default blog;