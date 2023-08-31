import styled from '@emotion/styled';
import {useCallback, useMemo} from 'react';
import {Button, Flex, Input, TextBox} from '../joy';

interface Component {
    title: string;
    properties: {name: string; value: string}[];
}

const Toolbar = styled(Flex)`
    border-bottom: 2px solid var(--joy-subBackground);
`;

const Tree = styled(TextBox)`
    border-right: 2px solid var(--joy-subBackground);
`;

const Inspector = styled(Flex)`
    border-left: 2px solid var(--joy-subBackground);
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
                <Tree lineHeight={1.7} color="theme:colors.dimmed" width="30%" minWidth="20rem" padding="1rem" shrink={false} overflow="auto">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis labore hic aliquid modi! Officiis sapiente dolore quisquam reiciendis
                    veritatis architecto, earum corrupti reprehenderit nemo soluta? Fugit voluptas vero officia perspiciatis. Lorem, ipsum dolor sit amet
                    consectetur adipisicing elit. Rerum, optio? Cumque iusto nam odio ipsam sint veniam dolore repudiandae voluptas culpa quam quasi fuga
                    impedit cupiditate facilis, autem sapiente magni. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis iure eius voluptatem
                    animi asperiores labore, rerum vero libero ab quaerat sit, dolorum doloribus dolorem odit obcaecati reprehenderit quos temporibus voluptas.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, neque. Deleniti asperiores ex possimus cumque neque temporibus eius
                    consequatur exercitationem, beatae nesciunt quisquam aut ad laborum voluptas quod obcaecati facere. Lorem ipsum dolor, sit amet consectetur
                    adipisicing elit. Corporis labore hic aliquid modi! Officiis sapiente dolore quisquam reiciendis veritatis architecto, earum corrupti
                    reprehenderit nemo soluta? Fugit voluptas vero officia perspiciatis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, optio?
                    Cumque iusto nam odio ipsam sint veniam dolore repudiandae voluptas culpa quam quasi fuga impedit cupiditate facilis, autem sapiente magni.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis iure eius voluptatem animi asperiores labore, rerum vero libero ab
                    quaerat sit, dolorum doloribus dolorem odit obcaecati reprehenderit quos temporibus voluptas. Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Excepturi, neque. Deleniti asperiores ex possimus cumque neque temporibus eius consequatur exercitationem, beatae nesciunt
                    quisquam aut ad laborum voluptas quod obcaecati facere.
                </Tree>
                <Flex grow={true} align="center" distribute="center">
                    <TextBox color="theme:colors.dimmed" textAlign="center" padding="1rem">
                        Editor's preview goes here 🙃
                    </TextBox>
                </Flex>
                <Inspector direction="y" width="20rem" padding="1.5rem" shrink={false} overflow="auto" gap="1.4rem">
                    {components.map(({title, properties}, i) => (
                        <Flex key={i} direction="y" gap="0.8rem">
                            <TextBox weight="bold" color="theme:colors.fg">
                                {title}
                            </TextBox>
                            {properties.map(({name, value}, i) => (
                                <Flex key={i} align="center">
                                    <TextBox grow={true} color="theme:colors.dimmed" size="0.8rem">
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
