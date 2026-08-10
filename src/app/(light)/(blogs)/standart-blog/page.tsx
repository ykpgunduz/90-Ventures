
import { BlogBreadcurmb, BlogStandard } from "@/components/blog";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog Yazıları | +90 Ventures",
};
const page = () => {
    return (
        <main>
            <BlogBreadcurmb />
            <BlogStandard />
        </main>
    );
};

export default page;