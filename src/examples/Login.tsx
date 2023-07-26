import styled from '@emotion/styled';
import {Flex, TextBox} from '../joy';

const Logo = styled.img`
    width: 2rem;
`;

const TextLink = styled.a`
    color: var(--joy-blue);
`;

const LogoType = styled.div`
    font-size: 1.2rem;
    font-weight: bold;
    letter-spacing: 0.3rem;
    text-transform: uppercase;
`;

const Label = styled.label`
    width: 20rem;
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

const Button = styled(Flex)<{primary?: boolean}>`
    cursor: pointer;
    border: none;
    outline: 2px solid transparent;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 0.5rem;
    background-color: ${props => (props.primary ? 'var(--joy-blue)' : 'var(--joy-foreground)')};
    &:focus-visible {
        outline: 2px solid var(--joy-foreground);
    }
`;

export const Login = () => {
    return (
        <Flex direction="y" minHeight="fill" padding="1.5rem">
            <Flex align="center" gap="1rem">
                <Logo src="/logo.svg" alt="logo" />
                <LogoType>Joy</LogoType>
            </Flex>
            <Flex grow direction="y" align="center" distribute="center" gap="1rem">
                <TextBox el="h1" margin="0">
                    Welcome back
                </TextBox>
                <TextBox color="theme:subForeground">
                    New to Joy? <TextLink href="#">Create an account</TextLink>
                </TextBox>
                <Label htmlFor="email">
                    Email
                    <Input el="input" width="20rem" minHeight="2.5rem" padding="0.8em 1em" />
                </Label>
                <Label htmlFor="password">
                    Password
                    <Input el="input" width="20rem" minHeight="2.5rem" padding="0.8em 1em" />
                </Label>
                <Button el="button" primary width="20rem" minHeight="2.5rem" align="center" distribute="center">
                    Sign in
                </Button>
                <Button el="button" width="20rem" minHeight="2.5rem" align="center" distribute="center">
                    🤓 Sign in with Google
                </Button>
                <TextLink href="#">Forgot password?</TextLink>
            </Flex>
        </Flex>
    );
};
