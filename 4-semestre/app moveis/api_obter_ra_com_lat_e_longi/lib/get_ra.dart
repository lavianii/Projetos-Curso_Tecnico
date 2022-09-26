import 'package:flutter/material.dart';
import 'dados.dart';
import 'package:http/http.dart' as http;
import 'dart:async';
import 'dart:convert';

const String URL = "https://www.slmm.com.br/CTC/ctcApi.php";

Future<List<Dados>> fetchData() async {
  var response =
      await http.get(Uri.parse(URL), headers: {"Accept": "application/json"});
  if (response.statusCode == 200) {
    List jsonResponse = json.decode(response.body);
    return jsonResponse.map((data) => new Dados.fromJson(data)).toList();
  } else {
    throw Exception('Erro inesperado...');
  }
}

class getRa extends StatefulWidget {
  const getRa({Key? key}) : super(key: key);

  @override
  _getRaState createState() => _getRaState();
}

class _getRaState extends State<getRa> {
  late Future<List<Dados>> futureData;

  @override
  void initState() {
    super.initState();
    futureData = fetchData();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("lista RA")),
      body: Container(
        padding: EdgeInsets.all(10),
        child: FutureBuilder<List<Dados>>(
          future: futureData,
          builder: ((context, snapshot) {
            if (snapshot.hasData) {
              List<Dados> data = snapshot.data!;
              return ListView.builder(
                  itemCount: data.length,
                  itemBuilder: (BuildContext context, int index) {
                    return Card(
                        child: Row(
                      children: [
                        Column(
                          children: [
                            const SizedBox(
                              height: 10,
                            ),
                            const Text('Ra: '),
                            Text(data[index].ra),
                            const SizedBox(
                              height: 10,
                            ),
                            const Text('Latitude: '),
                            Text(
                              data[index].lat,
                              style: const TextStyle(color: Colors.amber),
                            ),
                            const SizedBox(
                              height: 10,
                            ),
                            const Text('Longitude: '),
                            Text(
                              data[index].log,
                              style: const TextStyle(color: Colors.redAccent),
                            )
                          ],
                        ),
                      ],
                    ));
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
