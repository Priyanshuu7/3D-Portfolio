import {styles} from "../styles";

const Hero = () => {
    return (
        <div className="relative w-full h-screen mx-auto  ">
            <div
                className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 pt-28`}>
                <div className="flex flex-col justify-center items-center mt-5 bg-primary">
                    
                    <div className="w-5 h-5 rounded-full bg-[#915eff] "/>
                    <div className="w-1 sm:h-80 h-40 violet-gradient "/>
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
                        className="flex flex-wrap gap-4 md:gap-8 text-base md:text-lg pt-24"
                        style={{
                        opacity: 1
                    }}>
                        <a
                            href=""
                            className="group flex items-center gap-2 text-muted hover:text-text transition-colors">
                            <span className="relative">
                                Schedule a meet
                                <span
                                    className="absolute left-0 right-0 bottom-0 h-px bg-current scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                            </span>
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </a>
                        <a
                            href=""
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-2 text-muted hover:text-text transition-colors">
                            <span className="relative">
                                View Resume
                                <span
                                    className="absolute left-0 right-0 bottom-0 h-px bg-current scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                            </span>
                            <span
                                className="text-muted group-hover:text-text"
                                style={{
                                transform: 'none'
                            }}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                    aria-hidden="true"
                                    role="img"
                                    className="iconify iconify--ph w-5 h-5"
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 256 256">
                                    <path
                                        fill="currentColor"
                                        d="M204 64v104a12 12 0 0 1-24 0V93L72.49 200.49a12 12 0 0 1-17-17L163 76H88a12 12 0 0 1 0-24h104a12 12 0 0 1 12 12"></path>
                                </svg>
                            </span>
                        </a>
                    </div>

                    <div
                        className="grid gap-8 md:gap-4 text-sm text-muted md:grid-cols-3"
                        style={{
                        opacity: 1
                    }}>
                        <div className="space-y-1 pt-28">
                            <span className="block text-text">Based in</span>
                            Guna, India
                        </div>
                        <div className="space-y-1 pt-28">
                            <span className="block text-text">Specializing in</span>
                            Web Development
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
