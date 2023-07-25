import styled from '@emotion/styled';
import {Flex} from '../joy';

const Heading = styled.h1`
    padding: 1rem;
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

const Button = styled.button`
    cursor: pointer;
    border: none;
    padding: 0.75rem 1.2rem;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 0.5rem;
    background-color: #eeeeee;
`;

export const Hero = () => {
    return (
        <Flex direction="y" minHeight="fill">
            <Flex gap="1rem" padding="1rem" align="center">
                <Logo src="/logo.svg" />
                <LogoType margin="0 auto 0 0">Hero</LogoType>
                <Button>Login</Button>
            </Flex>
            <Flex maxWidth="50rem" margin="0 auto" align="center" distribute="center" grow>
                <Heading>An awesome big and bold message that automatically grows and shrinks...</Heading>
            </Flex>
        </Flex>
    );
};
