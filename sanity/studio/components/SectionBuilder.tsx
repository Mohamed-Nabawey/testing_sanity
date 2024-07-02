// src/components/CustomArrayInput.js
import React, { useCallback } from 'react'
import './SectionBuilder.css';
import { FormField, FormBuilder, Path  } from 'sanity'
import { set } from 'sanity';
import { Stack, Button, Select } from '@sanity/ui'

const SectionBuilder = React.forwardRef((props: any, ref) => {
  const {
    members,
    value,
    onChange,    
  } = props;

  const inputId = `id-${Math.round(Math.random()*10000000)}`;
  
  const handleChange = useCallback((event: any, index: number) => {
    console.log("change happened!..", );
    for(let patch of event.patches) {
      onChange(set(patch.value, [{_key: value[index]['_key']}, ...patch.path]))
    }
    
  }, [onChange, value])

  const handleSelect = (event: any, index: number) => {
    value[index] = {_key: `id-${Math.round(Math.random()*10000000)}`, _type: event.target.value};
    onChange(set(value))
  }

  const handleAdd = (event: any) => {
    const newValue = [...(value || []), {_key: `id-${Math.round(Math.random()*10000000)}`, _type: 'hero'}]
    console.log('newvalue: ', newValue);
    onChange(set(newValue))
  }

  const handleRemove = (index: number) => {
    const newValue = [...value]
    newValue.splice(index, 1)
    onChange(set(newValue))
  }

  return (
    
    <FormField>
      <Stack space={3}>
        {(value || []).map((item: any, index: number) => (
          <div key={index} className="field-border"> 
          <div
          >
            <Select
              fontSize={[2, 2, 3, 4]}
              padding={[3, 3, 4]}
              space={[3, 3, 4]}
              onChange={(event) => handleSelect(event, index)} value={value[index]['_type']}
            >
              <option value="" disabled>Select an option</option>
              <option value="hero">hero</option>
              <option value="testType">Test Type</option>
            </Select>
          </div>
           
            <FormBuilder
              {...members[index].item}
              onPathBlur={() => null}
              onPathFocus={() => null}
              onChange={(e) => handleChange(e, index)}
            />
            <Button
              text="Remove"
              tone="critical"
              className='remove'
              onClick={() => handleRemove(index)}
              style={{ marginRight: '15px', marginTop: '25px'}}
            />
          </div>
        ))}
        <Button text="Add Item" tone="primary" onClick={handleAdd} />
      </Stack>
    </FormField>
  )
})

export default SectionBuilder;
