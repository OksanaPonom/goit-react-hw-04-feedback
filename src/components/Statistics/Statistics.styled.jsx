import styled from 'styled-components';
import { BsFillEmojiSmileFill } from 'react-icons/bs';
export const Title = styled.h3`
  text-align: center;
  margin: 0 auto 0 auto;
  font-size: 30px;
  color: #000;

  text-shadow: 2px 8px 6px rgba(0, 0, 0, 0.2),
    0px -5px 35px rgba(255, 255, 255, 0.3);
`;
export const List = styled.ul`
  list-style: none;
  padding: 40px;
  margin: 0 auto;
  width: 440px;
`;
export const ListItem = styled.li`
  padding: 10px 20px;
  width: 400px;
  background-color: #aa8d8dc6;
`;
export const Text = styled.p`
  font-size: 30px;
  font-weight: 500;
  margin: 0;
`;
export const TotalText = styled.p`
  font-weight: 600;
  font-size: 40px;
  width: 400px;
  padding: 10px 20px;
  margin: 0 auto 40px auto;
  background-color: #aa8d8dc6;
`;
export const PercentText = styled.p`
  font-weight: 600;
  font-size: 40px;
  text-align: center;
  margin: 0 auto;
  width: 500px;
  padding: 10px 20px;
  margin: 0 auto;
  background-color: #ebc2c2c5;
  box-shadow: inset -1px 1px 25px 0px rgba(222, 31, 222, 1);
`;
export const Icon = styled(BsFillEmojiSmileFill)`
  margin-right: 20px;
  fill: rgba(0, 128, 75, 0.9);
`;
