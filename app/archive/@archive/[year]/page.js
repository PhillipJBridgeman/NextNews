import { DUMMY_NEWS } from '../../../data/dummy-data';
import NewsList from '@/components/news-list';

export default function FilteredNewsPage() {
    return (
        <NewsList news={DUMMY_NEWS} />  
    );
}