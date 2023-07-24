import styled from '@emotion/styled';
import {useEffect, useState} from 'react';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    color: #eeeeee;
    background-color: #121212;
    margin: 0;
    padding: 2rem;
`;

const SearchBar = styled.div`
    display: flex;
    gap: 1rem;
    width: 100%;
    padding-bottom: 1rem;
    input[type='search'] {
        flex-grow: 1;

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
    }
    select {
        min-width: 200px;
        color: #eeeeee;
        height: 2.5rem;
        border-radius: 0.5em;
        outline-width: 0;
        background-color: #444444;
    }
`;

const Grid = styled.div`
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

const GridItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    img {
        width: 100%;
        border-radius: 1rem;
    }
`;

export const AutoGrid = () => {
    const [pics, setPics] = useState<{id: string; author: string; download_url: string}[]>([]);
    useEffect(() => {
        fetch('https://picsum.photos/v2/list')
            .then(res => res.json())
            .then(setPics);
    }, []);
    return (
        <Wrapper>
            <h1>Auto grid.</h1>
            <SearchBar>
                <input type="search" placeholder="Search..." />
                <select>
                    <option>All</option>
                    <option>Draft</option>
                    <option>Other</option>
                </select>
            </SearchBar>
            <Grid>
                {pics.map(({id, author, download_url}) => (
                    <GridItem key={id}>
                        <img src={download_url} alt={author} />
                        <div>{author}</div>
                    </GridItem>
                ))}
            </Grid>
        </Wrapper>
    );
};
