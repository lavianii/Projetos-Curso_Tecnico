import java.util.*;

class Baralho{
    protected ArrayList<Carta> cartas;

    public Baralho(){
        this(true);
    }

    public Baralho(boolean cheio){
        cartas = new ArrayList<Carta>();

        if (cheio)
            for (int valor=1; valor<14; valor++) //1 a 10, J Q K
                for (int naipe=0;naipe<4; naipe++){
                    cartas.add(new Carta(valor, naipe));
                }

        Collections.shuffle(cartas);
    }

    public boolean temCarta(){
        return cartas.size() != 0;
    }
    public Carta tiraUma() throws Exception{
        if (!temCarta()) throw new Exception("Baralho Vazio"); 

        return cartas.remove(0);
    }

    public String toString(){
        String ret="\n";
        for (int qual=0; qual < cartas.size(); qual++){
             if ((qual%4== 0))
                ret += "\n";
             ret += "\t" + cartas.get(qual);
        }
            
        return ret;

    }

}