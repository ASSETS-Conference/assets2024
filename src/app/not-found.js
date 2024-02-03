import Banner from "./lib/components/Banner";
import Link from "./lib/components/primitives/Link";

export default function NotFound() {
    return (
        <main id="content">
            <Banner heading={"Not Found"} subheading="" />
            <div className="flex sm:flex-row flex-col items-center justify-center sm:gap-12 gap-4 w-[100%] py-32 sm:px-24 px-12">
                <h1>404</h1>
                <div className="h-[125px] w-[1px] bg-theme-dark sm:block hidden"></div>
                <div className="flex flex-col gap-4 sm:items-start items-center">
                    <p className="sm:text-left text-center">
                        Hey, you might be lost. The page you're looking for
                        doesn't exist.
                    </p>
                    <Link href="/">
                        <button className="px-4 py-3 bg-theme-dark rounded-full text-white font-bold text-xs hover:-translate-y-1 transition ease-in-out duration-300">
                            Back to Home
                        </button>
                    </Link>
                </div>
            </div>
        </main>
    );
}
