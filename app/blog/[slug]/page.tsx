interface BlogPageProps {
     params: {
         slug: string;
     }
}

const blogData  : Record<string, {title: string, content: string}> = {
    "nextjs":{
         title: "NextJS Basic",
         content: "NextJS is a React Framework for production. It makes building"
    },
    "react":{
         title: "React Basic",
         content: "React is a JavaScript library fo building user interfaces."
    },
    "node":{
         title: "Node Basic",
         content: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript."
    },

};

export default async function BlogDetailPage({params}: BlogPageProps) {
    const {slug} = await params;

    const blog = blogData[slug];

    if(!blog) {
        return <h1>Blog not found</h1>
    }

    console.log(blog);

    return(
       <div>
           <h1>{blog.title}</h1>
           <h1>{blog.content}</h1>
           <p>
             Slug URL: {slug}
           </p>
       </div>
    )
}