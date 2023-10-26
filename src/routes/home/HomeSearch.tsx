import { SearchHeader } from './components/SearchHeader';

export function HomeSearch() {
    return (
        <div style={{display: 'flex'}}>
            <SearchHeader />
            <div>Restaurants on map</div>
        </div>
        
    )
}