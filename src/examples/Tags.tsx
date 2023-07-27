import styled from '@emotion/styled';
import {Flex, TextBox} from '../joy';

const Card = styled(TextBox)`
    border-radius: 0.5rem;
    background-color: var(--joy-subBackground);
`;

export const Tags = () => {
    const data = ['adventure', 'comedy', 'science-fiction', 'documentary', 'horror', 'anime', 'drama', 'thriller', 'western', 'cartoon'];
    return (
        <Flex direction="y" maxWidth="40rem" margin="0 auto" padding="2rem">
            <TextBox el="h1" margin="2rem 0">
                Tags
            </TextBox>
            <Flex gap="1rem" wrap>
                {data.map(tag => (
                    <Card key={tag} padding="0.8rem 1rem">
                        {tag}
                    </Card>
                ))}
            </Flex>
        </Flex>
    );
};
