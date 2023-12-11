import styled from '@emotion/styled';
import {useCallback, useMemo} from 'react';
import {Button, Card, Flex, Input, Popover, Select, TextArea, TextBox, themeConst, useOpenState} from '../joy';

interface Component {
    title: string;
    properties: {name: string; value: string}[];
}

const Toolbar = styled(Flex)`
    border-bottom: 2px solid ${themeConst('theme:colors.area')};
`;

const OtherInspector = styled(Flex)`
    border-right: 2px solid ${themeConst('theme:colors.area')};
`;

const Inspector = styled(Flex)`
    border-left: 2px solid ${themeConst('theme:colors.area')};
`;

const CardWithBorders = styled(Card)`
    border: 2px solid ${themeConst('theme:colors.area')};
`;

const OpenAIIcon = () => {
    return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="11" cy="11" r="11" fill="#10A37F" />
            <path
                d="M17.7305 9.58954C17.8628 9.19172 17.9304 8.77521 17.9304 8.35595C17.9304 7.6622 17.7456 6.98097 17.3951 6.3823C16.6907 5.15621 15.384 4.39923 13.9699 4.39923C13.6913 4.39923 13.4135 4.42866 13.1411 4.48701C12.7747 4.07419 12.3249 3.74373 11.8214 3.51742C11.318 3.2911 10.7723 3.17408 10.2203 3.17407H10.1955L10.1862 3.17413C8.47345 3.17413 6.95452 4.27933 6.428 5.90864C5.88298 6.02027 5.36809 6.24704 4.91781 6.57377C4.46753 6.90049 4.09224 7.31964 3.81706 7.80316C3.46758 8.40543 3.28342 9.08935 3.2832 9.78567C3.28334 10.7643 3.6466 11.708 4.30265 12.4342C4.17022 12.832 4.10268 13.2485 4.10262 13.6677C4.10268 14.3615 4.28748 15.0427 4.63801 15.6414C5.05486 16.3672 5.69144 16.9418 6.45595 17.2824C7.22047 17.623 8.07341 17.7121 8.89178 17.5366C9.25824 17.9495 9.70803 18.2799 10.2115 18.5062C10.715 18.7326 11.2607 18.8496 11.8127 18.8496H11.8375L11.8476 18.8496C13.5613 18.8496 15.0797 17.7443 15.6063 16.1135C16.1513 16.0019 16.6662 15.7751 17.1165 15.4483C17.5667 15.1216 17.9421 14.7025 18.2173 14.2189C18.5664 13.6172 18.7502 12.9339 18.7501 12.2382C18.7499 11.2596 18.3867 10.3159 17.7306 9.58975L17.7305 9.58954ZM11.8385 17.8248H11.8345C11.1487 17.8246 10.4848 17.584 9.95807 17.1449C9.98935 17.1281 10.0203 17.1106 10.0508 17.0924L13.1719 15.2896C13.2498 15.2452 13.3146 15.1811 13.3596 15.1036C13.4047 15.0261 13.4285 14.9381 13.4285 14.8485V10.4452L14.7477 11.207C14.7546 11.2104 14.7606 11.2155 14.7651 11.2218C14.7696 11.2282 14.7724 11.2355 14.7734 11.2431V14.8872C14.7716 16.5073 13.4588 17.8215 11.8385 17.8248ZM5.52698 15.1292C5.26917 14.6834 5.13335 14.1776 5.13317 13.6626C5.13317 13.4946 5.14784 13.3263 5.17641 13.1608C5.19961 13.1747 5.24011 13.1994 5.26917 13.2161L8.39032 15.0189C8.46814 15.0644 8.55663 15.0883 8.64673 15.0883C8.73683 15.0883 8.82531 15.0643 8.90311 15.0188L12.7137 12.8186V14.3421L12.7138 14.3447C12.7138 14.352 12.7121 14.3593 12.7088 14.3658C12.7055 14.3724 12.7007 14.3781 12.6949 14.3825L9.53968 16.2043C9.09324 16.4612 8.58719 16.5965 8.07209 16.5966C7.55644 16.5966 7.04987 16.4609 6.60317 16.2033C6.15647 15.9458 5.78534 15.5753 5.52698 15.129V15.1292ZM4.70587 8.3154C5.04867 7.71997 5.58995 7.26407 6.23498 7.02747C6.23498 7.05434 6.23345 7.10195 6.23345 7.135V10.7408L6.23339 10.7437C6.23341 10.8332 6.25711 10.9212 6.30211 10.9986C6.3471 11.076 6.41178 11.1401 6.48957 11.1844L10.3002 13.3844L8.98098 14.1461C8.97448 14.1504 8.96701 14.153 8.95925 14.1537C8.95148 14.1544 8.94367 14.1532 8.93649 14.1502L5.78097 12.3269C5.33489 12.0685 4.96456 11.6974 4.7071 11.2507C4.44964 10.8041 4.31409 10.2976 4.31403 9.78212C4.31423 9.2674 4.44939 8.76173 4.70603 8.31556L4.70587 8.3154ZM15.5447 10.8377L11.7341 8.63746L13.0533 7.876C13.0598 7.8717 13.0673 7.86909 13.0751 7.86838C13.0828 7.86767 13.0907 7.8689 13.0978 7.87195L16.2533 9.69368C16.6997 9.95169 17.0705 10.3226 17.3282 10.7692C17.586 11.2158 17.7218 11.7223 17.7219 12.238C17.7219 13.4687 16.9539 14.57 15.7992 14.995V11.2815C15.7993 11.2801 15.7993 11.2787 15.7993 11.2773C15.7993 11.1881 15.7758 11.1005 15.7311 11.0233C15.6863 10.9461 15.6221 10.8821 15.5447 10.8377ZM16.8578 8.86146C16.8271 8.84266 16.7962 8.82423 16.765 8.80618L13.6439 7.00328C13.5661 6.95793 13.4776 6.93402 13.3876 6.93399C13.2975 6.93402 13.209 6.95793 13.1312 7.00328L9.32056 9.20355V7.68002L9.32051 7.6774C9.32051 7.66251 9.32757 7.6485 9.33944 7.63958L12.4946 5.81938C12.9409 5.56209 13.447 5.42664 13.9622 5.42661C15.5845 5.42661 16.9001 6.74223 16.9001 8.36454C16.9 8.53102 16.8859 8.6972 16.8578 8.86129V8.86146ZM8.60332 11.5769L7.28381 10.8151C7.27689 10.8117 7.27092 10.8066 7.26644 10.8003C7.26196 10.794 7.25911 10.7866 7.25814 10.779V7.13489C7.25885 5.51346 8.57448 4.19893 10.1961 4.19893C10.8829 4.19908 11.5479 4.43967 12.0759 4.87896C12.0521 4.89193 12.0107 4.91481 11.9832 4.9315L8.86201 6.73435C8.78413 6.77866 8.71938 6.84279 8.67432 6.92024C8.62927 6.99769 8.60553 7.08568 8.60551 7.17528V7.17818L8.60332 11.5769ZM9.31996 10.0318L11.0171 9.05152L12.7143 10.0311V11.991L11.0171 12.9706L9.31996 11.991V10.0318Z"
                fill="white"
            />
        </svg>
    );
};

