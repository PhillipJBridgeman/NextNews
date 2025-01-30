import NavLink from '@/components/nav-link';
import Link from 'next/link';

export default function MainHeader() {
  const path = usePathname();
  return (
    <header id="main-header">
      <div id="logo">
        <Link href="/">NextNews</Link>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink href="/news">News</NavLink>
          </li>
          <li>
            <Link href="/archive" className={path.startsWith('/archive') ? 'active' : undefined }>Archive</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}