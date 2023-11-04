async function getData(slug) {
    const res = await fetch(`http://localhost:3000/api/blog/${slug}`);
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch data");
    }

    return res.json();
}
const SinglePage = async ({ params }) => {
    const { slug } = params;
    const data = await getData(slug);
    return (
        <div>
            <h2 className="text-2xl">{data.posts.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: data.posts.desc }} />
        </div>
    );
};

export default SinglePage;
