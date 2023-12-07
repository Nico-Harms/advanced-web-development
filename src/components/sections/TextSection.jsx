import Bakery from '../../assets/images/bageri.webp';
import Cafe from '../../assets/images/cafe.webp';
import { motion } from 'framer-motion';

export default function TextSection() {

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

      const RightContainerVariants = {
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration: 0.5},
        },
        hidden: {
          opacity: 0,
          x: 100,
        },
      };

    return (
        <div className='flex flex-col gap-20 my-16'>
            <motion.div className=" w-4/5 mx-auto flex flex-col gap-10 md:grid md:grid-cols-2 lg:gap-16"
                variants={LeftContainerVariants}
                initial='hidden'
                whileInView='visible'
                viewport={{once: true}}
            >
                <div className=" flex flex-col gap-2 ">
                    <h2 className='font-bebas text-4xl text-prime-orange md:text-5xl'>Bageri</h2>
                    <hr className=' bg-prime-brown h-[2px] mb-3' />
                    <p className='font-mont text-off-black text-sm lg:text-base'>Velkommen til vores hjertevarme bageri, hvor duften af friskbagt brød møder dig ved døren og inviterer dig ind i en verden af uimodståelige delikatesser. Vores brød er håndværk på sit højeste - fra sprøde skorper til bløde krummer. Uanset om det er det klassiske surdejsbrød eller saftigt fuldkornsbrød, er vores udvalg skabt med kærlighed og omhu. Og lad ikke vores passion for brød overskygge vores konditors magi; vores kager er en fest for dine smagsløg, fra luftige flødeskumskager til sprøde tærter med friske frugter.</p>
                </div>
                <img src={Bakery} className='w-[100%] drop-shadow-xl md:order-first md:mt-14 lg:mt-0' alt="" />
            </motion.div>
            <motion.div className="w-4/5 mx-auto flex flex-col gap-10 md:grid md:grid-cols-2 lg:gap-16"
                variants={RightContainerVariants}
                initial='hidden'
                whileInView='visible'
                viewport={{once: true}}
            >
                <div className="flex flex-col gap-2">
                    <h2 className='font-bebas text-4xl text-prime-orange md:text-5xl'>Café</h2>
                    <hr className=' bg-prime-brown h-[2px] mb-3'/>
                    <p className='font-mont text-off-black text-sm lg:text-base '>Træd ind i vores hyggelige café, hvor duften af friskkværnet kaffe skaber en atmosfære af ren velvære. Vi er ikke bare en café; vi er et tilflugtssted for kaffeelskere og dem, der søger øjeblikke af ro midt i en travl dag. Vores passion for kaffe går ud over almindeligheden - vi importerer nøje udvalgte bønner og vores baristaer mestrer kunsten at brygge den perfekte kop. Slap af i vores indbydende omgivelser, lad musikken omfavne dig, og nyd en kop kaffe, der vækker dine sanser. Velkommen til vores café, hvor kaffen er brygget med omhu, og hyggen er serveret i hver eneste kop.</p>
                </div>
                <img src={Cafe} className='w-[100%] drop-shadow-xl md:mt-14 lg:mt-0' alt="" />
            </motion.div>
        </div>
    )
}