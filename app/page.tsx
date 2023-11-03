"use client";
import {
    Button,
    ButtonGroup,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Chip,
    ThemeProvider,
    Typography
} from "@material-tailwind/react";
import {CurrencyDollarIcon} from "@heroicons/react/20/solid";
import {useState} from "react";
import appleImg from "../public/apple.png"
import droneImg from "../public/drone.png"
import strangeImg from "../public/strange.png"
import suspiciousImg from "../public/suspicious.png"
import tornadoImg from "../public/tornado.png"

import Image from "next/image";
import {useMediaQuery} from "react-responsive";
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from "react-confetti";


// @ts-ignore
function ChoicePage({pageData, setPage, coins, setCoins, setIsExploding}) {
    const verySmall = useMediaQuery({ query: "(max-width: 350px)" });

    const handleExploding = () => {
        setIsExploding(true);
        setTimeout(() => setIsExploding(false), 2000);
    }

    return (
        <>
            <Card className={"max-w-5xl" }>
                <CardHeader
                    variant="gradient"
                    color={pageData.color || "gray"}
                    className="mb-4 grid h-28 place-items-center"
                >
                    <Typography variant="h1" className={"text-center p-2 sm:text-4xl lg:text-5xl " + (verySmall ? "text-2xl" : "text-3xl")}>Choose Your Own Agri-Venture</Typography>
                </CardHeader>
                <CardBody>
                    <div className="flex gap-5">
                        <div className="flex flex-col gap-5">
                            <div>
                                <Typography variant="h3" className="text-2xl sm:text-3xl flex items-center gap-2">
                                    {pageData.title}
                                    <Chip color={coins >= 5 ? "green" : coins == 4 ? "light-green" : coins == 3 ? "yellow" : coins == 2 ? "amber" : coins == 1 ? "orange" : "red"} value={coins} icon={<CurrencyDollarIcon />} />
                                </Typography>
                                {/*<Chip className="max-w-fit inline-block" value={coins} icon={<CurrencyDollarIcon />} />*/}
                                <Typography>{pageData.description}</Typography>
                                {pageData.prompt && <Typography variant="h6" className="pt-2">{pageData.prompt}</Typography>}
                            </div>
                            <div className="relative sm:hidden">
                                <Image src={appleImg}      alt="card-image" className={"rounded-lg shadow-xl shadow-blue-gray-900/50 " + (pageData.image == "apple"      ? "" : "hidden")} placeholder="blur" />
                                <Image src={droneImg}      alt="card-image" className={"rounded-lg shadow-xl shadow-blue-gray-900/50 " + (pageData.image == "drone"      ? "" : "hidden")} placeholder="blur" />
                                <Image src={strangeImg}    alt="card-image" className={"rounded-lg shadow-xl shadow-blue-gray-900/50 " + (pageData.image == "strange"    ? "" : "hidden")} placeholder="blur" />
                                <Image src={suspiciousImg} alt="card-image" className={"rounded-lg shadow-xl shadow-blue-gray-900/50 " + (pageData.image == "suspicious" ? "" : "hidden")} placeholder="blur" />
                                <Image src={tornadoImg}    alt="card-image" className={"rounded-lg shadow-xl shadow-blue-gray-900/50 " + (pageData.image == "tornado"    ? "" : "hidden")} placeholder="blur" />
                            </div>
                        </div>
                        <div className="relative hidden sm:inline-block">
                            <Image src={appleImg}      alt="card-image" className={"rounded-lg shadow-xl shadow-blue-gray-900/50 " + (pageData.image == "apple"      ? "" : "hidden")} placeholder="blur" />
                            <Image src={droneImg}      alt="card-image" className={"rounded-lg shadow-xl shadow-blue-gray-900/50 " + (pageData.image == "drone"      ? "" : "hidden")} placeholder="blur" />
                            <Image src={strangeImg}    alt="card-image" className={"rounded-lg shadow-xl shadow-blue-gray-900/50 " + (pageData.image == "strange"    ? "" : "hidden")} placeholder="blur" />
                            <Image src={suspiciousImg} alt="card-image" className={"rounded-lg shadow-xl shadow-blue-gray-900/50 " + (pageData.image == "suspicious" ? "" : "hidden")} placeholder="blur" />
                            <Image src={tornadoImg}    alt="card-image" className={"rounded-lg shadow-xl shadow-blue-gray-900/50 " + (pageData.image == "tornado"    ? "" : "hidden")} placeholder="blur" />
                        </div>
                    </div>
                </CardBody>
                <CardFooter>
                    <ButtonGroup>
                        {(pageData.choices || [{
                            id: 0,
                            title: "Retry",
                            cost: 0
                        }]).map(
                            //@ts-ignore
                            (choice) =>
                            <Button key={choice.id} className="flex-grow" onClick={() => {
                                setPage(choice.id);
                                switch (choice.id) {
                                    case 0:
                                        setCoins(5);
                                        break;
                                    case 17:
                                        break;
                                    case 10:
                                        handleExploding();
                                    default:
                                        setCoins(coins-choice.cost);
                                }
                            }} disabled={choice.cost > coins}>
                                {choice.title} {(choice.cost || 0) != 0 && ("(Cost: " + choice.cost + ")")}
                            </Button>
                        )}
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </>
    )
}
const pages = {
    0: {
        title: "Year 1",
        description: "Many farmers around your area are switching to automatic farming, you hear that it produces less waste, but you also hear that it was hard to learn.",
        prompt: "Do you go automatic?",
        image: "drone",
        choices: [
            {
                id: 1,
                title: "Yes",
                cost: 2,
            },
            {
                id: 2,
                title: "No",
                cost: 0,
            },
        ]
    },
    1: {
        title: "Year 2",
        description: "You decide to buy an automatic apple picking drone, it provides data about each apple, but you are confused on how to make it pick green apples. That man was right, the learning curve was tough, but was the price too high?",
        prompt: "Do you sell the picker?",
        image: "drone",
        choices: [
            {
                id: 3,
                title: "Yes",
                cost: -2
            },
            {
                id: 4,
                title: "No",
                cost: 0
            },
        ]
    },
    2: {
        title: "Year 2",
        description: "You stand with your craft of farming by hand, you hope that you've made the right choice. You proceed on as usual, but you cant help but think the drone would help.",
        prompt: "Do you buy it?",
        image: "drone",
        choices: [
            {
                id: 15,
                title: "Yes",
                cost: 2
            },
            {
                id: 16,
                title: "No",
                cost: 0
            }
        ]
    },
    3: {
        title: "Year 3",
        description: "You decide to sell the picker, you go out to your field and start picking them by hand. The wind picks up, and after a while the sirens began to sound. You take shelter, after the storm has passed, you come out to your ruined field, you think that you can buy an automatic plower to fix it.",
        prompt: "Buy an automatic plower?",
        image: "tornado",
        choices: [
            {
                id: 5,
                title: "Yes",
                cost: 2,
            },
            {
                id: 6,
                title: "No",
                cost: 0,
            }
        ]
    },
    4: {
        title: "Year 3",
        description: "You eventually learn the system and things are looking up, just then, a tornado comes around, you scramble to pilot the drones to the shed but the wind speed is too high. After the storm is passed you find that all of your drones have broke beyond repair and you will have to buy new ones, but will it profit you?",
        prompt: "Replace the drones?",
        image: "drone",
        choices: [
            {
                id: 13,
                title: "Yes",
                cost: 2,
            },
            {
                id: 14,
                title: "No",
                cost: 0,
            }
        ]
    },
    5: {
        title: "Year 4",
        description: "You buy the plower and you fix your field, you start anew and begin to pick by hand again. Things are looking up, your fields are producing apples more than ever but theres a problem, many apples are rotten, how could've you predicted this?",
        prompt: "Do you buy a crop monitor?",
        image: "apple",
        choices: [
            {
                id: 7,
                title: "Yes",
                cost: 1,
            },
            {
                id: 8,
                title: "No",
                cost: 0,
            }
        ]
    },
    6: {
        title: "You Lose!",
        color: "red",
        description: "The field was worse than you thought, there is no way you can do this by hand by the time winter comes.",
    },
    7: {
        title: "Year 5",
        description: "You buy the monitor and identify the problem, little bugs gnawing at your apples, you spray pesticide and the problem is gone. The next day, a man walks up to your door, he asks if he can help in any way. You tell him that you need something to replace the torn up farmland, he offers a automatic field plower.",
        prompt: "Do you take it?",
        image: "suspicious",
        choices: [
            {
                id: 9,
                title: "Yes",
                cost: 3,
            },
            {
                id: 10,
                title: "No",
                cost: 0,
            }
        ]
    },
    8: {
        title: "Year 6",
        description: "The rotting apples only get worse and eventually all of your apples are rotting and moldy and you have no clue why. The next day you hear a knock at the door, you open it to see an old man offering you an automatic apple picking drone.",
        prompt: "Do you take it?",
        image: "strange",
        choices: [
            {
                id: 11,
                title: "Yes",
                cost: 3,
            },
            {
                id: 12,
                title: "No",
                cost: 0,
            }
        ],
    },
    9: {
        title: "You Lose!",
        color: "red",
        description: "He takes your money and promises you the plower in a week, but he never showed up.",
    },
    10: {
        title: "You Win!",
        color: "green",
        description: "Wow! You dodged a bullet, a little while after you see the man offered that plower on the news as a scam, you were lucky! You decide to buy a plower yourself.",
    },
    11: {
        title: "You Lose!",
        color: "red",
        description: "The man grins and asks for the money, then walks off promising you the drone in the next week, but he never came back.",
    },
    12: {
        title: "You Lose!",
        color: "red",
        description: "The man looks confused, he cocks his head and says \"Wrong choice partner\" and shoots you in the stomach",
    },
    13: {
        title: "Year 4",
        description: "You buy new drones and start again from scratch. The next day, a man walks up to your door and asks if he can help in any way. You tell him that you need something to replace the torn up farmland, he offers an automatic field plower.",
        prompt: "Do you take it?",
        image: "suspicious",
        choices: [
            {
                id: 9,
                title: "Yes",
                cost: 3,
            },
            {
                id: 10,
                title: "No",
                cost: 0,
            }
        ],
    },
    14: {
        title: "You Lose!",
        color: "red",
        description: "The storm tore up your farm worse than you thought, there is no way you can do this all by hand by the time winter comes.",
    },
    15: {
        title: "Year 3",
        description: "You can't believe you got this deal, you set up the drones but they don't do anything, seems like you'll have to learn. Suddenly, a tornado comes around, and you scramble to pilot the drones to the shed but the wind speed is too high, your drones get destroyed.",
        prompt: "Buy new ones?",
        image: "drone",
        choices: [
            {
                id: 17,
                title: "Yes",
                cost: 2,
            },
            {
                id: 18,
                title: "No",
                cost: 0,
            }
        ]
    },
    16: {
        title: "Year 3",
        description: "You continue following your craft as your pops taught you all those years ago. A few days later, a tornado comes around destroying all of your crops, after the storm passes, you consider buying something to help you reset the farm.",
        prompt: "Do you buy an automatic apple picking drone?",
        image: "drone",
        choices: [
            {
                id: 20,
                title: "Yes",
                cost: 2,
            },
            {
                id: 21,
                title: "No",
                cost: 0
            }
        ]
    },
    17: {
        title: "Year 4",
        description: "You go to buy the new drones but it seems they are out of stock, what a shame. A few days later, a man walks up to your door, he asks if he can help in any way. You tell him that you need something to replace the torn up farmland, he offers a automatic field plower.",
        prompt: "Do you take it?",
        image: "suspicious",
        choices: [
            {
                id: 9,
                title: "Yes",
                cost: 3,
            },
            {
                id: 10,
                title: "No",
                cost: 0,
            }
        ]
    },
    18: {
        title: "Year 4",
        description: "You continue as it were only a few years ago, by hand. A few days later, you hear a knock at the door and open it to see an old man offering you an automatic field plower.",
        prompt: "Do you take it?",
        image: "strange",
        choices: [
            {
                id: 19,
                title: "Yes",
                cost: 3,
            },
            {
                id: 12,
                title: "No",
                cost: 0,
            }
        ],
    },
    19: {
        title: "You Lose!",
        color: "red",
        description: "The man grins and asks for the money, then walks off promising you the plower in the next week, but he never came back.",
    },
    20: {
        title: "Year 4",
        description: "You buy the drones and start working on getting them ready. A few days later, you hear a knock at the door and open it to see an old man offering you an automatic field plower.",
        prompt: "Do you take it?",
        image: "strange",
        choices: [
            {
                id: 19,
                title: "Yes",
                cost: 3,
            },
            {
                id: 12,
                title: "No",
                cost: 0,
            }
        ],
    },
    21: {
        title: "You Lose!",
        color: "red",
        description: "The damage was worse than you thought, and it would be winter by the time you restored your crops.",
    },
}

export default function Home() {
    // if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    //     document.documentElement.classList.add('dark')
    // } else {
    //     document.documentElement.classList.remove('dark')
    // }
    const [currentPage, setCurrentPage] = useState(0);
    const [coins, setCoins] = useState(5);
    const { width, height } = useWindowSize();
    const [isExploding, setIsExploding] = useState(false);


    return (
        <ThemeProvider>
            <Confetti
                width={width}
                height={height}
                numberOfPieces={isExploding ? 200 : 0}
            />
            <main className="flex min-h-screen flex-col items-center justify-between py-24 px-6 md:px-12 lg:px-24 bg-gray-200">
                <ChoicePage pageData={
                    //@ts-ignore
                    pages[currentPage]
                } setPage={setCurrentPage} coins={coins} setCoins={setCoins} setIsExploding={setIsExploding} />
            </main>
        </ThemeProvider>
    )
}
