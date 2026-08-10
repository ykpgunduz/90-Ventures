import BlogDetailsArea from "@/components/blog/layouts/BlogDetails";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog Detayı | +90 Ventures",
};

const page = () => {
    return (
        <main>
            <BlogDetailsArea />
        </main>
    );
};

export default page;


