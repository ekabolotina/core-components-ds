import React from 'react';
import { SelectWithTags } from '@alfalab/core-components-select-with-tags';
import { Wrapper } from './Wrapper';

const options = [
    { key: '1', content: 'H', value: 'H' },
    { key: '2', content: 'Li', value: 'Li' },
    { key: '3', content: 'Na', value: 'Na' },
    { key: '4', content: 'Curium', value: 'Curium' },
    { key: '5', content: 'Berkelium', value: 'Berkelium' },
    { key: '6', content: 'Californium', value: 'Californium' },
    { key: '7', content: 'Einsteinium', value: 'Einsteinium' },
    { key: '8', content: 'Fermium', value: 'Fermium' },
];

const SelectWithTagsExample = () => {
    const [value, setValue] = React.useState('');

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    return (
        <Wrapper>
            <div style={{ width: '400px' }}>
                <SelectWithTags
                    options={options}
                    onInput={handleInput}
                    value={value}
                    autocomplete={true}
                    block={true}
                />
            </div>
        </Wrapper>
    );
};

export default SelectWithTagsExample;
