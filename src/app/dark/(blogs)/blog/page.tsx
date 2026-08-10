import { BlogTopIntro, BlogMain } from "@/components/blog";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog & Haberler | +90 Ventures",
};

const page = () => {
    return (
        <main>
            <BlogTopIntro />
            <BlogMain />
        </main>
    );
};

export default page;