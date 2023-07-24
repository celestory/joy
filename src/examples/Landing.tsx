import {Box} from '../core/Box';

export const Landing = () => {
    return (
        <Box el="main" direction="y" gap="20px" background="theme.red" sm-background="theme.green">
            <Box el="nav" width="100%" gap="10px" align="center">
                <Box margin="0 auto 0 0" align="center" gap="10px">
                    <img width="32px" src="/logo.svg" alt="Logo" />
                    <div style={{fontWeight: 'bold', fontSize: '1.2rem'}}>Joy</div>
                </Box>
                <Box>Home</Box>
                <Box>Pricing</Box>
                <Box>Blog</Box>
                <Box>FAQ</Box>
                <Box>Get started 🚀</Box>
            </Box>
            <Box el="section" gap="20px" align="center">
                <Box direction="y" width="60%">
                    <Box el="h1">My product</Box>
                    <Box el="p">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec metus ipsum. Aenean facilisis, justo nec venenatis pellentesque, dui
                        metus porttitor orci, a euismod lorem magna eu nisl. Vivamus ut laoreet magna. Aliquam varius quam accumsan, feugiat mauris ut, porta
                        lorem.
                    </Box>
                </Box>
                <Box width="40%">
                    <img style={{width: '100%'}} src="https://picsum.photos/id/9/367/267" alt="Macbook on desk" />
                </Box>
            </Box>
            <Box el="section" direction="y" width="100%">
                <Box el="h2">Features</Box>
                <Box gap="20px" direction="y" md-direction="x">
                    <Box el="picture" direction="y" grow>
                        <img style={{width: '100%'}} src="https://picsum.photos/id/9/367/267" alt="Macbook on desk" />
                        <Box el="legend">Feature 1</Box>
                    </Box>
                    <Box el="picture" direction="y" grow>
                        <img style={{width: '100%'}} src="https://picsum.photos/id/9/367/267" alt="Macbook on desk" />
                        <Box el="legend">Feature 2</Box>
                    </Box>
                    <Box el="picture" direction="y" grow>
                        <img style={{width: '100%'}} src="https://picsum.photos/id/9/367/267" alt="Macbook on desk" />
                        <Box el="legend">Feature 3</Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};
