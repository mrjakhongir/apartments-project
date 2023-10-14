import { motion } from 'framer-motion';
import './about-section6.scss';

export default function AboutSection6() {
  return (
    <section className='about-section6'>
      <div className='about-section6_banner'>
        <div className='wrapper'>
          <motion.div
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 0.3 }}
          >
            <h2 className='about-header'>Политическая система</h2>
          </motion.div>
        </div>
      </div>
      <div className='about-section6_description'>
        <div className='wrapper'>
          <p>
            Политическая система Кипра представляет собой независимую
            федеративную республику с президентом, избираемым на пятилетний
            срок.
          </p>
          <p>
            Законодательная власть принадлежит парламенту, а исполнительная -
            Совету министров. В стране действует многопартийная система, а
            главные политические партии включают Демократический сбор,
            Прогрессивную партию трудового народа, Демократическую партию и
            Социалистическую партию.
          </p>
          <p>
            Официальной валютой Кипра является евро, а государственными языками
            - греческий и английский.
          </p>
          <span>
            <strong>Религия</strong>
          </span>
          <p>
            Большинство населения исповедует православное
            <b>христианство (78%), мусульмане (18%)</b> и представители других
            религий (4%).
          </p>
        </div>
      </div>
    </section>
  );
}
