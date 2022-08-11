import { Listbox, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { BsCheck2 } from 'react-icons/bs';
import { HiOutlineSelector } from 'react-icons/hi';
import { classNames } from '../../../../../../utils/css';
import { ListState } from '../../../types/ListStateType';

interface MyListBoxProps {
  list: { name: string }[];
  listState: ListState;
  inputName?: string;
  width?: number;
  button?: JSX.Element;
  multiple?: boolean;
}

function MyListBox({
  list,
  listState,
  inputName,
  width = 250, // default width
  button,
  multiple = false,
}: MyListBoxProps) {
  return (
    <div className="font-rubik" style={{ width: width }}>
      <Listbox
        value={listState.selected}
        onChange={listState.setSelected}
        name={inputName}
        multiple={multiple}
      >
        <div className="relative">
          {button ? (
            button
          ) : (
            <Listbox.Button className="relative w-full rounded-md px-5 py-2 text-left ring-1 ring-black/40">
              <span className="block truncate capitalize">
                {Array.isArray(listState.selected)
                  ? // If selected is array show multiple values in the array
                    listState.selected.map((item) => item.name).join(', ')
                  : // else show the selected value
                    listState.selected.name}
                {/* {listState.selected..name} */}
              </span>
              <span className="absolute right-0 top-1/2 -translate-y-1/2 pr-2">
                <HiOutlineSelector size={20} className="text-gray-400" />
              </span>
            </Listbox.Button>
          )}

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5">
              {list.map((listItem, index) => (
                <Listbox.Option
                  key={index}
                  value={listItem}
                  className={({ active }) =>
                    classNames(
                      active ? 'bg-blue-500 text-white' : '',
                      'relative cursor-default py-2 pl-5'
                    )
                  }
                >
                  {({ active, selected }) => (
                    <>
                      <span
                        className={classNames(
                          selected ? 'font-medium' : 'font-normal',
                          'capitalize'
                        )}
                      >
                        {listItem.name}
                      </span>
                      {selected && width > 100 && (
                        <span className="absolute right-0 top-1/2 -translate-y-1/2 pr-3">
                          <BsCheck2
                            size={20}
                            className={classNames(
                              active ? 'text-white' : 'text-blue-700'
                            )}
                          />
                        </span>
                      )}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}

export default MyListBox;
