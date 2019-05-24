import styled from 'styled-components';

export default {
    Wrapper: styled.div`
        padding: 10px;
        margin: 5px;
    `,
    UserInfo: styled.div`
        padding: 10px;
        width: auto;
        font-size: 15px;
        display: flex;
        flex-wrap: wrap;
    `,
    Card: styled.div`
        background-color: #F8F8FF;
        padding: 10px;
        margin: 5px;
    `,
    Button: styled.button`
        height: 50px;
        width: 100px;
        margin: 12px;
        cursor: pointer;
        border-radius: 10px;
        font-size: 15px;
        background-color: #f14e4e;
        text-align: center;
        font-family: 'Roboto',sans-serif;
        font-weight: 300;
            text-decoration: none;
    `,
    ButtonDiv: styled.div`
        text-align: center;
    `,
    Name: styled.div`
        font-size: 18px;
        display: flex;
        justify-content: center;
        margin-top: 5px;
        flex-wrap: wrap;
    `
}