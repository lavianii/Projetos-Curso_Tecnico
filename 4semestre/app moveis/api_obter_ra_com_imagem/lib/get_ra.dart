import 'package:flutter/material.dart';
import 'dados.dart';
import 'package:http/http.dart' as http;
import 'dart:async';
import 'dart:convert';

const String url = "https://www.slmm.com.br/CTC/ctcApi.php";

Future<List<Dados>> fetchData() async {
  var response = await http.get(
    Uri.parse(url),
    headers: {"Accept": "application/json"},
  );
  if (response.statusCode == 200) {
    List jsonResponse = json.decode(response.body);
    return jsonResponse.map((data) => Dados.fromJson(data)).toList();
  } else {
    throw Exception('Erro inesperado...');
  }
}

class GetRa extends StatefulWidget {
  const GetRa({Key? key}) : super(key: key);

  @override
  _GetRaState createState() => _GetRaState();
}

class _GetRaState extends State<GetRa> {
  late Future<List<Dados>> futureData;

  @override
  void initState() {
    super.initState();
    futureData = fetchData();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text(
          "LISTA RA COM IMAGENS",
          style: TextStyle(fontSize: 33),
        ),
        centerTitle: true,
        elevation: 0,
        backgroundColor: Colors.blueGrey[400],
      ),
      body: Container(
        color: Colors.blueGrey[400],
        padding: const EdgeInsets.all(10),
        child: FutureBuilder<List<Dados>>(
          future: futureData,
          builder: ((context, snapshot) {
            if (snapshot.hasData) {
              List<Dados> data = snapshot.data!;
              return ListView.builder(
                  itemCount: data.length,
                  itemBuilder: (BuildContext context, int index) {
                    return Card(
                      color: Colors.black,
                      child: Column(
                        children: [
                          Container(
                            color: Colors.redAccent,
                            child: Column(
                              children: [
                                Image.network(
                                    'https://picsum.photos/250?image=$index'),
                                Text(
                                  'Ra: ${data[index].ra}',
                                  style: const TextStyle(
                                      color: Color.fromARGB(255, 0, 4, 226),
                                      fontSize: 40),
                                ),
                              ],
                            ),
                          ),
                        ],
                      ),
                    );
                  });
            } else if (snapshot.hasError) {
              return Text("${snapshot.error}");
            }
            return const CircularProgressIndicator();
          }),
        ),
      ),
    );
  }
}
