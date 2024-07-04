import Link from "next/link";

export default async function SignUp(){
    const res = await fetch("http://localhost:9001/signup");
    const signUp = await res.json()
    const {page} = signUp || {}
    return <div>
        <div className="text-center">
            <h1 className="font-semibold text-3xl">{page}</h1>
        </div>

        <div className="flex items-center justify-center gap-1">
            <p>Already have an account?</p>
            <Link href={"log-in"} className="underline font-semibold ">Log in</Link>
</div>

    </div>
}