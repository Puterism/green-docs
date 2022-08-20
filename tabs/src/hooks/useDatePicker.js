import { useState } from 'react';

const useDatePicker = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const onSelectDate = (date) => {
    setValue(date);
  };

  return [value, onSelectDate, setValue];
};

export default useDatePicker;
