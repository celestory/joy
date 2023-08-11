import styled from '@emotion/styled';
import {Box, Button, Flex, ImageBox, LinkButton, TextBox, TextSpan} from '../joy';

const SubButton = styled(Button)`
    color: var(--joy-background);
    background-color: var(--joy-foreground);
`;

export const Landing = () => {
    return (
        <Flex el="main" direction="y" minHeight="fill">
            <Flex el="header" padding="1rem" align="center" gap="0.5rem">
                <ImageBox width="2rem" src="/logo.svg" />
                <TextBox weight="bold" size="1.2rem" margin="0 auto 0 0">
                    Joy
                </TextBox>
                <Flex el="nav" gap="1.5rem" align="center" padding="0 1rem" hidden={true} md-hidden={false}>
                    <TextBox>Blog</TextBox>
                    <TextBox>About</TextBox>
                    <TextBox>Contact</TextBox>
                    <Button size="0.9rem">Book a demo</Button>
                </Flex>
                <Box hidden={false} md-hidden={true}>
                    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="20" height="2.66667" rx="1.33333" fill="white" />
                        <rect y="6.66669" width="20" height="2.66667" rx="1.33333" fill="white" />
                        <rect y="13.3334" width="20" height="2.66667" rx="1.33333" fill="white" />
                    </svg>
                </Box>
            </Flex>
            <Flex el="section" gap="1.2rem" align="center" direction="y" lg-direction="x" maxWidth="70rem" margin="3rem auto">
                <Flex direction="y" lg-width="50%" shrink={false} align="start" padding="2rem" gap="1.5rem">
                    <TextBox el="h1" weight="bold" margin="0" size="2.5rem" xl-size="3rem">
                        An impactful message about{' '}
                        <TextSpan el="strong" weight="bold" color="theme:brand">
                            your product
                        </TextSpan>
                        .
                    </TextBox>
                    <TextBox el="h2" size="1.2rem" weight="light" color="theme:subForeground">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec metus ipsum.
                    </TextBox>
                    <Flex gap="1rem">
                        <LinkButton xl-size="1.1rem" href="/pricing">
                            Book a demo
                        </LinkButton>
                        <SubButton xl-size="1.1rem">Hire an expert</SubButton>
                    </Flex>
                </Flex>
                <Box grow lg-padding="0 2rem 0 0">
                    <ImageBox lg-radius="theme:card.radius" width="100%" src="/default-image.png" alt="Default image" />
                </Box>
            </Flex>
        </Flex>
    );
};
