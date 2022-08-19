import { MyLabel, MySubLabel } from '@features/create-business';
import ImageScroll from 'components/image/scroll/ImageScroll';
import { useField } from 'formik';
import Image from 'next/image';
import { ChangeEvent, memo, useEffect, useState } from 'react';

interface SelectImageProps {
  inputName: string;
}

const imageTypeRegex = /image\/(png|jpg|jpeg)/i;

const SelectImage = ({ inputName }: SelectImageProps) => {
  const [imageFiles, setImageFiles] = useState<File[]>();
  const [images, setImages] = useState<string[]>();

  const [_field, _meta, handler] = useField(inputName);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    // check for null value
    if (!e.target.files) return;

    // get the selected files from event
    const files = e.target.files;
    const filesArr = Array.from(files); // to perform array methods
    const validImageFiles: File[] = [];

    // filter for images for valid file path

    filesArr.forEach((file) => {
      if (file.type.match(imageTypeRegex)) {
        validImageFiles.push(file);
      }
    });

    // update image file state
    if (validImageFiles.length) {
      setImageFiles(validImageFiles);
      handler.setValue(validImageFiles);
      return;
    }

    // no files are of valid type
    alert('Selected images are not of valid type');
  };

  useEffect(() => {
    const fileReaders: FileReader[] = [];
    let isCancel = false;

    // check for undefined
    if (imageFiles?.length) {
      const promises = imageFiles.map((file) => {
        return new Promise<string>((resolve, reject) => {
          const fileReader = new FileReader();
          fileReaders.push(fileReader);
          fileReader.onload = (e) => {
            const result = e.target?.result;
            if (result) {
              resolve(result.toString());
            }
          };
          fileReader.onabort = () => {
            reject(new Error('File reading aborted'));
          };

          fileReader.onerror = () => {
            reject(new Error('Failed to read file'));
          };

          fileReader.readAsDataURL(file);
        });
      });

      // update state after all files have finished loading
      Promise.all(promises)
        .then((images) => {
          if (!isCancel) {
            setImages(images);
          }
        })
        .catch((error) => {
          console.log(error);
        });

      return () => {
        isCancel = true;
        fileReaders.forEach((fileReader) => {
          if (fileReader.readyState === 1) {
            fileReader.abort();
          }
        });
      };
    }
  }, [imageFiles]);

  return (
    <>
      <div className="mb-5 lg:mb-0">
        <MyLabel>Images</MyLabel>
        <MySubLabel>
          Upload images you want to include on your business profile.
        </MySubLabel>
      </div>
      <div>
        <input
          type="file"
          id="image"
          onChange={changeHandler}
          accept="image/*"
          multiple
          hidden
        />
        <label
          htmlFor="image"
          className="inline-block cursor-pointer rounded-md bg-primaryred px-6 py-2 text-white hover:bg-red-500"
        >
          Upload
        </label>
        <p className="my-3 text-gray-500">Select up to max of 10 images</p>
        <MemoizedImages images={images} />
      </div>
    </>
  );
};

const Images = ({ images }: { images: string[] | undefined }) => {
  if (!images) return <></>;

  return (
    <div className="flex w-full">
      <ImageScroll noItems={images.length} initialItems={2} className="mb-4">
        {images.map((image, index) => (
          <div key={index} className="slider-img relative h-[150px] shrink-0">
            <Image
              src={image}
              key={index}
              alt="image"
              layout="fill"
              className="slider-next-img"
              objectFit="cover"
            />
          </div>
        ))}
      </ImageScroll>
    </div>
  );
};

const MemoizedImages = memo(Images);

export default SelectImage;
