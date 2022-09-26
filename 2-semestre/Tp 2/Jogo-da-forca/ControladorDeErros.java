public class ControladorDeErros implements Cloneable
{
    private int qtdMax, qtdErr=0;
    
    public ControladorDeErros (int qtdMax) throws Exception
    {
    	if(qtdMax<=-1)  
    		throw new Exception("valor negativo");
    	  else
    	       this.qtdMax=qtdMax;
    	
    }
    
    public void registreUmErro () throws Exception
    {
    	    if(this.qtdErr==this.qtdMax) 
    		throw new Exception("nao � possivel registrar o erro");
    	
    	    else 
    		this.qtdErr++;
    }
        
    public boolean isAtingidoMaximoDeErros  ()
    {
    	
    	if (this.qtdErr==this.qtdMax) {
    		System.out.println("atingido o maximo de erros");
    		return true;
    	}
    	
    	else
    		return false;
    }

    public String toString ()
    {
        return this.qtdErr + "/" + this.qtdMax;
    }

    public boolean equals (Object obj)
    {
        	if (this == obj) return true;
        	if (obj == null) return false;
        	
        	if(this.getClass()!=obj.getClass()) return false;
        	ControladorDeErros x=(ControladorDeErros)obj;
        	if(this.qtdErr != x.qtdErr) return false;
        	if(this.qtdMax != x.qtdMax) return false;
        	return true;
        }
    @Override
    public int hashCode ()
    {
	int ret=1616;
	
	  ret=17*+new Integer(this.qtdErr).hashCode();
	  ret=17*+new Integer(this.qtdMax).hashCode();
	  
	  if (ret<0)ret=-ret;
	  return ret;
	  
    }

    public ControladorDeErros (ControladorDeErros c) throws Exception // construtor de c�pia
    {
    	if(c==null) {
    		throw new Exception(" erro nulo");
    	}
    	this.qtdErr=c.qtdErr;
    	this.qtdMax=c.qtdMax;
    	
       
    }

    public Object clone ()
    {
    	ControladorDeErros ret=null;
    	try {
    		ret=new ControladorDeErros(this);
    	}
    	catch(Exception erro) {}
    	return ret;
    	
    }
}
