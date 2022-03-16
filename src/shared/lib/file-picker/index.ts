import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';

type UseFilePickerProps = Pick<Partial<HTMLInputElement>, 'multiple' | 'accept'>;

export const useFilePicker = (props: UseFilePickerProps) => {
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(document.createElement('input'));

  const handleChange = useCallback(({ target: { files } }: ChangeEvent<HTMLInputElement>) => {
    if (files) {
      setFiles(Array.from(files));
    }
  }, []);

  useEffect(() => {
    const input = fileInputRef.current;

    input.type = 'file';
    input.multiple = props.multiple ?? input.multiple;
    input.accept = props.accept ?? input.accept;
    input.addEventListener('change', handleChange as any);

    return () => {
      input.removeEventListener('change', handleChange as any);
      input.remove();
    };
  }, []);

  const handleUploadClick = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  return [files, handleUploadClick] as const;
};
