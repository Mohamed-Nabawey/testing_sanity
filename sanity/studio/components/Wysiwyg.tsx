import React, {useCallback} from 'react'
import {Stack} from '@sanity/ui'
import {set, unset} from 'sanity';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


export const Wysiwyg = (props: any) => {
  const {elementProps, onChange, value = ''} = props

  const handleChange = useCallback((event: any) => {    
    const nextValue = event;
    onChange(nextValue ? set(nextValue) : unset())
	}, [onChange])

  return (
    <Stack space={2}>
        <ReactQuill
        theme="snow"
        {...elementProps}
        onChange={handleChange}
        value={value} />

    </Stack>
  )
}