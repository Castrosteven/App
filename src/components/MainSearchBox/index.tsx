import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { UseEvents } from "../../context/UseEvents";

export const MainSearchBox = () => {
  const { fetchNewEvents } = UseEvents();
  const [keyword, setKeyword] = useState("");
  const [eventLocation, setLocation] = useState("");
  const router = useRouter();

  const submitHadler = () => {
    fetchNewEvents({ location: eventLocation, keyword });
  };

  const keywordChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setKeyword(e.target.value);
  };

  return (
    <div className="bg-gray-800 h-96 w-full flex flex-col justify-evenly ">
      <div className="text-center  ">
        <span className="text-white font-semibold text-2xl">
          Search for events near you
        </span>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitHadler();
        }}
        className="container mx-auto rounded-lg bg-white h-40 w-full gap-4 flex items-center justify-center p-5"
      >
        <div className="w-6/12">
          <input
            name="keyword"
            value={keyword}
            onChange={keywordChangeHandler}
            type="text"
            placeholder="Restaurant for 2"
            className="p-4 rounded-lg border-2 border-gray-400 w-full"
          />
        </div>
        <div className="w-2/12">
          <input
            value={eventLocation}
            onChange={(e) => {
              setLocation(e.target.value);
            }}
            type="text"
            placeholder="New York City"
            className="p-4 rounded-lg border-2 border-gray-400 w-full"
          />
        </div>
        <div className="w-2/12">
          <input
            type="text"
            placeholder="When"
            className="p-4 rounded-lg border-2 border-gray-400 w-full"
          />
        </div>
        <div className="w-1/12">
          <button
            type="submit"
            className="p-4 bg-purple-800 text-white w-full rounded-lg"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};
