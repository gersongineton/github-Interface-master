import styled from 'styled-components';

export const Wrapper = styled.div`  
    padding: 8px;
    border-radius: 8px;
    border: 1px solid #ccc;
    margin: 5px 15px;
    width: 400px;
    height: 155px;
    align-content: center;
    flex-wrap: wrap;
`;

export const WrapperTitle = styled.h2`  
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
    margin: 1px 0;
    background-color: #e67e22;
    padding: 8px;
    color: #ffff;
    border-radius: 5px 5px 0px 0px;
`;

export const WrapperFullName = styled.h2`  
    font-size: 16px;
    font-weight: bold;
    margin: 8px 0;
    color: #2d3748;
`;

export const WrapperLanguage = styled.h3`  
    font-size: 12px;
    font-weight: bold;
    margin: 8px 0;
    color: #fc1808;
    font-weight: bold;
`;

export const WrapperFooter = styled.div` 
    height : 40px;
    font-size: 12px;
    font-weight: bold;
    margin-top:15px;
    display: flex;
    padding: 6px;
    display: flex;
    justify-content: flex-end;
    background-color: #ecf0f1;
    border-radius: 0 0 5px 5px;
`;

export const WrapperLink = styled.a`  
    font-size: 13px;
    font-weight: bold;
    color: #ffff;
    background-color: #27ae60;
    display: flex;
    flex-direction: column-reverse;
    align-content: center;
    border-radius: 3px;
    padding: 5px;

    &:hover{
        font-size: 14px;
        transition: 5ms;
    }
`;