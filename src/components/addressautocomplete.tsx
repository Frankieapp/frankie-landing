import { useEffect, useRef } from 'react';

type Props = {
  onSelectAddress: (address: {
    street: string;
    city: string;
    province: string;
    postalCode: string;
    country: string;
  }) => void;
};

declare global {
  interface Window {
    google: any;
  }
}

const AddressAutocomplete: React.FC<Props> = ({ onSelectAddress }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (
        typeof window !== 'undefined' &&
        window.google &&
        window.google.maps &&
        window.google.maps.places
      ) {
        const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current!, {
          types: ['address'],
          fields: ['address_components', 'geometry'],
          componentRestrictions: { country: 'ca' },
        });

        autocomplete.addListener('place_changed', () => {
          const place = autocomplete.getPlace();
          if (!place.address_components) return;

          const get = (type: string) =>
            place.address_components.find((c: any) => c.types.includes(type))?.long_name || '';

          onSelectAddress({
            street: `${get('street_number')} ${get('route')}`.trim(),
            city: get('locality'),
            province: get('administrative_area_level_1'),
            postalCode: get('postal_code'),
            country: get('country'),
          });
        });

        clearInterval(interval);
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <input
      type="text"
      placeholder="Start typing your address..."
      ref={inputRef}
      className="w-full border p-2 rounded"
    />
  );
};

export default AddressAutocomplete;
