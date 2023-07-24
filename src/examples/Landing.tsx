import {Box} from '../joy.ts';

export const Landing = () => {
    return (
        <Box el="main">
            <Box el="nav" width="100%">
                <Box margin="0">
                    <img width="32px" src="/logo.svg" alt="Logo" />
                    <div style={{fontWeight: 'bold', fontSize: '1.2rem'}}>Joy</div>
                </Box>
                <Box>Home</Box>
                <Box>Pricing</Box>
                <Box>Blog</Box>
                <Box>FAQ</Box>
                <Box>Get started 🚀</Box>
            </Box>
            <Box el="section">
                <Box width="60%">
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
            <Box el="section" width="100%">
                <Box el="h2">Features</Box>
                <Box>
                    <Box el="picture">
                        <img style={{width: '100%'}} src="https://picsum.photos/id/9/367/267" alt="Macbook on desk" />
                        <Box el="legend">Feature 1</Box>
                    </Box>
                    <Box el="picture">
                        <img style={{width: '100%'}} src="https://picsum.photos/id/9/367/267" alt="Macbook on desk" />
                        <Box el="legend">Feature 2</Box>
                    </Box>
                    <Box el="picture">
                        <img style={{width: '100%'}} src="https://picsum.photos/id/9/367/267" alt="Macbook on desk" />
                        <Box el="legend">Feature 3</Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};
