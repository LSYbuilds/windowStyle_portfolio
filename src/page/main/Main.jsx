import React, { use, useEffect, useState } from "react";
import { MainWrap } from "../../style/main/main_styled";
import WindowView from "../../components/main/WindiwView";
import { AnimatePresence, motion } from "motion/react";
const Main = () => {
  const [fadeAnime, setFadeAnime] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeAnime(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <MainWrap>
      <AnimatePresence>
        {fadeAnime && (
          <motion.div
            className="fade_bg"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
          />
        )}
      </AnimatePresence>
      <WindowView />
    </MainWrap>
  );
};

export default Main;
