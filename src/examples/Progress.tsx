import {CircleProgress, Flex} from '../joy';

export const Progress = () => {
    return (
        <Flex align="center" distribute="center" height="fill">
            <CircleProgress width="3rem" thickness={0.2} value={75} />
        </Flex>
    );
};
