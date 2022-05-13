import Button from "@mui/material/Button";

/**
 *  주로 사용하는 버튼
 */

const MainButton = ({
    children    // 버튼 안에 들어갈 텍스트
                  }) => {
    return (
        <Button
            variant={`contained`}
            sx={{
                width: `100px`,
                borderRadius: `30px`,
                position: `absolute`,
                left: `50%`,
                transform: `translate(-50%, -50%)`,
                bottom: 10,
            }}
        >
            {children}
        </Button>
    );
};

export default MainButton;