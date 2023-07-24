import styled from '@emotion/styled';
import {Box, Flex} from '../joy';

const Page = styled(Flex)`
    color: var(--theme-foreground);
    background-color: var(--theme-background);
`;

export const Landing = () => {
    return (
        <Page el="main" direction="y" gap="1.2rem" minHeight="100svh">
            <Flex el="nav" width="100%" gap="1rem" align="center">
                <Flex margin="0 auto 0 0" align="center" gap="6rem">
                    <img width="32px" src="/logo.svg" alt="Logo" />
                    <div style={{fontWeight: 'bold', fontSize: '1.2rem'}}>Joy</div>
                </Flex>
                <Box>Home</Box>
                <Box>Pricing</Box>
                <Box>Blog</Box>
                <Box>FAQ</Box>
                <Box>Get started 🚀</Box>
            </Flex>
            <Flex el="section" gap="1.2rem" align="center">
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
                    <img style={{width: '100%'}} src="https://picsum.photos/id/9/367/267" alt="Macbook on desk" />
                </Box>
            </Flex>
            <Flex el="section" direction="y" width="100%">
                <Box el="h2">Features</Box>
                <Flex gap="1.2rem" direction="y" md-direction="x">
                    <Flex el="picture" direction="y" grow>
                        <img style={{width: '100%'}} src="https://picsum.photos/id/9/367/267" alt="Macbook on desk" />
                        <Box el="legend">Feature 1</Box>
                    </Flex>
                    <Flex el="picture" direction="y" grow>
                        <img style={{width: '100%'}} src="https://picsum.photos/id/9/367/267" alt="Macbook on desk" />
                        <Box el="legend">Feature 2</Box>
                    </Flex>
                    <Flex el="picture" direction="y" grow>
                        <img style={{width: '100%'}} src="https://picsum.photos/id/9/367/267" alt="Macbook on desk" />
                        <Box el="legend">Feature 3</Box>
                    </Flex>
                </Flex>
            </Flex>
        </Page>
    );
};
