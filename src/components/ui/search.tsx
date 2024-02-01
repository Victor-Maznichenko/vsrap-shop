"use client";

import Icon from "./icon";
import "@/styles/components/ui/search.scss";
import { useState } from "react";

const Search = () => {
	const [searchActive, setSearchActive] = useState(false);
	const toggleSearch = (event: { preventDefault: () => void }) => {
		event.preventDefault();
		setSearchActive(!searchActive);
	};

	return (
		<form className="search">
			<div className={`${searchActive ? "show" : "hidden"} search__dropdown`}>
				<div className="search__dropdown-inner">
					<label className="search__label">
						<input
							className="search__input"
							placeholder="поиск по товарам"
							maxLength={100}
							type="search"
						/>
						<button className="search__btn" type="submit">
							<Icon name="search" width={20} height={20} />
						</button>
					</label>
					<button className="search__btn-close" onClick={toggleSearch} type="button"></button>
				</div>
			</div>
			<button className="search__btn-open" onClick={toggleSearch}>
				<Icon name="search" width={24} height={24} />
			</button>
		</form>
	);
};

export default Search;
