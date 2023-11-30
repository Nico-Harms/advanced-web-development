import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import img2014 from '../assets/images/timeline2014.webp'
import img2016 from '../assets/images/timeline2016.webp'
import img2018 from '../assets/images/timeline2018.webp'
import img2021 from '../assets/images/timeline2021.webp'

export default function TimelinePage() {
    return (
        <>
            <div className="flex flex-col gap-6 my-10">
                <h1 className='font-bebas text-5xl text-prime-orange text-center md:text-6xl'>Historien om os</h1>
                <p className='font-mont text-center w-4/5 mx-auto text-sm md:text-base'>Vi har haft en blå historie hos Jumbo, vi vil gerne fortælle dig lidt om, hvor vi startede, og hvor vi er nu. følg med i fortællingen her.</p>
            </div>

            <VerticalTimeline className='vertical-timeline-custom-line vertical-timeline vertical-timeline--animate vertical-timeline--two-columns mb-32 lg:mb-52'
                lineColor='#DB6439'

            >
                <VerticalTimelineElement
                    className="vertical-timeline-element--right  custom-icon relative"
                    contentStyle={{ background: 'transparent', color: '#DB6439', boxShadow: 'none' }}
                    date=""
                    iconStyle={{ background: '#DB6439', color: '#fff' }}
                >
                    <h2 className='font-bebas' style={{ color: '#DB6439', fontSize: '50px', textAlign: 'center' }}>2014</h2>
                    <hr className=' bg-prime-brown h-[3px] ' />
                    <p className=' font-mont text-off-black' style={{fontWeight: '400'}}>I 2014 startede eventyret under navnet Birks Køkken i København. Founder 1, Benjamin Birk, tidligere ansat hos Claus Meyer, besluttede at forfølge sin passion for madlavning og undervisning. Med begrænsede ressourcer og støtte fra venner og familie etablerede han en madskole i Viby, Århus. <br /><br /><br /></p>
                    <img src={img2014} className='drop-shadow-xl md:absolute md:-left-[120%] md:top-[20%] md:w-[400px]' alt="" />

                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--left custom-icon relative"
                    contentStyle={{ background: 'transparent', color: '#DB6439', boxShadow: 'none' }}
                    date=""
                    iconStyle={{ background: '#DB6439', color: '#fff' }}>
                    <h2 className='font-bebas' style={{ color: '#DB6439', fontSize: '50px', textAlign: 'center' }}>2016</h2>
                    <hr className=' bg-prime-brown h-[3px] ' />
                    <p className=' font-mont text-off-black' style={{fontWeight: '400'}} >I 2016, efter at være vendt tilbage til Århus, udvidede Benjamin sin madskole og åbnede Jumbo Bakery & Eatery i oktober 2018. Manglen på investorer og knappe midler var en udfordring, men med tilføjelsen af co-founder 3, Mathias Dindler, begyndte de at forme deres drøm.<br /><br /><br /></p>
                    <img src={img2016} className='drop-shadow-xl md:absolute md:-right-[120%] md:top-[20%] md:w-[400px]' alt="" />
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--right  custom-icon relative"
                    contentStyle={{ background: 'transparent', color: '#DB6439', boxShadow: 'none' }}
                    date=""
                    iconStyle={{ background: '#DB6439', color: '#fff' }}
                >
                    <h2 className='font-bebas' style={{ color: '#DB6439', fontSize: '50px', textAlign: 'center' }}>2018</h2>
                    <hr className=' bg-prime-brown h-[3px] ' />
                    <p className=' font-mont text-off-black ' style={{fontWeight: '400'}}>Jumbo Bakery & Eatery åbnede dørene i oktober 2018 med fokus på madskolen og caféen som et udstillingsvindue for kurserne. Trods udfordringer som manglende menu- og kaffekort og manglende erfaring lærte de løbende og voksede. Efter nogle måneder stødte co-founder 4, Rasmus Krogh, til som en uddannet bager og tilføjede nødvendig ekspertise.<br /><br /><br /></p>
                    <img src={img2018} className='drop-shadow-xl md:absolute md:-left-[120%] md:top-[20%] md:w-[400px]' alt="" />

                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--left custom-icon relative"
                    contentStyle={{ background: 'transparent', color: '#DB6439', boxShadow: 'none' }}
                    date=""
                    iconStyle={{ background: '#DB6439', color: '#fff' }}>
                    <h2 className='font-bebas' style={{ color: '#DB6439', fontSize: '50px', textAlign: 'center' }}>2021</h2>
                    <hr className=' bg-prime-brown h-[3px] ' />
                    <p className=' font-mont text-off-black'style={{fontWeight: '400'}} >To år efter åbningen blev Jumbo Bakery ramt af coronakrisen, som tvang dem til at tilpasse sig og overveje alternative indtægtskilder. Efter at have forsøgt takeaway under første lockdown og lukket ned under den næste, trak de sig tilbage fra den traditionelle cafédrift. De lukkede Birks Køkken og udgav en bog kaldet "Surdej fra bunden." I maj 2021 åbnede de en søsterbutik og fortsatte med at stræbe efter forbedring, støttet af deres dedikerede team og en stolthed for faglighed og håndværk.<br /><br /><br /></p>
                    <img src={img2021} className='drop-shadow-xl md:absolute md:-right-[120%] md:top-[20%] md:w-[400px]' alt="" />
                </VerticalTimelineElement>
            </VerticalTimeline>
        </>
    )
}