import ImageUploader from "quill-image-uploader";
import "quill-image-uploader/dist/quill.imageUploader.min.css";
import { Quill } from "react-quill";

Quill.register("modules/imageUploader", ImageUploader);
class data {
    formats = [
        "header",
        "font",
        "size",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "list",
        "bullet",
        "indent",
        "link",
        "image",
        "color",
        "video",
        "background",
        "clean",
        "code",
        "align",
        "direction",
        "code-block",
    ];
    modules = {
        toolbar: [
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            [
                {
                    color: [
                        "#000000",
                        "#be0027",
                        "#cf8d2e",
                        "#e4e932",
                        "#2c9f45",
                        "#371777",
                        "#511378",
                        "#ff0000",
                        "#52565e",
                        "#f3f4f7",
                        "#00aeff",
                        "#ff4f81",
                        "#2dde98",
                        "#0389ff",
                    ],
                },
                {
                    background: [
                        "#000000",
                        "#ffffff",
                        "#be0027",
                        "#cf8d2e",
                        "#e4e932",
                        "#2c9f45",
                        "#371777",
                        "#511378",
                        "#ff0000",
                        "#52565e",
                        "#f3f4f7",
                        "#00aeff",
                        "#ff4f81",
                        "#2dde98",
                        "#0389ff",
                    ],
                },
            ],

            ["bold", "italic", "underline", "strike", "blockquote"],
            [
                { list: "ordered" },
                { list: "bullet" },
                { indent: "-1" },
                { indent: "+1" },
            ],
            [
                { align: "" },
                { align: "center" },
                { align: "right" },
                { align: "justify" },
            ],
            ["link", "image", "video"],
            ["code-block", "clean"],
        ],
        imageUploader: {
            upload: (file) => {
                return new Promise((resolve, reject) => {
                    const formData = new FormData();
                    formData.append("image", file);

                    fetch(
                        "https://api.imgbb.com/1/upload?key=d6185450694a3322df02f9412c9a9415",
                        {
                            method: "POST",
                            body: formData,
                        }
                    )
                        .then((response) => response.json())
                        .then((result) => {
                            resolve(result.data.url);
                        })
                        .catch((error) => {
                            reject("Upload failed");
                            console.error("Error:", error);
                        });
                });
            },
        },
    };
}

let QuillScript = new data();

export { QuillScript };
