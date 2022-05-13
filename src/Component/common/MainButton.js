import Button from "@mui/material/Button";

/**
 *  주로 사용하는 버튼
 */

const MainButton = ({
    children,   // 버튼 안에 들어갈 텍스트
    onClick,    // 버튼 눌렀을 때 실행 될 함수
                  }) => {
    return (
        <Button
            variant={`contained`}
            onClick={onClick}
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