import {Flex, Toggle, useCheckboxState} from '../joy';

export const MegaForms = () => {
    const [checked, onChange] = useCheckboxState();
    return (
        <Flex direction="y">
            <h1>Mega forms</h1>
            <form>
                <Toggle color="theme:yellow" checked={checked} onChange={onChange} />
            </form>
        </Flex>
    );
};
