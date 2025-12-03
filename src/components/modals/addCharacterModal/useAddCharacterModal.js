import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup
    .string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters'),
  height: yup
    .string()
    .matches(/^[0-9]*$/, 'Height must be a number')
    .nullable(),
  mass: yup
    .string()
    .matches(/^[0-9]*$/, 'Mass must be a number')
    .nullable(),
  hair_color: yup.string(),
  skin_color: yup.string(),
  eye_color: yup.string(),
  birth_year: yup.string(),
  gender: yup.string().required('Gender is required'),
});

export const useCharacterModal = ({ onSubmit, onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
    defaultValues: {
      name: '',
      height: '',
      mass: '',
      hair_color: '',
      skin_color: '',
      eye_color: '',
      birth_year: '',
      gender: 'male',
    },
  });

  const onSubmitForm = data => {
    onSubmit(data);
    reset();
  };

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmitForm),
    errors,
    isValid,
    handleBackdropClick,
  };
};
