import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Blog',
    description: "Latest Blog Page",
    openGraph:{
        title: "Blog | Mohit Decodes",
        description: "Latest Blog Page",
        images:["/og-image.jpg"]
    },
    twitter:{
        card: "summary_large_image",
        title: "Blog | Mohit Decodes",
        description: "Latest Blog Page",
        images:["/og-image.jpg"]
    }

}

export default function BlogPage() {
   return (
      <div>
          <h1>Blog Page</h1>
          <p>Welcome to the blog page! Here you find the latest articles</p>
      </div>
   )
}