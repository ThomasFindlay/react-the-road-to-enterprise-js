import { useState } from 'react';
import BusinessCardForm from './BusinessCardForm';
import BusinessCardPreview from './BusinessCardPreview';

const BusinessCardEditor = () => {
  const [avatarPreview, setAvatarPreview] = useState('');
  const [form, setForm] = useState({
    avatarFile: null,
    name: '',
    phoneNumber: '',
    description: '',
    address: '',
  });
  const onFileUpload = (e) => {
    const file = e.target.files?.[0];
    setForm((state) => ({
      ...state,
      avatarFile: file,
    }));
    if (!file) {
      setAvatarPreview('');
      return;
    }

    const reader = new FileReader();
    reader.addEventListener(
      'load',
      () => {
        const avatarPreview = reader.result;
        setAvatarPreview(avatarPreview);
      },
      false
    );

    reader.readAsDataURL(file);
  };

  const onInputChange = (e) => {
    setForm((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div className='container grid grid-cols-2 gap-8 p-8 mx-auto'>
      <BusinessCardForm
        name={form.name}
        description={form.description}
        address={form.address}
        phoneNumber={form.phoneNumber}
        onInputChange={onInputChange}
        onFileUpload={onFileUpload}
      />
      <BusinessCardPreview
        avatar={avatarPreview}
        name={form.name}
        description={form.description}
        address={form.address}
        phoneNumber={form.phoneNumber}
      />
    </div>
  );
};

export default BusinessCardEditor;
