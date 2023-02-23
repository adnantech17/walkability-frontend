import React, { useEffect, useState, useCallback, useContext } from 'react';
import { useForm } from 'react-hook-form';
import inputTypes from '~/constants/form/inputTypes';
import InputBuilder from '~/components/form/inputBuilder/InputBuilder';
import { HELPER_INPUT_KEY_PATTERN } from '~/constants/form';
import InputLabel from '~/components/form/label/InputLabel';
import { AuthContext } from '~/contexts/AuthContext';
import { eventBus } from '~/services/eventBus';
import { FormErrors } from '~/components/form/formBuilder/FormError';

const FormBuilder = ({
  fields: fieldsProp = [],
  onSubmit,
  submitButton,
  className,
  doNotReset,
  defaultValues,
  actions,
  actionContainerClassName,
  resetEvent = 'reset_form'
}) => {
  const formInstance = useForm({ defaultValues: defaultValues || {} });
  const { watch, setValue, unregister, getValues, setError, formState: {errors} } = formInstance;
  const [fields, setFields] = useState(fieldsProp);
  const [isWatchSubscribed, setIsWatchSubscribed] = useState(false);
  const [dependencyValues, setDependencyValues] = useState({});

  const { permissions } = useContext(AuthContext)

  /* Reset On Submit Success */
  const isSubmitSuccessful = formInstance?.formState?.isSubmitSuccessful;
  const isSubmitting = formInstance?.formState?.isSubmitting;

  const toggleVisibility = useCallback(
    (key, status) => {
      setFields((fields) => {
        unregister(key);
        return fields.reduce((a, c) => {
          if (c.key === key) c.hide = status;
          a.push(c);
          return a;
        }, []);
      });
    },
    [setFields, unregister]
  );

  useEffect(() => {
    setFields(fieldsProp);
  }, [fieldsProp]);

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      for (const field of fields) {
        if (!field.dependencies?.includes(name)) continue;
        setDependencyValues((prevVal) => ({
          ...prevVal,
          [name]: value[name],
        }));
        field.onDependencyValueChange?.(value, name, {
          setValue,
          toggleVisibility,
        });
      }
    });

    if (subscription) setIsWatchSubscribed(true);
    return () => subscription.unsubscribe();
  }, [watch, fields, setValue, toggleVisibility]);

  useEffect(() => {
    eventBus.subscribe(resetEvent, () => formInstance?.reset());

    return () => {
      eventBus.unsubscribe(resetEvent);
    };
  }, [formInstance, resetEvent]);

  useEffect(() => {
    isSubmitSuccessful && !doNotReset && formInstance?.reset();
  }, [isSubmitSuccessful, formInstance, doNotReset, isSubmitting]);

  const handleSubmit = (data) => {
    Object.keys(data).forEach(key => { if (key.startsWith(HELPER_INPUT_KEY_PATTERN)) delete data[key] });
    onSubmit(data, {setError});
  }

  return (
    <div>
      <FormErrors errors={errors} />
      <form
        onSubmit={formInstance.handleSubmit(handleSubmit)}
        className={className}
      >
        <div className={'row no-gutters w-100 mx-0'}>
          {fields
            .filter((f) => !(f.hide || f.permissions?.every(permission => !permissions.includes(permission))))
            .map((field, idx) =>
              !field.inputType && getValues(field.key) !== undefined ? (
                <div key={idx} className={field.className || ''}>
                  <InputLabel meta={field} className={'description__label'} />
                  <p className="ps-3">{getValues(field.key)}</p>
                </div>
              ) : field.inputType === inputTypes.CUSTOM ? (
                <div key={idx} className={field.className || ''}>
                  {field?.render()}
                </div>
              ) : (
                <InputBuilder
                  key={idx}
                  meta={field}
                  defaultValue={defaultValues?.[field.key]}
                  formInstance={formInstance}
                  isWatchSubscribed={isWatchSubscribed}
                  dependencyValues={Object.keys(dependencyValues).reduce(
                    (a, c) => {
                      if (
                        field.dependencies?.includes(c) &&
                        dependencyValues[c] !== undefined
                      )
                        a[c] = dependencyValues[c];
                      return a;
                    },
                    {}
                  )}
                />
              )
            )}
          <div className={actionContainerClassName || 'form-actions col-4'}>
            <button
              className={`${submitButton?.className || 'primaryBtn'} ${!!isSubmitting && 'disableBtn'}`}
              type="submit"
              disabled={isSubmitting}
            >
              {submitButton?.label ? submitButton.label : 'Submit'}
            </button>
            {actions && actions.map(btn => btn)}
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormBuilder;
