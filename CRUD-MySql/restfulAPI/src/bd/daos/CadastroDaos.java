package bd.daos;
import bd.BDMySQL;
import bd.dbos.CadastroDbo;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
public class CadastroDaos {
    static Connection conection;
    static PreparedStatement ppstt;

    //verifica se o cpf já foi cadastrado
    public static boolean cadastrado (String cpf) throws Exception {

        conection = new BDMySQL().bdmysql();

        String cadastradoCpf="";

        try {
            String mySql;

            mySql = "SELECT Cpf " +
                    "FROM cliente " +
                    "WHERE Cpf = " +cpf;
            ppstt = conection.prepareStatement(mySql);

            PreparedStatement statement = (PreparedStatement)conection.prepareStatement(mySql);
            ResultSet resultado = statement.executeQuery();

            while (resultado.next()){
                cadastradoCpf=resultado.getNString("Cpf");
            }

            if (cadastradoCpf==null||cadastradoCpf.isEmpty()){
                return false;
            }
        }
        catch (SQLException erro) {
            throw new Exception ("Erro no cadastro do Cpf");
        }
        return true;
    }
    public static void incluir (CadastroDbo cadastro) throws Exception {

        conection = new BDMySQL().bdmysql();

        if (cadastro==null) {
            throw new Exception("Informaçoes nao fornecidas ");
        } else {
            cadastrado(String.valueOf(cadastro));
        }
        try {
            String mySql = "insert into cliente (Cpf,nome,CEP,Complemento,Numero_Casa) values (?,?,?,?,?)";
            ppstt = (PreparedStatement)conection.prepareStatement(mySql);

            ppstt.setString     (1, cadastro.getCpf ());
            ppstt.setString     (2, cadastro.getNome ());
            ppstt.setString     (3, cadastro.getCep ());
            ppstt.setString     (4, cadastro.getComplemento ());
            ppstt.setInt        (5, cadastro.getNumeroCasa ());
            ppstt.execute();
            System.out.println("cadastrado com sucesso!");
        }
        catch (SQLException erro) {
            ppstt.close();
            throw new Exception ("Erro ao cadastrar");
        }
    }
    public static void excluir (String cpf) throws Exception {

       if(!cadastrado(cpf)) {
           throw new Exception ("Cpf nao cadastrado");
       }
        conection = new BDMySQL().bdmysql();
        try {
            String mySql;

            mySql = "DELETE FROM cliente WHERE Cpf=?";
            ppstt = conection.prepareStatement(mySql);


            ppstt.setString (1, cpf);

            ppstt.executeUpdate ();
            ppstt.execute();

            System.out.println("Exclusao excutada com suecesso");
        }
        catch (SQLException erro) {
            conection.rollback();
            throw new Exception ("Erro ao excluir o cadastro");
        }
    }

    public static void alterar (CadastroDbo cadastro) throws Exception {
        conection = new BDMySQL().bdmysql();
        if (cadastro==null) {
            throw new Exception("cadastro nao fornecido");
        }else {
            cadastrado(String.valueOf(cadastro));
        }

        try {
            String mySql;

            mySql = "UPDATE cliente SET Nome=?, CEP=?, Complemento=?, Numero_Casa=?  WHERE Cpf =?";

            ppstt = conection.prepareStatement(mySql);

            ppstt.setString (5,cadastro.getCpf());
            ppstt.setString (1, cadastro.getNome ());
            ppstt.setString (2, cadastro.getCep ());
            ppstt.setString (3, cadastro.getComplemento ());
            ppstt.setInt    (4, cadastro.getNumeroCasa ());

            ppstt.executeUpdate ();
            ppstt.execute();
            System.out.println("cheguei");
        }
        catch (SQLException erro) {
            conection.rollback();
            throw new Exception ("Erro ao atualizar dados");
        }
    }
    //Esse método retorna uma lista dos clientes que estão cadastrados
    public static ArrayList <CadastroDbo>getCadastro (String Cpf) throws Exception {

        if(!cadastrado(Cpf)){
            throw new Exception ("Cpf nao cadastrado");
        }
        ArrayList<CadastroDbo> clientes = new ArrayList<CadastroDbo>();

        conection = new BDMySQL().bdmysql();
        try {
            String mySql;

            mySql = "SELECT * " +
                    "FROM cliente " +
                    "WHERE Cpf = " +Cpf;
            ppstt = conection.prepareStatement(mySql);


            PreparedStatement statement = (PreparedStatement)conection.prepareStatement(mySql);

            ResultSet resultado = statement.executeQuery();

            while (resultado.next()){
            CadastroDbo cliente = new CadastroDbo();
                cliente.setCpf(resultado.getNString("Cpf"));
                cliente.setNome(resultado.getNString("Nome"));
                cliente.setNumeroCasa(resultado.getInt("Numero_Casa"));
                cliente.setComplemento(resultado.getNString("Complemento"));
                cliente.setCep(resultado.getNString("Cep"));
                clientes.add(cliente);
            }
        }
        catch (SQLException erro) {
            throw new Exception ("Erro ao procurar Cpf");
        }
        return clientes;
    }

    public static String getCep (String Cpf) throws Exception {

        conection = new BDMySQL().bdmysql();

        if(!cadastrado(Cpf)) {
            throw new Exception ("Cpf nao cadastrado");
        }
        String retornoValorFinal="";

        try {
            String mySql;

            mySql = "SELECT CEP " +
                    "FROM cliente " +
                    "WHERE Cpf = " +Cpf;
            ppstt = conection.prepareStatement(mySql);

            PreparedStatement statement = (PreparedStatement)conection.prepareStatement(mySql);
            ResultSet resultado = statement.executeQuery();

            while (resultado.next()){
                retornoValorFinal=resultado.getNString("Cpf");
            }
        }
        catch (SQLException erro) {
            throw new Exception ("Erro ao procurar Cpf");
        }
        return retornoValorFinal;
    }

}
