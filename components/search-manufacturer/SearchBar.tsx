"use client";
import React, { useState } from 'react';
import SearchManufacturer from './SearchManufacturer';
import { SearchButton } from './SearchButton';
import Image from 'next/image';
import {useRouter} from 'next/navigation';


export const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState('');
  const [model, setModel] = useState("");
   const router = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
      updateSearchParams(model?.toLowerCase() ?? '', manufacturer?.toLowerCase()?? '');
  };

  const updateSearchParams = (model: string, manufacturer: string) => {
    // Create a new URLSearchParams object using the current URL search parameters
    const searchParams = new URLSearchParams(window.location.search);

    // Update or delete the 'model' search parameter based on the 'model' value
    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }

    // Update or delete the 'manufacturer' search parameter based on the 'manufacturer' value
    if (manufacturer) {
      searchParams.set("manufacturer", manufacturer);
    } else {
       searchParams.delete("manufacturer");
    }

    // Generate the new pathname with the updated search parameters
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

    router.push(newPathname, {scroll: false});
  };

  return (

    <form className='searchbar' onSubmit={handleSubmit}>

      <div className="searchbar__item">
        <SearchManufacturer manufacturer={manufacturer} setManufacturer={setManufacturer} />
        <SearchButton className="" />
      </div>

      <div className="searchbar__item">
        <Image src="/model-icon.png" width={25} height={25} className={'absolute w-[20px] h-[20px] ml-4'} alt="car model" />

      <input type="text" name='model' value={model} onChange={(e) => setModel(e.target.value)} placeholder='Tiguan' className={'searchbar__input'} />

      <SearchButton className='sm:hidden' />
      </div>
      <SearchButton className='max-sm:hidden' />

    </form>
  );
};
