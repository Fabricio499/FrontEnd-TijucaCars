import styled from 'styled-components'

export const StyledLaginPage = styled.div`
*{
    margin: 0;
    padding: 0;
    box-sizing: 0;
}

.fundo-branco{
    background-color: #f6f6f6;
    height: 27rem;
    box-shadow: rgba(50, 50, 93, 0.7    ) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}

.img-logo{
    height: 6rem;
    /* margin: 3% 10%; */
}

.div-menor{
    display: flex;
    width: 80%;
    margin: 0% 7%;
    justify-content: space-between;
    align-items: center;
}

.box-cabecalho{
    right: 2rem;
    display: flex;
    justify-content: space-between;
    padding: 2% 0%;
}

.titulo-logo{
    font-family: poppins;
    /* margin: 3% 10%; */
    color: #1E3F7F;
    font-size: 40px;
}

.box-meio{
    margin: 2% 5%;
    
}

.paragrafo-2{
    /* justify-content: space-between; */
    display: flex;
    font-family: poppins;
    align-items: center;
    
    /* border: 1px solid pink; */
}

.div-menor-meio{
    /* display: flex; */
    width: 95%;
    /* border: 1px solid red; */
}

.letra{
    font-size: 2rem;
    margin: 0% 4%;
    font-weight: 300;
}

/* .ponto-1{
    background-color: #F9A826;
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
} */

.ponto-2{
    background-color: #F9A826;
    height: 2rem;
    width: 2rem;
    border-radius: 50%;

}

.fundo{
    justify-content: center;
    /* margin: auto; */
    align-items: center;
    
}
button:hover{
    background-color: #527f1e;
}
.btn-logo{
    background-color: #1E3F7F;
    height: 4rem;
    font-size: 4rem;
    border: none;
    /* box-shadow: ; */
    color: #f6f6f6;
    margin: 3% 4%;
}
.list{
    list-style: none;
    text-align: center;
}
.link{
    display: inline-block;
    margin-block: 2px;
    text-decoration: none;
    color: #fff;
    position: relative;
    font-size: 3rem;
    right: 500px;
    top: 85px;
    font-family: poppins;
    
}
.link::after{
    content: '';
    width: 100%;
    height: 2px;
    background-color: #F9A826;
    border-radius: 4px;
    position: absolute;
    left: 0;
    bottom: 0;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform .25s ease;
    
}
.link:hover::after{
    transform: scaleX(1);
}

/* Imagens do footer */

/* .items-wrapper{
    display: flex;
    border: 1px solid red;
    display: flex;
    justify-content: center;
    width: 1rem;
    height: 1rem;
    justify-content: space-between;
} */

.items-wrapper{
    position: absolute;
    top: 31rem;
    display: flex;
    margin-left: 70%;
    justify-content: end;
    align-items: flex-end;
    
}


/* imgs */

.img1{
    /* margin-left: 60%; */
    width: 20rem;
    height: 9rem;
    position: absolute;
}

.img2{
    /* margin-left: 60%; */
    width: 20rem;
    height: 9rem;
    position: absolute;

}

.img3{
    width: 20rem;
    height: 9rem;
    position: absolute;
}

`




