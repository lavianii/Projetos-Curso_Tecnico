class Carta{
    private int naipe;
    private int valor;
    private boolean visivel;

    final private String[] strNaipe = {"Paus", "Copas", "Espada", "Ouro"};
    final private String[] strValor = {"As", "Dois", "Tres", "Quatro",
                               "Cinco","Seis","Sete","Oito","Nove",
                                "Dez","Valete","Dama","Rei"};

    public Carta(int valor, int naipe){
        this.naipe = naipe;
        this.valor = valor;
    }

    public int getNaipe(){
        return this.naipe;
    }
    public int getValor(){
        return this.valor;
    }
    public boolean geVisivel(){
        return this.visivel;
    }
    public String toString(){
        return strValor[valor-1] +  " de " + strNaipe[naipe] ;
    }

    public int compareTo(Carta c){
        return ((this.valor - c.valor) + 
                (this.naipe - c.naipe)
                );
    }

    public boolean equals(Carta c){
        return (compareTo(c)==0);
    }

    public String cor(){
        return (this.naipe%2)==0?"PRETA":"VERMELHA";

      /*    if ((naipe%2)==0)
                return "PRETA";
        
            return "VERMELHA";
      */
    }

    public void virar(){
        this.visivel = ! this.visivel;
    }
}