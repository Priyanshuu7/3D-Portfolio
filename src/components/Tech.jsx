import {BallCanvas} from "./canvas";
import {SectionWrapper} from "../hoc";
import {technologies} from "../constants";
import {  textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../styles";




const Tech = () => {
    return (
      <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Technologies I work with</p>
      </motion.div> <br />
      {/* <StackIcon name="git" /> */}
        <div className="flex flex-row flex-wrap justify-center gap-10">
            {technologies.map((technology) => (
                <div className="w-28 h-28" key={technology.name}>
                    <BallCanvas icon={technology.icon}/>
                </div>
            ))}
        </div>
        </>
    );
};

export default SectionWrapper(Tech, "tech");
