import styled from '@emotion/styled';
import {Box, Flex, ImageBox, TextBox} from '../joy';

const Button = styled.button`
    cursor: pointer;
    border: none;
    padding: 0.75em 1.2em;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 0.5rem;
    background-color: var(--joy-purple);
    transition: 0.3s all;
    &:hover {
        transform: scale(1.05);
    }
    &:active {
        transform: scale(1);
    }
`;

const SmallButton = styled(Button)`
    font-size: 0.9rem;
`;

const SubButton = styled(Button)`
    background-color: var(--joy-foreground);
`;

const TextSpan = styled.span`
    color: var(--joy-purple);
`;

export const Landing = () => {
    return (
        <Flex el="main" direction="y" minHeight="fill">
            <Flex el="header" padding="1rem" align="center" gap="0.5rem">
                <ImageBox width="2rem" src="/logo.svg" />
                <TextBox weight="bold" size="1.2rem" margin="0 auto 0 0">
                    Joy
                </TextBox>
                <Flex el="nav" hidden={true} gap="1.5rem" align="center" padding="0 1rem">
                    <TextBox>Blog</TextBox>
                    <TextBox>About</TextBox>
                    <TextBox>Contact</TextBox>
                    <SmallButton>Book a demo</SmallButton>
                </Flex>

                {/* <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="20" height="2.66667" rx="1.33333" fill="white" />
                    <rect y="6.66669" width="20" height="2.66667" rx="1.33333" fill="white" />
                    <rect y="13.3334" width="20" height="2.66667" rx="1.33333" fill="white" />
                </svg> */}
            </Flex>
            <Flex el="section" gap="1.2rem" align="center" direction="y" lg-direction="x" maxWidth="70rem" margin="3rem auto">
                <Flex direction="y" lg-width="50%" shrink={false} align="start" padding="2rem">
                    <TextBox el="h1" weight="extraBold" margin="0" size="2.5rem" xl-size="3rem">
                        An impactful message about <TextSpan>your product</TextSpan>.
                    </TextBox>
                    <TextBox el="h2" size="1.2rem" weight="light" color="theme:subForeground">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec metus ipsum.
                    </TextBox>
                    <Flex gap="1rem">
                        <Button>Book a demo</Button>
                        <SubButton>Hire an expert</SubButton>
                    </Flex>
                </Flex>
                <Box grow lg-padding="0 2rem 0 0">
                    <img style={{width: '100%'}} src="/default-image.png" alt="Default image" />
                </Box>
            </Flex>
        </Flex>
    );
};
