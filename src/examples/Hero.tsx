import styled from '@emotion/styled';
import {Box, Button, Flex, ImageBox, Input, TextBox} from '../joy';

const Heading = styled(TextBox)`
    font-size: clamp(2rem, 8vw, 4rem);
`;

export const Hero = () => {
    return (
        <Flex el="main" direction="y" minHeight="fill">
            <Flex el="header" gap="0.5rem" padding="1rem 2rem 1rem 1rem" align="center">
                <ImageBox width="2rem" src="/logo.svg" />
                <TextBox size="1.2rem" weight="bold" margin="0 auto 0 0">
                    Joy
                </TextBox>
                <Flex el="nav" gap="1.5rem" hidden={true} md-hidden={false}>
                    <TextBox>Blog</TextBox>
                    <TextBox>About</TextBox>
                    <TextBox>Pricing</TextBox>
                    <TextBox>FAQ</TextBox>
                    <TextBox>Contact</TextBox>
                </Flex>
                <Box hidden={false} md-hidden={true}>
                    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="20" height="2.66667" rx="1.33333" fill="white" />
                        <rect y="6.66669" width="20" height="2.66667" rx="1.33333" fill="white" />
                        <rect y="13.3334" width="20" height="2.66667" rx="1.33333" fill="white" />
                    </svg>
                </Box>
            </Flex>
            <Flex el="section" direction="y" maxWidth="55rem" margin="0 auto" align="center" gap="1rem" padding="2rem" grow>
                <Heading el="h1" weight="extraBold" margin="3rem 0 0 0" textAlign="center">
                    An awesome big and bold message to catch the eye.
                </Heading>
                <TextBox
                    size="1.1rem"
                    md-size="1.4rem"
                    weight="light"
                    textAlign="center"
                    lineHeight={1.5}
                    color="theme:subForeground"
                    maxWidth="35rem"
                    margin="0 auto"
                >
                    Use the input bellow to get your email and get informed about the project.
                </TextBox>
                <Flex gap="1rem">
                    <Input placeholder="name@email.com" width="15rem" md-width="20rem" size="1rem" md-size="1.2rem" />
                    <Button size="1rem" md-size="1.2rem">
                        Join Now!
                    </Button>
                </Flex>
            </Flex>
            <Flex el="section" direction="y" width="100%" padding="2rem" maxWidth="60rem" margin="0 auto">
                <TextBox el="h2" margin="2rem 0" size="1.7rem">
                    Featured
                </TextBox>
                <Flex gap="1.2rem" direction="y" md-direction="x" width="100%">
                    <Flex direction="y" gap="1rem" grow shrink>
                        <ImageBox radius="1rem" width="100%" fit="cover" src="/default-image.png" alt="Default image" />
                        <TextBox size="1.1rem" weight="bold">
                            Article title
                        </TextBox>
                        <TextBox size="0.8rem">Lorem ipsum dolor sit amet</TextBox>
                    </Flex>
                    <Flex direction="y" gap="1rem" grow shrink>
                        <ImageBox radius="1rem" width="100%" fit="cover" src="/default-image.png" alt="Default image" />
                        <TextBox size="1.1rem" weight="bold">
                            Article title
                        </TextBox>
                        <TextBox size="0.8rem">Lorem ipsum dolor sit amet</TextBox>
                    </Flex>
                    <Flex direction="y" gap="1rem" grow shrink>
                        <ImageBox radius="1rem" width="100%" fit="cover" src="/default-image.png" alt="Default image" />
                        <TextBox size="1.1rem" weight="bold">
                            Article title
                        </TextBox>
                        <TextBox size="0.8rem">Lorem ipsum dolor sit amet</TextBox>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
};
