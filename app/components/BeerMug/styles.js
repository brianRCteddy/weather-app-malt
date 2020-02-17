import styled from 'styled-components';

export const Glass = styled.div`
  position: absolute;
  height: 100px;
  width: 70px;
  bottom: 182px;
  background-color: rgba(255, 255, 255, 0);
  border-radius: 5px;
`;

export const Beer = styled.div`
  position: absolute;
  bottom: 15px;
  margin: 0 5px;
  /*height: 80%;*/
  width: 60px;
  background-color: rgba(255, 206, 84, 0.8); /* #FFCE54*/
  border-radius: 0 0 5px 5px;
  border-top: solid 0px rgba(255, 206, 84, 0.8);

  height: 80px;
  border-width: 5px;

  &:after {
    position: absolute;
    display: block;
    content: ' ';
    /*height: 20px;*/
    width: 100%;
    background-color: white;
    /*top: -20px;*/
    border-radius: 5px 5px 0 0;

    top: -14px;
    height: 15px;
    animation: wave 0.5s alternate infinite;
  }
  @keyframes wave {
    from {
      transform: skew(0, -3deg);
    }
    to {
      transform: skew(0, 3deg);
    }
  }
`;

export const Handle = styled.div`
  position: absolute;
  right: -20px;
  top: 20px;
`;

export const TopRight = styled.div`
  height: 30px;
  width: 21px;
  border-top: solid 10px rgba(255, 255, 255, 0.4);
  border-right: solid 10px rgba(255, 255, 255, 0.4);
  border-top-right-radius: 20px;
`;

export const TopLeft = styled.div`
  height: 30px;
  width: 21px;
  border-bottom: solid 10px rgba(255, 255, 255, 0.4);
  border-right: solid 10px rgba(255, 255, 255, 0.4);
  border-bottom-right-radius: 20px;
`;

export const FrontGlass = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 5px;
`;
