import { InstagramEmbed } from 'react-social-media-embed';
import instaIcon from '../../assets/img/insta-icon.svg';

export default function InstaSection() {
    return (
        <section className='flex flex-col bg-prime-brown px-5 py-5'>
            <div>
                <div className='flex items-center gap-3'>
                    <img src={instaIcon} alt="instagram icon" />
                    <a className='font-bebas text-off-white' target='blank' href="https://www.instagram.com/jumbo_aarhus/">@jumbo_aarhus</a>
                </div>
                <div className='flex max-w-xl m-auto'>
                    <div className='m-auto scale-[0.8]'>
                        <InstagramEmbed className="m-auto" captioned={false} width={328} height={420} url='https://www.instagram.com/p/CxD3XNPMBFo/' />
                    </div>
                    <div className='m-auto scale-[0.8] hidden md:flex'>
                        <InstagramEmbed className="m-auto" captioned={false} width={328} height={420} url='https://www.instagram.com/p/CzoiS8Qs93B/' />
                    </div>
                    <div className='m-auto scale-[0.8] hidden lg:flex'>
                        <InstagramEmbed className="m-auto" captioned={false} width={328} height={420} url='https://www.instagram.com/p/CzloRY7MopB/' />
                    </div>
                </div>
                <div>
                    <h6 className='font-bebas text-off-white'>Vores passion</h6>
                    <p className='font-mont text-off-white'>Træd ind i vores hyggelige café, hvor duften af friskkværnet kaffe skaber en atmosfære af ren velvære. Vi er ikke bare en café; vi er et tilflugtssted for kaffeelskere og dem, der søger øjeblikke af ro midt i en travl dag. </p>
                </div>
            </div>

        </section>
    );
}
