import Link from "next/link";

async function getData() {
    const res = await fetch("http://localhost:3000/api/blog");
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json();
}
const BlogPage = async () => {
    const data = await getData();
    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-3 gap-5">
                {data.posts.map((item) => (
                    <Link key={item.id} href={`/blog/${item.slug}`}>
                        {item.title}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default BlogPage;
