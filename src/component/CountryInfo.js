import { useParams, } from "react-router-dom";
import { useState,useEffect } from "react";
import Button from "./Button";


const CountryInfo = ({  }) =>{
    const {countryId} = useParams();
    const [country,setCountry] = useState({});
    
    useEffect(()=>{
        // setCountryName(countryId);
        const getCountryInfo = async () =>{
            const countryData = await fetchCountryInfo();
            console.log(countryData)
            setCountry(countryData[0])
        };
        getCountryInfo();

    },[]);

    const fetchCountryInfo = async () =>{
        const res = await fetch(`https://restcountries.com/v2/name/${countryId}`);
        const data = await res.json();
        return data
    }

    console.log(country)
    return(
    <div>
        <Button/>
        <div className="country-wrapper">
            <img src={country  === undefined ? "" : country.flag} alt={`${country === undefined ? "" : country.name}'s flag`} />
            <div className="country-details">
                <h2>{country === undefined ? "" : country.name}</h2>
                <div className="details">
                    <div className="detailed-info">
                        <p><span className="title-info">Native Name:</span><span className="country-detail">{country.nativeName}</span></p>
                        <p><span className="title-info">Population:</span><span className="country-detail">{country.population}</span></p>
                        <p><span className="title-info">Region:</span><span className="country-detail">{country.region}</span></p>
                        <p><span className="title-info">Sub Region:</span><span className="country-detail">{country.subregion}</span></p>
                        <p><span className="title-info">Capital:</span><span className="country-detail">{country.capital}</span></p>
                    </div>
                    <div className="more-details">
                        <p><span className="title-info">Top Level Domain:</span><span className="country-detail">{country.topLevelDomain}</span></p>
                        <p><span className="title-info">Currencies:</span>{country.currencies === undefined ? "" : country.currencies.map(currency => <span className="country-detail">{currency.name}</span>)}</p>
                        <p><span className="title-info">Languages:</span>{country.languages === undefined ? "" : country.languages.map(language => <span className="country-detail">{language.name}</span>)}</p>
                    </div>
                </div>
                <p className="border"><span className="title-info">Border Countries</span>{country.borders === undefined ? "" : country.borders.map(border=><span className="border-countries">{border}</span>)}</p>
            </div>
        </div>
    </div>
    );

}

export default CountryInfo;