import styled from 'styled-components'
import { Colors } from '../../constants/colors'

const ResponseFormStyled = styled.div`
  width: 350px;
  background-color: ${Colors.white};
  border-width: 1px;
  border-radius: 10px;
  border-color: ${Colors.cardBorderColor};
  box-shadow: ${Colors.cardShadow};
  padding: 20px;
  position: relative;
`

ResponseFormStyled.controls = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 75px;
  margin-top: 10px;
  margin-left: 25px;
`

ResponseFormStyled.title = styled.div`
  font-family: Arial;
  font-size: 18px;
  color: ${Colors.black};
  margin-bottom: 10px;
`

ResponseFormStyled.orderItem = styled.div`
  font-family: Arial;
  font-size: 16px;
  color: ${Colors.black};
  margin-top: 6px;
  margin-bottom: 6px;
`
ResponseFormStyled.controlTitle = styled.div`
  font-family: Arial;
  font-size: 16px;
  color: ${Colors.black};
  margin-top: 15px;
`

ResponseFormStyled.order = styled.div`
  margin-left: 20px;
`

ResponseFormStyled.responseForm = styled.div`
  margin-left: 20px;
`

ResponseFormStyled.orderTitle = styled.div`
  font-family: Arial;
  font-size: 16px;
  color: ${Colors.black};
  margin-top: 12px;
  margin-bottom: 16px;
`

ResponseFormStyled.subtitle = styled.div`
  font-family: Arial;
  font-size: 14px;
  color: ${Colors.battleshipGrey};
  margin-top: 20px;
  margin-bottom: 20px;
`

ResponseFormStyled.response = styled.img`
  width: 30px;
  height: 30px;
`

export default ResponseFormStyled
