import styled from '@emotion/styled';
import {useState} from 'react';
import {Button, Flex, Input, SegmentedControl, TextBox, Toggle, useCheckboxState, useInputState} from '../joy';
import {Checkbox} from '../core/components/Forms/Checkbox/Checkbox';

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

    const textAligns = [
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
    ];
    const [textAlign, setTextAlign] = useState('start');

    const [toggled, onToggle] = useCheckboxState();
    const [checked, onChange] = useCheckboxState();

    const [name, changeName] = useInputState('');

    return (
        <Flex direction="y" margin="1rem auto" maxWidth="35rem">
            <TextBox el="h1" font="theme:font.heading" size="3rem" margin="2rem 0">
                Mega forms
            </TextBox>
            <form style={{display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '1rem'}}>
                <Toggle color="theme:yellow" checked={toggled} onChange={onToggle} />
                <Toggle checked={toggled} onChange={onToggle} />
                <Checkbox size="2rem" label="Something big" checked={checked} onChange={onChange} />
                <Checkbox label="Something to check" checked={checked} onChange={onChange} />
                <Checkbox disabled label="Indeterminate version" checked={checked} indeterminate={true} onChange={onChange} />
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
                <SegmentedControl value={textAlign} onChange={setTextAlign} segments={textAligns} />
                <label htmlFor="pseudo">TODO label</label>
                <Input id="pseudo" name="pseudo" placeholder="pseudo" value={name} onChange={changeName} />
            </form>
        </Flex>
    );
};
