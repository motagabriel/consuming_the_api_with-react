import React from 'react';
import Card from './Card';
import styles from './Cards.module.css';
import Input from './Form/Input';
import Select from './Form/Select';

const Cards = () => {
  const [allCountries, setAllCountries] = React.useState([]);
  const [countries, setCountries] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [select, setSelect] = React.useState(1);
  const [input, setInput] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('https://restcountries.com/v3.1/all')
        .then((res) => res.json())
        .then((json) => json);

      setAllCountries(result);
      const maxCountriesPerPage = result.slice(0, currentPage * 8);
      setCountries([...maxCountriesPerPage]);
    };
    fetchData();
  }, [currentPage]);

  React.useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setCurrentPage((currentPageInsideState) => currentPageInsideState + 1);
      }
    });
    intersectionObserver.observe(document.querySelector('.sentinela'));

    return () => intersectionObserver.disconnect();
  }, []);

  return (
    <section className={`main ${styles.main}`}>
      <form className={`${styles.form} container`}>
        <Input
          type="text"
          placeholder="Seach for a country"
          handleChange={({ target }) => setInput(target.value)}
        />
        <Select
          handleClick={({ target }) => setSelect(target.value)}
          select={select}
        />
      </form>
      <div className={`${styles.cards} container`}>
        {input && select === 1
          ? allCountries
              .filter((country) => {
                if (input) {
                  return country.name.common.toLowerCase().includes(input);
                }
                return country;
              })
              .map(({ name, population, region, capital, flags }) => (
                <div key={name.common}>
                  <Card
                    common={name.common}
                    population={population}
                    region={region}
                    capital={capital}
                    flags={flags.png}
                  />
                </div>
              ))
          : select !== 1
          ? allCountries
              .filter((country) => {
                if (select && !input) {
                  return country.region
                    .toLowerCase()
                    .includes(select.toLowerCase());
                }

                if (select && input) {
                  return (
                    country.region
                      .toLowerCase()
                      .includes(select.toLowerCase()) &&
                    country.name.common.toLowerCase().includes(input)
                  );
                }

                return country;
              })
              .map(({ name, population, region, capital, flags }) => (
                <div key={name.common}>
                  <Card
                    common={name.common}
                    population={population}
                    region={region}
                    capital={capital}
                    flags={flags.png}
                  />
                </div>
              ))
          : countries.map(({ name, population, region, capital, flags }) => (
              <div key={name.common}>
                <Card
                  common={name.common}
                  population={population}
                  region={region}
                  capital={capital}
                  flags={flags.png}
                />
              </div>
            ))}
        <div className={`sentinela ${styles.sentinela}`} />
      </div>
    </section>
  );
};

export default Cards;
