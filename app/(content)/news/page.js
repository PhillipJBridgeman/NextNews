"use client";

import { useEffect, useState } from 'react';
import NewsList from '@/components/news-list';

export default function NewsPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [news, setNews] = useState(null);

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);

            try {
                const response = await fetch('http://localhost:8080/news');

                if (!response.ok) {
                    setError('Failed to fetch news');
                    setIsLoading(false);
                    return;
                }

                const newsData = await response.json();
                setNews(newsData);
            } catch (error) {
                setError('Could not connect to server');
            } finally {
                setIsLoading(false);
            }
        }

        fetchData();
    }, []);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    if (!news || news.length === 0) {
        return <p>No news available</p>;
    }

    return (
        <>
            <h1>News Page</h1>
            <NewsList news={news} />
        </>
    );
}