import { useEffect } from 'react';

// Hook that alerts clicks outside of the passed ref
// Thanks to: https://stackoverflow.com/questions/32553158/detect-click-outside-react-component/42234988#42234988
export default function useOutsideContainer(ref, cb) {
  function handleClickOutside(event) {
    if (ref.current && !ref.current.contains(event.target)) {
      if (typeof cb === 'function') cb();
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });
}
