import styled from '@emotion/styled';
import {Flex} from '../joy';

const Logo = styled.img`
    width: 3rem;
`;

const LogoType = styled.div`
    font-size: 1.2rem;
    font-weight: bold;
    letter-spacing: 0.5rem;
    text-transform: uppercase;
`;

const Label = styled.label`
    width: 15rem;
    color: #aaaaaa;
    font-size: 0.9rem;
    input {
        margin-top: 0.5rem;
    }
`;

const Input = styled(Flex)`
    color: #eeeeee;
    border: none;
    outline: 2px solid transparent;
    border-radius: 0.5em;
    background-color: #444444;
    :focus {
        outline: 2px solid var(--joy-blue);
    }
`;

const Button = styled(Flex)`
    cursor: pointer;
    border: none;
    outline: 2px solid transparent;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 0.5rem;
    background-color: var(--joy-blue);
    &:focus-visible {
        outline: 2px solid var(--joy-foreground);
    }
`;

export const Login = () => {
    return (
        <Flex direction="y" minHeight="fill" align="center" distribute="center" gap="1rem">
            <Logo src="/logo.svg" alt="logo" />
            <LogoType>Your app</LogoType>
            <Label htmlFor="email">
                Email
                <Input el="input" width="15rem" minHeight="2.5rem" padding="0.8em 1em" />
            </Label>
            <Label htmlFor="password">
                Password
                <Input el="input" width="15rem" minHeight="2.5rem" padding="0.8em 1em" />
            </Label>
            <Button el="button" width="15rem" minHeight="2.5rem" align="center" distribute="center">
                Login
            </Button>
        </Flex>
    );
};
