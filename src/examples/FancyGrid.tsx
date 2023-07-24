import styled from '@emotion/styled';
import {Flex, Grid} from '../joy';

const Wrapper = styled(Flex)`
    background-color: var(--theme-background);
`;

const Heading = styled.h1`
    color: var(--theme-foreground);
    font-size: 3em;
`;

const GridItem = styled(Flex)`
    color: var(--theme-subForeground);
    font-size: 3rem;
    font-weight: bold;
    border-radius: 1rem;
    background-color: var(--theme-subBackground);
`;

export const FancyGrid = () => {
    return (
        <Wrapper direction="y" minHeight="fill" margin="0" padding="2rem">
            <Heading>Fancy grid.</Heading>
            <Grid areas={`'one' 'two' 'three' 'four' 'five'`} md-areas={`'one one two five' 'three four four five'`} gap="1rem">
                <GridItem item="grid" area="one" align="center" distribute="center" padding="3rem">
                    1
                </GridItem>
                <GridItem item="grid" area="two" align="center" distribute="center" padding="3rem">
                    2
                </GridItem>
                <GridItem item="grid" area="three" align="center" distribute="center" padding="3rem">
                    3
                </GridItem>
                <GridItem item="grid" area="four" align="center" distribute="center" padding="3rem">
                    4
                </GridItem>
                <GridItem item="grid" area="five" align="center" distribute="center" padding="3rem">
                    5
                </GridItem>
            </Grid>
        </Wrapper>
    );
};
