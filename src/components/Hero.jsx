import {styles} from "../styles";
const Hero = () => {
    return (
        <div className="relative w-full h-screen mx-auto">
            <div
                className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
                <div className="flex flex-col justify-center items-center mt-5">
                    <div className="w-5 h-5 rounded-full bg-[#915eff]"/>
                    <div className="w-1 sm:h-80 h-40 violet-gradient"/>
                </div>
                <div>
                    <h1 className={`${styles.heroHeadText} text-white`}>
                        Hi, I'm
                        <span className="text-[#915eff] pl-2">
                            Priyanshu
                        </span>
                    </h1>
                    <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                        I craft dynamic web pages, integrate databases,{" "}
                        <br className="sm:block hidden"/>
                        and ensure cross-browser compatibility
                    </p>
                    <div
                        className="pt-24 flex flex-row flex-wrap gap-6">
                        <button
                            type="button"
                            className="py-2.5 px-5 text-lg font-medium text-white relative group flex items-center gap-2">
                            <span
                                className="relative after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 after:-translate-x-1/2 group-hover:after:w-full">
                                Schedule a meet
                            </span>
                            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </button>
                        <button
                            type="button"
                            className="py-2.5 px-5 text-lg font-medium text-white relative group flex items-center gap-2">
                            <span
                                className="relative after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 after:-translate-x-1/2 group-hover:after:w-full">
                                View Resume
                            </span>
                            <span className="transition-transform duration-300 group-hover:translate-x-1">↗</span>
                        </button>
                    </div>

                    <div className="pt-24 space-x-36">
                        <button
                            class="py-2.5 px-5 me-2 mb-2 text-lg font-medium text-white relative group">
                            <span>
                                Based in
                                <br/>
                                Guna India
                            </span>
                        </button>
                        <button
                            class="py-2.5 px-5 me-2 mb-2 text-lg font-medium text-white relative group">
                            <span>
                                Specializing in
                                <br/>
                                Web Development, Applied AI
                            </span>
                        </button>

                    </div>
                </div>

            </div>

        </div>

    );
};

export default Hero;
