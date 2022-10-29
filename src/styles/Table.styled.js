import styled from "styled-components";

export const StyledTableWrapper = styled.div`
    border-radius: 10px;
    overflow: hidden;
    letter-spacing: 2px;
   
    box-shadow: 2px 1px 9px 1px #000000;
    padding: 20px;
    border-radius: 10px;
    min-width: 500px;
    
    & > div {
        max-height: 400px;
        overflow: auto;
        padding-left: 3px;
        padding-right: 3px;
        
        ::-webkit-scrollbar {
            width: 5px;
        }
        
        ::-webkit-scrollbar-track {
            box-shadow: inset 2px 2px 20px #808080;
            border-radius: 10px;
        }
        
        ::-webkit-scrollbar-thumb {
            background-color: #000000;
            border-radius: 10px;
        }
    }
`;

export const StyledTable = styled.div`

    width: 100%;
    height: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    flex-direction: column;
    position: relative;
    
    & > div:nth-child(1) {
        position: sticky;
        top: 0;
        background-color: #3a3a3a;
        color: #ffffff;
        border-radius: 5px;
        z-index: 2;
    }
    
    & > div:nth-child(2) > div:not(:last-child){
       border-bottom: 1px solid #C2C2C2;
    }
    
    
    & > div > div{
       display: flex;
    }
    
    p {
        text-align: center;
        width: 50%;
        padding-left: 6px;
        padding-right: 6px;
        box-sizing: border-box;
        position: relative;
        
        &:nth-child(1):after {
            content: '';
            width: 4px;
            border-radius: 2px; 
            height: 45px;
            background-color: #838383;
            position: absolute;
            right:-2px;
            top:50%;
            transform: translateY(-50%);
        }
    }
`;