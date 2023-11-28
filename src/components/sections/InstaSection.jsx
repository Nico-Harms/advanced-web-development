import { InstagramEmbed } from 'react-social-media-embed';
import instaIcon from '../../assets/images/insta-icon.svg';

export default function InstaSection() {
    return (
        <section className='flex flex-col items-center bg-prime-brown px-5 py-5'>
            <div className='max-w-5xl flex flex-col gap-10'>
                <div className='flex items-center gap-3'>
                    <img src={instaIcon} alt="instagram icon" />
                    <a className='font-bebas text-off-white text-xl md:text-2xl' target='blank' href="https://www.instagram.com/jumbo_aarhus/">@jumbo_aarhus</a>
                </div>
                <div className='flex justify-center gap-10 lg:justify-between'>
                    <div className='scale-[0.8] border-3 border-solid border-off-white md:scale-[1]'>
                        <InstagramEmbed  captioned={false} width={328} height={375} url='https://www.instagram.com/p/CxD3XNPMBFo/' />
                    </div>
                    <div className='scale-[1] hidden md:flex'>
                        <InstagramEmbed  captioned={false} width={328} height={375} url='https://www.instagram.com/p/CzoiS8Qs93B/' />
                    </div>
                    <div className='scale-[1] hidden lg:flex'>
                        <InstagramEmbed  captioned={false} width={328} height={375} url='https://www.instagram.com/p/CzloRY7MopB/' />
                    </div>
                </div>
                <div>
                    <h6 className='font-bebas text-off-white text-xl'>Vores passion</h6>
                    <p className='font-mont text-off-white max-w-sm text-sm md:text-base'>Træd ind i vores hyggelige café, hvor duften af friskkværnet kaffe skaber en atmosfære af ren velvære. Vi er ikke bare en café; vi er et tilflugtssted for kaffeelskere og dem, der søger øjeblikke af ro midt i en travl dag. </p>
                </div>
            </div>

        </section>
    );
}
