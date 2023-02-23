import React, { useState, useEffect } from 'react';
import { HELPER_INPUT_KEY_PATTERN } from '~/constants/form';
import { uploadMultipleFiles } from '~/services/api/queries/settings';
import FilePreview from './FilePreview';

const FileUpload = ({ meta, formInstance, defaultValue = [] }) => {
  console.log(defaultValue, '---')

  const { key, inputType, placeholder, rules = {}, multiple } = meta;
  const { register, setValue, watch } = formInstance;
  const [files, setFiles] = useState(defaultValue);

  const [watchValue, addNew] = watch([`${HELPER_INPUT_KEY_PATTERN}${key}`, `${HELPER_INPUT_KEY_PATTERN}${key}-new`]);

  const uploadFiles = async (selectedFiles) => {
    const submittedFiles = Array.from(selectedFiles)
    // const urls = submittedFiles.map(file => {uploadFile([file]); return `https://via.placeholder.com/128?text=${Math.round(Math.random() * 10000)}`});
    const { data } = await uploadMultipleFiles(submittedFiles)
    if (!data) return;
    setFiles(files => [...files, ...data]);
  }
  useEffect(() => {
    if (!watchValue) return;
    uploadFiles(watchValue);
  }, [watchValue])

  useEffect(() => {
    if (!addNew) return;
    uploadFiles(addNew);
  }, [addNew])

  // useEffect(() => {
  //   setFiles(defaultValue)
  // }, [defaultValue])


  useEffect(() => { setValue(key, files) }, [files, key, setValue])


  return (
    <>
      {!files.length && <div className='form__input__file'>
        <input
          type={inputType}
          placeholder={placeholder || ' '}
          {...register(`${HELPER_INPUT_KEY_PATTERN}${key}`, { ...rules, required: !!files.length })}
          multiple={multiple}
        />

      </div>}
      {!!files.length && <div id="gallery" className='form__input__file form__input__file--preview'>
        {files.map(file => <FilePreview key={file.key} file={file} setFiles={setFiles} />)}

        {multiple && <label className="custom-file-upload">
          <input
            type={inputType}
            multiple={multiple}
            {...register(`${HELPER_INPUT_KEY_PATTERN}${key}-new`, { ...rules, required: !!files.length })}
          />
          <i className="fa fa-upload" /><span>Upload New</span>
        </label>}
      </div>}
    </>
  );
};

export default FileUpload;