const ConfigIntegration = ({connections}: {connections: string[]}) => {
    const {isOpen, set, close} = useOpenState(false);
    const content = (
        <CardWithBorders direction="y" padding="1rem" bg="theme:colors.bg" gap="1rem" width="18rem">
            <Flex el="section" direction="y" gap="1rem">
                <TextBox el="label" font="theme:fonts.heading" size="0.85rem">
                    Name
                </TextBox>
                <Input />
                <TextBox el="small" size="0.8rem" fg="theme:colors.dimmed" padding="0 0.5rem">
                    This is an arbitrary name to help you differenciate your different connections.
                </TextBox>
            </Flex>
            <Flex el="section" direction="y" gap="0.5rem">
                <TextBox el="label" font="theme:fonts.heading" size="0.85rem">
                    API Key
                </TextBox>
                <Input />
                <TextBox el="small" size="0.8rem" fg="theme:colors.dimmed" padding="0 0.5rem">
                    Check out <a href="#randomLink">our guide</a> to see how to get your API key.
                </TextBox>
            </Flex>
            <Flex el="section" direction="y" gap="1rem">
                <TextBox el="label" font="theme:fonts.heading" size="0.85rem">
                    Organisation ID
                </TextBox>
                <Input />
                <TextBox el="small" size="0.8rem" fg="theme:colors.dimmed" padding="0 0.5rem">
                    Check out <a href="#randomLink">our guide</a> to see how to get your Organisation ID.
                </TextBox>
            </Flex>
            <Button onClick={close} bg="#10A37F">
                Create
            </Button>
        </CardWithBorders>
    );
    if (connections.length === 0) {
        return (
            <Popover
                isOpen={isOpen}
                onChange={set}
                target={
                    <Button fg="theme:colors.fg" bg="theme:colors.area">
                        <OpenAIIcon />
                        Create a connection
                    </Button>
                }
            >
                {content}
            </Popover>
        );
    }
    return (
        <Flex gap="0.5rem">
            <Select grow={true}>
                {connections.map(value => (
                    <option key={value} value={value}>
                        {value}
                    </option>
                ))}
            </Select>
            <Popover
                isOpen={isOpen}
                onChange={set}
                target={
                    <Button width="2.6rem" bg="#10A37F">
                        +
                    </Button>
                }
            >
                {content}
            </Popover>
        </Flex>
    );
};

