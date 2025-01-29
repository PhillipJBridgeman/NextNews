import Link from 'next/link';
<<<<<<< HEAD
import Image from 'next/image';
=======
>>>>>>> aea1e490022e78d3898ad74fdc91f238dc20428d
import { DUMMY_NEWS } from '@/dummy-news';

export default function NewsPage() {
    return (
        <>
        <h1>News Page</h1>
<<<<<<< HEAD
        <ul className='news-list'>
            {DUMMY_NEWS.map((newsItem) => (
                <li key={newsItem.id}>
                    <Link href={`/news/${newsItem.slug}`}>
                        <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
                        <span>{newsItem.title}</span>
=======
        <ul className="news-list">
            {DUMMY_NEWS.map((newsItem) => (
                <li key={newsItem.id}>
                    <Link href={`/news/${newsItem.slug}`}>
                    <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
                    <span>{newsItem.title}</span>
>>>>>>> aea1e490022e78d3898ad74fdc91f238dc20428d
                    </Link>
                </li>
            ))}
        </ul>
        </>
    );
}