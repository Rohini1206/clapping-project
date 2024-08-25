import styled from 'styled-components';

export const HomeContainer = styled.div`
    font-family: Arial, sans-serif;
`;

export const Section = styled.section`
    padding: 50px;
    text-align: center;
    background-color: #f0f4f8;
`;

export const Title = styled.h1`
    font-size: 36px;
    color: #333;
`;

export const Subtitle = styled.p`
    font-size: 18px;
    color: #555;
    margin: 20px 0;
`;

export const ClaimButton = styled.button`
    background-color: #ff4b5c;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;

    &:hover {
        background-color: #e63946;
    }
`;

export const Image = styled.img`
    width: 100%;
    max-width: 600px;
    margin-top: 30px;
`;

export const FAQSection = styled.div`
    margin-top: 50px;
`;

export const FAQItem = styled.div`
    margin: 10px 0;
    padding: 10px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
