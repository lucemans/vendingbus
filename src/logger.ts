import { createLogger } from '@lvksh/logger';
import { blue, green, magenta } from 'kleur';

export const log = createLogger(
    {
        info: blue('pending'),
        complete: green('complete'),
        debug: magenta('debug'),
    },
    { divider: ' ' }
);
