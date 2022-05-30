import MoodIcon from '@mui/icons-material/Mood';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import MoodBadIcon from '@mui/icons-material/MoodBad';

import FastfoodIcon from '@mui/icons-material/Fastfood';
import EmojiFoodBeverageIcon from '@mui/icons-material/EmojiFoodBeverage';
import LiquorIcon from '@mui/icons-material/Liquor';
import AttractionsIcon from '@mui/icons-material/Attractions';
import LocalParkingIcon from '@mui/icons-material/LocalParking';

/**
 *  DB 에 저장된 id 순서대로 정의되어 있어야 함
 *  emotionIcons[emotionId] 와 같이 접근 가능
 */

const sx = {
    height: `100%`
}

const emotionIcons = [
    null,
    (sx, onClick) => <MoodIcon sx={sx} onClick={onClick} />,
    (sx, onClick) => <SentimentSatisfiedIcon sx={sx} onClick={onClick} />,
    (sx, onClick) => <SentimentNeutralIcon sx={sx} onClick={onClick} />,
    (sx, onClick) => <SentimentVeryDissatisfiedIcon sx={sx} onClick={onClick} />,
    (sx, onClick) => <MoodBadIcon sx={sx} onClick={onClick} />,
];

const categoryIcons = [
    null,
    (sx, onClick) => <FastfoodIcon sx={sx} onClick={onClick} />,
    (sx, onClick) => <EmojiFoodBeverageIcon sx={sx} onClick={onClick} />,
    (sx, onClick) => <LiquorIcon sx={sx} onClick={onClick} />,
    (sx, onClick) => <AttractionsIcon sx={sx} onClick={onClick} />,
    (sx, onClick) => <LocalParkingIcon sx={sx} onClick={onClick} />,
]

export {
    emotionIcons,
    categoryIcons,
}