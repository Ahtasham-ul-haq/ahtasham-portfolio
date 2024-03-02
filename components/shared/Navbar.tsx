import {navLinks} from "@/constants" 
import Link from "next/link"

const Navbar = () => {
    return (
        <>
        <div className='flex justify-between mt-8 items-center mx-4'>
            <h1 className='text-3xl font-plex'>Portfolio.</h1>
            <div className='hidden md:flex gap-12'>
                {navLinks.map((link) => {
                    // const active = 
                    return (
                        <Link key={link.route} href={link.route}>
                            {link.name}
                        </Link>
                    )
                })}
            </div>
            <div className='flex md:hidden'>
                Small Nav
            </div>
        </div>
        </>
    )
}

export default Navbar