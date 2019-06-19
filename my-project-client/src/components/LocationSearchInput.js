import React from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng
} from "react-places-autocomplete";
import { Segment } from 'semantic-ui-react'
import "./componentStyles/locationInput.css"

class LocationSearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      searchAddress: ""
    };
  }

  handleChange = address => {
    this.setState({ address });
  };

  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => {
        console.log("results: ", results);
        return results;
      })
      .then(data => {
        let newAddress = "";
        const addressData = data[0].address_components;
        newAddress += addressData[0].short_name + " ";
        newAddress += addressData[1].short_name;
        newAddress += " ";
        this.setState({
          searchAddress: newAddress.toUpperCase()
        });
        this.props.handleNewAddress(newAddress.toUpperCase());

        // this.getName(data[0].place_id)
        // let searchName = ''
      })
      .catch(error => console.error("Error", error));
  };

  render() {
    const onError = (status, clearSuggestions) => {
      console.log("Google Maps API returned error with status: ", status);
      clearSuggestions();
    };

    const searchOptions = {
      types: ["address"]
    };
    return (
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
        onError={onError}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: "Search Places ...",
                // className: "location-search-input, myInput"
                // className: "location-search-input"
                className: "myInput"
              })}
            />
            {/* New Code */}
            <Segment.Group className="autocomplete-dropdown-container myWidth" >
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? "suggestion-item--active"
                  : "suggestion-item";
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: "#fafafa", cursor: "pointer" }
                  : { backgroundColor: "#ffffff", cursor: "pointer" };
                return (
                  <Segment
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </Segment>
                );
              })}
            </Segment.Group>
            {/* New Code End */}
          </div>
        )}
      </PlacesAutocomplete>
    );
  }
}

export default LocationSearchInput;

