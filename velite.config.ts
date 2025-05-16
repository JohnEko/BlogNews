import { defineConfig, defineCollection, s } from "velite";


// We using this as the backend for the blog
// the computer fileds allow us to parse the post data
function computedFields<T extends { slug: string; }>(data: T) {
    return ({
        ...data,
        slugAsParams: data.slug.split("/").slice(1).join("/")
    });
}


const posts = defineCollection({
    name: "Post",
    pattern: "blog/**/*.mdx",
    schema: s.object({
        slug: s.path(),
        title: s.string().max(99),
        description: s.string().max(999).optional(),
        date: s.isodate(),
        published: s.boolean().default(true),
        body: s.mdx()
    })
    .transform(computedFields)
});
export default defineConfig({
    root: "content",
    output: {
        data: ".velite",
        assets: "public/static",
        base: "/static/",
        name: "[name]-[hash:6].[ext]",
        clean: true,
    },
    collections: {posts},
    mdx: {
        rehypePlugins: [],
        remarkPlugins: [],
    }
});
export function build(arg0: { watch: boolean; clean: boolean; }): any {
  throw new Error('Function not implemented.');
}

