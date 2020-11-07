import React, { useEffect, useState } from 'react';
import './App.css'

// Components
import Button from '../atoms/Button';
import Title from '../atoms/Title';
import OrderLine from '../molecules/OrderLine';
import Header from '../organisms/Header';
import OrderDetailModal from '../organisms/OrderDetailModal';

// Utils
import fakeList from '../../fakeDB.json' // Backup list if API problem
import languages from '../../languages.json' // All needed words in selected language
import initFilters from '../../utils/initFilters'
import filterWithId from '../../utils/filterWithId'
import applyFilters from '../../utils/applyFilters'
import checkIfOneFilterIsActive from '../../utils/checkIfOneFilterIsActive'


// ==============================================================================
// ==================== 'Single page' App, all starts here. =====================
// ==============================================================================
const App = () => {

    const [ status, setStatus ] = useState(0)
    const [ initialList, setInitialList ] = useState([])
    const [ dictionary, setDictionary ] = useState(languages[0]) // Default : english
    const [ homePage, setHomePage ] = useState(true); // Are we on 'Home page' ?
    const [ listOfFilter, setListOfFilter ] = useState(initFilters(initialList)); // see utils/initFilters
    const [ atLeastOneFilterIsActive, setAtLeastOneFilterIsActive ] = useState(false);
    const [ searchedId, setSearchedId ] = useState(''); // User want to directly search an id
    const [ searchedIdIsActive, setSearchedIdIsActive ] = useState(false);
    const [ showModal, setShowModal ] = useState(false);
    const [ itemInModal, setItemInModal ] = useState({});

    useEffect( () => {
        const getData = async () => {
            try {
                const response = await fetch('https://my.api.mockaroo.com/orders.json?key=e49e6840',{ mode: "cors" });
                const data = await response.json();
        
                setInitialList(data);
                setStatus(1);
            } catch {
                setInitialList(fakeList); // Back up plan in case of issue
                setStatus(2);
            }
        };

        getData();
    }, []) // Initialize list of order calling API, only once.

    useEffect(() => {
        setAtLeastOneFilterIsActive(checkIfOneFilterIsActive(listOfFilter));
    }, [listOfFilter]) // Check every time list of filters changes.

    const listToDisplay =
        initialList
            .filter((item) => searchedIdIsActive ? filterWithId(item, searchedId): true)
            .filter((item) => atLeastOneFilterIsActive ? applyFilters(item, listOfFilter) : true)
            .sort((a, b) => a.eta > b.eta ? -1 : 1) // Sort by ETA
            .map((item) => 
                <OrderLine 
                    key={item.id} item={item} type="full" dictionary={dictionary}
                    setItemInModal={setItemInModal} setShowModal={setShowModal}
                />
        );

    console.log(initialList)
    return (
        <main className={homePage ? "main-home" : "main"} >
            {/* Most of the variables are used/defined inside 'Header' */}
            <Header 
                initialList={initialList}
                dictionary={dictionary} setDictionary={setDictionary}
                homePage={homePage} setHomePage={setHomePage}
                listOfFilter={listOfFilter} setListOfFilter={setListOfFilter}
                searchedId={searchedId} setSearchedId={setSearchedId}
                setSearchedIdIsActive={setSearchedIdIsActive}
            />

            { status === 0
                ? <Title  content={dictionary.loading}  type="welcome" />
                : <>
                    {homePage 
                        ? 
                        <div id="home-page-section">
                            { status === 2 && <p>{dictionary.sorryForError}</p> }
                            <Title 
                                content={dictionary.welcomeMessage} 
                                userName={initialList ? initialList[0].user_name.split(' ')[0] : ""} 
                                type="welcome" />
                            <Button 
                                content={dictionary.start} type="start" 
                                onClick={() => { setHomePage(false); }} 
                            />
                        </div>
                        :
                        <div id="order-list-section">
                            { listToDisplay.length > 0 
                                ? listToDisplay 
                                : <Title  content={dictionary.noResult}  type="result" />
                            }
                            { showModal &&
                                <OrderDetailModal 
                                    item={itemInModal} setShowModal={setShowModal} 
                                    dictionary={dictionary}
                                />
                            }
                        </div>
                    }
                  </>
            }

        </main>
    );
}

export default App;
