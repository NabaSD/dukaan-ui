import React from 'react';
import './Search-box.scss';

function SearchBox() {
    return (
        <div className="m-lr-tb-16-12">
            <input type="text" className="custom-input-type-text" placeholder="Search for products…" />
        </div>
    );
}

export default SearchBox;