import { InstagramEmbed } from 'react-social-media-embed';
import instaIcon from '../../assets/images/insta-icon.svg';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';


export default function InstaSection() {

    const deviceWidth = window.innerWidth;

    const instaUrls = [
        'https://www.instagram.com/p/CxD3XNPMBFo/',
        'https://www.instagram.com/p/CzoiS8Qs93B/',
        'https://www.instagram.com/p/CzloRY7MopB/',
    ];

    const [currentUrlIndex, setCurrentUrlIndex] = useState(0);

    useEffect(() => {
        let intervalId;

        // Check device width before setting the interval
        if (deviceWidth < 768) {
            intervalId = setInterval(() => {
                setCurrentUrlIndex((prevIndex) => (prevIndex + 1) % instaUrls.length);
            }, 5000);
        }

        // Clear the interval when the component is unmounted
        return () => clearInterval(intervalId);
    }, [deviceWidth]); // Include deviceWidth in the dependency array

    const LeftContainerVariants = {
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration: 0.5},
        },
        hidden: {
          opacity: 0,
          x: -100,
        },
      };


    return (
<<<<<<< Updated upstream
        <section className='flex flex-col items-center h-[750px] bg-prime-brown md:h-[900px] lg:h-[950px] px-5 py-5'>
=======
        <section className='flex flex-col items-center h-[750px] bg-prime-brown md:h-[900px] px-5 py-5 lg:h-[1000px]'>
>>>>>>> Stashed changes
            <div className='max-w-5xl flex flex-col gap-10'>
                <div className='flex items-center gap-3'>
                    <img src={instaIcon} alt="instagram icon" />
                    <a className='font-bebas text-off-white text-xl md:text-2xl' target='blank' href="https://www.instagram.com/jumbo_aarhus/">@jumbo_aarhus</a>
                </div>
                <div className='flex justify-center gap-10 lg:justify-between'>
                    <div className='border-3 border-solid border-off-white scale-[0.9] sm:scale-[1]'>
                        <InstagramEmbed key={currentUrlIndex} width={328} height={375} url={deviceWidth < 768 ? instaUrls[currentUrlIndex] : instaUrls[0]} />
                    </div>
                    <div className='hidden md:flex'>
                        <InstagramEmbed width={328} height={375} url={instaUrls[1]} />
                    </div>
                    <div className='hidden lg:flex'>
                        <InstagramEmbed width={328} height={375} url={instaUrls[2]} />
                    </div>
                </div>

                <motion.div
                variants={LeftContainerVariants}
                initial='hidden'
                whileInView='visible'
                viewport={{once: true}}
                >
                    <h6 className='font-bebas text-off-white text-4xl md:text-5xl'>Vores passion</h6>
                    <p className='font-mont text-off-white max-w-sm text-sm md:text-base'>Træd ind i vores hyggelige café, hvor duften af friskkværnet kaffe skaber en atmosfære af ren velvære. Vi er ikke bare en café; vi er et tilflugtssted for kaffeelskere og dem, der søger øjeblikke af ro midt i en travl dag. </p>
                </motion.div>
            </div>

        </section>
    );
}