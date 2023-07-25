import styled from '@emotion/styled';
import {AutoGrid} from '../core/components/AutoGrid/AutoGrid';
import {useCheckboxState} from '../core/hooks/useCheckboxState';
import {Box, Flex, TextBox} from '../joy';

const Card = styled(Flex)`
    border-radius: 1rem;
    background-color: var(--joy-subBackground);
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
        <Flex el="main" direction="y" maxWidth="50rem" margin="0 auto" padding="2rem" gap="1rem">
            <Flex el="header" align="center">
                <TextBox el="h1" size="3rem" margin="0 auto 0 0">
                    Pricing
                </TextBox>
                <label>Pay yealy (save 20%)</label>
                <input type="checkbox" checked={isYearly} onChange={toggleYearly} />
            </Flex>
            <TextBox size="1.1rem" lineHeight={1.5} color="theme:subForeground">
                Simple pricing example with responsive layout. The price automatically updates using useToogleState hook.
            </TextBox>
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
