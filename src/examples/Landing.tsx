import styled from '@emotion/styled';
import {Box, Flex} from '../joy';

const Logo = styled(Box)`
    font-size: 1.2rem;
    font-weight: bold;
`;

const Button = styled(Box)`
    color: var(--theme-background);
    border: none;
    cursor: pointer;
    border-radius: 5px;
    font-size: 1rem;
    font-weight: bold;
    background-color: var(--theme-purple);
`;

export const Landing = () => {
    return (
        <Flex el="main" direction="y" gap="1.2rem" minHeight="fill" maxWidth="60rem" margin="0 auto" padding="2rem">
            <Flex el="nav" width="100%" gap="1rem" align="center">
                <Logo margin="0 auto 0 0">🚀 Landing</Logo>
                <Box>Home</Box>
                <Box>Pricing</Box>
                <Box>Blog</Box>
                <Box>FAQ</Box>
                <Button el="button" padding="0.4em 0.6em">
                    Get started
                </Button>
            </Flex>
            <Flex el="section" gap="1.2rem" align="center" direction="y" md-direction="x">
                <Flex direction="y" width="60%">
                    <Box el="h1" margin="0">
                        My product
                    </Box>
                    <Box el="p">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec metus ipsum. Aenean facilisis, justo nec venenatis pellentesque, dui
                        metus porttitor orci, a euismod lorem magna eu nisl. Vivamus ut laoreet magna. Aliquam varius quam accumsan, feugiat mauris ut, porta
                        lorem.
                    </Box>
                </Flex>
                <Box width="40%">
                    <img style={{width: '100%'}} src="/default-image.png" alt="Default image" />
                </Box>
            </Flex>
            <Flex el="section" direction="y" width="100%">
                <Box el="h2">Features</Box>
                <Flex gap="1.2rem" direction="y" md-direction="x">
                    <Flex el="picture" direction="y" grow>
                        <img style={{width: '100%'}} src="/default-image.png" alt="Default image" />
                        <Box el="legend">Feature 1</Box>
                    </Flex>
                    <Flex el="picture" direction="y" grow>
                        <img style={{width: '100%'}} src="/default-image.png" alt="Default image" />
                        <Box el="legend">Feature 2</Box>
                    </Flex>
                    <Flex el="picture" direction="y" grow>
                        <img style={{width: '100%'}} src="/default-image.png" alt="Default image" />
                        <Box el="legend">Feature 3</Box>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
};
