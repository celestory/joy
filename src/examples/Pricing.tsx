import styled from '@emotion/styled';
import {AutoGrid, Box, Flex, TextBox, useCheckboxState} from '../joy';

const Card = styled(Flex)`
    border-radius: 1rem;
    background-color: var(--joy-subBackground);
`;

const Heading = styled(TextBox)`
    font-size: clamp(2.5rem, 7vw, 4.5rem);
`;

const List = styled(Flex)`
    list-style: none;
    color: var(--joy-subForeground);
`;

const Button = styled(Box)`
    color: var(--joy-background);
    border: none;
    cursor: pointer;
    text-align: center;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 0.5rem;
    min-height: 2rem;
    background-color: var(--joy-yellow);
`;

const TextSpan = styled.span`
    color: var(--joy-foreground);
    font-size: 3rem;
    font-weight: bold;
`;

export const Pricing = () => {
    const [isYearly, toggleYearly] = useCheckboxState(true);
    return (
        <Flex el="main" direction="y" maxWidth="70rem" margin="0 auto" padding="2rem" gap="1rem">
            <Heading el="h1" textAlign="center" margin="4rem 0 0 0">
                Pricing plans
            </Heading>
            <TextBox
                size="1.1rem"
                md-size="1.4rem"
                weight="light"
                textAlign="center"
                lineHeight={1.5}
                color="theme:subForeground"
                maxWidth="40rem"
                margin="0 auto"
            >
                Simple pricing example with responsive layout. The price automatically updates using useToogleState hook.
            </TextBox>
            <Flex margin="0 auto 2.5rem auto" gap="0.5rem">
                <label>Pay yealy (save 20%)</label>
                <input type="checkbox" checked={isYearly} onChange={toggleYearly} />
            </Flex>
            <AutoGrid minColumn="14rem" gap="1rem">
                <Card direction="y" padding="1.5rem" gap="1rem">
                    <TextBox el="h2" margin="0">
                        Free
                    </TextBox>
                    <List el="ul" direction="y" gap=".5rem" padding="0" margin="0 0 auto 0">
                        <li>👯 5 users included</li>
                        <li>🗃 2GB of storage</li>
                    </List>
                    <TextBox color="theme:subForeground">
                        <TextSpan>$0</TextSpan>/{isYearly ? 'year' : 'month'}
                    </TextBox>
                    <Button el="button" padding="0.5em 0.8em">
                        Sign up for Free
                    </Button>
                </Card>
                <Card direction="y" padding="1.5rem" gap="1rem">
                    <TextBox el="h2" margin="0">
                        Education
                    </TextBox>
                    <List el="ul" direction="y" gap=".5rem" padding="0" margin="0 0 auto 0">
                        <li>👯 20 users included</li>
                        <li>🗃 10GB of storage</li>
                        <li>✉️ Email support</li>
                        <li>🤫 Offline mode</li>
                    </List>
                    <TextBox color="theme:subForeground">
                        <TextSpan>${isYearly ? 50 : 5}</TextSpan>/{isYearly ? 'year' : 'month'}
                    </TextBox>
                    <Button el="button" padding="0.5em 0.8em">
                        Subscribe now
                    </Button>
                </Card>
                <Card direction="y" padding="1.5rem" gap="1rem">
                    <TextBox el="h2" margin="0">
                        Pro
                    </TextBox>
                    <List el="ul" direction="y" gap=".5rem" padding="0" margin="0 0 auto 0">
                        <li>👯 20 users included</li>
                        <li>🗃 10GB of storage</li>
                        <li>✉️ Email support</li>
                        <li>🤫 Offline mode</li>
                    </List>
                    <TextBox color="theme:subForeground">
                        <TextSpan>${isYearly ? 100 : 10}</TextSpan>/{isYearly ? 'year' : 'month'}
                    </TextBox>
                    <Button el="button" padding="0.5em 0.8em">
                        Subscribe now
                    </Button>
                </Card>
                <Card direction="y" padding="1.5rem" gap="1rem">
                    <TextBox el="h2" margin="0">
                        Enterprise
                    </TextBox>
                    <List el="ul" direction="y" gap=".5rem" padding="0" margin="0 0 auto 0">
                        <li>👯 100+ users included</li>
                        <li>🗃 100GB of storage</li>
                        <li>✉️ Phone/Email support</li>
                        <li>🤫 Offline mode</li>
                        <li>🎨 Custom export</li>
                    </List>
                    <Button el="button" padding="0.5em 0.8em">
                        Contact Us
                    </Button>
                </Card>
            </AutoGrid>
        </Flex>
    );
};
