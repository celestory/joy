import {AutoGrid, Flex, ImageBox, Input, Select, TextBox} from '../joy';

export const Gallery = () => {
    const images = new Array<{url: string; title: string}>(20).fill({url: '/default-image.png', title: 'Product name'});
    return (
        <Flex direction="y" padding="2rem" maxWidth="70rem" margin="0 auto">
            <TextBox el="h1" font="theme:titleFont" size="3rem" margin="1rem 0">
                Gallery
            </TextBox>
            <Flex gap="1rem" padding="0 0 1rem 0" width="100%">
                <Input placeholder="Search..." width="15rem" minHeight="2.5rem" padding="0.8em 1em" grow={true} />
                <Select minWidth="10rem" minHeight="2.5rem" padding="0 0.5rem">
                    <option>All</option>
                    <option>Draft</option>
                    <option>Other</option>
                </Select>
            </Flex>
            <AutoGrid gap="1.5rem" minColumn="15rem">
                {images.map(({title, url}, i) => (
                    <Flex key={i} direction="y" gap="1rem">
                        <ImageBox radius="0.5rem" src={url} alt={title} />
                        <TextBox font="theme:textFont" size="1.2rem" md-size="1rem" weight="bold">
                            {title}
                        </TextBox>
                    </Flex>
                ))}
            </AutoGrid>
        </Flex>
    );
};
