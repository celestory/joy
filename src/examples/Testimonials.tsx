import styled from '@emotion/styled';
import {Flex, Grid, ImageBox, TextBox} from '../joy';

const Card = styled(Flex)`
    border-radius: 0.5rem;
    background-color: var(--joy-subBackground);
`;

const data = [
    {
        id: 1,
        user: 'John Doe',
        message: 'This UI library is fantastic! It has greatly improved the user experience of our website, and the components are easy to use and customize.',
        rating: 5,
        job: 'Web Developer',
    },
    {
        id: 2,
        user: 'Jane Smith',
        message:
            "I've been using this UI library for several projects now, and it has saved me so much development time. The documentation is clear, and the design of the components is top-notch.",
        rating: 4,
        job: 'Frontend Engineer',
    },
    {
        id: 3,
        user: 'Mike Johnson',
        message:
            'I highly recommend this UI library to anyone looking to build modern and responsive web applications. The variety of components and the attention to detail are impressive.',
        rating: 4,
        job: 'Full Stack Developer',
    },
    {
        id: 4,
        user: 'Emily Brown',
        message:
            'As a designer, I appreciate how flexible and customizable this UI library is. It allows me to bring my design ideas to life without limitations.',
        rating: 5,
        job: 'UI/UX Designer',
    },
    {
        id: 5,
        user: 'David Lee',
        message: 'The support team behind this UI library is outstanding. Whenever I encountered an issue, they were quick to respond and help me resolve it.',
        rating: 5,
        job: 'Software Engineer',
    },
];

export const Testimonials = () => {
    return (
        <Flex direction="y" maxWidth="60rem" margin="0 auto" padding="2rem">
            <TextBox el="h1" margin="2rem 0">
                Testimonials
            </TextBox>
            <Flex gap="1rem" overflow="auto" align="start">
                {data.map(({id, user, job, message}) => (
                    <Card el="section" direction="y" key={id} padding="2rem" minWidth="16rem" gap="1rem">
                        <TextBox el="p" margin="0" size="1.1rem" lineHeight={1.4} color="theme:subForeground" italic={true}>
                            "{message}"
                        </TextBox>
                        <Grid fitColumns={true} areas="'avatar name' 'avatar job'" el="footer" gap="0rem 0.8rem">
                            <ImageBox area="avatar" width="3rem" radius="50%" src="/default-avatar.png" alt={user} />
                            <TextBox area="name" style={{whiteSpace: 'nowrap'}} weight="bold">
                                {user}
                            </TextBox>
                            <TextBox area="job" style={{whiteSpace: 'nowrap'}} size="0.9rem">
                                {job}
                            </TextBox>
                        </Grid>
                    </Card>
                ))}
            </Flex>
        </Flex>
    );
};
