export default function NewsItemPage( {params} ) {
    const item = params.newsItem;
    return (
        <>
        <h1>News Item Page</h1>
        <p>{item}</p>
        </>
    );
}