import { MyLabel, MySubLabel } from '@features/create-business';
import { readFilesAsDataURL } from '@features/create-business/utils/api';
import checkValidImageFiles from '@features/create-business/utils/objects/checkValidImageFiles';
import ImageScroll from 'components/image/scroll/ImageScroll';
import { useField } from 'formik';
import { useEffectAfterMount } from 'hooks';
import Image from 'next/image';
import { ChangeEvent, memo, useEffect, useState } from 'react';

interface SelectImageProps {
  inputName: string;
}

const SelectImage = ({ inputName }: SelectImageProps) => {
  const [imageFiles, setImageFiles] = useState<File[]>();
  const [images, setImages] = useState<string[]>();

  const [, meta, handler] = useField(inputName);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    // get the images matching the specified regex
    const validFiles = checkValidImageFiles(files);

    // check if any images matched the image type
    if (!validFiles.length) {
      console.log('Selected images are not of valid type');
      return;
    }

    setImageFiles(validFiles);
    handler.setValue(validFiles);
  };

  // convert all imageFiles into data URL
  useEffect(() => {
    const fileReaders: FileReader[] = [];
    let isCancel = false;

    if (imageFiles?.length) {
      const promises = readFilesAsDataURL(imageFiles);

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
    }

    return () => {
      isCancel = true;
      fileReaders.forEach((fileReader) => {
        if (fileReader.readyState === 1) {
          fileReader.abort();
        }
      });
    };
  }, [imageFiles]);

  // validate field after selecting images
  useEffectAfterMount(() => {
    handler.setTouched(true);
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
        {meta.touched && meta.error ? (
          <p className="text-sm text-primaryred">*{meta.error}</p>
        ) : null}
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
