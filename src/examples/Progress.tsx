import {useCallback, useState} from 'react';
import {Button, CircleProgress, Flex} from '../joy';

export const Progress = () => {
    const [value, setValue] = useState(0);
    const plusTen = useCallback(() => setValue(v => (v + 10) % 100), []);
    return (
        <Flex align="center" distribute="center" height="fill">
            <CircleProgress width="3rem" />
            <CircleProgress width="3rem" value={value} />
            <Button onClick={plusTen}>+10</Button>
        </Flex>
    );
};
