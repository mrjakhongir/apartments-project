import React from 'react';
import './homeSection2.scss';
import { motion } from 'framer-motion';

const HomeSection2 = () => {
  return (
    <section className='home__section2'>
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.3 }}
        className='wrapper'
      >
        <div>
          <h2>25+</h2>
          <p>Лет опыта</p>
        </div>
        <div>
          <h2>300+</h2>
          <p>Довольных клиентов</p>
        </div>
        <div>
          <h2>1000+</h2>
          <p>Уникальных предложений</p>
        </div>
        <div>
          <h2>5</h2>
          <p>Личных проектов</p>
        </div>
        <div>
          <h2>50+</h2>
          <p>Партнеров</p>
        </div>
      </motion.div>
    </section>
  );
};

export default HomeSection2;
