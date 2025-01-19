import { Button } from '@/components';
import {
    Header,
    HeroSection,
    MeetSection,
    StoriesSection,
    WhySection,
    ContactSection,
    Footer,
} from './components';
import '@/styles/pages/landing-page/index.scss';

const navItems = [
    {
        title: 'Home',
        dropdownItems: [],
    },
    {
        title: 'For Models',
        dropdownItems: ['Option 1', 'Option 2', 'Option 3'],
    },
    {
        title: 'For Clients',
        dropdownItems: ['Option 1', 'Option 2', 'Option 3'],
    },
];

const cardModels = [
    {
        imageSrc: '/images/models/simon.png',
        name: 'Simon D',
        location: 'Dubai',
    },
    {
        imageSrc: '/images/models/christine.png',
        name: 'CHRISTINE V.',
        location: 'Burj Khalifa',
    },
    {
        imageSrc: '/images/models/daron.png',
        name: 'Daron M.',
        location: 'Dubai',
    },
    {
        imageSrc: '/images/models/veronica.png',
        name: 'VERONICA BR.',
        location: 'Dubai',
    },
    {
        imageSrc: '/images/models/maihun.png',
        name: 'Maihun D.',
        location: 'Dubai',
    },
];

export default function LandingPage() {
    return (
        <>
            <Header
                navItems={navItems}
                desktopCTA={
                    <Button
                        type="primary"
                        styleType="fill"
                        radius="square"
                        size="md"
                    >
                        Start your model career
                    </Button>
                }
            ></Header>
            <HeroSection></HeroSection>
            <MeetSection cardModels={cardModels}></MeetSection>
            <StoriesSection></StoriesSection>
            <WhySection></WhySection>
            <ContactSection></ContactSection>
            <Footer></Footer>
        </>
    );
}
