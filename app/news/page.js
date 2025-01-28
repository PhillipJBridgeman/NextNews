import Link from 'next/link';

export default function NewsPage() {
    return (
        <>
        <h1>News Page</h1>
        <ul>
            <li>
                <Link href="/news/first-newsItem">News 1</Link>
            </li>
            <li>
                <Link href="/news/second-newsItem">News 2</Link>
            </li>
            <li>
                <Link href="/news/third-newsItem">News 3</Link>
            </li>
        </ul>
        </>
    );
}