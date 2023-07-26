import styled from '@emotion/styled';

import {AutoGrid, Flex, TextBox} from '../joy';

const Input = styled(Flex)`
    color: #eeeeee;
    border: 3px solid transparent;
    border-radius: 0.5rem;
    outline: none;
    background-color: #444444;
    &:focus {
        border: 3px solid #7596de;
    }
`;

const Select = styled(Flex)`
    color: #eeeeee;
    border: none;
    border-radius: 0.5rem;
    outline-width: 0;
    background-color: #444444;
`;

const GridItem = styled(Flex)`
    img {
        width: 100%;
        border-radius: 0.5rem;
    }
`;

export const Gallery = () => {
    const images = new Array(20).fill({url: '/default-image.png', title: 'Product name'});
    return (
        <Flex direction="y" padding="2rem" maxWidth="70rem" margin="0 auto">
            <TextBox el="h1" font="theme:titleFont" size="3rem">
                Gallery
            </TextBox>
            <Flex gap="1rem" padding="0 0 1rem 0" width="100%">
                <Input el="input" width="15rem" minHeight="2.5rem" padding="0.8em 1em" grow={true} />
                <Select el="select" minWidth="10rem" minHeight="2.5rem" padding="0 0.5rem">
                    <option>All</option>
                    <option>Draft</option>
                    <option>Other</option>
                </Select>
            </Flex>
            <AutoGrid gap="1.5rem" minColumn="15rem">
                {images.map(({title, url}, i) => (
                    <GridItem key={i} direction="y" gap="1rem">
                        <img src={url} alt={title} />
                        <TextBox font="theme:textFont" size="1.2rem" md-size="1rem" weight="bold">
                            {title}
                        </TextBox>
                    </GridItem>
                ))}
            </AutoGrid>
        </Flex>
    );
};
