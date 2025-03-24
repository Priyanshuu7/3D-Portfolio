import React from 'react'
import { motion } from 'framer-motion'
import { textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'


function Contact() {
    return (
      <>  <motion.div variants={textVariant()}>
        </motion.div><div>
            <div class="max-w-[1600px] mx-auto px-4 flex-grow">
                <div class="grid md:grid-cols-2 gap-16 md:gap-24">
                    <div class="space-y-8" style={{ opacity: 1, transform: "none" }}>
                        <div class="space-y-4">
                            <h2 class="text-4xl md:text-5xl font-light">Let's Connect</h2>
                            <p class="text-xl md:text-2xl text-muted font-light">Have a project in mind or just want to chat?</p>
                        </div>
                        <div style={{ opacity: 1 }}>
                            <a
                                href="mailto:hi@sarthakgaud.tech"
                                class="group inline-flex items-center gap-2 text-xl md:text-2xl relative">
                                <span class="relative">hi@sarthakgaud.tech<span
                                    class="absolute left-0 right-0 bottom-0 h-px bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                                </span>
                                <span style={{ transform: "none" }}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                        aria-hidden="true"
                                        role="img"
                                        class="iconify iconify--ph w-6 h-6"
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
                    </div>
                    <div class="space-y-8" style={{ opacity: 1, transform: "none" }}>
                        <h3 class="text-xl text-muted">Find me on</h3>
                        <div class="space-y-4">
                            <a
                                href="https://linkedin.com/in/gaud"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="group flex items-center justify-between p-4 rounded-xl bg-accent/5 hover:bg-accent/10 transition-colors relative overflow-hidden"
                                style={{ opacity: 1, transform: "none" }}>
                                <div
                                    class="absolute bottom-0 left-0 w-full h-[2px] bg-accent"
                                    style={{ transform: "scaleX(0)" }}></div>
                                <div class="flex items-center gap-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                        aria-hidden="true"
                                        role="img"
                                        class="iconify iconify--ri w-6 h-6"
                                        width="1em"
                                        height="1em"
                                        viewBox="0 0 24 24">
                                        <path
                                            fill="currentColor"
                                            d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z"></path>
                                    </svg>
                                    <div>
                                        <p class="text-sm text-muted">LinkedIn</p>
                                        <p>/in/gaud</p>
                                    </div>
                                </div>
                                <span
                                    class="text-muted group-hover:text-text transition-colors"
                                    style={{ transform: "none" }}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                        aria-hidden="true"
                                        role="img"
                                        class="iconify iconify--ph w-5 h-5"
                                        width="1em"
                                        height="1em"
                                        viewBox="0 0 256 256">
                                        <path
                                            fill="currentColor"
                                            d="M204 64v104a12 12 0 0 1-24 0V93L72.49 200.49a12 12 0 0 1-17-17L163 76H88a12 12 0 0 1 0-24h104a12 12 0 0 1 12 12"></path>
                                    </svg>
                                </span>
                            </a>
                            <a
                                href="https://twitter.com/iminoaruu"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="group flex items-center justify-between p-4 rounded-xl bg-accent/5 hover:bg-accent/10 transition-colors relative overflow-hidden"
                                style={{ opacity: 1, transform: "none" }}>
                                <div
                                    class="absolute bottom-0 left-0 w-full h-[2px] bg-accent"
                                    style={{ transform: "scaleX(0)" }}></div>
                                <div class="flex items-center gap-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                        aria-hidden="true"
                                        role="img"
                                        class="iconify iconify--ri w-6 h-6"
                                        width="1em"
                                        height="1em"
                                        viewBox="0 0 24 24">
                                        <path
                                            fill="currentColor"
                                            d="m17.687 3.063l-4.996 5.711l-4.32-5.711H2.112l7.477 9.776l-7.086 8.099h3.034l5.469-6.25l4.78 6.25h6.102l-7.794-10.304l6.625-7.571zm-1.064 16.06L5.654 4.782h1.803l10.846 14.34z"></path>
                                    </svg>
                                    <div>
                                        <p class="text-sm text-muted">Twitter</p>
                                        <p>@iminoaruu</p>
                                    </div>
                                </div>
                                <span
                                    class="text-muted group-hover:text-text transition-colors"
                                    style={{ transform: "none" }}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                        aria-hidden="true"
                                        role="img"
                                        class="iconify iconify--ph w-5 h-5"
                                        width="1em"
                                        height="1em"
                                        viewBox="0 0 256 256">
                                        <path
                                            fill="currentColor"
                                            d="M204 64v104a12 12 0 0 1-24 0V93L72.49 200.49a12 12 0 0 1-17-17L163 76H88a12 12 0 0 1 0-24h104a12 12 0 0 1 12 12"></path>
                                    </svg>
                                </span>
                            </a>
                            <a
                                href="https://github.com/iminoaru"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="group flex items-center justify-between p-4 rounded-xl bg-accent/5 hover:bg-accent/10 transition-colors relative overflow-hidden"
                                style={{ opacity: 1, transform: "none" }}>
                                <div
                                    class="absolute bottom-0 left-0 w-full h-[2px] bg-accent"
                                    style={{ transform: "scaleX(0)" }}></div>
                                <div class="flex items-center gap-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                        aria-hidden="true"
                                        role="img"
                                        class="iconify iconify--ri w-6 h-6"
                                        width="1em"
                                        height="1em"
                                        viewBox="0 0 24 24">
                                        <path
                                            fill="currentColor"
                                            d="M12.001 2c-5.525 0-10 4.475-10 10a9.99 9.99 0 0 0 6.837 9.488c.5.087.688-.213.688-.476c0-.237-.013-1.024-.013-1.862c-2.512.463-3.162-.612-3.362-1.175c-.113-.288-.6-1.175-1.025-1.413c-.35-.187-.85-.65-.013-.662c.788-.013 1.35.725 1.538 1.025c.9 1.512 2.337 1.087 2.912.825c.088-.65.35-1.087.638-1.337c-2.225-.25-4.55-1.113-4.55-4.938c0-1.088.387-1.987 1.025-2.687c-.1-.25-.45-1.275.1-2.65c0 0 .837-.263 2.75 1.024a9.3 9.3 0 0 1 2.5-.337c.85 0 1.7.112 2.5.337c1.913-1.3 2.75-1.024 2.75-1.024c.55 1.375.2 2.4.1 2.65c.637.7 1.025 1.587 1.025 2.687c0 3.838-2.337 4.688-4.562 4.938c.362.312.675.912.675 1.85c0 1.337-.013 2.412-.013 2.75c0 .262.188.574.688.474A10.02 10.02 0 0 0 22 12c0-5.525-4.475-10-10-10"></path>
                                    </svg>
                                    <div>
                                        <p class="text-sm text-muted">GitHub</p>
                                        <p>/iminoaru</p>
                                    </div>
                                </div>
                                <span
                                    class="text-muted group-hover:text-text transition-colors"
                                    style={{ transform: "none" }}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                        aria-hidden="true"
                                        role="img"
                                        class="iconify iconify--ph w-5 h-5"
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
                        <p class="text-muted text-sm pt-8" style={{ opacity: 1 }}>Currently based in Guna, <br /> India Open to remote opportunities worldwide</p>
                    </div>
                </div>
            </div>
        </div></>
        

    )
}

export default SectionWrapper(Contact, "contact");