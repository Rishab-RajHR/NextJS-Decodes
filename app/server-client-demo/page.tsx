import Counter from "../components/Counter";
import ServerInfo from "../components/ServerInfo";


export default function SeverClientDemo() {
    return(
        <main style={{padding: "40px"}}>
            <h1>Server Client Demo</h1>
            <ServerInfo />
            <Counter />
        </main>
    )
}