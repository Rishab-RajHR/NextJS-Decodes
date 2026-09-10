import { Inter } from "next/font/google";
import Image from "next/image"

const inter = Inter({
    subsets: ["latin"]
});

export default function Home(){
    return (
       <main style={{padding: "40px"}}>
            <p className={inter.className}>This is Main Component</p>

            <Image  
             src='/hero.jpg'
             alt="Hero Image"
             width={300}
             height={300}
            />
       </main>
    )
}