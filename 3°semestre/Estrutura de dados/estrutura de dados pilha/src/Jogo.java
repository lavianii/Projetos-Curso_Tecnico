class Jogo{
    public static void main(String args[]) {

        Baralho meuBaralho = new Baralho();

        Carta c; // = new Carta(0,1);
        Pilha P = new Pilha();
        
        try{
            
            c = new Carta(0,1);
            P.empilhar(c);

            System.out.println("Topo: " + P.consultarCarta() );
          

        } catch (Exception e){

            System.out.println("Erro: " + e.getMessage());
        }

    }
}