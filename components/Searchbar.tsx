'use client';

import { useState } from "react"
import SearchManufacturer from "./SearchManufacturer"
import SearcrButton from "./SearcrButton";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Searchbar = ({}) => {
  const [manufacturer, setManufacturer] = useState<string>('');
  const [model, setModel] = useState<string>('');

  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (manufacturer.trim() === "" && model.trim() === "") {
      return alert("Please provide some input");
    }

    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
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

    router.push(newPathname);
  };

  

  return (
    <form className='searchbar' onSubmit={handleSearch}>
        <div className='searchbar__item'>
            <SearchManufacturer
            manufacturer={manufacturer}
            updateManuFacturer={setManufacturer}
            />


            <SearcrButton othersClasses="sm:hidden" />
            </div>

            <div className="searchbar__item">
               <Image
                  src={'/model-icon.png'}
                  width={25}
                  height={25}
                  className="absolute w-[20px] h-[20px] ml-4"
                  alt="car model"
               />

               <input
                  type="text"
                  name="model"
                  value={model}
                  onChange={e => setModel(e.target.value)}
                  placeholder="Tiguan..."
                  className="searchbar__input"
               />
                <SearcrButton othersClasses="sm:hidden" />
            </div>
            <SearcrButton othersClasses="max-sm:hidden" />
    </form>
  )
}

export default Searchbar