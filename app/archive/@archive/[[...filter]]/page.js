import NewsList from '@/components/news-list';
import Link from 'next/link';
import { getNewsForYear, getAvailableNewsYears, getAvailableNewsMonths} from '@/lib/news';

export default function FilteredNewsPage( {params} ) {
    const filter = params.filter;
    const selectedYear = filter?.[0];
    const selectedMonth = filter?.[1];

    let news;
    let links = getAvailableNewsYears();

    if (selectedYear && !selectedMonth) {
        news = getNewsForYear(selectedYear);
        links = getAvailableNewsMonths(selectedYear);
    }

    let newsContent = <p>No news found for the selected period.</p>;

    if (news && news.length > 0) {
        newsContent = <NewsList news={news} />;
    }

    return (
        <>
        <header id="archive-header">
            <nav>
                <ul>
                    {links.map(link => {
                        return (
                            <li key={link}>
                                <Link href={`/archive/${link}`}>{link}</Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </header>
        {newsContent}
        </>
    );
}