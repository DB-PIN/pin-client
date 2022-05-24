/**
 *  데이터를 불러올 때 사용되는 로딩 표시
 */
import Box from "@mui/material/Box";
import {CircularProgress} from "@mui/material";

const Spin = () => {
    return (
        <Box
            sx={{
                width: `100%`,
                height: `100%`,
                display: `flex`,
                justifyContent: `center`,
                alignItems: `center`,
            }}
        >
            <CircularProgress />
        </Box>
    )
}

export default Spin;