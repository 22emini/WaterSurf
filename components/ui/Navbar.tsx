import Link from "next/link";
import Image from "next/image";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import NavItems from "../NavItems";


const Navbar = () => {
    return (
        <nav className="navbar">
            <Link href="/">
                <div className="flex items-center gap-2.5 cursor-pointer">
                    <Image
                        src="/logo.png" className="rounded-3xl"
                        alt="logo"
                        width={49}
                        height={46}
                    />
                </div>
            </Link>
            <div className="flex items-center gap-8">
                <NavItems />
                <SignedOut>
                    <SignInButton>
                        <button className="btn-signin  hover:bg-blue-700 hover:text-white">Sign In</button>
                    </SignInButton>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </nav>
    )
}

export default Navbar
