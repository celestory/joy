import styled from '@emotion/styled';
import {Flex, Input, ImageBox, TextBox, Button, TextLink} from '../joy';

const Label = styled.label`
    width: 20rem;
    color: var(--joy-subForeground);
    font: var(--joy-font-ui);
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
                <TextBox el="h1" margin="0" font="theme:fonts.heading" size="2rem">
                    Welcome back
                </TextBox>
                <TextBox color="theme:colors.dimmed">
                    New to Joy?{' '}
                    <TextLink href="#" color="theme:colors.accent">
                        Create an account
                    </TextLink>
                </TextBox>
                <Flex direction="y" gap="0.5rem">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" width="20rem" />
                </Flex>
                <Flex direction="y" gap="0.5rem">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" width="20rem" />
                </Flex>
                <Button width="20rem">Sign in</Button>
                <Button width="20rem">🤓 Sign in with Google</Button>
                <TextLink href="#" color="theme:colors.accent">
                    Forgot password?
                </TextLink>
            </Flex>
        </Flex>
    );
};
