import styled from '@emotion/styled';
import {Flex, TextBox} from '../joy';

const Heading = styled.h1`
    margin: 0;
    margin-top: 3rem;
    font-size: clamp(2rem, 8vw, 4rem);
    text-align: center;
    font-weight: bolder;
`;

const Logo = styled.img`
    width: 2rem;
`;

const LogoType = styled(Flex)`
    font-size: 1.2rem;
    font-weight: bold;
    letter-spacing: 0.5rem;
    text-transform: uppercase;
`;

const Input = styled(Flex)`
    color: #eeeeee;
    border: none;
    outline: 2px solid transparent;
    border-radius: 0.5em;
    background-color: #444444;
    :focus {
        outline: 2px solid var(--joy-indigo);
    }
`;

const Button = styled.button`
    cursor: pointer;
    border: none;
    padding: 0.75rem 1.2rem;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 0.5rem;
    background-color: var(--joy-indigo);
`;

export const Hero = () => {
    return (
        <Flex el="main" direction="y" minHeight="fill">
            <Flex el="nav" gap="1rem" padding="1rem 2rem 1rem 1rem" align="center">
                <Logo src="/logo.svg" />
                <LogoType margin="0 auto 0 0">Joy</LogoType>
                <TextBox>Blog</TextBox>
                <TextBox>About</TextBox>
                <TextBox>Pricing</TextBox>
                <TextBox>FAQ</TextBox>
                <TextBox>Contact</TextBox>
            </Flex>
            <Flex el="section" direction="y" maxWidth="55rem" margin="0 auto" align="center" gap="1rem" padding="2rem" grow>
                <Heading>An awesome big and bold message to catch the eye.</Heading>
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
                    <Input el="input" width="15rem" minHeight="2.5rem" padding="0.8em 1em" />
                    <Button>Join Now!</Button>
                </Flex>
            </Flex>
            <Flex el="section" direction="y" width="100%" padding="2rem" maxWidth="60rem" margin="0 auto">
                <TextBox el="h2" margin="2rem 0" size="1.7rem">
                    Featured
                </TextBox>
                <Flex gap="1.2rem" direction="y" md-direction="x" width="100%">
                    <Flex direction="y" gap="1rem" grow shrink>
                        <img style={{width: '100%'}} src="/default-image.png" alt="Default image" />
                        <TextBox size="1.1rem" weight="bold">
                            Article title
                        </TextBox>
                        <TextBox size="0.8rem">Lorem ipsum dolor sit amet</TextBox>
                    </Flex>
                    <Flex direction="y" gap="1rem" grow shrink>
                        <img style={{width: '100%'}} src="/default-image.png" alt="Default image" />
                        <TextBox size="1.1rem" weight="bold">
                            Article title
                        </TextBox>
                        <TextBox size="0.8rem">Lorem ipsum dolor sit amet</TextBox>
                    </Flex>
                    <Flex direction="y" gap="1rem" grow shrink>
                        <img style={{width: '100%'}} src="/default-image.png" alt="Default image" />
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