export const Editor = () => {
    const components = useMemo(() => new Array<Component>(5).fill({title: 'Component', properties: new Array(3).fill({name: 'name', value: 'value'})}), []);
    const changeProperty = useCallback(() => {}, []);
    const {isOpen, set} = useOpenState();
    return (
        <Flex height="fill" direction="y">
            <Toolbar el="header" padding="0.5rem 1rem" gap="1rem" align="center">
                <TextBox size="1.2rem" weight="bold">
                    Classic Editor UI
                </TextBox>
                <Popover
                    isOpen={isOpen}
                    onChange={set}
                    target={
                        <Button fg="theme:colors.fg" bg="theme:colors.area">
                            +
                        </Button>
                    }
                    placement="bottom-end"
                >
                    <CardWithBorders direction="y" margin="1rem 0 0 0" padding="1rem" bg="theme:colors.bg" gap="1rem" width="18rem">
                        {['Block 1', 'Block 2', 'Block 2'].map(n => (
                            <Button key={n}>{n}</Button>
                        ))}
                    </CardWithBorders>
                </Popover>
                <TextBox margin="0 0 0 auto">A</TextBox>
                <TextBox>B</TextBox>
                <TextBox>C</TextBox>
                <Button size="0.8rem">Publish</Button>
            </Toolbar>
            <Flex el="main" grow={true} overflow="auto">
                <OtherInspector direction="y" width="25%" minWidth="20rem" padding="1rem" gap="1.5rem" overflow="scroll">
                    <Flex el="header">
                        <TextBox id="test" font="theme:fonts.heading" size="1.2rem">
                            create a message
                        </TextBox>
                    </Flex>
                    <Flex el="section" direction="y" gap="1rem">
                        <TextBox el="label" font="theme:fonts.heading" fg="theme:colors.error">
                            Connection
                        </TextBox>
                        <ConfigIntegration connections={[]} />
                        <TextBox el="small" size="0.8rem" fg="theme:colors.error" padding="0 0.5rem">
                            Your connection isn't properly setup 😱
                        </TextBox>
                        <TextBox el="small" size="0.8rem" fg="theme:colors.dimmed" padding="0 0.5rem">
                            You need to configure OpenAI API in order to use it, check out our guide.
                        </TextBox>
                    </Flex>
                    <Flex el="section" direction="y" gap="1rem">
                        <TextBox el="label" font="theme:fonts.heading">
                            Model
                        </TextBox>
                        <Select>
                            <option>GPT-3</option>
                            <option>GPT-3.5</option>
                            <option>GPT-4</option>
                        </Select>
                    </Flex>
                    <Flex el="section" direction="y" gap="1rem">
                        <TextBox el="label" font="theme:fonts.heading">
                            Prompt
                        </TextBox>
                        <TextArea />
                        <TextBox el="small" size="0.8rem" fg="theme:colors.dimmed" padding="0 0.5rem">
                            Prompts are human readable texts that allow you to talk to an AI model to tell it what to generate.
                        </TextBox>
                    </Flex>
                    <Flex el="section" direction="y" gap="1rem">
                        <TextBox el="label" font="theme:fonts.heading">
                            Max Token
                        </TextBox>
                        <Input type="number" />
                    </Flex>
                </OtherInspector>
                <Flex grow={true} align="center" distribute="center">
                    <TextBox fg="theme:colors.dimmed" textAlign="center" padding="1rem">
                        Editor's preview goes here 🙃
                    </TextBox>
                </Flex>
                <Inspector direction="y" width="20rem" padding="1.5rem" shrink={false} overflow="auto" gap="1.4rem">
                    {components.map(({title, properties}, i) => (
                        <Flex key={i} direction="y" gap="0.8rem">
                            <TextBox weight="bold" fg="theme:colors.fg">
                                {title}
                            </TextBox>
                            {properties.map(({name, value}, i) => (
                                <Flex key={i} align="center">
                                    <TextBox grow={true} fg="theme:colors.dimmed" size="0.8rem">
                                        {name}
                                    </TextBox>
                                    <Input value={value as string} size="0.8rem" padding="0.6em" width="8rem" onChange={changeProperty} />
                                </Flex>
                            ))}
                        </Flex>
                    ))}
                </Inspector>
            </Flex>
        </Flex>
    );
};
