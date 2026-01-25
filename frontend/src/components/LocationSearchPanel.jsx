const LocationSearchPanel = ({ suggestions, setPanelOpen, setVehiclePanel, setPickup, setDestination, activeField }) => {

    const handleSuggestionClick = (suggestion) => {
        if (activeField === 'pickup') {
            setPickup(suggestion.description)
        } else if (activeField === 'destination') {
            setDestination(suggestion.description)
        }
    }

    return (
        <div>
            {/* Display fetched suggestions here */}
            {
                suggestions.map((elem, idx) => (
                    <div key={idx} onClick={() => handleSuggestionClick(elem)} className='flex gap-4 border-2 p-3 border-gray-100 active:border-black rounded-xl items-center my-2 justify-start cursor-pointer hover:bg-gray-50 transition-all'>
                        <h2 className='bg-[#eee] h-10 w-10 flex items-center justify-center rounded-full'><i className="ri-map-pin-fill text-lg"></i></h2>
                        <h4 className='font-medium text-sm'>{elem.description}</h4>
                    </div>
                ))
            }
        </div>
    )
}

export default LocationSearchPanel
