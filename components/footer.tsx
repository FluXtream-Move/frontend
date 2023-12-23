import Github from "@/components/icons/github";
import Twitter from "@/components/icons/twitter";
export default function Footer() {
    return (
        <div className="flex justify-center dark:bg-black">
            <div className="flex w-3/4 justify-between py-5 pt-12 font-poppins">
                <div className=" flex items-center mt-2">
                    <p className="text-gray-500">
                        A project by{" "}
                        <a
                            className="font-semibold text-gray-600 underline-offset-4 transition-colors hover:underline"
                            href="https://twitter.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Xtreame Team
                        </a>
                    </p>
                </div>
                <div className="flex flex-row">
                    <a className="items-center px-6 py-4">
                        <Github/>
                    </a>
                    <a className="items-center pr-6 py-4">
                        <Twitter/>
                    </a>
                    <a
                        href="https://www.github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 rounded-lg border border-gray-200 bg-white px-6 py-2 transition-all duration-75 hover:scale-105"
                    >
                        <p className="font-medium text-gray-600">Connect with Us</p>
                    </a>
                </div>
            </div>
        </div>
    )
}