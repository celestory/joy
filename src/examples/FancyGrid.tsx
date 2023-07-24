import styled from '@emotion/styled';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #121212;
    height: 100svh;
    margin: 0;
    padding: 2rem;
`;

const Heading = styled.h1`
    color: #eeeeee;
    font-size: 3em;
`;

const Grid = styled.div`
    display: grid;
    gap: 1rem;
    grid-template-areas:
        'one'
        'two'
        'three'
        'four'
        'five';
    @media (min-width: 600px) {
        grid-template-areas:
            'one   one  two  five'
            'three four four five';
    }
`;

const GridItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    //
    color: #aaaaaa;
    padding: 3rem;
    border-radius: 1rem;
    font-size: 3rem;
    font-weight: bold;
    background-color: #333333;
`;

const One = styled(GridItem)`
    grid-area: one;
`;

const Two = styled(GridItem)`
    grid-area: two;
`;

const Three = styled(GridItem)`
    grid-area: three;
`;

const Four = styled(GridItem)`
    grid-area: four;
`;

const Five = styled(GridItem)`
    grid-area: five;
`;

export const FancyGrid = () => {
    return (
        <Wrapper>
            <Heading>Fancy grid.</Heading>
            <Grid>
                <One>1</One>
                <Two>2</Two>
                <Three>3</Three>
                <Four>4</Four>
                <Five>5</Five>
            </Grid>
        </Wrapper>
    );
};
