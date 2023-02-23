import React, { useEffect } from 'react';
import inputTypes from '~/constants/form/inputTypes';
import inputVariants from '~/constants/form/inputVariants';
import CheckboxInput from '~/components/form/inputs/CheckboxInput';
import FileUpload from '~/components/form/inputs/FileUpload';
import InputError from '~/components/form/inputs/InputError';
import SelectInput from '~/components/form/inputs/SelectInput';
import TextAreaInput from '~/components/form/inputs/TextAreaInput';
import TextInput from '~/components/form/inputs/TextInput';
import DateInput from '~/components/form/inputs/DateInput';
import InputLabel from '~/components/form/label/InputLabel';
import ListInput from '~/components/form/inputs/ListInput';
import CounterInput from '~/components/form/inputs/CounterInput';
import CounterInputWithDependentFields from '~/components/form/inputs/CounterInputWithDependentFields';
import DateRangeInput from '~/components/form/inputs/DateRangeInput';
import PopoverListInput from '~/components/form/inputs/PopoverListInput';
import PasswordInput from '~/components/form/inputs/PasswordInput';


const InputBuilder = ({ meta, defaultValue: defaultValueProp, formInstance, isWatchSubscribed, dependencyValues }) => {
  const { className = '', variant = inputVariants.PLAIN, key, inputType, prependLabel, append } = meta;
  const defaultValue = defaultValueProp !== undefined ? defaultValueProp : meta.defaultValue;
  const { formState: { errors }, setValue } = formInstance;
  useEffect(() => {
    if (defaultValue !== undefined) setValue(key, defaultValue);
  }, [key, defaultValue, setValue]);

  return (
    <div className={className}>
      <div className={variant}>
        {!!prependLabel && prependLabel()}
        <div className="form">
          {/* LABEL for PLAIN variant*/}
          {(variant === inputVariants.PLAIN || variant === inputVariants.PLAIN_SM || variant === inputVariants.PLAIN_SQUARE) && (inputType !== inputTypes.CHECKBOX)
            &&
            <InputLabel meta={meta} />
          }


          {/* TYPE :: Text */}
          {(inputType === inputTypes.TEXT || inputType === inputTypes.NUMBER)
            &&
            <TextInput meta={meta} formInstance={formInstance} />
          }

          {/* TYPE :: Password */}
          {(inputType === inputTypes.PASSWORD)
            &&
            <PasswordInput meta={meta} formInstance={formInstance} />
          }


          {/* TYPE :: Textarea */}
          {(inputType === inputTypes.TEXTAREA) && (variant === inputVariants.PLAIN)
            &&
            <TextAreaInput meta={meta} formInstance={formInstance} />
          }

          {/* TYPE :: Select */}
          {inputType === inputTypes.SELECT
            &&
            <SelectInput dependencyValues={dependencyValues} meta={meta} defaultValue={defaultValue} formInstance={formInstance} isWatchSubscribed={isWatchSubscribed} />
          }

          {/* TYPE :: File || Image */}
          {(inputType === inputTypes.FILE || inputType === inputTypes.IMAGE) && (variant === inputVariants.PLAIN)
            &&
            <FileUpload meta={meta} formInstance={formInstance} defaultValue={defaultValueProp ? defaultValueProp instanceof Array ? defaultValueProp : [{ Location: defaultValueProp, key: defaultValueProp.split('/')[3] }] : defaultValueProp} />
          }

          {/* TYPE :: Checkbox */}
          {(inputType === inputTypes.CHECKBOX)
            &&
            <CheckboxInput meta={meta} formInstance={formInstance} />
          }

          {/* TYPE :: Date */}
          {(inputType === inputTypes.DATE)
            &&
            <DateInput meta={meta} formInstance={formInstance} />
          }

          {/* TYPE :: Date */}
          {(inputType === inputTypes.DATE_RANGE)
            &&
            <DateRangeInput meta={meta} formInstance={formInstance} defaultValue={defaultValue} />
          }

          {/* TYPE :: List Input */}
          {(inputType === inputTypes.LIST_INPUT)
            &&
            <ListInput meta={meta} dependencyValues={dependencyValues} defaultValue={defaultValue} formInstance={formInstance} />
          }

          {/* TYPE :: Counter */}

          {(inputType === inputTypes.COUNTER && !meta.dependentFields)
            &&
            <CounterInput meta={meta} formInstance={formInstance} defaultValue={defaultValue} />
          }

          {(inputType === inputTypes.COUNTER && meta.dependentFields)
            &&
            <CounterInputWithDependentFields meta={meta} formInstance={formInstance} />
          }


          {/* TYPE :: Select */}
          {(inputType === inputTypes.POPOVER_LIST_INPUT)
            &&
            <PopoverListInput defaultValue={defaultValue} meta={meta} formInstance={formInstance} />
          }


          {/* LABEL for STANDARD || OUTLINED variant*/}
          {variant && (variant !== inputVariants.PLAIN) && (variant !== inputVariants.PLAIN_SM) && (variant !== inputVariants.PLAIN_SQUARE) && (inputType !== inputTypes.CHECKBOX)
            &&
            <InputLabel meta={meta} />
          }

          {/* APPEND */}
          {(inputType !== inputTypes.SELECT) && <span className='form__append'>{append?.()}</span>}
          {inputType === inputTypes.FILE || inputType === inputTypes.IMAGE && <span className='form__append'></span>}

          {/* ERROR */}
          <InputError error={errors?.[key]} />
        </div>
      </div>
    </div>
  );
};

export default InputBuilder;