import React, {useEffect, useRef, useState} from 'react';
import Washington from "../components/Washington.jsx";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Separator from "../components/Separator.jsx";
gsap.registerPlugin(ScrollTrigger);
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
    function easing(n, x) {
        var r = Math.pow(n, x) / n + (1 / n) * (x - 1) ;
        r -= 0.01;
        if (r < 0) {
            r = 0
        }
        return r;
    }
    const ref = useRef(null);
    useEffect(() => {
        const lines = ref.current.getElementsByTagName('h1');
        Array.from(lines).forEach(line => {
            gsap.from(line, {
                opacity: 0,
                y: '+=100',
                duration: .4,
                lazy: false,
                scrollTrigger: {
                    trigger: line,
                    start: 'center 80%',
                    end: "bottom 40%",
                    toggleActions: "play reverse play reverse",
                    // markers: true
                },
            });
        });
    }, []);
    const [svgPaths, setSvgPaths] = useState([]);
    const percentageHeader = () => {
        if (maxPercent == -1.0) {
            return <h1 className={"text-5xl"}></h1>;
        } else if (maxPercent != "") {
            return <h1 className={"text-5xl"}>{maxPercent}%</h1>;
        } else {
            return <h1 className={"text-5xl"}>No Data</h1>;
        }
    }
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
                const color = `rgba(0, 255, 0, ${maxPercent / 50})`; // Change this to your preferred color scale function
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
                    <h1 className={"text-4xl font-bold text-center blackHeader"}>Mental Health in the Youth of
                        Washington</h1>
                    <h2 className={"text-2xl text-center mt-5 blackHeader px-10"}>Mental health has been a continuous
                        problem
                        for
                        teenagers all around our state </h2>
                    <p className={"text-xl text-center mt-5 blackHeader px-10"}>Inesh Dey and Iris Dey</p>
                </div>
                <a href="#problem" className={"mx-auto text-center flex flex-col content-center items-center text-white"}>
                    <div
                        className={"absolute bottom-1 mx-auto pb-10 text-center flex flex-col content-center items-center"}>
                        <h2 className={"text-white font-bold text-xl blackHeader"}>Scroll Down</h2>
                        <img className={"h-[3rem]"} src="/circle-arrow-down-svgrepo-com.svg" alt=""/>
                    </div>
                </a>
            </div>
            <Separator/>
            <div id="problem" className={"w-screen min-h-screen bg-black lg:p-20 p-7 lg:px-[20%]"} ref={ref}>
                <h2 className={"text-6xl font-bold mb-[20vh] pt-[5rem]"}>THE PROBLEM<p className={"text-xl"}><span className={"text-green-400"}>Interactive.</span> Keep scrolling to
                    reveal more text.</p></h2>
                <h1 className={"text-4xl  text-center font-bold mb-[50vh]"}>According to Mental Health
                    America;
                    Washington is the 10th <span className={"text-green-400"}>lowest</span> state in terms of mental wellness, with a higher prevalence of mental
                    illness
                    and lower rates of access to care </h1>
                <h1 className={"text-4xl  text-center font-bold mb-[50vh]"}>Overall Washington is the 18th <span
                    className={"text-green-400"}>worst</span> state
                    in terms of access to mental healthcare</h1>
                <h1 className={"text-4xl  text-center font-bold mb-[50vh]"}>and...</h1>
                <h1 className={"text-4xl  text-center font-bold mb-[50vh]"}>According to UW Medicine, <span className={"text-green-400"}>25%
                    of
                    Washington residents </span>
                    don’t have access to mental health care services </h1>
                <h1 className={"text-4xl  text-center font-bold mb-[50vh]"}>Washington is one of the lowest ranking
                    nations in terms of mental health care access
                    in the nation,
                    nearly <span className={"text-green-400"}>half</span> of all Washington counties do not have a
                    single working psychiatrist.</h1>
                <h1 className={"text-4xl text-center font-bold mb-[50vh]"}><span className={"text-green-400"}>It’s
                    important to share your
                    emotions,</span>
                    <br/>and talk to a trusted adult
                </h1>
                <h1 className={"text-4xl text-center font-bold mb-[50vh]"}>Mental health is not a <span className={"text-green-400"}>joke.</span>
                </h1>
                <h1 className={"text-4xl text-center font-bold mb-[50vh]"}>Here are some statistics...</h1>
            </div>
            <Separator/>
            <div id="stats" className={"w-[100vw] bg-black lg:p-20 p-7 text-white font-bold"}>
                <h1 className={"text-6xl text-right font-bold lg:pb-[6rem] pb-10"}>THE STATS</h1>
                <h1 className={"text-4xl text-center font-bold pb-2"}>Teenagers who have considered
                    attempting suicide in the past 12 months</h1>
                <p className={"text-center text-2xl lg:pb-0 pb-10"}>Click on a county to see its percentage.</p>
                <div className={"flex lg:flex-row flex-col h-full items-stretch"}>
                    <div className={"lg:py-10 lg:pr-10 h-200px px-0 sm:px-[15%] lg:p-0 w-full my-auto"}>
                        <Washington onPathClick={handlePathClick}/>
                    </div>
                    <div className={"p-20 pl-0 w-[60%]"}>
                        <div className={"my-auto py-auto"}>
                            <h1 className={"text-5xl pb-5"} id={"County"}>{countyId} County</h1>
                            {percentageHeader()}</div>
                    </div>
                </div>
            </div>
            <Separator/>
            <div className={"w-[100vw] bg-black lg:p-20 p-7  text-white font-bold"}>
                <h1 className={"text-6xl font-bold pb-10"}>More Statistics</h1>
                <p className={"pb-20"}>This data was acquired from the last official Washington State Health Assessment in 2018</p>
                <img className={"w-[100%] lg:px-[10%] p-5"} src="/overalldata.svg" alt=""/>
            </div>
            <Separator/>
            <div id="wsdh" className={"w-[100vw] bg-black lg:p-[20rem] py-20 p-7  text-white font-bold "}>
                <h1 className={"text-6xl font-bold pb-10"}>How is the WSDH (Washington State Department of Health) helping?</h1>
                <p className={"text-xl"}>The Washington State Department of Health has noticed the problem of poor mental health in Washington</p>
                <br/>
                <br/>
                <h1>THE PROBLEM</h1>
                <br/>
                <p>“Since 1957 psychologists in Washington State have been licensed and regulated by the state under Chapter 18.83 RCW. Psychologists play a critical role in the delivery of mental health services in Washington State. However, their current scope of practice does not include the authority to prescribe medications for the treatment and management of mental disorders. Adding prescriptive authority to the scope of practice for those eligible psychologists in this state who have successfully completed additional education and training in clinical psychopharmacology will create much needed capacity in a significantly overburdened mental health and primary care system, while ensuring the health and safety of the public.” </p>
                <br/><br/>
                <h1>SO WHAT?</h1>
                <br/>
                <p>“Washington State is ranked 45th in the United States on measures of mental illness prevalence and access to car (Mental Health America, 2020). Research reviewed by the Center for Disease Control (CDC) suggests that half of all adults in the United States will experience one or more episodes of a mental disorder in their lifetimes (Kessler et al., 2007). Approximately 1 in 5 children will experience a seriously debilitating mental illness (Merikangas et al, 2010). Untreated mental disorders not only negatively impact individuals and their family’s lives, but also adds significantly to the economic burden of our society. The World Health Organization (WHO) estimates that 14% of the global economic burden of disease is attributed to mental disorders, but most people affected do not receive treatment (WHO, 2019).” </p>

            </div>
            <Separator/>
            <div id="support" className={"w-[100vw] bg-black lg:p-[20rem] py-20 p-7 text-white font-bold"}>
                <h1 className={"text-6xl font-bold pb-10"}>Where can I find support?</h1>
                <p>With the stress of overall stress of youth, it's hard to speak especially with the lack of psychiatrist in our state the best way to communicate is online. Here are some ways you can contact people that can help:<br /> <br /> These are what the Washington State Department of Health recommends...<br /> <br /> If you're in a Mental Health Crisis:</p>
                <ul>
                    <li><a href="https://www.crisistextline.org/">Crisis Text Line</a> provides confidential text access from anywhere in the U.S. to a trained crisis counselor. Text HOME to 741741 (24/7/365)</li>
                    <li><a href="https://www.crisisconnections.org/">Crisis Connections</a> is a 24-hour crisis line that connects people in physical, emotional and financial crisis to services. Call 866-4-CRISIS (<a href="tel:+18664274747">866-427-4747</a>)</li>
                    <li><a href="https://www.teenlink.org/">Teen Link</a>: call or text 866-833-6546</li>
                    <li>National <a href="https://www.samhsa.gov/find-help/disaster-distress-helpline">Disaster Distress Helpline</a>: 800-985-5990 or text &ldquo;TalkWithUs&rdquo; to 66746.</li>
                    <li>Remember its always OK to ask for help (SAMHSA): <a href="https://www.samhsa.gov/young-adults">https://www.samhsa.gov/young-adults</a></li>
                </ul>
                <p>What if you&rsquo;re a parent trying to help your kids?</p>
                <ul>
                    <li>Behavioral Health Toolkit: Help ways to help your kids cope.</li>
                    <li><a href="https://www.cstsonline.org/assets/media/documents/CSTS_FS_Finding_Right_Words_Talk_Children_Teens_Coronavirus.pdf">Finding the Right Words to Talk with Children and Teens</a></li>
                </ul>
                <p>How can you help someone in need of Mental Health support?</p>
                <ul>
                    <li>How to help a friend (NAMI) <a href="https://www.nami.org/Your-Journey/Kids-Teens-and-Young-Adults">https://www.nami.org/Your-Journey/Kids-Teens-and-Young-Adults</a></li>
                </ul>
                <p>Learn more: <a href="https://doh.wa.gov/emergencies/covid-19/mental-and-emotional-well-being">https://doh.wa.gov/emergencies/covid-19/mental-and-emotional-well-being</a> <br /> </p>
            </div>
            <Separator/>
            <div className={"w-[100vw] h-[100vh] bg-black flex flex-col align-center items-center"}>
                <div className={"my-auto"}>
                    <h1 className={"text-4xl font-bold text-center blackHeader"}>Want to donate?</h1>
                    <h2 className={"text-2xl text-center mt-5 blackHeader px-10"}><a href="https://give.uwmedicine.org/give/?source=HCPSYD&appeal=MWEIS">Help the UW Behavioral Health Institute</a></h2>
                </div>
            </div>
            <Separator/>
            <div id="about" className={"w-[100vw] h-screen bg-black lg:p-[20rem] py-20 p-7  text-white font-bold "}>
                <h1 className={"text-6xl font-bold pb-10"}>About</h1>
                <h1><a href="https://github.com/somebody4545/wtn-project">Github Repository</a></h1>
                <h1><a
                    href="/paper.pdf">Project Paper</a></h1>
                <h1><a
                    href="https://doh.wa.gov/data-and-statistical-reports/washington-tracking-network-wtn/youth-science-contest">WTN
                    Youth Science Contest</a></h1>
            </div>

        </>
    );

};

export default Home;