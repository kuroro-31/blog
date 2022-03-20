import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getCategories } from '../services';

function Header() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <header className="mx-auto mb-8 bg-white">
      <div className="w-full inline-block py-6">
        <div className="px-6 md:px-10">
          <Link href="/">
            <span className="title cursor-pointer font-bold text-2xl">Frontend Diary</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
