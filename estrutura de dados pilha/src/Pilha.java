public class Pilha {
   protected int topo;
   protected Carta[] p;

   public Pilha(int qtos){
       this.p = new Carta[qtos];
       this.topo = -1;
   }
   public Pilha(){
       this(10);
   }
   public void empilhar(Carta c) throws Exception{
       if (cheia()){
           throw new Exception("Overflow Error");
       }
       if(c == null){
           throw new Exception("Invalid Object");
       }
       this.topo++;
       this.p[this.topo] = c;
   }
   public Carta desempilharCarta() throws Exception{
       if(vazia()){
           throw new Exception("Underflow Error");
       }
       this.topo--;
       return this.p[this.topo+1];
   }
   public Carta consultarCarta()throws Exception{
       if(vazia()){
           throw new Exception("Underflow Error");
       }
       return this.p[this.topo];
   }
    private boolean vazia()throws Exception{
        return (this.topo == -1);
    }
    private boolean cheia()throws Exception{
        return (this.topo == -1);
    }
}
