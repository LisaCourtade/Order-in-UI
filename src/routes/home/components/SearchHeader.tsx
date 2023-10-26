import './SearchHeader.css';

export function SearchHeader() {
    return (
        <div className="search-header">
            <div className="search-input-group">
                <label>Search</label>
                <input type='text' placeholder="Restaurant name, food ..."/>
            </div>
            <div className="search-input-group">
                <label>Location</label>
                <input type='text' placeholder="Address, city ..."/>
            </div>
            <div role='button' className='search-button'>Find restaurants</div>
        </div>
    )
}