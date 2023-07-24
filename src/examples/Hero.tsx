import styled from '@emotion/styled';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    color: #eeeeee;
    background-color: #121212;
    height: 100svh;
`;
const Header = styled.header`
    gap: 1rem;
    display: flex;
    padding: 1rem;
    align-items: center;
`;
const Main = styled.main`
    display: flex;
    max-width: 50rem;
    flex-grow: 1;
    align-items: center;
    margin-inline: auto;
    justify-content: center;
`;
const H1 = styled.h1`
    padding: 1rem;
    font-size: clamp(2rem, 8vw, 4rem);
    text-align: center;
    font-weight: bolder;
`;

const Logo = styled.img`
    width: 3rem;
`;
const LogoType = styled.div`
    font-size: 1.2rem;
    font-weight: bold;
    margin-right: auto;
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
        <Wrapper>
            <Header>
                <Logo src="/logo.svg" alt="logo" />
                <LogoType>Your app</LogoType>
                <Button>Login</Button>
            </Header>
            <Main>
                <H1>An awesome big and bold message that automatically grows and shrinks...</H1>
            </Main>
        </Wrapper>
    );
};
