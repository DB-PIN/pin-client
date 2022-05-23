/**
 *  로고 이미지
 */
import styled from "styled-components";
import logoImage from '../../resource/logo.png';

const Image = styled.img`
  height: 100%;
  object-fit: contain;
`;

const Logo = ({
    width
}) => {
    return (
        <Image
            src={logoImage}
            alt={""}
        >

        </Image>
    )
}

export default Logo;