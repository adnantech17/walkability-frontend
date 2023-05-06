import React, { useEffect } from 'react';
import { useForm, useFormContext } from 'react-hook-form';

export function FormBuilder({
  defaultValues,
  children,
  onSubmit,
  watchFields = [],
  pb,
}) {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
    control,
    getValues,
    resetField,
    setValue,
  } = useForm({ defaultValues: defaultValues });

  const subscribedWatchFields = watch(watchFields);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={pb ? pb : 'pb-4'}>
      {children(
        register,
        errors,
        { control, getValues, resetField, setValue },
        subscribedWatchFields
      )}
    </form>
  );
}

// export const Input = ({
//   prepend,
//   register,
//   name,
//   label,
//   labelClassName,
//   value,
//   type = 'text',
//   pattern,
//   class_name,
//   required = false,
//   errors,
//   rules,
//   validate = () => {},
//   defaultValue,
//   ...rest
// }) => {
//   const { setValue } = useFormContext();
//   useEffect(() => {
//     setValue(name, defaultValue);
//   }, [defaultValue]);

//   return (
//     <div className={`mb-3 ${class_name}`}>
//       <>
//         <div className="d-flex align-items-center input-form">
//           {prepend && <span className="prepend-text text-dark">{prepend}</span>}
//           <input
//             label={label}
//             type={type}
//             {...register(name, { required, validate: validate })}
//             {...rest}
//             className="form-control"
//             pattern={pattern}
//           />
//         </div>
//         <InputError error={errors[name]} className={'mt-1'} />
//       </>
//     </div>
//   );
// };

// export const InputError = ({ error, text, className }) => {
//   if (!error) return null;

//   if (error.type === 'validate')
//     return (
//       <div className={className}>
//         <span role="alert" className="text-danger">
//           {error.message || 'Error'}
//         </span>
//       </div>
//     );

//   return error.type === 'required' ? (
//     <div className={className}>
//       <span role="alert" className="text-danger">
//         {text || 'This is required'}
//       </span>
//     </div>
//   ) : null;
// };
