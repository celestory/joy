import styled from '@emotion/styled';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    color: #eeeeee;
    height: 100svh;
    align-items: center;
    justify-content: center;
    background-color: #121212;
    gap: 1rem;
`;

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

const Input = styled.input`
    color: #eeeeee;
    border: none;
    width: 15rem;
    height: 2.5rem;
    padding: 0.8em 1em;
    border-radius: 0.5em;
    outline-width: 0;
    background-color: #444444;
    border: 3px solid transparent;
    &:focus {
        border: 3px solid #7596de;
    }
`;

const Button = styled.button`
    cursor: pointer;
    border: none;
    width: 15rem;
    height: 2.5rem;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 0.5rem;
    background-color: #eeeeee;
    border: 3px solid transparent;
    outline-width: 0;
    border: 3px solid transparent;
    &:focus {
        border: 3px solid #7596de;
    }
`;

export const Login = () => {
    return (
        <Wrapper>
            <Logo src="/logo.svg" alt="logo" />
            <LogoType>Your app</LogoType>
            <Label htmlFor="email">
                Email
                <Input id="email" name="email" type="email" />
            </Label>
            <Label htmlFor="password">
                Password
                <Input id="password" name="password" type="password" />
            </Label>
            <Button>Login</Button>
        </Wrapper>
    );
};
