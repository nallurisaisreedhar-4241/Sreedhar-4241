

    //     <div id="tnb-google-search-inner-container" role="search">
    //     <label for="tnb-google-search-input" class="visually-hidden">
    //         Search field
    //     </label>

    //     <input
    //         id="tnb-google-search-input"
    //         type="text"
    //         placeholder="Search..."
    //         autocomplete="off"
    //         onkeydown="TopNavBar.googleSearchAttachKeyPressHandler(event)"
    //         oninput="TopNavBar.searchWithSuggestions(this)"
    //         onfocus="TopNavBar.searchWithSuggestions(this)"
    //         onblur="TopNavBar.searchFieldLostFocus(event)"
    //         aria-label="Search field"
    //         aria-describedby="search-suggestions"
    //     />

    //     <button
    //         id="tnb-google-search-submit-btn"
    //         class="tnb-button-light"
    //         aria-label="Button to search"
    //         onclick="TopNavBar.googleSearchSubmit()"
    //         type="button"
    //     >
    //         <svg
    //             id="tnb-google-search-icon"
    //             viewBox="0 0 17 16"
    //             fill="none"
    //             xmlns="http://www.w3.org/2000/svg"
    //         >
    //             <path
    //                 d="M11.8153 10.3439C12.6061 9.2673 13.0732 7.9382 13.0732 6.5C13.0732 2.91015 10.163 0 6.57318 0C2.98333 0 0.0731812 2.91015 0.0731812 6.5C0.0731812 10.0899 2.98333 13 6.57318 13C8.01176 13 9.3412 12.5327 10.4179 11.7415L10.4171 11.7422C10.4466 11.7822 10.4794 11.8204 10.5156 11.8566L14.3661 15.7071C14.7566 16.0976 15.3898 16.0976 15.7803 15.7071C16.1708 15.3166 16.1708 14.6834 15.7803 14.2929L11.9298 10.4424C11.8936 10.4062 11.8553 10.3734 11.8153 10.3439ZM12.0732 6.5C12.0732 9.53757 9.61075 12 6.57318 12C3.53561 12 1.07318 9.53757 1.07318 6.5C1.07318 3.46243 3.53561 1 6.57318 1C9.61075 1 12.0732 3.46243 12.0732 6.5Z"
    //                 fill="black"
    //             />
    //         </svg>
    //     </button>
    // </div>



    // SearchComponent.js
    import React, { useState } from 'react';
    import './SearchComponent.css'; // Import your CSS file
    
    const SearchComponent = ({ onSearch }) => {
        const [query, setQuery] = useState('');
    
        // const handleInputChange = (event) => {
        //     setQuery(even9t.target.value);
        //     // Call the parent function for suggestions
        //     onSearch(event.target.value);
        // };
    
        // const handleKeyPress = (event) => {
        //     if (event.key === 'Enter') {
        //         // Call the search function when Enter is pressed
        //         handleSearch();
        //     }
        // };
    
        // const handleSearch = () => {
        //     // Perform search action
        //     console.log('Searching for:', query);
        //     // Call the search function passed from parent
        //     onSearch(query);
        // };
    
        return (
            <div role="search" className="search-container">
                <input
                    id="search-input"
                    type="text"
                    placeholder="Search..."
                    value={query}
                    // onChange={handleInputChange}
                    // onKeyDown={handleKeyPress}
                    aria-label="Search field"
                    className="search-input"
                />
                <button
                    aria-label="Button to search"
                    type="button"
                    // onClick={handleSearch}
                    className="search-button"
                >
                    <svg
                        viewBox="0 0 17 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M11.8153 10.3439C12.6061 9.2673 13.0732 7.9382 13.0732 6.5C13.0732 2.91015 10.163 0 6.57318 0C2.98333 0 0.0731812 2.91015 0.0731812 6.5C0.0731812 10.0899 2.98333 13 6.57318 13C8.01176 13 9.3412 12.5327 10.4179 11.7415L10.4171 11.7422C10.4466 11.7822 10.4794 11.8204 10.5156 11.8566L14.3661 15.7071C14.7566 16.0976 15.3898 16.0976 15.7803 15.7071C16.1708 15.3166 16.1708 14.6834 15.7803 14.2929L11.9298 10.4424C11.8936 10.4062 11.8553 10.3734 11.8153 10.3439ZM12.0732 6.5C12.0732 9.53757 9.61075 12 6.57318 12C3.53561 12 1.07318 9.53757 1.07318 6.5C1.07318 3.46243 3.53561 1 6.57318 1C9.61075 1 12.0732 3.46243 12.0732 6.5Z"
                            fill="black"
                        />
                    </svg>
                </button>
            </div>
        );
    };
    
    export default SearchComponent;
    