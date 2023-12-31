import styled from '@emotion/styled';
import {AutoGrid, Button, Card, Checkbox, Flex, TextBox, useCheckboxState} from '../joy';

const Heading = styled(TextBox)`
    font-size: clamp(2.5rem, 7vw, 4.5rem);
`;

const List = styled(Flex)`
    list-style: none;
    color: var(--joy-subForeground);
`;

const TextSpan = styled.span`
    color: var(--joy-colors-fg);
    font-size: 3rem;
    font-weight: bold;
`;

export const Pricing = () => {
    const [isYearly, toggleYearly] = useCheckboxState(true);
    return (
        <Flex el="main" direction="y" maxWidth="70rem" margin="0 auto" padding="2rem" gap="1rem">
            <Heading el="h1" textAlign="center" font="theme:fonts.heading" margin="4rem 0 0 0">
                Pricing plans
            </Heading>
            <TextBox
                size="1.1rem"
                md-size="1.4rem"
                weight="light"
                textAlign="center"
                lineHeight={1.5}
                fg="theme:colors.dimmed"
                maxWidth="40rem"
                margin="0 auto"
            >
                Simple pricing example with responsive layout. The price automatically updates using useCheckboxState hook.
            </TextBox>
            <Flex margin="0 auto 2.5rem auto" gap="0.5rem">
                <Checkbox checked={isYearly} label="Pay yearly (save 20%)" onChange={toggleYearly} />
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
                    <TextBox fg="theme:colors.dimmed">
                        <TextSpan>$0</TextSpan>/{isYearly ? 'year' : 'month'}
                    </TextBox>
                    <Button bg="theme:colors.success">Sign up for Free</Button>
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
                    <TextBox fg="theme:colors.dimmed">
                        <TextSpan>${isYearly ? 50 : 5}</TextSpan>/{isYearly ? 'year' : 'month'}
                    </TextBox>
                    <Button bg="theme:colors.success">Subscribe now</Button>
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
                    <TextBox fg="theme:colors.dimmed">
                        <TextSpan>${isYearly ? 100 : 10}</TextSpan>/{isYearly ? 'year' : 'month'}
                    </TextBox>
                    <Button bg="theme:colors.success">Subscribe now</Button>
                </Card>
                <Card direction="y" padding="1.5rem" gap="1rem" bg="theme:colors.dimmed">
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
                    <Button bg="theme:colors.success">Contact Us</Button>
                </Card>
            </AutoGrid>
        </Flex>
    );
};
