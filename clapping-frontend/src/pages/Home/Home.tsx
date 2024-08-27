import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import {  FAQItem, FAQSection, HomeContainer, Section, Subtitle, Title } from '../../components/HomeContainer';
import ClaimLink from '../../components/ClaimLink/ClaimLink';

const Home: React.FC = () => {
    return (
        <HomeContainer>
            <Navbar />
            <Section>
                <Title>Your Personal Website. <br/> For Building Your Personal Brand.</Title>
                <Subtitle>
                    Software professionals often struggle to prove their value beyond technical skills. 
                    Boost your <br/> career with instant peer recognition for your soft skills.
                </Subtitle>
                <ClaimLink />
                {/* <ClaimButton>Claim Your Brand Link</ClaimButton> */}
            </Section>
            <FAQSection>
                <FAQItem>Why do I need a personal branding link?</FAQItem>
                <FAQItem>Is it easy to get shoutouts for building my personal brand?</FAQItem>
            </FAQSection>
        </HomeContainer>
    );
};

export default Home;
