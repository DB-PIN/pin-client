import Box from "@mui/material/Box";
import Input from "@mui/material/Input";

/**
 *  로그인 박스에서 사용되는 라벨 : 인풋 형태의 컴포넌트
 */

const LoginFormItem = ({
    children,   // LoginFormItem 라벨에 들어갈 텍스트
    value,      // Input의 내용
    onChange,   // Input 의 onChange
    type,       // Input 의 타입
    marginBottom,
                       }) => {
    return (
        <Box sx={{
            display: `flex`,
            width: `80%`,
            height: `auto`,
            mx: `auto`,
            flexDirection: `row`,
            mb: `${marginBottom}`,
        }}>

            <Box
                sx={{
                    width: `40%`,
                    height: `25px`,
                    lineHeight: `25px`
                }}
            >
                {children}
            </Box>

            <Input
                onChange={onChange}
                sx={{ width: `60%`, height: `25px` }}
                size={`small`}
                type={type == null ? `text` : type}
                value={value}
            ></Input>

        </Box>
    )
}

export default LoginFormItem;