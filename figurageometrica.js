class FiguraGeometrica {
    constructor(){
        this.tipo="figura geometrica";
    }

    calcularArea (){

    }

    calcularPerimetro (){

    }

}
class Circulo extends FiguraGeometrica{
    constructor (radio){
        super();
        this.radio=radio;
        this.tipo="circulo";
    }

    calcularArea(){
        return Math.PI * this.radio *this.radio;
    }
    calcularPerimetro(){
        return 2* Math.PI*this.radio;


    }
} 
class Cuadrado extends FiguraGeometrica{
    constructor (lado){
        super();
        this.lado=lado;
        this.tipo="cuadrado";

    }
    calcularArea(){
        return this.lado *this.lado;
    }
    calcularPerimetro(){
        return 4*this.lado;
    }
}
// hago lo mismo que hice en cuadrado y el circulo sin olvidar el this.y el area de un rectagulo se halla multiplicando base por altura.el perimetro se halla multiplicando 2 *(base por altura)
class re

