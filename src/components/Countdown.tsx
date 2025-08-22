import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Countdown = () => {
  const eventDate = new Date("September 21, 2025 03:00:00").getTime();
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-70px" });

  useEffect(
    function () {
      const x = setInterval(function () {
        const now = new Date().getTime();

        const distance = eventDate - now;

        setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
        setHours(
          Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        );
        setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
        setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
      }, 1000);
    },
    [eventDate]
  );

  return (
    <section className="w-full py-28" ref={ref}>
      <div className="w-9/12 mx-auto grid grid-cols-2 lg:grid-cols-4 gap-32">
        <motion.hgroup
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold">{days}</h1>
          <p className="text-lg">days</p>
        </motion.hgroup>
        <motion.hgroup
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold">{hours}</h1>
          <p className="text-lg">hours</p>
        </motion.hgroup>
        <motion.hgroup
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold">{minutes}</h1>
          <p className="text-lg">mins</p>
        </motion.hgroup>
        <motion.hgroup
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold">{seconds}</h1>
          <p className="text-lg">seconds</p>
        </motion.hgroup>
      </div>
    </section>
  );
};

export default Countdown;
