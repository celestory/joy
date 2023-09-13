import styled from '@emotion/styled';
import {useCallback, useMemo} from 'react';
import {Button, Flex, Input, Select, TextArea, TextBox, themeConst} from '../joy';

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

export const Editor = () => {
    const components = useMemo(() => new Array<Component>(5).fill({title: 'Component', properties: new Array(3).fill({name: 'name', value: 'value'})}), []);
    const changeProperty = useCallback(() => {}, []);
    return (
        <Flex height="fill" direction="y">
            <Toolbar el="header" padding="0.5rem 1rem" gap="1rem" align="center">
                <TextBox size="1.2rem" weight="bold" margin="0 auto 0 0">
                    Classic Editor UI
                </TextBox>
                <TextBox>A</TextBox>
                <TextBox>B</TextBox>
                <TextBox>C</TextBox>
                <Button size="0.8rem">Publish</Button>
            </Toolbar>
            <Flex el="main" grow={true} overflow="auto">
                <OtherInspector direction="y" width="25%" minWidth="20rem" padding="1rem" gap="1.5rem">
                    <Flex el="header">
                        <TextBox id="test" font="theme:fonts.heading" size="1.2rem">
                            create a message
                        </TextBox>
                    </Flex>
                    <Flex el="section" direction="y" gap="1rem">
                        <TextBox el="label" font="theme:fonts.heading">
                            Connection
                        </TextBox>
                        <Button fg="theme:colors.fg" bg="theme:colors.area">
                            Configure API
                        </Button>
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
