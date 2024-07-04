import Link from "next/link";

export default async function LognIn() {
    const res = await fetch("http://localhost:9001/login");
    const logIn = await res.json()
    
    const {page} =logIn || {}

    return <div>
        <div className="text-center">
            <h1 className="font-semibold text-3xl">{page}</h1>
        </div>
        <div className="flex items-center justify-center gap-1">
            <p>New in Next-IMDb? </p>
             <Link href={"sign-up"} className="underline font-semibold " >Sign up </Link>
        </div>
    </div>;
}