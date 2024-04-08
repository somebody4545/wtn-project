import React, {useEffect, useState} from 'react';
import Washington from "../components/Washington.jsx";

const Home = () => {
    const [countyId, setCountyId] = useState('Select a');
    const [maxPercent, setMaxPercent] = useState(-1.0);

    var data = [
        {
            "Geography": "Skamania",
            "Indicator": "Considered attempting suicide (past 12 months)",
            "Suppression": "**",
            "Year": 2021,
            "Latitude (generated)": 45.9743,
            "Longitude (generated)": -121.9292,
            "Max. Percent LCL": "",
            "Max. Percent UCL": "",
            "Max. Percent": "",
            "Max. StatePercent": 19.63
        },
        {
            "Geography": "Pend Oreille",
            "Indicator": "Considered attempting suicide (past 12 months)",
            "Suppression": "**",
            "Year": 2021,
            "Latitude (generated)": 48.5392,
            "Longitude (generated)": -117.2681,
            "Max. Percent LCL": "",
            "Max. Percent UCL": "",
            "Max. Percent": "",
            "Max. StatePercent": 19.63
        },
        {
            "Geography": "Garfield",
            "Indicator": "Considered attempting suicide (past 12 months)",
            "Suppression": "**",
            "Year": 2021,
            "Latitude (generated)": 46.3542,
            "Longitude (generated)": -117.5476,
            "Max. Percent LCL": "",
            "Max. Percent UCL": "",
            "Max. Percent": "",
            "Max. StatePercent": 19.63
        },
        {
            "Geography": "Franklin",
            "Indicator": "Considered attempting suicide (past 12 months)",
            "Suppression": "**",
            "Year": 2021,
            "Latitude (generated)": 46.4669,
            "Longitude (generated)": -118.9422,
            "Max. Percent LCL": "",
            "Max. Percent UCL": "",
            "Max. Percent": "",
            "Max. StatePercent": 19.63
        },
        {
            "Geography": "Ferry",
            "Indicator": "Considered attempting suicide (past 12 months)",
            "Suppression": "**",
            "Year": 2021,
            "Latitude (generated)": 48.4175,
            "Longitude (generated)": -118.5235,
            "Max. Percent LCL": "",
            "Max. Percent UCL": "",
            "Max. Percent": "",
            "Max. StatePercent": 19.63
        },
        {
            "Geography": "Asotin",
            "Indicator": "Considered attempting suicide (past 12 months)",
            "Suppression": "**",
            "Year": 2021,
            "Latitude (generated)": 46.2299,
            "Longitude (generated)": -117.1874,
            "Max. Percent LCL": "",
            "Max. Percent UCL": "",
            "Max. Percent": "",
            "Max. StatePercent": 19.63
        },
        {
            "Geography": "Yakima",
            "Indicator": "Considered attempting suicide (past 12 months)",
            "Suppression": "",
            "Year": 2021,
            "Latitude (generated)": 46.5669,
            "Longitude (generated)": -120.6488,
            "Max. Percent LCL": 14.02,
            "Max. Percent UCL": 16.83,
            "Max. Percent": 15.42,
            "Max. StatePercent": 19.63
        },
        {
            "Geography": "Whitman",
            "Indicator": "Considered attempting suicide (past 12 months)",
            "Suppression": "",
            "Year": 2021,
            "Latitude (generated)": 46.8409,
            "Longitude (generated)": -117.522,
            "Max. Percent LCL": 18.26,
            "Max. Percent UCL": 29.86,
            "Max. Percent": 24.06,
            "Max. StatePercent": 19.63
        },
        {
            "Geography": "Whatcom",
            "Indicator": "Considered attempting suicide (past 12 months)",
            "Suppression": "",
            "Year": 2021,
            "Latitude (generated)": 48.8219,
            "Longitude (generated)": -121.7266,
            "Max. Percent LCL": 18.39,
            "Max. Percent UCL": 22.72,
            "Max. Percent": 20.55,
            "Max. StatePercent": 19.63
        },
        {
            "Geography": "Walla Walla",
            "Indicator": "Considered attempting suicide (past 12 months)",
            "Suppression": "",
            "Year": 2021,
            "Latitude (generated)": 46.3041,
            "Longitude (generated)": -118.5042,
            "Max. Percent LCL": 17.36,
            "Max. Percent UCL": 26.65,
            "Max. Percent": 22.01,
            "Max. StatePercent": 19.63
        },
        {
            "Geography": "Wahkiakum",
            "Indicator": "Considered attempting suicide (past 12 months)",
            "Suppression": "",
            "Year": 2021,
            "Latitude (generated)": 46.2684,
            "Longitude (generated)": -123.3392,
            "Max. Percent LCL": 23.32,
            "Max. Percent UCL": 62.4,
            "Max. Percent": 42.86,
            "Max. StatePercent": 19.63
        },
        {
            "Geography": "Thurston",
            "Indicator": "Considered attempting suicide (past 12 months)",
            "Suppression": "",
            "Year": 2021,
            "Latitude (generated)": 46.9724,
            "Longitude (generated)": -122.8948,
            "Max. Percent LCL": 20.49,
            "Max. Percent UCL": 24.38,
            "Max. Percent": 22.44,
            "Max. StatePercent": 19.63
        },
        {
            "Geography": "Stevens",
            "Indicator": "Considered attempting suicide (past 12 months)",
            "Suppression": "",
            "Year": 2021,
            "Latitude (generated)": 48.3997,
            "Longitude (generated)": -117.8489,
            "Max. Percent LCL": "",
            "Max. Percent UCL": "",
            "Max. Percent": "",
            "Max. StatePercent": 19.63
        },
        {
            "Geography": "Spokane",
            "Indicator": "Considered attempting suicide (past 12 months)",
            "Suppression": "",
            "Year": 2021,
            "Latitude (generated)": 47.6423,
            "Longitude (generated)": -117.4305,
            "Max. Percent LCL": 20.16,
            "Max. Percent UCL": 23.53,
            "Max. Percent": 21.85,
            "Max. StatePercent": 19.63
        },
        {
            "Geography": "Snohomish",
            "Indicator": "Considered attempting suicide (past 12 months)",
            "Suppression": "",
            "Year": 2021,
            "Latitude (generated)": 48.0379,
            "Longitude (generated)": -121.682,
            "Max. Percent LCL": 19.89,
            "Max. Percent UCL": 22.36,
            "Max. Percent": 21.12,
            "Max. StatePercent": 19.63
        },
        {
            "Geography": "Skagit",
            "Indicator": "Considered attempting suicide (past 12 months)",
            "Suppression": "",
            "Year": 2021,
            "Latitude (generated)": 48.4771,
            "Longitude (generated)": -121.7638,
            "Max. Percent LCL": 19.65,
            "Max. Percent UCL": 25.11,
            "Max. Percent": 22.38,
            "Max. StatePercent": 19.63
        },
        {
            "Geography": "San Juan",
            "Indicator": "Considered attempting suicide (past 12 months)",
            "Suppression": "",
            "Year": 2021,
            "Latitude (generated)": 48.6522,
            "Longitude (generated)": -122.8183,
            "Max. Percent LCL": 14.52,
            "Max. Percent UCL": 31.8,
            "Max. Percent": 23.16,
            "Max. StatePercent": 19.63
        },
        {
            "Geography": "Pierce",
            "Indicator": "Considered attempting suicide (past 12 months)",
            "Suppression": "",
            "Year": 2021,
            "Latitude (generated)": 47.0256,
            "Longitude (generated)": -122.0375,
            "Max. Percent LCL": 21.26,
            "Max. Percent UCL": 24.67,
            "Max. Percent": 22.96,
            "Max. StatePercent": 19.63
        },
        {
            "Geography": "Pacific",
            "Indicator": "Considered attempting suicide (past 12 months)",
            "Suppression": "",
            "Year": 2021,
            "Latitude (generated)": 46.5179,
            "Longitude (generated)": -123.6271,
            "Max. Percent LCL": 19.45,
            "Max. Percent UCL": 36.41,
            "Max. Percent": 27.93,
            "Max. StatePercent": 19.63
        },
        {
            "Geography": "Okanogan",
            "Indicator": "Considered attempting suicide (past 12 months)",
            "Suppression": "",
            "Year": 2021,
            "Latitude (generated)": 48.4732,
            "Longitude (generated)": -119.7409,
            "Max. Percent LCL": 17.93,
            "Max. Percent UCL": 28.47,
            "Max. Percent": 23.2,
            "Max. StatePercent": 19.63
        },
        {
            "Geography": "Mason",
            "Indicator": "Considered attempting suicide (past 12 months)",
            "Suppression": "",
            "Year": 2021,
            "Latitude (generated)": 47.3456,
            "Longitude (generated)": -123.3253,
            "Max. Percent LCL": 19.16,
            "Max. Percent UCL": 29.53,
            "Max. Percent": 24.34,
            "Max. StatePercent": 19.63
        },
        {
            "Geography": "Lincoln",
            "Indicator": "Considered attempting suicide (past 12 months)",
            "Suppression": "",
            "Year": 2021,
            "Latitude (generated)": 47.6123,
            "Longitude (generated)": -118.3998,
            "Max. Percent LCL": 17.14,
            "Max. Percent UCL": 32.86,
            "Max. Percent": 25,
            "Max. StatePercent": 19.63
        },
        {
            "Geography": "Lewis",
            "Indicator": "Considered attempting suicide (past 12 months)",
            "Suppression": "",
            "Year": 2021,
            "Latitude (generated)": 46.5892,
            "Longitude (generated)": -122.3843,
            "Max. Percent LCL": 18.7,
            "Max. Percent UCL": 26.49,
            "Max. Percent": 22.6,
            "Max. StatePercent": 19.63
        },
        {
            "Geography": "Klickitat",
            "Indicator": "Considered attempting suicide (past 12 months)",
            "Suppression": "",
            "Year": 2021,
            "Latitude (generated)": 45.8257,
            "Longitude (generated)": -120.7766,
            "Max. Percent LCL": 17.33,
            "Max. Percent UCL": 31.32,
            "Max. Percent": 24.32,
            "Max. StatePercent": 19.63
        },
        {
            "Geography": "Kittitas",
            "Indicator": "Considered attempting suicide (past 12 months)",
            "Suppression": "",
            "Year": 2021,
            "Latitude (generated)": 47.1679,
            "Longitude (generated)": -120.6629,
            "Max. Percent LCL": 18.34,
            "Max. Percent UCL": 30.62,
            "Max. Percent": 24.48,
            "Max. StatePercent": 19.63
        },
        {
            "Geography": "Kitsap",
            "Indicator": "Considered attempting suicide (past 12 months)",
            "Suppression": "",
            "Year": 2021,
            "Latitude (generated)": 47.6727,
            "Longitude (generated)": -122.6826,
            "Max. Percent LCL": 19.53,
            "Max. Percent UCL": 23.67,
            "Max. Percent": 21.6,
            "Max. StatePercent": 19.63
        },
        {
            "Geography": "King",
            "Indicator": "Considered attempting suicide (past 12 months)",
            "Suppression": "",
            "Year": 2021,
            "Latitude (generated)": 47.4335,
            "Longitude (generated)": -121.8726,
            "Max. Percent LCL": 17.93,
            "Max. Percent UCL": 20.53,
            "Max. Percent": 19.23,
            "Max. StatePercent": 19.63
        },
        {
            "Geography": "Jefferson",
            "Indicator": "Considered attempting suicide (past 12 months)",
            "Suppression": "",
            "Year": 2021,
            "Latitude (generated)": 47.8319,
            "Longitude (generated)": -123.6728,
            "Max. Percent LCL": 13.34,
            "Max. Percent UCL": 27.98,
            "Max. Percent": 20.66,
            "Max. StatePercent": 19.63
        },
        {
            "Geography": "Island",
            "Indicator": "Considered attempting suicide (past 12 months)",
            "Suppression": "",
            "Year": 2021,
            "Latitude (generated)": 48.1587,
            "Longitude (generated)": -122.5982,
            "Max. Percent LCL": 20.57,
            "Max. Percent UCL": 28.54,
            "Max. Percent": 24.56,
            "Max. StatePercent": 19.63
        },
        {
            "Geography": "Grays Harbor",
            "Indicator": "Considered attempting suicide (past 12 months)",
            "Suppression": "",
            "Year": 2021,
            "Latitude (generated)": 47.1649,
            "Longitude (generated)": -123.8418,
            "Max. Percent LCL": 17.57,
            "Max. Percent UCL": 24.75,
            "Max. Percent": 21.16,
            "Max. StatePercent": 19.63
        },
        {
            "Geography": "Grant",
            "Indicator": "Considered attempting suicide (past 12 months)",
            "Suppression": "",
            "Year": 2021,
            "Latitude (generated)": 47.284,
            "Longitude (generated)": -119.492,
            "Max. Percent LCL": 14.97,
            "Max. Percent UCL": 19.58,
            "Max. Percent": 17.28,
            "Max. StatePercent": 19.63
        },
        {
            "Geography": "Douglas",
            "Indicator": "Considered attempting suicide (past 12 months)",
            "Suppression": "",
            "Year": 2021,
            "Latitude (generated)": 47.6869,
            "Longitude (generated)": -119.7491,
            "Max. Percent LCL": 18.06,
            "Max. Percent UCL": 26.44,
            "Max. Percent": 22.25,
            "Max. StatePercent": 19.63
        },
        {
            "Geography": "Cowlitz",
            "Indicator": "Considered attempting suicide (past 12 months)",
            "Suppression": "",
            "Year": 2021,
            "Latitude (generated)": 46.1148,
            "Longitude (generated)": -122.6116,
            "Max. Percent LCL": 17.06,
            "Max. Percent UCL": 23.32,
            "Max. Percent": 20.19,
            "Max. StatePercent": 19.63
        },
        {
            "Geography": "Columbia",
            "Indicator": "Considered attempting suicide (past 12 months)",
            "Suppression": "",
            "Year": 2021,
            "Latitude (generated)": 46.3041,
            "Longitude (generated)": -117.9269,
            "Max. Percent LCL": 20.4,
            "Max. Percent UCL": 62.93,
            "Max. Percent": 41.67,
            "Max. StatePercent": 19.63
        },
        {
            "Geography": "Clark",
            "Indicator": "Considered attempting suicide (past 12 months)",
            "Suppression": "",
            "Year": 2021,
            "Latitude (generated)": 45.8042,
            "Longitude (generated)": -122.52,
            "Max. Percent LCL": 20.29,
            "Max. Percent UCL": 22.88,
            "Max. Percent": 21.58,
            "Max. StatePercent": 19.63
        },
        {
            "Geography": "Clallam",
            "Indicator": "Considered attempting suicide (past 12 months)",
            "Suppression": "",
            "Year": 2021,
            "Latitude (generated)": 48.13,
            "Longitude (generated)": -124.0838,
            "Max. Percent LCL": 23.21,
            "Max. Percent UCL": 32.7,
            "Max. Percent": 27.95,
            "Max. StatePercent": 19.63
        },
        {
            "Geography": "Chelan",
            "Indicator": "Considered attempting suicide (past 12 months)",
            "Suppression": "",
            "Year": 2021,
            "Latitude (generated)": 47.9098,
            "Longitude (generated)": -120.5391,
            "Max. Percent LCL": 13.83,
            "Max. Percent UCL": 21.34,
            "Max. Percent": 17.59,
            "Max. StatePercent": 19.63
        },
        {
            "Geography": "Benton",
            "Indicator": "Considered attempting suicide (past 12 months)",
            "Suppression": "",
            "Year": 2021,
            "Latitude (generated)": 46.2826,
            "Longitude (generated)": -119.5709,
            "Max. Percent LCL": 18.15,
            "Max. Percent UCL": 21.79,
            "Max. Percent": 19.97,
            "Max. StatePercent": 19.63
        },
        {
            "Geography": "Adams",
            "Indicator": "Considered attempting suicide (past 12 months)",
            "Suppression": "",
            "Year": 2021,
            "Latitude (generated)": 46.9968,
            "Longitude (generated)": -118.4708,
            "Max. Percent LCL": 10.79,
            "Max. Percent UCL": 19.07,
            "Max. Percent": 14.93,
            "Max. StatePercent": 19.63
        },
        {
            "Geography": "* WA State Total",
            "Indicator": "Considered attempting suicide (past 12 months)",
            "Suppression": "",
            "Year": 2021,
            "Latitude (generated)": "",
            "Longitude (generated)": "",
            "Max. Percent LCL": 18.2,
            "Max. Percent UCL": 21,
            "Max. Percent": 19.6,
            "Max. StatePercent": ""
        }
    ]

    const handlePathClick = (pathId) => {
        setCountyId(pathId); // Update the state variable when a path is clicked
    };

    const [svgPaths, setSvgPaths] = useState([]);

    useEffect(() => {
        const paths = data.map(item => {
            const path = document.getElementById(item.Geography);
            const maxPercent = item["Max. Percent"];
            return { path, maxPercent };
        });
        setSvgPaths(paths);
    }, []);

    useEffect(() => {
        svgPaths.forEach(({ path, maxPercent }) => {
            if (path) {
                const color = `rgba(255, 0, 0, ${maxPercent / 100})`; // Change this to your preferred color scale function
                path.setAttribute('fill', color);
            }
        });
    }, [svgPaths]);


    useEffect(() => {
        const placeData = data.find(item => item.Geography === countyId);
        if (placeData) {
            const mP = placeData["Max. Percent"];
            // console.log(mP); // logs the max percent of the found place
            setMaxPercent(mP);
        } else {
            setMaxPercent(-1.0);
        }
    }, [countyId]);
    return (<>
            <div className={"w-[100vw] h-[100vh] bg-black flex flex-col align-center items-center"}>
                <div className={"my-auto"}>
                    <h1 className={"text-4xl font-bold text-center blackHeader"}>You're not alone</h1>
                    <h2 className={"text-2xl text-center mt-5 blackHeader px-10"}>Mental health has been a continuous problem for
                        teenagers all around Washington </h2>
                </div>
                <div className={"absolute bottom-1 mx-auto p-10 text-center flex flex-col align-center items-center"}>
                    <h2 className={"font-bold text-xl blackHeader"}>Scroll Down</h2>
                    <img className={"h-[3rem]"} src="/circle-arrow-down-svgrepo-com.svg" alt=""/>
                </div>
            </div>
            <div id="stats" className={"w-[100vw] h-[90vw-] bg-[var(--periwinkle)] lg:p-20 p-7 text-black font-bold"}>
                <h1 className={"text-6xl text-black text-right font-bold lg:p-0 pb-10"}>THE STATS</h1>
                <div className={"flex lg:flex-row flex-col h-full"}>
                    <div className={"lg:py-10 lg:pr-10 h-200px w-full my-auto"}>
                        <Washington onPathClick={handlePathClick}/>
                    </div>
                    <div className={"h-full p-20 pl-0 w-[100%]"}>
                        <h1 className={"text-5xl pb-5"} id={"County"}>{countyId} County</h1>
                        {maxPercent == -1.0 ? (
                                <h1 className={"text-5xl"}></h1>
                            ) :
                            (
                                <h1 className={"text-5xl"}>{maxPercent}%</h1>
                            )
                        }
                    </div>
                </div>
            </div>
            <div className={"w-screen h-screen bg-amber-300"}>

            </div>

        </>
    );
};

export default Home;