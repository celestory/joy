import styled from '@emotion/styled';
import {Flex, Grid} from '../joy';
import {TextBox} from '../core/TextBox/TextBox';

const GridItem = styled(Flex)`
    color: var(--joy-subForeground);
    font-size: 3rem;
    font-weight: bold;
    border-radius: 1rem;
    background-color: var(--joy-subBackground);
`;

export const FancyGrid = () => {
    return (
        <Flex direction="y" minHeight="fill" margin="0 auto" maxWidth="50rem" padding="2rem">
            <TextBox el="h1" size="3rem" color="theme:green" md-color="theme:purple">
                Fancy grid.
            </TextBox>
            <Grid areas="'a' 'b' 'c' 'd' 'e'" md-areas="'a a b e' 'c d d e'" gap="1rem">
                <GridItem area="a" align="center" distribute="center" padding="3rem">
                    A
                </GridItem>
                <GridItem area="b" align="center" distribute="center" padding="3rem">
                    B
                </GridItem>
                <GridItem area="c" align="center" distribute="center" padding="3rem">
                    C
                </GridItem>
                <GridItem area="d" align="center" distribute="center" padding="3rem">
                    D
                </GridItem>
                <GridItem area="e" align="center" distribute="center" padding="3rem">
                    E
                </GridItem>
            </Grid>
        </Flex>
    );
};
