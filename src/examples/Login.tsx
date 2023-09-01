import styled from '@emotion/styled';
import {Flex, Input, ImageBox, TextBox, Button, TextLink} from '../joy';
import {themeConst} from '../core/utils/types/theme';

const Label = styled.label`
    width: 20rem;
    color: var(--joy-subForeground);
    font: var(--joy-font-ui);
    font-size: 0.9rem;
    input {
        margin-top: 0.5rem;
    }
`;

const GoogleButton = styled(Button)`
    background-color: ${themeConst('theme:colors.fg')};
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
                <GoogleButton width="20rem">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                        <path
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                            fill="#4285F4"
                        />
                        <path
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                            fill="#34A853"
                        />
                        <path
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                            fill="#FBBC05"
                        />
                        <path
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                            fill="#EA4335"
                        />
                        <path d="M1 1h22v22H1z" fill="none" />
                    </svg>
                    <span>Sign in with Google</span>
                </GoogleButton>
                <TextLink href="#" color="theme:colors.accent">
                    Forgot password?
                </TextLink>
            </Flex>
        </Flex>
    );
};
