import styled from '@emotion/styled';
import {Flex, Input, ImageBox, TextBox, Button, TextLink} from '../joy';

const Label = styled.label`
    width: 20rem;
    color: #aaaaaa;
    font-size: 0.9rem;
    input {
        margin-top: 0.5rem;
    }
`;

export const Login = () => {
    return (
        <Flex direction="y" minHeight="fill" padding="1.5rem">
            <Flex align="center" gap="0.5rem">
                <ImageBox width="2rem" src="/logo.svg" alt="logo" />
                <TextBox weight="bold" size="1.2rem">
                    Joy
                </TextBox>
            </Flex>
            <Flex grow direction="y" align="center" distribute="center" gap="1rem">
                <TextBox el="h1" margin="0">
                    Welcome back
                </TextBox>
                <TextBox color="theme:subForeground">
                    New to Joy?{' '}
                    <TextLink href="#" color="theme:blue">
                        Create an account
                    </TextLink>
                </TextBox>
                <Label htmlFor="email">
                    Email
                    <Input width="20rem" minHeight="2.5rem" padding="0.8em 1em" />
                </Label>
                <Label htmlFor="password">
                    Password
                    <Input type="password" width="20rem" minHeight="2.5rem" padding="0.8em 1em" />
                </Label>
                <Button width="20rem" minHeight="2.5rem">
                    Sign in
                </Button>
                <Button width="20rem" minHeight="2.5rem">
                    🤓 Sign in with Google
                </Button>
                <TextLink href="#" color="theme:blue">
                    Forgot password?
                </TextLink>
            </Flex>
        </Flex>
    );
};
