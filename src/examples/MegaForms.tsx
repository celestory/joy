import styled from '@emotion/styled';
import {useMemo, useState} from 'react';
import {Button, Checkbox, Flex, Input, SegmentedArea, SegmentedControl, Range, TextBox, Toggle, useCheckboxState, useInputState, useRangeState} from '../joy';

const Icon = styled.svg<{selected: boolean}>`
    [fill='black'] {
        fill: ${props => (props.selected ? `var(--joy-foreground)` : `var(--joy-subForeground)`)};
    }
    [stroke='black'] {
        stroke: ${props => (props.selected ? `var(--joy-foreground)` : `var(--joy-subForeground)`)};
    }
    &:hover {
        [fill='black'] {
            fill: var(--joy-foreground);
        }
        [stroke='black'] {
            stroke: var(--joy-foreground);
        }
    }
`;

export const MegaForms = () => {
    const [frameworks, setFrameworks] = useState([
        {value: 'react', label: 'React'},
        {value: 'vue', label: 'Vueeeeeeeeeee'},
        {value: 'svelte', label: <em>Svelte</em>},
    ]);
    const [framework, setFramework] = useState('vue');

    const textAligns = useMemo(
        () => [
            {
                value: 'start',
                label: (selected: boolean) => (
                    <Icon selected={selected} width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="12" height="2" rx="1" fill="black" />
                        <rect width="6" height="2" rx="1" transform="matrix(1 0 0 -1 0 6)" fill="black" />
                        <rect y="8" width="9" height="2" rx="1" fill="black" />
                    </Icon>
                ),
            },
            {
                value: 'center',
                label: (selected: boolean) => (
                    <Icon selected={selected} width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="12" height="2" rx="1" fill="black" />
                        <rect width="6" height="2" rx="1" transform="matrix(1 0 0 -1 3 6)" fill="black" />
                        <rect x="1.5" y="8" width="9" height="2" rx="1" fill="black" />
                    </Icon>
                ),
            },
            {
                value: 'end',
                label: (selected: boolean) => (
                    <Icon selected={selected} width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="12" height="2" rx="1" fill="black" />
                        <rect width="6" height="2" rx="1" transform="matrix(1 0 0 -1 6 6)" fill="black" />
                        <rect x="3" y="8" width="9" height="2" rx="1" fill="black" />
                    </Icon>
                ),
            },
            {
                value: 'justify',
                label: (selected: boolean) => (
                    <Icon selected={selected} width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="12" height="2" rx="1" fill="black" />
                        <rect width="12" height="2" rx="1" transform="matrix(1 0 0 -1 0 6)" fill="black" />
                        <rect y="8" width="12" height="2" rx="1" fill="black" />
                    </Icon>
                ),
            },
        ],
        [],
    );
    const [textAlign, setTextAlign] = useState('start');

    const distributes = useMemo(
        () => [
            [
                {
                    value: 'start',
                    label: (selected: boolean) => (
                        <Icon selected={selected} width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="11" y="3" width="4" height="8" rx="2" transform="rotate(90 11 3)" fill="black" />
                            <rect x="11" y="8" width="4" height="8" rx="2" transform="rotate(90 11 8)" fill="black" />
                            <rect x="14" width="2" height="14" rx="1" transform="rotate(90 14 0)" fill="black" />
                        </Icon>
                    ),
                },
                {
                    value: 'center',
                    label: (selected: boolean) => (
                        <Icon selected={selected} width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="3" y="12" width="4" height="8" rx="2" transform="rotate(-90 3 12)" fill="black" />
                            <rect x="3" y="4" width="4" height="8" rx="2" transform="rotate(-90 3 4)" fill="black" />
                            <rect y="7" width="2" height="14" rx="1" transform="rotate(-90 0 7)" fill="black" />
                        </Icon>
                    ),
                },
                {
                    value: 'end',
                    label: (selected: boolean) => (
                        <Icon selected={selected} width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="3" y="9" width="4" height="8" rx="2" transform="rotate(-90 3 9)" fill="black" />
                            <rect x="3" y="4" width="4" height="8" rx="2" transform="rotate(-90 3 4)" fill="black" />
                            <rect y="12" width="2" height="14" rx="1" transform="rotate(-90 0 12)" fill="black" />
                        </Icon>
                    ),
                },
            ],
            [
                {
                    value: 'around',
                    label: (selected: boolean) => (
                        <Icon selected={selected} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="3" y="10.5" width="2" height="8" rx="1" transform="rotate(-90 3 10.5)" fill="black" />
                            <rect x="3" y="5.5" width="2" height="8" rx="1" transform="rotate(-90 3 5.5)" fill="black" />
                            <rect y="14" width="2" height="14" rx="1" transform="rotate(-90 0 14)" fill="black" />
                            <rect y="2" width="2" height="14" rx="1" transform="rotate(-90 0 2)" fill="black" />
                        </Icon>
                    ),
                },
                {
                    value: 'between',
                    label: (selected: boolean) => (
                        <Icon selected={selected} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="3" y="11" width="2" height="8" rx="1" transform="rotate(-90 3 11)" fill="black" />
                            <rect x="3" y="5" width="2" height="8" rx="1" transform="rotate(-90 3 5)" fill="black" />
                            <rect y="14" width="2" height="14" rx="1" transform="rotate(-90 0 14)" fill="black" />
                            <rect y="2" width="2" height="14" rx="1" transform="rotate(-90 0 2)" fill="black" />
                        </Icon>
                    ),
                },
                {
                    value: 'evenly',
                    label: (selected: boolean) => (
                        <Icon selected={selected} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="3" y="10" width="2" height="8" rx="1" transform="rotate(-90 3 10)" fill="black" />
                            <rect x="3" y="6" width="2" height="8" rx="1" transform="rotate(-90 3 6)" fill="black" />
                            <rect y="14" width="2" height="14" rx="1" transform="rotate(-90 0 14)" fill="black" />
                            <rect y="2" width="2" height="14" rx="1" transform="rotate(-90 0 2)" fill="black" />
                        </Icon>
                    ),
                },
            ],
        ],
        [],
    );
    const [distribute, setDistribute] = useState('center');

    const [toggled, onToggle] = useCheckboxState();
    const [checked, onCheckboxToggle] = useCheckboxState();

    const [name, changeName] = useInputState('');

    const temperature = useRangeState(20, {min: 15, max: 30, step: 0.2});

    return (
        <Flex direction="y" margin="1rem auto" maxWidth="35rem">
            <TextBox el="h1" font="theme:font.heading" size="3rem" margin="2rem 0">
                Mega forms
            </TextBox>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '1rem'}}>
                <Toggle color="theme:yellow" checked={toggled} onChange={onToggle} />
                <Toggle checked={toggled} onChange={onToggle} />
                <Checkbox size="2rem" label="Something big" checked={checked} onChange={onCheckboxToggle} />
                <Checkbox label="Something to check" checked={checked} onChange={onCheckboxToggle} />
                <Checkbox disabled label="Indeterminate version" checked={checked} indeterminate={true} onChange={onCheckboxToggle} />
                <SegmentedControl value={framework} onChange={setFramework} segments={frameworks} />
                <Button
                    size=".8rem"
                    disabled={frameworks.length > 3}
                    onClick={e => {
                        e.preventDefault();
                        setFrameworks(f => [{value: 'angular', label: 'Angular'}, ...f]);
                    }}
                >
                    Add framework
                </Button>
                <SegmentedControl name="caca" value={textAlign} onChange={setTextAlign} segments={textAligns} />
                <SegmentedArea name="cacahuete" value={distribute} onChange={setDistribute} segments={distributes} />
                <label htmlFor="pseudo">Pseudo</label>
                <Input id="pseudo" name="pseudo" placeholder="pseudo" value={name} onChange={changeName} />
                <label htmlFor="temperature">Temperature ({temperature.value})</label>
                <Range id="temperature" {...temperature} />
            </div>
        </Flex>
    );
};
