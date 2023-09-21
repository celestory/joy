import {useCallback, useState} from 'react';
import {Button, ProgressCircle, Flex} from '../joy';

export const Progress = () => {
    const [value, setValue] = useState(0);
    const plusTen = useCallback(() => setValue(v => (v > 0.91 ? 0 : v + 0.1)), []);
    return (
        <Flex align="center" distribute="center" height="fill" gap="2rem">
            <ProgressCircle size="3rem" />
            <ProgressCircle fg="theme:colors.success" size="3rem" />
            <ProgressCircle size="3rem" value={value} caption />
            <Button onClick={plusTen}>+10</Button>
        </Flex>
    );
};
