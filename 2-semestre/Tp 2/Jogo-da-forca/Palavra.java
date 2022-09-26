public class Palavra {

    private String texto;

    public Palavra (String texto) throws Exception
    {
        
        if(texto == null)
        throw new Exception("Letra não encotrada");
        this.texto = texto;
    }

    public int getQuantidade (char letra)
    { 
        int cont= 0;
        for(char l: this.texto.toCharArray())
        {
        if (l == letra)
            cont++; 
        }
        return cont;

    }

    public int getPosicaoDaIezimaOcorrencia (int i, char letra) throws Exception
    {					 
        int posi = -1;   
        int cont = -1;
        
        for(char l: this.texto.toCharArray()) 
        {
        posi++; 
            if (l== letra)
            {
                cont++;
                if(cont==i)  
                {
                    return posi;	
                }
            }
        }
        throw new Exception("Letra não encontrada");

    }

    public int getTamanho ()
    {
        return this.texto.length();
    }

    public String toString ()
    {
        return this.texto;
    }

    public boolean equals (Object obj)
    {
        if (this == obj) return true;
        if (obj == null) return false;
        
        if (obj.getClass() != Tracinhos.class) return false;
        Palavra palavra = (Palavra)obj;
        if(this.texto != palavra.texto) return false;
        
        return true;	
    }
    
    @Override
    public int hashCode ()
    {
        int h = 1000;	    	
        h = 7 * h + new String (this.texto).hashCode();
        if (h < 0) h =-h;
        return h;
    }
    

    public int compareTo (Palavra pa)
    {
        return this.texto.compareTo(pa.texto);
    }

}