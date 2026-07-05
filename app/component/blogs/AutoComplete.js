import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const AutoComplete = ({
  options,
  selectedCategory,
  setSelectedCategory,
  callback,
}) => {
  const modalRef = useRef();
  const [showOptions, setShowOptions] = useState(false);
  const [optionsToShow, setOptionsToShow] = useState(options);

  const showTheOptions = (event) => {
    event.preventDefault();
    showOptions === false && setShowOptions(true);
  };

  const closeTheOptions = () => {
    showOptions === true && setShowOptions(false);
  };

  const resetOptions = () => {
    closeTheOptions();
    setSelectedCategory("");
    setOptionsToShow(options);
    if (selectedCategory) callback && callback(null);
  };

  const updateSelectedCategory = (option) => {
    setSelectedCategory(option);
    closeTheOptions();
    callback && callback(option.slug);
  };

  const writeToCategory = (e) => {
    const { value } = e.target;
    setSelectedCategory(value);
    filterOptions(value);
  };

  const filterOptions = (value) => {
    let filteredOptions = options ? [...options] : [];
    filteredOptions = filteredOptions.filter((opt) =>
      opt.name.toLowerCase().includes(value.toLowerCase())
    );
    if (filteredOptions.length) {
      setOptionsToShow(filteredOptions);
    } else {
      setOptionsToShow("no results found");
    }
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setShowOptions(false); // Close the modal
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={modalRef}>
      <form
        onClick={(event) => showTheOptions(event)}
        className="inline-flex gap-2 border border-border bg-card/10 hover:bg-card/20 hover:border-primary/20 px-3.5 py-1.5 justify-center max-w-fit rounded transition-all duration-300 cursor-pointer"
      >
        <input
          type="text"
          name="selectedCategory"
          id="selectedCategory"
          value={
            typeof selectedCategory === "string"
              ? selectedCategory
              : selectedCategory?.name || ""
          }
          placeholder="Browse Categories"
          onChange={writeToCategory}
          className="outline-none bg-transparent text-xs tracking-wide flex-1 text-foreground placeholder-muted-foreground w-[150px] font-mono cursor-pointer"
        />
        <button type="button" onClick={resetOptions} className="opacity-60 hover:opacity-100 transition-opacity">
          <Image
            src={selectedCategory ? "/images/cross.svg" : "/images/chevron.svg"}
            alt="icon"
            width={10}
            height={10}
            className="invert-0 dark:invert"
          />
        </button>
      </form>
      <ul
        className="absolute top-[38px] right-0 z-10 bg-background border border-border w-full max-h-52 overflow-y-auto shadow-2xl rounded py-1 custom-scrollbar"
        style={{ display: showOptions ? "block" : "none" }}
      >
        {typeof optionsToShow !== "string" && optionsToShow.length > 0 ? (
          optionsToShow.map((option) => (
            <li
              key={option.id}
              onClick={() => updateSelectedCategory(option)}
              className="px-3.5 py-2 hover:bg-primary/10 hover:text-primary cursor-pointer text-xs capitalize whitespace-nowrap transition-colors font-mono text-muted-foreground"
            >
              {option.name}
            </li>
          ))
        ) : (
          <li className="px-3.5 py-2 text-xs italic capitalize whitespace-nowrap select-none text-muted-foreground/60 font-mono">
            no results found
          </li>
        )}
      </ul>
    </div>
  );
};

export default AutoComplete;
