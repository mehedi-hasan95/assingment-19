"use client";
import { QuillScript } from "@/components/QuillScript";
import { useState } from "react";
import ReactQuill from "react-quill";

export default function Home() {
    const [editorData, setEditorData] = useState();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const slugify = (str) =>
            str
                .toLowerCase()
                .trim()
                .replace(/[^\w\s-]/g, "")
                .replace(/[\s_-]+/g, "-")
                .replace(/^-+|-+$&/g, "");
        const title = e.target.title.value;
        const data = { title, slug: slugify(title), desc: editorData };
        try {
            const response = await fetch("/api/blog", {
                method: "POST", // or 'PUT'
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();
        } catch (error) {
            console.error("Error:", error);
        }
    };
    return (
        <div className="container mx-auto p-4">
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" id="" />
                <ReactQuill
                    className=" block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner min-h-[250px] h-full pb-[50px]"
                    theme="snow"
                    value={editorData}
                    onChange={setEditorData}
                    modules={QuillScript.modules}
                    formats={QuillScript.formats}
                />
                <input
                    type="submit"
                    value="Submit"
                    className="bg-slate-700 px-5 py-3 rounded-lg max-w-max cursor-pointer"
                />
            </form>
        </div>
    );
}
