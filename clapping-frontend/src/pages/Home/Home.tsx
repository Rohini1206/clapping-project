import React from 'react';

import { HomeContainer, Section, Title, Subtitle, ClaimButton, Image, FAQSection, FAQItem } from './Home.styles';
import Navbar from '../../components/Navbar/Navbar';

const Home: React.FC = () => {
    return (
        <HomeContainer>
            <Navbar />
            <Section>
                <Title>Your Personal Website. For Building Your Personal Brand.</Title>
                <Subtitle>
                    Software professionals often struggle to prove their value beyond technical skills. 
                    Boost your career with instant peer recognition for your soft skills.
                </Subtitle>
                <ClaimButton>Claim Your Brand Link</ClaimButton>
                <Image src="/assets/images/your-image.png" alt="Profile" />
            </Section>
            {/* Add other sections similarly */}
            <FAQSection>
                <FAQItem>Why do I need a personal branding link?</FAQItem>
                <FAQItem>Is it easy to get shoutouts for building my personal brand?</FAQItem>
                {/* Add more FAQ items */}
            </FAQSection>
        </HomeContainer>
    );
};

export default Home;
